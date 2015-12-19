// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('gateway_monitoring.server.handlers');
goog.require('gateway_monitoring.server.logging');
goog.require('gateway_monitoring.server.mailing');
cljs.core.enable_console_print_BANG_.call(null);
gateway_monitoring.server.core.express = cljs.nodejs.require.call(null,"express");
gateway_monitoring.server.core.path = cljs.nodejs.require.call(null,"path");
cljs.nodejs.require.call(null,"source-map-support").install();
gateway_monitoring.server.core.app = gateway_monitoring.server.core.express.call(null);
gateway_monitoring.server.core.app.use((function (req,res,next_middleware){
res.header("Access-Control-Allow-Origin","*");

return next_middleware.call(null);
}));
gateway_monitoring.server.core.app.use(gateway_monitoring.server.core.express.static(gateway_monitoring.server.core.path.resolve(__dirname,"../../../../resources/public")));
gateway_monitoring.server.core._main = (function gateway_monitoring$server$core$_main(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10624 = arguments.length;
var i__5727__auto___10625 = (0);
while(true){
if((i__5727__auto___10625 < len__5726__auto___10624)){
args__5733__auto__.push((arguments[i__5727__auto___10625]));

var G__10626 = (i__5727__auto___10625 + (1));
i__5727__auto___10625 = G__10626;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return gateway_monitoring.server.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

gateway_monitoring.server.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
gateway_monitoring.server.core.app.get("/packets",gateway_monitoring.server.handlers.packet_handler);

gateway_monitoring.server.core.app.get("/header-info",gateway_monitoring.server.handlers.header_info_BANG_);

gateway_monitoring.server.core.app.get("/logs",gateway_monitoring.server.handlers.log_handler);

gateway_monitoring.server.core.app.post("/logs",gateway_monitoring.server.handlers.clear_log_handler);

gateway_monitoring.server.core.app.get("/versions/current",gateway_monitoring.server.handlers.current_versions_handler_BANG_);

gateway_monitoring.server.core.app.get("/versions/available",gateway_monitoring.server.handlers.available_versions_handler);

gateway_monitoring.server.handlers.start_packet_loop.call(null);

return cljs.core.println.call(null,[cljs.core.str("Server started on port: "),cljs.core.str(gateway_monitoring.server.core.app.listen((3000)).address().port)].join(''));
});

gateway_monitoring.server.core._main.cljs$lang$maxFixedArity = (0);

gateway_monitoring.server.core._main.cljs$lang$applyTo = (function (seq10623){
return gateway_monitoring.server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10623));
});
cljs.core._STAR_main_cli_fn_STAR_ = gateway_monitoring.server.core._main;

//# sourceMappingURL=core.js.map