(ns gateway_monitoring.server.mailing
  (:require [cljs.nodejs :as n]
            [gateway_monitoring.server.config :as config]
            [gateway_monitoring.server.logging :as logging]))

(def nodemailer (n/require "nodemailer"))

(defn- create-mail [mail-address gateway-id]
  { :from mail-address
    :to mail-address
    :subject "Gateway offline"
    :text (str "Gateway with id " gateway-id " went offline")})

(defn- mail-sent [error, info]
  (if (empty? error)
    (logging/info "Gateway offline mail was sent")
    (logging/error error)))

(defn- mail-adress-from-props [props] (:user (:auth props)))

(defn send-gateway-offline-mail [gateway-id]
  (try
    (let [mail-config (:mail (config/config-file))
          mail-address (mail-adress-from-props mail-config)
          mail (clj->js (create-mail mail-address gateway-id))
          transporter (.createTransport nodemailer (clj->js mail-config))]
      (.sendMail transporter mail mail-sent))
    (catch js/Error e
      (logging/error e))))
