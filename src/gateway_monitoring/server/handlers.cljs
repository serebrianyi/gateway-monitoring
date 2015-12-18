(ns gateway_monitoring.server.handlers
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gateway_monitoring.server.error-handling.error-handling :refer [<?]])
  (:require [cljs.nodejs :as n]
            [clojure.string :as string]
            [gateway_monitoring.server.data-storage :refer [app-state unknown unknown-date-time]]
            [gateway_monitoring.server.logging :as logging]
            [gateway_monitoring.server.github :as github]
            [gateway_monitoring.server.config :as config]
            [cljs.core.async :refer [<! put! chan timeout]]))

(def moment (n/require "moment"))

(defn try-swap!
  ([configuration simbol config-fn]
    (try-swap! configuration simbol config-fn unknown))
  ([configuration simbol config-fn default-value]
    (try
      (swap! app-state assoc-in [simbol] (config-fn configuration))
      (catch js/Error e
        (logging/error e)
        (swap! app-state assoc-in [simbol] default-value)))))

(defn log-handler[req res]
    (go
      (try
        (let [content (<? (logging/content))
              path (logging/full-log-file-path)]
        (.send res (clj->js {:content content :path path})))
      (catch js/Error e
        (logging/error e)
        (.send res (clj->js {:content unknown :path unknown}))))))

(defn clear-log-handler[req res]
    (go
      (try
        (let [result (<? (logging/clear-log))]
          (.send res result))
      (catch js/Error e
        (logging/error e)
        (.send res (.toString e))))))

(defn available-versions-handler[req res]
    (go
      (try
        (let [configuration (config/config-file)
              hal-library-version (<? (github/release (:release-url (:hal-library-version configuration))))
              packet-forwarder-version (<? (github/release (:release-url (:packet-forwarder-version configuration))))]
        (.send res (clj->js
                     {:hal-library-version hal-library-version
                      :packet-forwarder-version packet-forwarder-version})))
      (catch js/Error e
        (logging/error e)
        (.send res (clj->js {:hal-library-version unknown :packet-forwarder-version unknown}))))))

(defn current-versions-handler![req res]
  (try
    (let [configuration (config/config-file)]
      (when (= unknown (:packet-forwarder-version @app-state))
        (try-swap! configuration :packet-forwarder-version config/packet-forwarder-version))
      (when (= unknown (:hal-library-version @app-state))
        (try-swap! configuration :hal-library-version config/hal-library-version))
      (.send res (clj->js {:packet-forwarder-version (:packet-forwarder-version @app-state)
                           :hal-library-version (:hal-library-version @app-state)
                           :gateway-monitoring-software-version (:gateway-monitoring-software-version @app-state) })))
    (catch js/Error e
      (logging/error e)
      (.send res (clj->js {:packet-forwarder-version unknown
                           :hal-library-version unknown
                           :gateway-monitoring-software-version unknown })))))

(defn header-info! [req res]
  (try
    (let [configuration (config/config-file)]
      (when (= unknown (:gateway-id @app-state))
        (try-swap! configuration :gateway-id config/gateway-id))
      (when (= unknown-date-time (:online-since @app-state))
        (try-swap! configuration :online-since config/online-since unknown-date-time))
      (.send res (clj->js {:gateway-id (:gateway-id @app-state)
                           :online-since (:online-since @app-state) })))
    (catch js/Error e
      (logging/error (.toString e))
      (.send res (clj->js {:gateway-id (:gateway-id unknown)
                           :online-since (:online-since unknown-date-time) })))))


;;;;;;;;;;;;;;;;;;; TEMP - Fake packets ;;;;;;;;;;;;;;;;;;;;;;;;;
(defn create-packet [] { :datetime (.format (moment) "DD MMM, HH:mm:ss") :node-id "fake node id" :application-id "fake-application-id" :upstream? true})

(defn add-packet [] (
  let [new-packets (conj (:packets @app-state) (create-packet))
       newest-packets (take 20 new-packets)]
     (swap! app-state assoc-in [:packets] newest-packets)))

(defn packet-handler [req res]
  (.send res (clj->js @app-state)))

(defn start-packet-loop []
  (go
    (loop []
        (println "I'm up and running")
        (add-packet)
        (<! (timeout 5000))
    (recur))))
