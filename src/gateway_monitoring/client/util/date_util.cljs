(ns gateway_monitoring.client.util.date-util
  (:require [goog.string :as gstring]
            [goog.string.format]))

(defn- current-time [] (. js/Date now))

(defn- time-zone-offset [] (. (js/Date.) getTimezoneOffset))

(defn time-since
  "Calculates the date/time since some time in the past and formats it"
  [time-in-past]
  (let [cur-time (current-time)
    diff (+ (- cur-time (.getTime (js/Date. time-in-past))) (time-zone-offset))
    timestamp (js/Date. diff)]
    (str
      (- (. timestamp getUTCFullYear) 1970) "."
      (. timestamp getUTCMonth) "."
      (- (. timestamp getUTCDate) 1) " "
      (gstring/format "%02d" (. timestamp getUTCHours)) ":"
      (gstring/format "%02d" (. timestamp getUTCMinutes)) ":"
      (gstring/format "%02d" (. timestamp getUTCSeconds)))))



