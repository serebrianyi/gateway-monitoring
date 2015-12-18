(ns gateway_monitoring.server.error-handling.error-handling)

(defmacro <? [ch]
  `(throw-on-err (cljs.core.async/<! ~ch)))

(defmacro with-try-catch [body]
  `(try
      ~body
      (catch js/Error e
       e)))
