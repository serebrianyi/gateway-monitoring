(ns gateway_monitoring.client.screens.core
  (:require [om.core :as om :include-macros true]
            [gateway_monitoring.client.screens.packets-overview.view :as packets-overview-screen]
            [gateway_monitoring.client.screens.app-state-dump.view :as app-state-dump-screen]
            [gateway_monitoring.client.screens.system-management.view :as system-management-screen]
            [gateway_monitoring.client.screens.logs.view :as logs-screen]
            [gateway_monitoring.client.data-storage :refer [app-state screens]]
            [gateway_monitoring.client.screens.controller :as controller]
            [om-bootstrap.nav :as n]
            [om-tools.dom :as d :include-macros true]))

(enable-console-print!)

(defn navigation [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (d/div
        (n/nav {:bs-style "tabs" :active-key (controller/current-screen) :on-select (fn [k _] (controller/change-screen! k))}
           (n/nav-item {:key :packets-overview } "Packets overview")
           (n/nav-item {:key :system-management } "System management")
           (n/nav-item {:key :logs } "Server logs")
           (n/nav-item {:key :app-state-dump } "App state dump"))
        (condp = (controller/current-screen)
          :packets-overview (om/build packets-overview-screen/root data)
          :system-management (om/build system-management-screen/root data)
          :logs (om/build logs-screen/root data)
          :app-state-dump (om/build app-state-dump-screen/root data))))))

(om/root
  navigation
  app-state
  {:target (. js/document (getElementById "app"))})
