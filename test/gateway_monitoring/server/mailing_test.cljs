(ns gateway_monitoring.server.mailing-test
  (:require [gateway_monitoring.server.mailing :as mailing]
            [cljs.test :refer-macros [async deftest is testing]]
            [gateway_monitoring.server.logging :as logging]))


(deftest should-create-mail
  (let [mail (mailing/create-mail "m" "g")]
    (is (= "m" (:from mail)))
    (is (= "m" (:to mail)))
    (is (= "Gateway offline" (:subject mail)))
    (is (= "Gateway with id g went offline" (:text mail)))))

(deftest should-return-mail
  (let [props {:auth {:user "m"}}]
    (is (= "m" (mailing/mail-adress-from-props props)))))

(defn contains-text? [expected-list actual]
  (doseq [expected expected-list]
    (is (= true (boolean (re-find expected actual))))))

(deftest should-log-mail-sent-on-success
  (with-redefs [logging/info (fn [text] (contains-text? [#"Gateway offline mail was sent"] text))]
    (mailing/mail-sent nil "Success")))

(deftest should-log-mail-sent-on-error
  (with-redefs [logging/error (fn [text] (contains-text? [#"Error"] text))]
    (mailing/mail-sent "Error" nil)))
