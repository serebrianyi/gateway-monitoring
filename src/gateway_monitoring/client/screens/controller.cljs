(ns gateway_monitoring.client.screens.controller
  (:require [gateway_monitoring.client.data-storage :refer [app-state screens]]))

(defn change-screen! [k] (swap! app-state assoc-in [screens :current-screen] k))

(defn current-screen [] (-> (screens @app-state)(:current-screen)))
