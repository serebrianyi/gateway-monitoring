(ns ^:figwheel-load gateway_monitoring.client.screens.logs.controller-test
  (:require-macros [cljs.test :refer (is deftest testing async)]
                   [cljs.core.async.macros :refer [go]]
                   [gateway-monitoring.client.test-util :refer (with-state)])
  (:require [cljs.test]
            [cljs.core.async :refer [put! chan <! timeout]]
            [gateway_monitoring.client.util.http :as http]
            [gateway_monitoring.client.data-storage :refer [app-state]]
            [gateway_monitoring.client.screens.logs.controller :as controller]))

(deftest should-create-view-model
  (let [view-model (controller/view-model { :screens { :logs {:content "1" :path "2"}}})]
    (is (= "1" (:content view-model)))
    (is (= "2" (:path view-model)))))

(defn- execute-get-mock []
  (let [com-channel (chan)] (put! com-channel {:body { :content "content1" :path "path1"}})
    com-channel))

(deftest should-load-logs-from-server
  (async done
    (go
      (with-redefs [http/execute-get execute-get-mock]
        (when-let [logs (<! (controller/load-logs-from-server))]
          (is (= { :content "content1" :path "path1"} logs))
          (done))))))

(deftest should-update-logs
  (with-state {:screens { :logs {:content "a" :path "b"}}}
    ((controller/update-logs! {:content "a2" :path "b2"})
    (is (= {:content "a2" :path "b2"} (:logs (:screens @app-state)))))))

(deftest should-clear-logs
  (with-state {:screens { :logs {:content "a" :path "b"}}}
    ((controller/clear-logs-from-state!)
    (is (= {:content "" :path "b"} (:logs (:screens @app-state)))))))

(defn- execute-post-mock []
  (let [com-channel (chan)] (put! com-channel {:success true})
    com-channel))

(deftest should-clear-logs-on-server
  (async done
    (go
      (with-redefs [http/execute-post execute-post-mock]
        (when-let [success (<! (controller/clear-logs-from-server))]
          (is (= true success))
          (done))))))
