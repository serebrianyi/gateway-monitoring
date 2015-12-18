(ns gateway_monitoring.client.data-storage)

(def screens :screens)

(defonce app-state (atom {
                           :gateway-id nil
                           :packet-forwarder { :current-version nil :available-version nil }
                           :hal-library { :current-version nil :available-version nil }
                           :gateway-monitoring-software { :current-version nil :available-version nil }
                           :number-of-packets 0
                           :online-since nil
                           :packets []
                           :screens {
                                      :current-screen :packets-overview
                                      :packets-overview {
                                                          :columns {:datetime { :header "Datetime" :position 1 :editing? false }
                                                                    :node-id { :header "Node id"  :position 2 }
                                                                    :application-id { :header "Application id"  :position 3 }
                                                                    :upstream? { :header "Upstream/Downstream" :position 4 }}
                                                          :filtering { :filtering-by :datatime :filtering-value nil }
                                                          :sorting { :sorting-by :datatime :sorting-order ">" }}
                                      :app-state-dump { :dump ""}
                                      :logs { :content "No log yet" :path ""}

                          }}))
