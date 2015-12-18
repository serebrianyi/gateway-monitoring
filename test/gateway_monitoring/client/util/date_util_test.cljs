(ns ^:figwheel-load gateway_monitoring.client.util.date-util-test
  (:require-macros [cljs.test :refer (is deftest testing)])
  (:require [cljs.test]
            [gateway_monitoring.client.util.date-util :as date-util]))


(deftest time-since-should-calculate-difference-to-now
  (with-redefs [date-util/current-time (fn [] 1449855319000)
                date-util/time-zone-offset (fn [] 0)]
   (is (= "0.0.0 00:00:01" (date-util/time-since "2015-12-11T17:35:18.000Z")))))


