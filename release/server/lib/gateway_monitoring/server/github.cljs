(ns gateway_monitoring.server.github
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gateway_monitoring.server.error-handling.error-handling :refer [<? with-try-catch]])
  (:require [cljs.nodejs :as n]
            [gateway_monitoring.server.error-handling.error-handling]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def request (n/require "request"))

(def user-agent "curl/7.21.4")

(defn- process-response [c error body]
  (if (empty? error)
    (put! c (js->clj (.parse js/JSON body) :keywordize-keys true))
    (put! c (js/Error. error))))

(defn- execute-get [url]
  (let [c (chan)
        options (clj->js {:url url :headers {:user-agent user-agent}})]
      (request options #(process-response c %1 %3))
  c))

(defn release [url]
  (go
    (with-try-catch
      (let [res (<? (execute-get url))]
        (:name res)))))

