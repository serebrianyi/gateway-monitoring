(ns gateway_monitoring.server.data-storage)

(def unknown "Unknown")

(def unknown-date-time "1970-01-01T00:00:00.000Z")

(defonce app-state (atom {
                           :gateway-id unknown
                           :packet-forwarder-version unknown
                           :hal-library-version unknown
                           :gateway-monitoring-software-version "v0.1.0"
                           :online-since unknown-date-time
                          }))
