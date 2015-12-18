(ns gateway_monitoring.client.screens.app-state-dump.controller
  (:require [gateway_monitoring.client.data-storage :refer [app-state screens]]
            [cljs.reader :as reader]))

(def ^:private screen-name :app-state-dump)
(defn screen-data [data] (-> (screens data)(screen-name)))

(defn store-dump! []
  (swap! app-state assoc-in [screens screen-name] {:dump "" })
  (swap! app-state assoc-in [screens screen-name] {:dump (str @app-state) }))

(defn dump-changed! [dump]
  (swap! app-state assoc-in [screens screen-name] {:dump dump }))

(defn load-dump! []
  (let [new-state (reader/read-string (-> (screen-data @app-state)(:dump)))]
    (reset! app-state new-state)))

