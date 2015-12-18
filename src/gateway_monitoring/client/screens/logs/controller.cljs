(ns gateway_monitoring.client.screens.logs.controller
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [gateway_monitoring.client.data-storage :refer [screens app-state]]
            [gateway_monitoring.client.util.http :as http]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def ^:private screen-name :logs)
(defn screen-data [data] (-> (screens data)(screen-name)))
(defn view-model [data] { :content (:content (screen-data data))
                          :path (:path (screen-data data))})

(defn- load-logs-from-server []
  (let [com-channel (chan)]
    (go (let [{body :body} (<! (http/execute-get "logs"))
              {:keys [content path]} body]
      (put! com-channel {:content content :path path})))
    com-channel))

(defn- update-logs! [logs]
  (swap! app-state assoc-in [screens screen-name] logs))

(defn load-logs! []
  (go (let [logs (<! (load-logs-from-server))]
    (update-logs! logs))))

(defn- clear-logs-from-server []
  (let [com-channel (chan)]
    (go (let [{success :success} (<! (http/execute-post "logs"))]
      (put! com-channel success)))
    com-channel))

(defn- clear-logs-from-state! []
  (swap! app-state assoc-in [screens screen-name :content] ""))

(defn clear-logs! []
  (go
    (when(<! (clear-logs-from-server))
      (clear-logs-from-state!))))
