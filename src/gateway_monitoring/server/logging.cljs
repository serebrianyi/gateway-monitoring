(ns gateway_monitoring.server.logging
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.nodejs :as n]
            [clojure.string :as string]
            [cljs.core.async :refer [<! put! chan]]))

(def fs (n/require "fs"))
(def path (n/require "path"))
(def log-file-name (.resolve path js/__dirname "../../../gateway_monitoring.log"))

(defn- log [text]
    (.appendFile fs log-file-name text
                (fn [err]
                  (if (empty? err)
                    (println text)
                    (throw js/Error. err)))))

(defn- parse-content [c err res]
  (go
    (if (nil? err)
      (put! c (string/replace res "\n" "<br/>"))
      (put! c err))))

(defn content []
  (let [c (chan)]
    (.readFile fs log-file-name "utf8" #(parse-content c %1 %2))
  c))

(defn full-log-file-path [] (.resolve path log-file-name))

(defn warn [& text]  (log (str (js/Date.) " WARN: " (apply str text) "\n")))

(defn info [& text]  (log (str (js/Date.) " INFO: " (apply str text) "\n")))

(defmulti error
  (fn[& text] (instance? js/Error (first text))))

(defmethod error true [& text]
  (let [e (first text)
        stack-trace (.-stack e)]
    (log (str (js/Date.) " ERROR: " (.toString e) "\n" stack-trace "\n"))))

(defmethod error false [& text]
 (log (str (js/Date.) " ERROR: " (apply str text) "\n")))

(defn- on-log-cleared [c err]
  (go
    (if (nil? err)
      (put! c true)
      (put! c err))))

(defn clear-log []
  (let [c (chan)]
    (.truncate fs log-file-name 0 #(on-log-cleared c %1))
  c))
