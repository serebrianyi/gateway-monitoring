(ns gateway_monitoring.client.screens.packets-overview.view
  (:require [om.core :as om :include-macros true]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d :include-macros true]
            [gateway_monitoring.client.screens.packets-overview.controller :as controller]
            [om-bootstrap.random :as r]
            [om-bootstrap.button :as b]
            [gateway_monitoring.client.util.date-util :as date-util]
            [gateway_monitoring.client.components.editable-label.view :as editable-label]))

(defn table-column-header [data owner]
  (reify
    om/IRenderState
      (render-state [this state]
         (let [simbol (key data)
               {:keys [header editing?]} (val data)]
      (d/td #js { :className "table-column-header label-default" }
           (om/build editable-label/label
                  {:display-text (controller/display-column-header simbol header)
                   :edit-text (controller/edit-column-header simbol)
                   :editing? editing?
                   :editing?-changed (fn [new-editing?] (controller/update-edit-mode! simbol new-editing?))
                   :text-changed (fn [new-filter] (controller/update-filter! simbol new-filter))
                   :css-classes {
                                  :visible-element "table-column-header-visible"
                                  :invisible-element "table-column-header-invisible"
                                  :parent-element "table-column-header-label"}})
            (r/glyphicon {:glyph "sort" :onClick #(controller/update-sort! simbol)}))))))

(defn packet-table-row [packet owner]
  (reify
    om/IRender
    (render [this]
      (d/tr
       (d/td (:datetime packet))
       (d/td (:node-id packet))
       (d/td (:application-id packet))
       (d/td (if (:upstream? packet) "Upstream" "Downstream")
      )))))

(defn general-info-table [data owner]
  (reify
    om/IRenderState
     (render-state [this state]
      (d/div #js {:className "panel panel-default"}
        (d/div #js {:className "panel-heading"} "General gateway info")
          (d/div #js { :className "general-info-cell label-success"} (str "Gateway id " (:gateway-id data)))
          (d/div #js { :className "general-info-cell label-success"} (str "Online since " (date-util/time-since (:online-since data))))
          (d/div #js { :className "general-info-cell label-success"} (str "Number of packets " (:number-of-packets data)))))))

(defn packet-table [data owner]
  (reify
    om/IRenderState
      (render-state [this state]
        (d/div #js {:className "panel panel-default"}
          (d/div #js {:className "panel-heading"} "Latest packets")
            (table {:striped? true :bordered? true :condensed? true :hover? true}
              (d/thead
                (d/tr (om/build-all table-column-header (controller/table-columns data))))
              (d/tbody
                (om/build-all packet-table-row (controller/table-packet-data))))))))

(defn root [data owner]
  (reify
    om/IWillMount
     (will-mount [_]
        (controller/load-packet-data!)
        (controller/load-header-info!))
    om/IRenderState
    (render-state [this state]
      (let [view-model (controller/view-model data)]
        (d/div
          (om/build general-info-table view-model)
          (om/build packet-table view-model))))))
