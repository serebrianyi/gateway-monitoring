(ns gateway_monitoring.server.core
  (:require [cljs.nodejs :as n]
            [gateway_monitoring.server.handlers :as handlers]
            [gateway_monitoring.server.logging :as logging]
            [gateway_monitoring.server.mailing :as mailing]))

(enable-console-print!)

(def express (n/require "express"))
(def path (n/require "path"))
(.install (n/require "source-map-support"))

(def app (express))
(.use app (fn [req, res, next-middleware] (.header res "Access-Control-Allow-Origin" "*")(next-middleware)))

(.use app (.static express (.resolve path js/__dirname "../../../../resources/public")))

(defn -main [& args]
  (. app (get "/packets" handlers/packet-handler))
  (. app (get "/header-info" handlers/header-info!))
  (. app (get "/logs" handlers/log-handler))
  (. app (post "/logs" handlers/clear-log-handler))
  (. app (get "/versions/current" handlers/current-versions-handler!))
  (. app (get "/versions/available" handlers/available-versions-handler))
  (handlers/start-packet-loop)
  (println (str "Server started on port: " (.-port (.address (.listen app 3000))))))


(set! *main-cli-fn* -main)

