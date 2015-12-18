(ns gateway_monitoring.client.screens.logs.view
  (:require [om.core :as om :include-macros true]
            [gateway_monitoring.client.screens.logs.controller :as controller]
            [om-bootstrap.button :as b]
            [om-bootstrap.random :as r]
            [om-tools.dom :as d :include-macros true]))

(defn root [data owner]
  (reify
    om/IWillMount
     (will-mount [_]
        (controller/load-logs!))
    om/IRenderState
    (render-state [this state]
      (let [view-model (controller/view-model data)]
        (d/div #js {:className "panel panel-default"}
          (d/div #js {:className "panel-heading"} "Server logs for " (:path view-model))
          (d/div
            (d/div #js {:dangerouslySetInnerHTML #js {:__html (:content view-model)}}  nil)
            (b/button {:className "tab-button" :onClick #(controller/load-logs!)} "Refresh")
            (b/button {:className "tab-button" :onClick #(controller/clear-logs!)} "Clear")))))))



