// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.logging');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cljs.core.async');
gateway_monitoring.server.logging.fs = cljs.nodejs.require.call(null,"fs");
gateway_monitoring.server.logging.path = cljs.nodejs.require.call(null,"path");
gateway_monitoring.server.logging.log_file_name = gateway_monitoring.server.logging.path.resolve(__dirname,"../../../gateway_monitoring.log");
gateway_monitoring.server.logging.log = (function gateway_monitoring$server$logging$log(text){
return gateway_monitoring.server.logging.fs.appendFile(gateway_monitoring.server.logging.log_file_name,text,(function (err){
if(cljs.core.empty_QMARK_.call(null,err)){
return cljs.core.println.call(null,text);
} else {
throw Error;
}
}));
});
gateway_monitoring.server.logging.parse_content = (function gateway_monitoring$server$logging$parse_content(c,err,res){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10048){
var state_val_10049 = (state_10048[(1)]);
if((state_val_10049 === (1))){
var inst_10039 = (err == null);
var state_10048__$1 = state_10048;
if(cljs.core.truth_(inst_10039)){
var statearr_10050_10061 = state_10048__$1;
(statearr_10050_10061[(1)] = (2));

} else {
var statearr_10051_10062 = state_10048__$1;
(statearr_10051_10062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10049 === (2))){
var inst_10041 = clojure.string.replace.call(null,res,"\n","<br/>");
var inst_10042 = cljs.core.async.put_BANG_.call(null,c,inst_10041);
var state_10048__$1 = state_10048;
var statearr_10052_10063 = state_10048__$1;
(statearr_10052_10063[(2)] = inst_10042);

(statearr_10052_10063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10049 === (3))){
var inst_10044 = cljs.core.async.put_BANG_.call(null,c,err);
var state_10048__$1 = state_10048;
var statearr_10053_10064 = state_10048__$1;
(statearr_10053_10064[(2)] = inst_10044);

(statearr_10053_10064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10049 === (4))){
var inst_10046 = (state_10048[(2)]);
var state_10048__$1 = state_10048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10048__$1,inst_10046);
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
var gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____0 = (function (){
var statearr_10057 = [null,null,null,null,null,null,null];
(statearr_10057[(0)] = gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__);

(statearr_10057[(1)] = (1));

return statearr_10057;
});
var gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____1 = (function (state_10048){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10058){if((e10058 instanceof Object)){
var ex__7086__auto__ = e10058;
var statearr_10059_10065 = state_10048;
(statearr_10059_10065[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10066 = state_10048;
state_10048 = G__10066;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__ = function(state_10048){
switch(arguments.length){
case 0:
return gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____1.call(this,state_10048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____0;
gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto____1;
return gateway_monitoring$server$logging$parse_content_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10060 = f__7195__auto__.call(null);
(statearr_10060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
gateway_monitoring.server.logging.content = (function gateway_monitoring$server$logging$content(){
var c = cljs.core.async.chan.call(null);
gateway_monitoring.server.logging.fs.readFile(gateway_monitoring.server.logging.log_file_name,"utf8",((function (c){
return (function (p1__10067_SHARP_,p2__10068_SHARP_){
return gateway_monitoring.server.logging.parse_content.call(null,c,p1__10067_SHARP_,p2__10068_SHARP_);
});})(c))
);

return c;
});
gateway_monitoring.server.logging.full_log_file_path = (function gateway_monitoring$server$logging$full_log_file_path(){
return gateway_monitoring.server.logging.path.resolve(gateway_monitoring.server.logging.log_file_name);
});
gateway_monitoring.server.logging.warn = (function gateway_monitoring$server$logging$warn(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10070 = arguments.length;
var i__5727__auto___10071 = (0);
while(true){
if((i__5727__auto___10071 < len__5726__auto___10070)){
args__5733__auto__.push((arguments[i__5727__auto___10071]));

var G__10072 = (i__5727__auto___10071 + (1));
i__5727__auto___10071 = G__10072;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return gateway_monitoring.server.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

gateway_monitoring.server.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return gateway_monitoring.server.logging.log.call(null,[cljs.core.str((new Date())),cljs.core.str(" WARN: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,text)),cljs.core.str("\n")].join(''));
});

gateway_monitoring.server.logging.warn.cljs$lang$maxFixedArity = (0);

gateway_monitoring.server.logging.warn.cljs$lang$applyTo = (function (seq10069){
return gateway_monitoring.server.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10069));
});
gateway_monitoring.server.logging.info = (function gateway_monitoring$server$logging$info(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10074 = arguments.length;
var i__5727__auto___10075 = (0);
while(true){
if((i__5727__auto___10075 < len__5726__auto___10074)){
args__5733__auto__.push((arguments[i__5727__auto___10075]));

var G__10076 = (i__5727__auto___10075 + (1));
i__5727__auto___10075 = G__10076;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return gateway_monitoring.server.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

gateway_monitoring.server.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (text){
return gateway_monitoring.server.logging.log.call(null,[cljs.core.str((new Date())),cljs.core.str(" INFO: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,text)),cljs.core.str("\n")].join(''));
});

gateway_monitoring.server.logging.info.cljs$lang$maxFixedArity = (0);

gateway_monitoring.server.logging.info.cljs$lang$applyTo = (function (seq10073){
return gateway_monitoring.server.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10073));
});
if(typeof gateway_monitoring.server.logging.error !== 'undefined'){
} else {
gateway_monitoring.server.logging.error = (function (){var method_table__5581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gateway_monitoring.server.logging","error"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function() { 
var G__10077__delegate = function (text){
return (cljs.core.first.call(null,text) instanceof Error);
};
var G__10077 = function (var_args){
var text = null;
if (arguments.length > 0) {
var G__10078__i = 0, G__10078__a = new Array(arguments.length -  0);
while (G__10078__i < G__10078__a.length) {G__10078__a[G__10078__i] = arguments[G__10078__i + 0]; ++G__10078__i;}
  text = new cljs.core.IndexedSeq(G__10078__a,0);
} 
return G__10077__delegate.call(this,text);};
G__10077.cljs$lang$maxFixedArity = 0;
G__10077.cljs$lang$applyTo = (function (arglist__10079){
var text = cljs.core.seq(arglist__10079);
return G__10077__delegate(text);
});
G__10077.cljs$core$IFn$_invoke$arity$variadic = G__10077__delegate;
return G__10077;
})()
;})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.core._add_method.call(null,gateway_monitoring.server.logging.error,true,(function() { 
var G__10080__delegate = function (text){
var e = cljs.core.first.call(null,text);
var stack_trace = e.stack;
return gateway_monitoring.server.logging.log.call(null,[cljs.core.str((new Date())),cljs.core.str(" ERROR: "),cljs.core.str(e.toString()),cljs.core.str("\n"),cljs.core.str(stack_trace),cljs.core.str("\n")].join(''));
};
var G__10080 = function (var_args){
var text = null;
if (arguments.length > 0) {
var G__10081__i = 0, G__10081__a = new Array(arguments.length -  0);
while (G__10081__i < G__10081__a.length) {G__10081__a[G__10081__i] = arguments[G__10081__i + 0]; ++G__10081__i;}
  text = new cljs.core.IndexedSeq(G__10081__a,0);
} 
return G__10080__delegate.call(this,text);};
G__10080.cljs$lang$maxFixedArity = 0;
G__10080.cljs$lang$applyTo = (function (arglist__10082){
var text = cljs.core.seq(arglist__10082);
return G__10080__delegate(text);
});
G__10080.cljs$core$IFn$_invoke$arity$variadic = G__10080__delegate;
return G__10080;
})()
);
cljs.core._add_method.call(null,gateway_monitoring.server.logging.error,false,(function() { 
var G__10083__delegate = function (text){
return gateway_monitoring.server.logging.log.call(null,[cljs.core.str((new Date())),cljs.core.str(" ERROR: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,text)),cljs.core.str("\n")].join(''));
};
var G__10083 = function (var_args){
var text = null;
if (arguments.length > 0) {
var G__10084__i = 0, G__10084__a = new Array(arguments.length -  0);
while (G__10084__i < G__10084__a.length) {G__10084__a[G__10084__i] = arguments[G__10084__i + 0]; ++G__10084__i;}
  text = new cljs.core.IndexedSeq(G__10084__a,0);
} 
return G__10083__delegate.call(this,text);};
G__10083.cljs$lang$maxFixedArity = 0;
G__10083.cljs$lang$applyTo = (function (arglist__10085){
var text = cljs.core.seq(arglist__10085);
return G__10083__delegate(text);
});
G__10083.cljs$core$IFn$_invoke$arity$variadic = G__10083__delegate;
return G__10083;
})()
);
gateway_monitoring.server.logging.on_log_cleared = (function gateway_monitoring$server$logging$on_log_cleared(c,err){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_10115){
var state_val_10116 = (state_10115[(1)]);
if((state_val_10116 === (1))){
var inst_10107 = (err == null);
var state_10115__$1 = state_10115;
if(cljs.core.truth_(inst_10107)){
var statearr_10117_10128 = state_10115__$1;
(statearr_10117_10128[(1)] = (2));

} else {
var statearr_10118_10129 = state_10115__$1;
(statearr_10118_10129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10116 === (2))){
var inst_10109 = cljs.core.async.put_BANG_.call(null,c,true);
var state_10115__$1 = state_10115;
var statearr_10119_10130 = state_10115__$1;
(statearr_10119_10130[(2)] = inst_10109);

(statearr_10119_10130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10116 === (3))){
var inst_10111 = cljs.core.async.put_BANG_.call(null,c,err);
var state_10115__$1 = state_10115;
var statearr_10120_10131 = state_10115__$1;
(statearr_10120_10131[(2)] = inst_10111);

(statearr_10120_10131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10116 === (4))){
var inst_10113 = (state_10115[(2)]);
var state_10115__$1 = state_10115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10115__$1,inst_10113);
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
var gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__ = null;
var gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____0 = (function (){
var statearr_10124 = [null,null,null,null,null,null,null];
(statearr_10124[(0)] = gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__);

(statearr_10124[(1)] = (1));

return statearr_10124;
});
var gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____1 = (function (state_10115){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_10115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e10125){if((e10125 instanceof Object)){
var ex__7086__auto__ = e10125;
var statearr_10126_10132 = state_10115;
(statearr_10126_10132[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10133 = state_10115;
state_10115 = G__10133;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__ = function(state_10115){
switch(arguments.length){
case 0:
return gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____0.call(this);
case 1:
return gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____1.call(this,state_10115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____0;
gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto____1;
return gateway_monitoring$server$logging$on_log_cleared_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_10127 = f__7195__auto__.call(null);
(statearr_10127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_10127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
gateway_monitoring.server.logging.clear_log = (function gateway_monitoring$server$logging$clear_log(){
var c = cljs.core.async.chan.call(null);
gateway_monitoring.server.logging.fs.truncate(gateway_monitoring.server.logging.log_file_name,(0),((function (c){
return (function (p1__10134_SHARP_){
return gateway_monitoring.server.logging.on_log_cleared.call(null,c,p1__10134_SHARP_);
});})(c))
);

return c;
});

//# sourceMappingURL=logging.js.map