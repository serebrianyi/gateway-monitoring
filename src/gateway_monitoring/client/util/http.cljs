(ns gateway_monitoring.client.util.http
  (:require [cljs-http.client :as http]))

(def ^:private root-url
  (when (exists? js/window)
    (let [location (.-location js/window)
          protocol (.-protocol location)
          hostname (.-hostname location)
          port (.-port location)]
      (str protocol "//" hostname ":" port "/"))))

(defn execute-get [url] (http/get (str root-url url) {:with-credentials? false}))

(defn execute-post [url] (http/post (str root-url url) {:with-credentials? false}))
