// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.github');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('gateway_monitoring.server.error_handling.error_handling');
goog.require('cljs.core.async');
gateway_monitoring.server.github.request = cljs.nodejs.require.call(null,"request");
gateway_monitoring.server.github.user_agent = "curl/7.21.4";
gateway_monitoring.server.github.process_response = (function gateway_monitoring$server$github$process_response(c,error,body){
if(cljs.core.empty_QMARK_.call(null,error)){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.js__GT_clj.call(null,JSON.parse(body),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return cljs.core.async.put_BANG_.call(null,c,(new Error(error)));
}
});
gateway_monitoring.server.github.execute_get = (function gateway_monitoring$server$github$execute_get(url){
var c = cljs.core.async.chan.call(null);
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),gateway_monitoring.server.github.user_agent], null)], null));
gateway_monitoring.server.github.request.call(null,options,((function (c,options){
return (function (p1__10264_SHARP_,p2__10266_SHARP_,p3__10265_SHARP_){
return gateway_monitoring.server.github.process_response.call(null,c,p1__10264_SHARP_,p3__10265_SHARP_);
});})(c,options))
);

return c;
});
gateway_monitoring.server.github.release = (function gateway_monitoring$server$github$release(url){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10303){
var state_val_10304 = (state_10303[(1)]);
if((state_val_10304 === (1))){
var state_10303__$1 = state_10303;
var statearr_10305_10315 = state_10303__$1;
(statearr_10305_10315[(2)] = null);

(statearr_10305_10315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10304 === (2))){
var inst_10301 = (state_10303[(2)]);
var state_10303__$1 = state_10303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10303__$1,inst_10301);
} else {
if((state_val_10304 === (3))){
var inst_10291 = (state_10303[(2)]);
var state_10303__$1 = state_10303;
var statearr_10306_10316 = state_10303__$1;
(statearr_10306_10316[(2)] = inst_10291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10304 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10303,(3),Error,null,(2));
var inst_10295 = gateway_monitoring.server.github.execute_get.call(null,url);
var state_10303__$1 = state_10303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10303__$1,(5),inst_10295);
} else {
if((state_val_10304 === (5))){
var inst_10297 = (state_10303[(2)]);
var inst_10298 = gateway_monitoring.server.error_handling.error_handling.throw_on_err.call(null,inst_10297);
var inst_10299 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_10298);
var state_10303__$1 = state_10303;
var statearr_10307_10317 = state_10303__$1;
(statearr_10307_10317[(2)] = inst_10299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__7194__auto__))
;
return ((function (switch__7082__auto__,c__7194__auto__){
return (function() {
var gateway_monitoring$server$github$release_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$github$release_$_state_machine__7083__auto____0 = (function (){
var statearr_10311 = [null,null,null,null,null,null,null];
(statearr_10311[(0)] = gateway_monitoring$server$github$release_$_state_machine__7083__auto__);

(statearr_10311[(1)] = (1));

return statearr_10311;
});
var gateway_monitoring$server$github$release_$_state_machine__7083__auto____1 = (function (state_10303){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10312){if((e10312 instanceof Object)){
var ex__7086__auto__ = e10312;
var statearr_10313_10318 = state_10303;
(statearr_10313_10318[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10319 = state_10303;
state_10303 = G__10319;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$github$release_$_state_machine__7083__auto__ = function(state_10303){
switch(arguments.length){
case 0:
return gateway_monitoring$server$github$release_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$github$release_$_state_machine__7083__auto____1.call(this,state_10303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$github$release_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$github$release_$_state_machine__7083__auto____0;
gateway_monitoring$server$github$release_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$github$release_$_state_machine__7083__auto____1;
return gateway_monitoring$server$github$release_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10314 = f__7195__auto__.call(null);
(statearr_10314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});

//# sourceMappingURL=github.js.map