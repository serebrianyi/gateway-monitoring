(ns gateway_monitoring.client.screens.packets-overview.controller
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [gateway_monitoring.client.util.http :as http]
            [gateway_monitoring.client.data-storage :refer [app-state screens]]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def ^:private screen-name :packets-overview)
(defn screen-data [data] (-> (screens data)(screen-name)))

(defn view-model [data] {
                          :gateway-id (:gateway-id data)
                          :number-of-packets (:number-of-packets data)
                          :online-since (:online-since data)
                          :packets (:packets data)
                          :packet-table (screen-data data)
                          })

; Server data fetching stuff
(def ^:private server-throttle 1000)

(defn- load-packets-from-server []
  (let [com-channel (chan)]
    (go (let [{packets :body} (<! (http/execute-get "packets"))]
          (>! com-channel packets)))
    com-channel))

(defn- update-packets! [packets] (swap! app-state assoc-in [:packets] (:packets packets)))

(defn load-packet-data! []
  (go
    (loop []
      (when-let [packets (<! (load-packets-from-server))]
        (update-packets! packets)
        (<! (timeout server-throttle))
    (recur)))))

(defn- update-header-info! [header-info]
  (let [{:keys [gateway-id online-since]} header-info]
    (swap! app-state update-in [:gateway-id] :gateway-id gateway-id)
    (swap! app-state update-in [:online-since] :online-since online-since)))

(defn- load-header-info-from-server []
  (let [com-channel (chan)]
    (go (let [{body :body} (<! (http/execute-get "header-info"))
              {:keys [gateway-id online-since]} body]
      (put! com-channel {:gateway-id gateway-id :online-since online-since})))
    com-channel))

(defn load-header-info! []
  (go (let [header-info (<! (load-header-info-from-server))]
    (update-header-info! header-info))))

; Filtering
(defn update-filter! [filtering-by filtering-value]
    (swap! app-state assoc-in [screens screen-name :filtering] {:filtering-by filtering-by :filtering-value filtering-value }))

(defn- filter-settings [] (-> (screen-data @app-state)(:filtering)))

(defn- apply-filter []
  (fn [data-row]
    (let [{:keys [filtering-by filtering-value]} (filter-settings)]
      (if (nil? filtering-value)
        true
        (> (.indexOf (.toLowerCase (filtering-by data-row)) (.toLowerCase filtering-value)) -1)))))

; Sorting
(defn- sort-settings [] (-> (screen-data @app-state)(:sorting)))

(defn- calculate-sorting-order [new-sorting-by old-sorting-by old-sorting-order]
  (if (= new-sorting-by old-sorting-by)
    (if (= ">" old-sorting-order) "<" ">")
    old-sorting-order))

(defn update-sort! [new-sorting-by]
  (let[{:keys [sorting-by sorting-order]} (sort-settings)
       new-sorting-order (calculate-sorting-order new-sorting-by sorting-by sorting-order)]
    (swap! app-state assoc-in [screens screen-name :sorting] {:sorting-by new-sorting-by :sorting-order new-sorting-order })))

; Table data
(defn table-packet-data []
  (let [sorting (sort-settings)]
    (filter (apply-filter) (sort-by (:sorting-by sorting) (if (= (:sorting-order sorting) ">") > <) (:packets @app-state)))))

; Table header text editing
(defn update-edit-mode! [column-symbol value] (swap! app-state assoc-in [screens screen-name :columns column-symbol :editing?] value))

(defn- column-header [simbol]
  (fn [default-value]
    (let[{:keys [filtering-by filtering-value]} (filter-settings)]
      (if (and (= filtering-by simbol) (not (empty? filtering-value)))
        filtering-value
        default-value))))

(defn display-column-header [simbol header]
  ((column-header simbol) header))

(defn edit-column-header [simbol]
  ((column-header simbol) ""))

(defn table-columns [data]
  (sort #(< (:position (val %1)) (:position (val %2))) (-> (:packet-table data)(:columns))))
