// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.data_storage');
goog.require('cljs.core');
gateway_monitoring.server.data_storage.unknown = "Unknown";
gateway_monitoring.server.data_storage.unknown_date_time = "1970-01-01T00:00:00.000Z";
if(typeof gateway_monitoring.server.data_storage.app_state !== 'undefined'){
} else {
gateway_monitoring.server.data_storage.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246),gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984),gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"gateway-monitoring-software-version","gateway-monitoring-software-version",1425194651),"v0.1.0",new cljs.core.Keyword(null,"online-since","online-since",1975063242),gateway_monitoring.server.data_storage.unknown_date_time], null));
}

//# sourceMappingURL=data_storage.js.map