(ns gateway_monitoring.client.screens.system-management.view
  (:require [om.core :as om :include-macros true]
            [gateway_monitoring.client.data-storage :as model]
            [om-bootstrap.input :as i]
            [cljs.reader :as reader]
            [gateway_monitoring.client.screens.system-management.controller :as controller]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]
            [om-tools.dom :as d :include-macros true]))

(defn css-class [versioning-info]
  (let [{:keys [available-version]} versioning-info]
    (if-not (empty? available-version) "system-management-visible-version-button" "system-management-invisible-version-button")))

(defn bs-class [versioning-info]
  (if (controller/is-update-needed? versioning-info) "warning" "success"))

(defn text [versioning-info]
  (if (controller/is-update-needed? versioning-info) (:available-version versioning-info) "System is up-to-date"))

(defn root [data owner]
  (reify
    om/IWillMount
     (will-mount [_]
        (controller/load-current-versions!))
    om/IRenderState
    (render-state [this state]
      (let [view-model (controller/view-model data)
            {:keys [packet-forwarder hal-library gateway-monitoring-software]} view-model]
        (d/div
          (p/panel  {:header (str "System management for gateway " (:gateway-id view-model)) :list-group
            (d/ul {:class "list-group"}
              (d/li {:class "list-group-item"}
                (d/span "Packet forwarder version ")
                (r/label {} (:current-version packet-forwarder))
                (r/label { :className (css-class packet-forwarder) :bs-style (bs-class packet-forwarder) } (text packet-forwarder)))
              (d/li {:class "list-group-item"}
                (d/span "HAL library version ")
                (r/label {} (:current-version hal-library))
                (r/label { :className (css-class hal-library) :bs-style (bs-class hal-library)} (text hal-library)))
              (d/li {:class "list-group-item"}
                (d/span "Gateway monitoring software version ")
                (r/label {} (:current-version gateway-monitoring-software))))}
          nil)
          (b/button {:className "tab-button" :onClick #(controller/load-available-versions!)} "Check for updates"))))))


