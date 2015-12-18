(ns gateway_monitoring.client.screens.system-management.controller
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [gateway_monitoring.client.data-storage :refer [screens app-state]]
            [gateway_monitoring.client.util.http :as http]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def ^:private screen-name :system-management)

(defn view-model [data] {
                          :gateway-id (:gateway-id data)
                          :packet-forwarder (:packet-forwarder data)
                          :hal-library (:hal-library data)
                          :gateway-monitoring-software (:gateway-monitoring-software data)
                          })

(defn is-update-needed? [versioning-info]
  (let [{:keys [current-version available-version]} versioning-info]
    (and (not (empty? available-version)) (not= available-version current-version))))

(defn load-current-versions-from-server []
  (let [com-channel (chan)]
    (go (let [{body :body} (<! (http/execute-get "versions/current"))
              {:keys [packet-forwarder-version hal-library-version gateway-monitoring-software-version]} body]
      (put! com-channel {:packet-forwarder-version packet-forwarder-version
                         :hal-library-version hal-library-version
                         :gateway-monitoring-software-version gateway-monitoring-software-version})))
    com-channel))

(defn update-current-versions! [current-versions]
  (let [{:keys [packet-forwarder-version hal-library-version gateway-monitoring-software-version]} current-versions]
    (swap! app-state update-in [:packet-forwarder] assoc :current-version packet-forwarder-version)
    (swap! app-state update-in [:hal-library] assoc :current-version hal-library-version)
    (swap! app-state update-in [:gateway-monitoring-software] assoc :current-version gateway-monitoring-software-version)))

(defn load-current-versions! []
  (go (let [current-versions (<! (load-current-versions-from-server))]
    (update-current-versions! current-versions))))

(defn load-available-versions-from-server []
  (let [com-channel (chan)]
    (go (let [{body :body} (<! (http/execute-get "versions/available"))
              {:keys [packet-forwarder-version hal-library-version]} body]
      (put! com-channel {:packet-forwarder-version packet-forwarder-version
                         :hal-library-version hal-library-version})))
    com-channel))

(defn update-available-versions! [available-versions]
  (let [{:keys [packet-forwarder-version hal-library-version]} available-versions]
    (swap! app-state update-in [:packet-forwarder] assoc :available-version packet-forwarder-version)
    (swap! app-state update-in [:hal-library] assoc :available-version hal-library-version)))

(defn load-available-versions! []
  (go (let [available-versions (<! (load-available-versions-from-server))]
    (update-available-versions! available-versions))))


