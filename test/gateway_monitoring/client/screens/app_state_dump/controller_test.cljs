(ns ^:figwheel-load gateway_monitoring.client.screens.app-state-dump.controller-test
  (:require-macros [cljs.test :refer (is deftest testing)]
                   [gateway-monitoring.client.test-util :refer (with-state) ])
  (:require [cljs.test]
            [gateway_monitoring.client.data-storage :refer [app-state]]
            [gateway_monitoring.client.screens.app-state-dump.controller :as controller]))

(deftest should-store-new-dump
  (with-state { :screens { :app-state-dump { :dump "empty" }}}
    ((controller/store-dump!)
    (is (=  "{:screens {:app-state-dump {:dump \"\"}}}" (-> (:screens @app-state)(:app-state-dump)(:dump)))))))

(deftest should-store-changed-dump
  (with-state { :screens { :app-state-dump { :dump "empty" }}}
    ((controller/dump-changed! "not-empty")
    (is (= "not-empty" (-> (:screens @app-state)(:app-state-dump)(:dump)))))))

(deftest should-load-dump-from-string
  (with-state { :screens { :app-state-dump { :dump "{ :screens { :app-state-dump { :dump \"not-empty\" }}}" }}}
    ((controller/load-dump!)
    (is (= "not-empty" (-> (:screens @app-state)(:app-state-dump)(:dump)))))))

