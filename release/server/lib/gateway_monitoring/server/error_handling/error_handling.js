// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.error_handling.error_handling');
goog.require('cljs.core');
gateway_monitoring.server.error_handling.error_handling.error_QMARK_ = (function gateway_monitoring$server$error_handling$error_handling$error_QMARK_(e){
return (e instanceof Error);
});
gateway_monitoring.server.error_handling.error_handling.throw_on_err = (function gateway_monitoring$server$error_handling$error_handling$throw_on_err(data){
if(cljs.core.truth_(gateway_monitoring.server.error_handling.error_handling.error_QMARK_.call(null,data))){
throw data;
} else {
}

return data;
});

//# sourceMappingURL=error_handling.js.map