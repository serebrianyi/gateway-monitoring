(ns ^:figwheel-load gateway_monitoring.client.screens.controller-test
  (:require-macros [cljs.test :refer (is deftest testing)]
                   [gateway-monitoring.client.test-util :refer (with-state)])
  (:require [cljs.test]
            [gateway_monitoring.client.data-storage :refer [app-state]]
            [gateway_monitoring.client.screens.controller :as controller]))

(deftest should-return-current-screen
  (with-state { :screens { :current-screen :fake-tab }}
    (is (= :fake-tab (controller/current-screen)))))

(deftest should-change-current-screen
  (with-state { :screens { :current-screen :fake-tab1 }}
    ((controller/change-screen! :fake-tab2)
    (is (= :fake-tab2 (controller/current-screen))))))
