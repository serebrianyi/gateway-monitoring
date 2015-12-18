(ns gateway_monitoring.client.screens.app-state-dump.view
  (:require [om.core :as om :include-macros true]
            [gateway_monitoring.client.data-storage :as model]
            [om-bootstrap.input :as i]
            [cljs.reader :as reader]
            [gateway_monitoring.client.screens.app-state-dump.controller :as controller]
            [om-bootstrap.button :as b]
            [om-tools.dom :as d :include-macros true]))

(defn root [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (d/div #js {:className "panel panel-default"}
        (d/div #js {:className "panel-heading"} "Current application state")
        (i/input
            {:type "textarea"
             :id "app-state-dump-textarea"
             :onChange #(controller/dump-changed! (.. % -target -value))
             :value (-> (:screens data)(:app-state-dump)(:dump))})
        (b/button {:className "tab-button" :onClick #(controller/store-dump!)} "Dump app data")
        (b/button {:className "tab-button" :onClick #(controller/load-dump!)} "Restore app data")))))

