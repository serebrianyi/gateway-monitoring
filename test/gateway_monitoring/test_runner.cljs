(ns gateway_monitoring.test-runner
  (:require [cljs.test :refer-macros [run-all-tests run-tests]]
            [doo.runner :refer-macros [doo-all-tests doo-tests]]
            [gateway_monitoring.server.mailing-test]
            [gateway_monitoring.server.logging-test]
            [gateway_monitoring.server.github-test]
            [gateway_monitoring.client.screens.app-state-dump.controller-test]
            [gateway_monitoring.client.screens.packets-overview.controller-test]
            [gateway_monitoring.client.screens.system-management.controller-test]
            [gateway_monitoring.client.screens.logs.controller-test]
            [gateway_monitoring.client.screens.controller-test]
            [gateway_monitoring.client.util.date-util-test]))

(enable-console-print!)

(doo-all-tests #"gateway_monitoring.*-test")
;(doo-tests 'gateway_monitoring.client.screens.logs.controller-test)

