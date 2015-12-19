// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.handlers');
goog.require('cljs.core');
goog.require('gateway_monitoring.server.logging');
goog.require('gateway_monitoring.server.config');
goog.require('gateway_monitoring.server.github');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('gateway_monitoring.server.data_storage');
gateway_monitoring.server.handlers.moment = cljs.nodejs.require.call(null,"moment");
gateway_monitoring.server.handlers.try_swap_BANG_ = (function gateway_monitoring$server$handlers$try_swap_BANG_(var_args){
var args10324 = [];
var len__5726__auto___10328 = arguments.length;
var i__5727__auto___10329 = (0);
while(true){
if((i__5727__auto___10329 < len__5726__auto___10328)){
args10324.push((arguments[i__5727__auto___10329]));

var G__10330 = (i__5727__auto___10329 + (1));
i__5727__auto___10329 = G__10330;
continue;
} else {
}
break;
}

var G__10326 = args10324.length;
switch (G__10326) {
case 3:
return gateway_monitoring.server.handlers.try_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gateway_monitoring.server.handlers.try_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10324.length)].join('')));

}
});

gateway_monitoring.server.handlers.try_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (configuration,simbol,config_fn){
return gateway_monitoring.server.handlers.try_swap_BANG_.call(null,configuration,simbol,config_fn,gateway_monitoring.server.data_storage.unknown);
});

gateway_monitoring.server.handlers.try_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (configuration,simbol,config_fn,default_value){
try{return cljs.core.swap_BANG_.call(null,gateway_monitoring.server.data_storage.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simbol], null),config_fn.call(null,configuration));
}catch (e10327){if((e10327 instanceof Error)){
var e = e10327;
gateway_monitoring.server.logging.error.call(null,e);

return cljs.core.swap_BANG_.call(null,gateway_monitoring.server.data_storage.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simbol], null),default_value);
} else {
throw e10327;

}
}});

