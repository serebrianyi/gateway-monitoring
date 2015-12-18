(ns ^:figwheel-load gateway_monitoring.client.screens.system-management.controller-test
  (:require-macros [cljs.test :refer (is deftest testing async)]
                   [gateway-monitoring.client.test-util :refer (with-state)]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test]
            [gateway_monitoring.client.util.http :as http]
            [cljs.core.async :refer [put! chan <!]]
            [gateway_monitoring.client.data-storage :refer [app-state]]
            [gateway_monitoring.client.screens.system-management.controller :as controller]))


(deftest should-create-view-model
  (let [view-model (controller/view-model { :gateway-id "gid"
                                            :packet-forwarder "1"
                                            :hal-library "2"
                                            :gateway-monitoring-software "3" })]
    (is (= "gid" (:gateway-id view-model)))
    (is (= "1" (:packet-forwarder view-model)))
    (is (= "2" (:hal-library view-model)))
    (is (= "3" (:gateway-monitoring-software view-model)))))

(defn- execute-get-versions-mock []
  (let [com-channel (chan)] (put! com-channel {:body
                        {:packet-forwarder-version 1
                         :hal-library-version 2
                         :gateway-monitoring-software-version 3}})
    com-channel))

(deftest should-load-current-versions-from-server
  (async done
    (go
      (with-redefs [http/execute-get execute-get-versions-mock]
        (when-let [current-versions (<! (controller/load-current-versions-from-server))]
          (is (= {:packet-forwarder-version 1
                  :hal-library-version 2
                  :gateway-monitoring-software-version 3} current-versions))
          (done))))))

(deftest should-update-current-versions
  (with-state {:packet-forwarder { :current-version nil }
      :hal-library { :current-version nil }
      :gateway-monitoring-software { :current-version nil }}
    ((controller/update-current-versions! {:packet-forwarder-version 1
                                           :hal-library-version 2
                                           :gateway-monitoring-software-version 3 })
      (is (= {:packet-forwarder { :current-version 1 }
              :hal-library { :current-version 2 }
              :gateway-monitoring-software { :current-version 3 }} @app-state)))))

(deftest should-load-available-versions-from-server
  (async done
    (go
      (with-redefs [http/execute-get execute-get-versions-mock]
        (when-let [available-versions (<! (controller/load-available-versions-from-server))]
          (is (= {:packet-forwarder-version 1
                  :hal-library-version 2} available-versions))
          (done))))))

(deftest should-update-available-versions
  (with-state {:packet-forwarder { :available-version nil }
      :hal-library { :available-version nil }}
    ((controller/update-available-versions! {:packet-forwarder-version 1
                                           :hal-library-version 2 })
      (is (= {:packet-forwarder { :available-version 1 }
              :hal-library { :available-version 2 }} @app-state)))))

(deftest update-is-not-needed-if-no-new-version
  (is (= false (controller/is-update-needed? {:current-version "1" :available-version nil}))))

(deftest update-is-not-needed-if-no-newer-version
  (is (= false (controller/is-update-needed? {:current-version "1" :available-version "1"}))))

(deftest update-is-needed-if-newer-version
  (is (= true (controller/is-update-needed? {:current-version "1" :available-version "2"}))))
