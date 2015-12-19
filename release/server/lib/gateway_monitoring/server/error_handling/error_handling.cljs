(ns gateway_monitoring.server.error-handling.error-handling)

(defn error? [e]
  (instance? js/Error e))

(defn throw-on-err [data]
  (when (error? data) (throw data))
  data)