gateway_monitoring.server.handlers.try_swap_BANG_.cljs$lang$maxFixedArity = 4;
gateway_monitoring.server.handlers.log_handler = (function gateway_monitoring$server$handlers$log_handler(req,res){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10391){
var state_val_10392 = (state_10391[(1)]);
if((state_val_10392 === (1))){
var state_10391__$1 = state_10391;
var statearr_10393_10404 = state_10391__$1;
(statearr_10393_10404[(2)] = null);

(statearr_10393_10404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10392 === (2))){
var inst_10389 = (state_10391[(2)]);
var state_10391__$1 = state_10391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10391__$1,inst_10389);
} else {
if((state_val_10392 === (3))){
var inst_10368 = (state_10391[(2)]);
var inst_10369 = gateway_monitoring.server.logging.error.call(null,inst_10368);
var inst_10370 = [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_10371 = [gateway_monitoring.server.data_storage.unknown,gateway_monitoring.server.data_storage.unknown];
var inst_10372 = cljs.core.PersistentHashMap.fromArrays(inst_10370,inst_10371);
var inst_10373 = cljs.core.clj__GT_js.call(null,inst_10372);
var inst_10374 = res.send(inst_10373);
var state_10391__$1 = (function (){var statearr_10394 = state_10391;
(statearr_10394[(7)] = inst_10369);

return statearr_10394;
})();
var statearr_10395_10405 = state_10391__$1;
(statearr_10395_10405[(2)] = inst_10374);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10392 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10391,(3),Error,null,(2));
var inst_10378 = gateway_monitoring.server.logging.content.call(null);
var state_10391__$1 = state_10391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10391__$1,(5),inst_10378);
} else {
if((state_val_10392 === (5))){
var inst_10380 = (state_10391[(2)]);
var inst_10381 = gateway_monitoring.server.error_handling.error_handling.throw_on_err.call(null,inst_10380);
var inst_10382 = gateway_monitoring.server.logging.full_log_file_path.call(null);
var inst_10383 = [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_10384 = [inst_10381,inst_10382];
var inst_10385 = cljs.core.PersistentHashMap.fromArrays(inst_10383,inst_10384);
var inst_10386 = cljs.core.clj__GT_js.call(null,inst_10385);
var inst_10387 = res.send(inst_10386);
var state_10391__$1 = state_10391;
var statearr_10396_10406 = state_10391__$1;
(statearr_10396_10406[(2)] = inst_10387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10391__$1);

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
var gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____0 = (function (){
var statearr_10400 = [null,null,null,null,null,null,null,null];
(statearr_10400[(0)] = gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__);

(statearr_10400[(1)] = (1));

return statearr_10400;
});
var gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____1 = (function (state_10391){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10401){if((e10401 instanceof Object)){
var ex__7086__auto__ = e10401;
var statearr_10402_10407 = state_10391;
(statearr_10402_10407[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10408 = state_10391;
state_10391 = G__10408;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__ = function(state_10391){
switch(arguments.length){
case 0:
return gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____1.call(this,state_10391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____0;
gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto____1;
return gateway_monitoring$server$handlers$log_handler_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10403 = f__7195__auto__.call(null);
(statearr_10403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
gateway_monitoring.server.handlers.clear_log_handler = (function gateway_monitoring$server$handlers$clear_log_handler(req,res){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10452){
var state_val_10453 = (state_10452[(1)]);
if((state_val_10453 === (1))){
var state_10452__$1 = state_10452;
var statearr_10454_10465 = state_10452__$1;
(statearr_10454_10465[(2)] = null);

(statearr_10454_10465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (2))){
var inst_10450 = (state_10452[(2)]);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10452__$1,inst_10450);
} else {
if((state_val_10453 === (3))){
var inst_10437 = (state_10452[(2)]);
var inst_10438 = gateway_monitoring.server.logging.error.call(null,inst_10437);
var inst_10439 = inst_10437.toString();
var inst_10440 = res.send(inst_10439);
var state_10452__$1 = (function (){var statearr_10455 = state_10452;
(statearr_10455[(7)] = inst_10438);

return statearr_10455;
})();
var statearr_10456_10466 = state_10452__$1;
(statearr_10456_10466[(2)] = inst_10440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10453 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10452,(3),Error,null,(2));
var inst_10444 = gateway_monitoring.server.logging.clear_log.call(null);
var state_10452__$1 = state_10452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10452__$1,(5),inst_10444);
} else {
if((state_val_10453 === (5))){
var inst_10446 = (state_10452[(2)]);
var inst_10447 = gateway_monitoring.server.error_handling.error_handling.throw_on_err.call(null,inst_10446);
var inst_10448 = res.send(inst_10447);
var state_10452__$1 = state_10452;
var statearr_10457_10467 = state_10452__$1;
(statearr_10457_10467[(2)] = inst_10448);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452__$1);

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
var gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____0 = (function (){
var statearr_10461 = [null,null,null,null,null,null,null,null];
(statearr_10461[(0)] = gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__);

(statearr_10461[(1)] = (1));

return statearr_10461;
});
var gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____1 = (function (state_10452){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10462){if((e10462 instanceof Object)){
var ex__7086__auto__ = e10462;
var statearr_10463_10468 = state_10452;
(statearr_10463_10468[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10469 = state_10452;
state_10452 = G__10469;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__ = function(state_10452){
switch(arguments.length){
case 0:
return gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____1.call(this,state_10452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____0;
gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto____1;
return gateway_monitoring$server$handlers$clear_log_handler_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10464 = f__7195__auto__.call(null);
(statearr_10464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
gateway_monitoring.server.handlers.available_versions_handler = (function gateway_monitoring$server$handlers$available_versions_handler(req,res){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10547){
var state_val_10548 = (state_10547[(1)]);
if((state_val_10548 === (1))){
var state_10547__$1 = state_10547;
var statearr_10549_10562 = state_10547__$1;
(statearr_10549_10562[(2)] = null);

(statearr_10549_10562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10548 === (2))){
var inst_10545 = (state_10547[(2)]);
var state_10547__$1 = state_10547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10547__$1,inst_10545);
} else {
if((state_val_10548 === (3))){
var inst_10516 = (state_10547[(2)]);
var inst_10517 = gateway_monitoring.server.logging.error.call(null,inst_10516);
var inst_10518 = [new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984)];
var inst_10519 = [gateway_monitoring.server.data_storage.unknown,gateway_monitoring.server.data_storage.unknown];
var inst_10520 = cljs.core.PersistentHashMap.fromArrays(inst_10518,inst_10519);
var inst_10521 = cljs.core.clj__GT_js.call(null,inst_10520);
var inst_10522 = res.send(inst_10521);
var state_10547__$1 = (function (){var statearr_10550 = state_10547;
(statearr_10550[(7)] = inst_10517);

return statearr_10550;
})();
var statearr_10551_10563 = state_10547__$1;
(statearr_10551_10563[(2)] = inst_10522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10547__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10548 === (4))){
var inst_10526 = (state_10547[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10547,(3),Error,null,(2));
var inst_10526__$1 = gateway_monitoring.server.config.config_file.call(null);
var inst_10527 = new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564).cljs$core$IFn$_invoke$arity$1(inst_10526__$1);
var inst_10528 = new cljs.core.Keyword(null,"release-url","release-url",-234349355).cljs$core$IFn$_invoke$arity$1(inst_10527);
var inst_10529 = gateway_monitoring.server.github.release.call(null,inst_10528);
var state_10547__$1 = (function (){var statearr_10552 = state_10547;
(statearr_10552[(8)] = inst_10526__$1);

return statearr_10552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10547__$1,(5),inst_10529);
} else {
if((state_val_10548 === (5))){
var inst_10526 = (state_10547[(8)]);
var inst_10531 = (state_10547[(2)]);
var inst_10532 = gateway_monitoring.server.error_handling.error_handling.throw_on_err.call(null,inst_10531);
var inst_10533 = new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984).cljs$core$IFn$_invoke$arity$1(inst_10526);
var inst_10534 = new cljs.core.Keyword(null,"release-url","release-url",-234349355).cljs$core$IFn$_invoke$arity$1(inst_10533);
var inst_10535 = gateway_monitoring.server.github.release.call(null,inst_10534);
var state_10547__$1 = (function (){var statearr_10553 = state_10547;
(statearr_10553[(9)] = inst_10532);

return statearr_10553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10547__$1,(6),inst_10535);
} else {
if((state_val_10548 === (6))){
var inst_10532 = (state_10547[(9)]);
var inst_10537 = (state_10547[(2)]);
var inst_10538 = gateway_monitoring.server.error_handling.error_handling.throw_on_err.call(null,inst_10537);
var inst_10539 = [new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984)];
var inst_10540 = [inst_10532,inst_10538];
var inst_10541 = cljs.core.PersistentHashMap.fromArrays(inst_10539,inst_10540);
var inst_10542 = cljs.core.clj__GT_js.call(null,inst_10541);
var inst_10543 = res.send(inst_10542);
var state_10547__$1 = state_10547;
var statearr_10554_10564 = state_10547__$1;
(statearr_10554_10564[(2)] = inst_10543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10547__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__7194__auto__))
;
return ((function (switch__7082__auto__,c__7194__auto__){
return (function() {
var gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____0 = (function (){
var statearr_10558 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10558[(0)] = gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__);

(statearr_10558[(1)] = (1));

return statearr_10558;
});
var gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____1 = (function (state_10547){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10559){if((e10559 instanceof Object)){
var ex__7086__auto__ = e10559;
var statearr_10560_10565 = state_10547;
(statearr_10560_10565[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10566 = state_10547;
state_10547 = G__10566;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__ = function(state_10547){
switch(arguments.length){
case 0:
return gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____1.call(this,state_10547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____0;
gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto____1;
return gateway_monitoring$server$handlers$available_versions_handler_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10561 = f__7195__auto__.call(null);
(statearr_10561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
gateway_monitoring.server.handlers.current_versions_handler_BANG_ = (function gateway_monitoring$server$handlers$current_versions_handler_BANG_(req,res){
try{var configuration = gateway_monitoring.server.config.config_file.call(null);
if(cljs.core._EQ_.call(null,gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)))){
gateway_monitoring.server.handlers.try_swap_BANG_.call(null,configuration,new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984),gateway_monitoring.server.config.packet_forwarder_version);
} else {
}

if(cljs.core._EQ_.call(null,gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)))){
gateway_monitoring.server.handlers.try_swap_BANG_.call(null,configuration,new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),gateway_monitoring.server.config.hal_library_version);
} else {
}

return res.send(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984),new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)),new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)),new cljs.core.Keyword(null,"gateway-monitoring-software-version","gateway-monitoring-software-version",1425194651),new cljs.core.Keyword(null,"gateway-monitoring-software-version","gateway-monitoring-software-version",1425194651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state))], null)));
}catch (e10568){if((e10568 instanceof Error)){
var e = e10568;
gateway_monitoring.server.logging.error.call(null,e);

return res.send(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"packet-forwarder-version","packet-forwarder-version",-280800984),gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"hal-library-version","hal-library-version",-520419564),gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"gateway-monitoring-software-version","gateway-monitoring-software-version",1425194651),gateway_monitoring.server.data_storage.unknown], null)));
} else {
throw e10568;

}
}});
gateway_monitoring.server.handlers.header_info_BANG_ = (function gateway_monitoring$server$handlers$header_info_BANG_(req,res){
try{var configuration = gateway_monitoring.server.config.config_file.call(null);
if(cljs.core._EQ_.call(null,gateway_monitoring.server.data_storage.unknown,new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)))){
gateway_monitoring.server.handlers.try_swap_BANG_.call(null,configuration,new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246),gateway_monitoring.server.config.gateway_id);
} else {
}

if(cljs.core._EQ_.call(null,gateway_monitoring.server.data_storage.unknown_date_time,new cljs.core.Keyword(null,"online-since","online-since",1975063242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)))){
gateway_monitoring.server.handlers.try_swap_BANG_.call(null,configuration,new cljs.core.Keyword(null,"online-since","online-since",1975063242),gateway_monitoring.server.config.online_since,gateway_monitoring.server.data_storage.unknown_date_time);
} else {
}

return res.send(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246),new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)),new cljs.core.Keyword(null,"online-since","online-since",1975063242),new cljs.core.Keyword(null,"online-since","online-since",1975063242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state))], null)));
}catch (e10570){if((e10570 instanceof Error)){
var e = e10570;
gateway_monitoring.server.logging.error.call(null,e.toString());

return res.send(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246),new cljs.core.Keyword(null,"gateway-id","gateway-id",-748934246).cljs$core$IFn$_invoke$arity$1(gateway_monitoring.server.data_storage.unknown),new cljs.core.Keyword(null,"online-since","online-since",1975063242),new cljs.core.Keyword(null,"online-since","online-since",1975063242).cljs$core$IFn$_invoke$arity$1(gateway_monitoring.server.data_storage.unknown_date_time)], null)));
} else {
throw e10570;

}
}});
gateway_monitoring.server.handlers.create_packet = (function gateway_monitoring$server$handlers$create_packet(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"datetime","datetime",494675702),gateway_monitoring.server.handlers.moment.call(null).format("DD MMM, HH:mm:ss"),new cljs.core.Keyword(null,"node-id","node-id",779482292),"fake node id",new cljs.core.Keyword(null,"application-id","application-id",859759713),"fake-application-id",new cljs.core.Keyword(null,"upstream?","upstream?",1534482703),true], null);
});
gateway_monitoring.server.handlers.add_packet = (function gateway_monitoring$server$handlers$add_packet(){
var new_packets = cljs.core.conj.call(null,new cljs.core.Keyword(null,"packets","packets",1588960285).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)),gateway_monitoring.server.handlers.create_packet.call(null));
var newest_packets = cljs.core.take.call(null,(20),new_packets);
return cljs.core.swap_BANG_.call(null,gateway_monitoring.server.data_storage.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"packets","packets",1588960285)], null),newest_packets);
});
gateway_monitoring.server.handlers.packet_handler = (function gateway_monitoring$server$handlers$packet_handler(req,res){
return res.send(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,gateway_monitoring.server.data_storage.app_state)));
});
gateway_monitoring.server.handlers.start_packet_loop = (function gateway_monitoring$server$handlers$start_packet_loop(){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10604){
var state_val_10605 = (state_10604[(1)]);
if((state_val_10605 === (1))){
var state_10604__$1 = state_10604;
var statearr_10606_10617 = state_10604__$1;
(statearr_10606_10617[(2)] = null);

(statearr_10606_10617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10605 === (2))){
var inst_10595 = cljs.core.println.call(null,"I'm up and running");
var inst_10596 = gateway_monitoring.server.handlers.add_packet.call(null);
var inst_10597 = cljs.core.async.timeout.call(null,(5000));
var state_10604__$1 = (function (){var statearr_10607 = state_10604;
(statearr_10607[(7)] = inst_10595);

(statearr_10607[(8)] = inst_10596);

return statearr_10607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10604__$1,(4),inst_10597);
} else {
if((state_val_10605 === (3))){
var inst_10602 = (state_10604[(2)]);
var state_10604__$1 = state_10604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10604__$1,inst_10602);
} else {
if((state_val_10605 === (4))){
var inst_10599 = (state_10604[(2)]);
var state_10604__$1 = (function (){var statearr_10608 = state_10604;
(statearr_10608[(9)] = inst_10599);

return statearr_10608;
})();
var statearr_10609_10618 = state_10604__$1;
(statearr_10609_10618[(2)] = null);

(statearr_10609_10618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7194__auto__))
;
return ((function (switch__7082__auto__,c__7194__auto__){
return (function() {
var gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____0 = (function (){
var statearr_10613 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10613[(0)] = gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__);

(statearr_10613[(1)] = (1));

return statearr_10613;
});
var gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____1 = (function (state_10604){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10614){if((e10614 instanceof Object)){
var ex__7086__auto__ = e10614;
var statearr_10615_10619 = state_10604;
(statearr_10615_10619[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10620 = state_10604;
state_10604 = G__10620;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__ = function(state_10604){
switch(arguments.length){
case 0:
return gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____1.call(this,state_10604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____0;
gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto____1;
return gateway_monitoring$server$handlers$start_packet_loop_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10616 = f__7195__auto__.call(null);
(statearr_10616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});

//# sourceMappingURL=handlers.js.map