// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.config');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.reader');
gateway_monitoring.server.config.child_process = cljs.nodejs.require.call(null,"child_process");
gateway_monitoring.server.config.fs = cljs.nodejs.require.call(null,"fs");
gateway_monitoring.server.config.path = cljs.nodejs.require.call(null,"path");
gateway_monitoring.server.config.moment = cljs.nodejs.require.call(null,"moment");
gateway_monitoring.server.config.config_file_name = gateway_monitoring.server.config.path.resolve(__dirname,"../../../config");
gateway_monitoring.server.config.config_file = (function gateway_monitoring$server$config$config_file(){
var file_content = gateway_monitoring.server.config.fs.readFileSync(gateway_monitoring.server.config.config_file_name,"utf8");
return cljs.reader.read_string.call(null,file_content);
});
gateway_monitoring.server.config.run_log_entry = (function gateway_monitoring$server$config$run_log_entry(configuration,simbol){
var symbol_config = simbol.call(null,configuration);
var map__10254 = symbol_config;
var map__10254__$1 = ((((!((map__10254 == null)))?((((map__10254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10254):map__10254);
var command = cljs.core.get.call(null,map__10254__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var regex = cljs.core.get.call(null,map__10254__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var command_output = gateway_monitoring.server.config.child_process.execSync(command).toString();
if(cljs.core.empty_QMARK_.call(null,command_output)){
throw (new Error([cljs.core.str("No result for command "),cljs.core.str(command)].join('')));
} else {
return cljs.core.second.call(null,cljs.core.re_find.call(null,regex,command_output.trim()));
}
});
gateway_monitoring.server.config.gateway_id = (function gateway_monitoring$server$config$gateway_id(configuration){
return gateway_monitoring.server.config.run_log_entry.call(null,configuration,new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246));
});
gateway_monitoring.server.config.packet_forwarder_version = (function gateway_monitoring$server$config$packet_forwarder_version(configuration){
var version_format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984).cljs$core$IFn$_invoke$arity$1(configuration));
return version_format.replace("%s",gateway_monitoring.server.config.run_log_entry.call(null,configuration,new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984)));
});
gateway_monitoring.server.config.hal_library_version = (function gateway_monitoring$server$config$hal_library_version(configuration){
var version_format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564).cljs$core$IFn$_invoke$arity$1(configuration));
return version_format.replace("%s",gateway_monitoring.server.config.run_log_entry.call(null,configuration,new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564)));
});
gateway_monitoring.server.config.online_since = (function gateway_monitoring$server$config$online_since(configuration){
var date_format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"online-since","online-since",1975063242).cljs$core$IFn$_invoke$arity$1(configuration));
return gateway_monitoring.server.config.moment.call(null,gateway_monitoring.server.config.run_log_entry.call(null,configuration,new cljs.core.Keyword(null,"online-since","online-since",1975063242)),date_format).toString();
});

//# sourceMappingURL=config.js.map