(ns gateway-monitoring.client.test-util)

(defmacro with-state [state-definition body]
  `(with-redefs [gateway_monitoring.client.data-storage/app-state (atom ~state-definition)] ~body))
