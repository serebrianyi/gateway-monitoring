(ns gateway_monitoring.server.github-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [gateway_monitoring.server.github :as github]
            [cljs.test :refer-macros [async deftest is testing]]
            [cljs.core.async :refer [<! put! chan]]))

(deftest should-process-response-on-success
  (async done
    (let [c (chan)]
      (github/process-response c nil "{\"response\": 1}")
      (go (is (= {:response 1} (<! c)))
           (done)))))

(deftest should-process-response-on-error
  (async done
    (let [c (chan)]
      (github/process-response c "message" nil)
      (go (is (= "Error: message" (.toString (<! c))))
           (done)))))
