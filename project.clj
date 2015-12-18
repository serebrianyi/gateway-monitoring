(defproject gateway_monitoring "0.1.0-SNAPSHOT"
  :description "Monitoring software for gateways run be TTN"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-http "0.1.38"]
                 [racehub/om-bootstrap "0.5.3"]
                 [org.omcljs/om "0.9.0"]
                 [lein-doo "0.1.6"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]
            [lein-doo "0.1.6"]]

  :source-paths ["src" "test"]

  :doo {:build "test"}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "server/lib" "server/server.js" "server/gateway_monitoring.log"]

  :cljsbuild {:builds
              [{:id "client-dev"
                :source-paths ["src/gateway_monitoring/client"]
                :figwheel true
                :compiler {:main gateway_monitoring.client.screens.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/gateway_monitoring_client.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :source-map true
                           }}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "client-prod"
                :source-paths ["src/gateway_monitoring/client"]
                :compiler {:output-to "resources/public/js/compiled/gateway_monitoring_client.js"
                           :main gateway_monitoring.client.screens.core
                           :optimizations :advanced
                           :pretty-print false}}
               {:id "server"
                :source-paths ["src/gateway_monitoring/server"]
                :compiler {
                  :target :nodejs
                  :output-to "server/server.js"
                  :output-dir "server/lib"
                  :optimizations :none
                  :source-map true}}
               { :id "test"
                  :source-paths ["src/gateway_monitoring" "test/gateway_monitoring"]
                  :compiler     {:output-to     "target/test/testable.js"
                                 :main          gateway_monitoring.test-runner
                                 :optimizations :none
                                 :target        :nodejs}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"
             :css-dirs ["resources/public/css"] ;; watch and update CSS
             })
