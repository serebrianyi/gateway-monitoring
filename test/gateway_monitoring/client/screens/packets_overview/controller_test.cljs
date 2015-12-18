(ns ^:figwheel-load gateway_monitoring.client.screens.packets-overview.controller-test
  (:require-macros [cljs.test :refer (is deftest testing async)]
                   [cljs.core.async.macros :refer [go]]
                   [gateway-monitoring.client.test-util :refer (with-state)])
  (:require [cljs.test]
            [cljs.core.async :refer [put! chan <! timeout]]
            [gateway_monitoring.client.util.http :as http]
            [gateway_monitoring.client.data-storage :refer [app-state]]
            [gateway_monitoring.client.screens.packets-overview.controller :as controller]))

(deftest should-create-view-model
  (let [view-model (controller/view-model { :gateway-id "gid" :number-of-packets 1 :online-since 2 :packets 3 :screens { :packets-overview "table"}})]
    (is (= "gid" (:gateway-id view-model)))
    (is (= 1 (:number-of-packets view-model)))
    (is (= 2 (:online-since view-model)))
    (is (= 3 (:packets view-model)))
    (is (= "table" (:packet-table view-model)))))

(defn- execute-get-packets-mock []
  (let [com-channel (chan)] (put! com-channel {:body {:packets {:a 1}}})
    com-channel))

(deftest should-load-packets-from-server
  (async done
    (go
      (with-redefs [http/execute-get execute-get-packets-mock]
        (when-let [packets (<! (controller/load-packets-from-server))]
          (is (= {:packets {:a 1}} packets))(done))))))

(deftest should-update-packets
  (with-state {:packets []}
    ((controller/update-packets! {:packets [{:datetime "a1"}]})
    (is (= [{:datetime "a1"}] (:packets @app-state))))))

(defn- execute-get-header-info-mock []
  (let [com-channel (chan)] (put! com-channel {:body { :gateway-id "g1" :online-since "1"}})
    com-channel))

(deftest should-load-header-info-from-server
  (async done
    (go
      (with-redefs [http/execute-get execute-get-header-info-mock]
        (when-let [header-info (<! (controller/load-header-info-from-server))]
          (is (= { :gateway-id "g1" :online-since "1"} header-info))
          (done))))))

(deftest should-update-header-info
  (with-state {:gateway-id "a" :online-since "b"}
    ((controller/update-header-info! {:gateway-id "a2" :online-since "b2"})
    (is (= {:gateway-id "a2" :online-since "b2"} @app-state)))))


(deftest should-return-filter-settings
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "F1" }}}}
    (is (= { :filtering-by :datetime :filtering-value "F1" } (controller/filter-settings)))))

(deftest should-update-filter
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "F1" }}}}
    ((controller/update-filter! :datetime2 "F2" )
    (is (= { :filtering-by :datetime2 :filtering-value "F2" } (controller/filter-settings))))))

(deftest should-apply-case-insensetive-filter-when-filter-defined-on-a-filtered-row
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "f1" }}}}
    (is (= true ((controller/apply-filter) {:datetime "ABCF1A"})))))

(deftest should-apply-filter-when-filter-defined-on-a-filtered-row
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "F1" }}}}
    (is (= true ((controller/apply-filter) {:datetime "ABCF1A"})))))

(deftest should-apply-filter-when-filter-defined-on-a-non-filtered-row
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "F1" }}}}
    (is (= false ((controller/apply-filter) {:datetime "ABCFA"})))))

(deftest should-apply-filter-when-no-filter-defined
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value nil }}}}
    (is (= true ((controller/apply-filter) {:datetime "ABCF1A"})))))

(deftest should-return-sort-settings
  (with-state {:screens {:packets-overview {:sorting { :sorting-by :datetime :sorting-order ">" }}}}
    (is (= { :sorting-by :datetime :sorting-order ">" } (controller/sort-settings)))))

(deftest should-update-sort
  (with-state {:screens {:packets-overview {:sorting { :sorting-by :datetime :sorting-order ">" }}}}
    ((controller/update-sort! :datetime2)
    (is (= { :sorting-by :datetime2 :sorting-order ">" } (controller/sort-settings))))))

(deftest should-calculate-sorting-order-and-not-change-bigger-with-other-sorting-property
  (is (= ">" (controller/calculate-sorting-order :datetime :datetime2 ">"))))

(deftest should-calculate-sorting-order-and-not-change-smaller-with-other-sorting-property
  (is (= "<" (controller/calculate-sorting-order :datetime :datetime2 "<"))))

(deftest should-calculate-sorting-order-and-change-bigger-with-same-sorting-property
  (is (= "<" (controller/calculate-sorting-order :datetime :datetime ">"))))

(deftest should-calculate-sorting-order-and-change-smaller-with-same-sorting-property
  (is (= ">" (controller/calculate-sorting-order :datetime :datetime "<"))))

(deftest should-return-table-packet-data
  (with-state { :packets [{:datetime "A2"}{:datetime "A1"}{:datetime "B1"}]
                                  :screens { :packets-overview {
                                                               :filtering { :filtering-by :datetime :filtering-value "A" }
                                                               :sorting { :sorting-by :datetime :sorting-order "<" }}}}
    (is (= [{:datetime "A1"}{:datetime "A2"}] (controller/table-packet-data)))))

(deftest should-update-edit-mode
  (with-state {:screens {:packets-overview {:columns { :datetime { :editing? false } }}}}
    ((controller/update-edit-mode! :datetime true)
    (is (= true (-> (:screens @app-state)(:packets-overview)(:columns)(:datetime)(:editing?)))))))

(deftest should-return-display-column-header-with-filter
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "filter" }}}}
    (is (= "filter" (controller/display-column-header :datetime "default-value")))))

(deftest should-return-default-display-column-header-without-filter
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value nil }}}}
    (is (= "default-value" (controller/display-column-header :datetime "default-value")))))

(deftest should-return-default-display-column-header-with-filter-on-another-column
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "filter" }}}}
    (is (= "default-value" (controller/display-column-header :datetime2 "default-value")))))

(deftest should-return-edit-column-header-with-filter
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "filter" }}}}
    (is (= "filter" (controller/edit-column-header :datetime)))))

(deftest should-return-edit-display-column-header-with-filter-on-another-column
  (with-state {:screens {:packets-overview {:filtering { :filtering-by :datetime :filtering-value "filter" }}}}
    (is (= "" (controller/edit-column-header :datetime2)))))

(deftest should-return-table-columns
  (let [data { :packet-table { :columns {:datetime { :header "c2" :position 2 }
                                           :node-id { :header "c1"  :position 1 }
                                           :application-id { :header "c3"  :position 3 }}}}]
    (is (= '([:node-id {:header "c1", :position 1}]
             [:datetime {:header "c2", :position 2}]
             [:application-id {:header "c3", :position 3}]) (controller/table-columns data)))))






