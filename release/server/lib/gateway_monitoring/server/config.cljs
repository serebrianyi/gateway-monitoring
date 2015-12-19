(ns gateway_monitoring.server.config
  (:require [cljs.nodejs :as n]
            [cljs.reader :as reader]))

(def child-process (n/require "child_process"))
(def fs (n/require "fs"))
(def path (n/require "path"))
(def moment (n/require "moment"))

(def config-file-name (.resolve path js/__dirname "../../../config"))

(defn config-file []
  (let [file-content (.readFileSync fs config-file-name "utf8")]
    (reader/read-string file-content)))

(defn- run-log-entry [configuration simbol]
  (let [symbol-config (simbol configuration)
        {:keys [command regex]} symbol-config
        command-output (.toString (.execSync child-process command))]
    (if (empty? command-output)
      (throw (js/Error. (str "No result for command " command)))
      (second (re-find regex (.trim command-output))))))

(defn gateway-id [configuration]
  (run-log-entry configuration :gateway-id))

(defn packet-forwarder-version [configuration]
  (let [version-format (:format (:packet-forwarder-version configuration))]
    (.replace version-format "%s" (run-log-entry configuration :packet-forwarder-version))))

(defn hal-library-version [configuration]
  (let [version-format (:format (:hal-library-version configuration))]
    (.replace version-format "%s" (run-log-entry configuration :hal-library-version))))

(defn online-since [configuration]
  (let [date-format (:format (:online-since configuration))]
    (.toString (moment (run-log-entry configuration :online-since) date-format))))
