(ns gateway_monitoring.server.logging-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [gateway_monitoring.server.logging :as logging]
            [cljs.test :refer-macros [async deftest is testing]]
            [cljs.core.async :refer [<! put! chan]]))


(defn contains-text? [expected-list actual]
  (doseq [expected expected-list]
    (is (= true (boolean (re-find expected actual))))))

(deftest should-log-error-on-message
  (with-redefs [logging/log (fn [text] (contains-text? [#"a,b", #"ERROR:"] text))]
    (logging/error "a," "b")))

(deftest should-log-error-on-exception
  (with-redefs [logging/log (fn [text] (contains-text? [#"Error: a", #"ERROR:"] text))]
    (logging/error (js/Error. "a"))))

(deftest should-log-warn
  (with-redefs [logging/log (fn [text] (contains-text? [#"a,b", #"WARN:"] text))]
    (logging/warn "a," "b")))

(deftest should-log-info
  (with-redefs [logging/log (fn [text] (contains-text? [#"a,b", #"INFO:"] text))]
    (logging/info "a," "b")))

(deftest should-put-exception-on-error-in-parsing-content
  (async done
    (let [c (chan)]
      (logging/parse-content c "error" nil)
      (go (is (= (instance? js/Error (<! c))))
           (done)))))

(deftest should-replace-linebreakes-in-parsing-content
  (async done
    (let [c (chan)]
      (logging/parse-content c nil "a\nb")
      (go (is (= "a<br/>b" (<! c)))
           (done)))))
