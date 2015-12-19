// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7239 = [];
var len__5726__auto___7245 = arguments.length;
var i__5727__auto___7246 = (0);
while(true){
if((i__5727__auto___7246 < len__5726__auto___7245)){
args7239.push((arguments[i__5727__auto___7246]));

var G__7247 = (i__5727__auto___7246 + (1));
i__5727__auto___7246 = G__7247;
continue;
} else {
}
break;
}

var G__7241 = args7239.length;
switch (G__7241) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7239.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7242 = (function (f,blockable,meta7243){
this.f = f;
this.blockable = blockable;
this.meta7243 = meta7243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7244,meta7243__$1){
var self__ = this;
var _7244__$1 = this;
return (new cljs.core.async.t_cljs$core$async7242(self__.f,self__.blockable,meta7243__$1));
});

cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7244){
var self__ = this;
var _7244__$1 = this;
return self__.meta7243;
});

cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7243","meta7243",-605500799,null)], null);
});

cljs.core.async.t_cljs$core$async7242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7242";

cljs.core.async.t_cljs$core$async7242.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7242");
});

cljs.core.async.__GT_t_cljs$core$async7242 = (function cljs$core$async$__GT_t_cljs$core$async7242(f__$1,blockable__$1,meta7243){
return (new cljs.core.async.t_cljs$core$async7242(f__$1,blockable__$1,meta7243));
});

}

return (new cljs.core.async.t_cljs$core$async7242(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7251 = [];
var len__5726__auto___7254 = arguments.length;
var i__5727__auto___7255 = (0);
while(true){
if((i__5727__auto___7255 < len__5726__auto___7254)){
args7251.push((arguments[i__5727__auto___7255]));

var G__7256 = (i__5727__auto___7255 + (1));
i__5727__auto___7255 = G__7256;
continue;
} else {
}
break;
}

var G__7253 = args7251.length;
switch (G__7253) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7251.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7258 = [];
var len__5726__auto___7261 = arguments.length;
var i__5727__auto___7262 = (0);
while(true){
if((i__5727__auto___7262 < len__5726__auto___7261)){
args7258.push((arguments[i__5727__auto___7262]));

var G__7263 = (i__5727__auto___7262 + (1));
i__5727__auto___7262 = G__7263;
continue;
} else {
}
break;
}

var G__7260 = args7258.length;
switch (G__7260) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7258.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7265 = [];
var len__5726__auto___7268 = arguments.length;
var i__5727__auto___7269 = (0);
while(true){
if((i__5727__auto___7269 < len__5726__auto___7268)){
args7265.push((arguments[i__5727__auto___7269]));

var G__7270 = (i__5727__auto___7269 + (1));
i__5727__auto___7269 = G__7270;
continue;
} else {
}
break;
}

var G__7267 = args7265.length;
switch (G__7267) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7265.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7272 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7272);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7272,ret){
return (function (){
return fn1.call(null,val_7272);
});})(val_7272,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7273 = [];
var len__5726__auto___7276 = arguments.length;
var i__5727__auto___7277 = (0);
while(true){
if((i__5727__auto___7277 < len__5726__auto___7276)){
args7273.push((arguments[i__5727__auto___7277]));

var G__7278 = (i__5727__auto___7277 + (1));
i__5727__auto___7277 = G__7278;
continue;
} else {
}
break;
}

var G__7275 = args7273.length;
switch (G__7275) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7273.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___7280 = n;
var x_7281 = (0);
while(true){
if((x_7281 < n__5571__auto___7280)){
(a[x_7281] = (0));

var G__7282 = (x_7281 + (1));
x_7281 = G__7282;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7283 = (i + (1));
i = G__7283;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7287 = (function (alt_flag,flag,meta7288){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7288 = meta7288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7289,meta7288__$1){
var self__ = this;
var _7289__$1 = this;
return (new cljs.core.async.t_cljs$core$async7287(self__.alt_flag,self__.flag,meta7288__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7289){
var self__ = this;
var _7289__$1 = this;
return self__.meta7288;
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7288","meta7288",-34963276,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7287";

cljs.core.async.t_cljs$core$async7287.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7287");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7287 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7287(alt_flag__$1,flag__$1,meta7288){
return (new cljs.core.async.t_cljs$core$async7287(alt_flag__$1,flag__$1,meta7288));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7287(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7293 = (function (alt_handler,flag,cb,meta7294){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7294 = meta7294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7295,meta7294__$1){
var self__ = this;
var _7295__$1 = this;
return (new cljs.core.async.t_cljs$core$async7293(self__.alt_handler,self__.flag,self__.cb,meta7294__$1));
});

cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7295){
var self__ = this;
var _7295__$1 = this;
return self__.meta7294;
});

cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7294","meta7294",-1749097460,null)], null);
});

cljs.core.async.t_cljs$core$async7293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7293";

cljs.core.async.t_cljs$core$async7293.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7293");
});

cljs.core.async.__GT_t_cljs$core$async7293 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7293(alt_handler__$1,flag__$1,cb__$1,meta7294){
return (new cljs.core.async.t_cljs$core$async7293(alt_handler__$1,flag__$1,cb__$1,meta7294));
});

}

return (new cljs.core.async.t_cljs$core$async7293(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7296_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7296_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7297_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7297_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7298 = (i + (1));
i = G__7298;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___7304 = arguments.length;
var i__5727__auto___7305 = (0);
while(true){
if((i__5727__auto___7305 < len__5726__auto___7304)){
args__5733__auto__.push((arguments[i__5727__auto___7305]));

var G__7306 = (i__5727__auto___7305 + (1));
i__5727__auto___7305 = G__7306;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7301){
var map__7302 = p__7301;
var map__7302__$1 = ((((!((map__7302 == null)))?((((map__7302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7302):map__7302);
var opts = map__7302__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7299){
var G__7300 = cljs.core.first.call(null,seq7299);
var seq7299__$1 = cljs.core.next.call(null,seq7299);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7300,seq7299__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7307 = [];
var len__5726__auto___7357 = arguments.length;
var i__5727__auto___7358 = (0);
while(true){
if((i__5727__auto___7358 < len__5726__auto___7357)){
args7307.push((arguments[i__5727__auto___7358]));

var G__7359 = (i__5727__auto___7358 + (1));
i__5727__auto___7358 = G__7359;
continue;
} else {
}
break;
}

var G__7309 = args7307.length;
switch (G__7309) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7307.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7194__auto___7361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___7361){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___7361){
return (function (state_7333){
var state_val_7334 = (state_7333[(1)]);
if((state_val_7334 === (7))){
var inst_7329 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7335_7362 = state_7333__$1;
(statearr_7335_7362[(2)] = inst_7329);

(statearr_7335_7362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (1))){
var state_7333__$1 = state_7333;
var statearr_7336_7363 = state_7333__$1;
(statearr_7336_7363[(2)] = null);

(statearr_7336_7363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (4))){
var inst_7312 = (state_7333[(7)]);
var inst_7312__$1 = (state_7333[(2)]);
var inst_7313 = (inst_7312__$1 == null);
var state_7333__$1 = (function (){var statearr_7337 = state_7333;
(statearr_7337[(7)] = inst_7312__$1);

return statearr_7337;
})();
if(cljs.core.truth_(inst_7313)){
var statearr_7338_7364 = state_7333__$1;
(statearr_7338_7364[(1)] = (5));

} else {
var statearr_7339_7365 = state_7333__$1;
(statearr_7339_7365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (13))){
var state_7333__$1 = state_7333;
var statearr_7340_7366 = state_7333__$1;
(statearr_7340_7366[(2)] = null);

(statearr_7340_7366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (6))){
var inst_7312 = (state_7333[(7)]);
var state_7333__$1 = state_7333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7333__$1,(11),to,inst_7312);
} else {
if((state_val_7334 === (3))){
var inst_7331 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7333__$1,inst_7331);
} else {
if((state_val_7334 === (12))){
var state_7333__$1 = state_7333;
var statearr_7341_7367 = state_7333__$1;
(statearr_7341_7367[(2)] = null);

(statearr_7341_7367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (2))){
var state_7333__$1 = state_7333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7333__$1,(4),from);
} else {
if((state_val_7334 === (11))){
var inst_7322 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7322)){
var statearr_7342_7368 = state_7333__$1;
(statearr_7342_7368[(1)] = (12));

} else {
var statearr_7343_7369 = state_7333__$1;
(statearr_7343_7369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (9))){
var state_7333__$1 = state_7333;
var statearr_7344_7370 = state_7333__$1;
(statearr_7344_7370[(2)] = null);

(statearr_7344_7370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (5))){
var state_7333__$1 = state_7333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7345_7371 = state_7333__$1;
(statearr_7345_7371[(1)] = (8));

} else {
var statearr_7346_7372 = state_7333__$1;
(statearr_7346_7372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (14))){
var inst_7327 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7347_7373 = state_7333__$1;
(statearr_7347_7373[(2)] = inst_7327);

(statearr_7347_7373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (10))){
var inst_7319 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7348_7374 = state_7333__$1;
(statearr_7348_7374[(2)] = inst_7319);

(statearr_7348_7374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (8))){
var inst_7316 = cljs.core.async.close_BANG_.call(null,to);
var state_7333__$1 = state_7333;
var statearr_7349_7375 = state_7333__$1;
(statearr_7349_7375[(2)] = inst_7316);

(statearr_7349_7375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___7361))
;
return ((function (switch__7082__auto__,c__7194__auto___7361){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_7353 = [null,null,null,null,null,null,null,null];
(statearr_7353[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_7353[(1)] = (1));

return statearr_7353;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_7333){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7354){if((e7354 instanceof Object)){
var ex__7086__auto__ = e7354;
var statearr_7355_7376 = state_7333;
(statearr_7355_7376[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7377 = state_7333;
state_7333 = G__7377;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_7333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_7333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___7361))
})();
var state__7196__auto__ = (function (){var statearr_7356 = f__7195__auto__.call(null);
(statearr_7356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7361);

return statearr_7356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___7361))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7561){
var vec__7562 = p__7561;
var v = cljs.core.nth.call(null,vec__7562,(0),null);
var p = cljs.core.nth.call(null,vec__7562,(1),null);
var job = vec__7562;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7194__auto___7744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results){
return (function (state_7567){
var state_val_7568 = (state_7567[(1)]);
if((state_val_7568 === (1))){
var state_7567__$1 = state_7567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7567__$1,(2),res,v);
} else {
if((state_val_7568 === (2))){
var inst_7564 = (state_7567[(2)]);
var inst_7565 = cljs.core.async.close_BANG_.call(null,res);
var state_7567__$1 = (function (){var statearr_7569 = state_7567;
(statearr_7569[(7)] = inst_7564);

return statearr_7569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7567__$1,inst_7565);
} else {
return null;
}
}
});})(c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results))
;
return ((function (switch__7082__auto__,c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_7573 = [null,null,null,null,null,null,null,null];
(statearr_7573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__);

(statearr_7573[(1)] = (1));

return statearr_7573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1 = (function (state_7567){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7574){if((e7574 instanceof Object)){
var ex__7086__auto__ = e7574;
var statearr_7575_7745 = state_7567;
(statearr_7575_7745[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7746 = state_7567;
state_7567 = G__7746;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = function(state_7567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1.call(this,state_7567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results))
})();
var state__7196__auto__ = (function (){var statearr_7576 = f__7195__auto__.call(null);
(statearr_7576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7744);

return statearr_7576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___7744,res,vec__7562,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7577){
var vec__7578 = p__7577;
var v = cljs.core.nth.call(null,vec__7578,(0),null);
var p = cljs.core.nth.call(null,vec__7578,(1),null);
var job = vec__7578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___7747 = n;
var __7748 = (0);
while(true){
if((__7748 < n__5571__auto___7747)){
var G__7579_7749 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7579_7749) {
case "compute":
var c__7194__auto___7751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7748,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (__7748,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function (state_7592){
var state_val_7593 = (state_7592[(1)]);
if((state_val_7593 === (1))){
var state_7592__$1 = state_7592;
var statearr_7594_7752 = state_7592__$1;
(statearr_7594_7752[(2)] = null);

(statearr_7594_7752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (2))){
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7592__$1,(4),jobs);
} else {
if((state_val_7593 === (3))){
var inst_7590 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7592__$1,inst_7590);
} else {
if((state_val_7593 === (4))){
var inst_7582 = (state_7592[(2)]);
var inst_7583 = process.call(null,inst_7582);
var state_7592__$1 = state_7592;
if(cljs.core.truth_(inst_7583)){
var statearr_7595_7753 = state_7592__$1;
(statearr_7595_7753[(1)] = (5));

} else {
var statearr_7596_7754 = state_7592__$1;
(statearr_7596_7754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (5))){
var state_7592__$1 = state_7592;
var statearr_7597_7755 = state_7592__$1;
(statearr_7597_7755[(2)] = null);

(statearr_7597_7755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (6))){
var state_7592__$1 = state_7592;
var statearr_7598_7756 = state_7592__$1;
(statearr_7598_7756[(2)] = null);

(statearr_7598_7756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (7))){
var inst_7588 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7599_7757 = state_7592__$1;
(statearr_7599_7757[(2)] = inst_7588);

(statearr_7599_7757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7748,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
;
return ((function (__7748,switch__7082__auto__,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_7603 = [null,null,null,null,null,null,null];
(statearr_7603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__);

(statearr_7603[(1)] = (1));

return statearr_7603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1 = (function (state_7592){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7604){if((e7604 instanceof Object)){
var ex__7086__auto__ = e7604;
var statearr_7605_7758 = state_7592;
(statearr_7605_7758[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7759 = state_7592;
state_7592 = G__7759;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = function(state_7592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1.call(this,state_7592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__;
})()
;})(__7748,switch__7082__auto__,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
})();
var state__7196__auto__ = (function (){var statearr_7606 = f__7195__auto__.call(null);
(statearr_7606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7751);

return statearr_7606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(__7748,c__7194__auto___7751,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
);


break;
case "async":
var c__7194__auto___7760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7748,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (__7748,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function (state_7619){
var state_val_7620 = (state_7619[(1)]);
if((state_val_7620 === (1))){
var state_7619__$1 = state_7619;
var statearr_7621_7761 = state_7619__$1;
(statearr_7621_7761[(2)] = null);

(statearr_7621_7761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7620 === (2))){
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7619__$1,(4),jobs);
} else {
if((state_val_7620 === (3))){
var inst_7617 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7619__$1,inst_7617);
} else {
if((state_val_7620 === (4))){
var inst_7609 = (state_7619[(2)]);
var inst_7610 = async.call(null,inst_7609);
var state_7619__$1 = state_7619;
if(cljs.core.truth_(inst_7610)){
var statearr_7622_7762 = state_7619__$1;
(statearr_7622_7762[(1)] = (5));

} else {
var statearr_7623_7763 = state_7619__$1;
(statearr_7623_7763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7620 === (5))){
var state_7619__$1 = state_7619;
var statearr_7624_7764 = state_7619__$1;
(statearr_7624_7764[(2)] = null);

(statearr_7624_7764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7620 === (6))){
var state_7619__$1 = state_7619;
var statearr_7625_7765 = state_7619__$1;
(statearr_7625_7765[(2)] = null);

(statearr_7625_7765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7620 === (7))){
var inst_7615 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
var statearr_7626_7766 = state_7619__$1;
(statearr_7626_7766[(2)] = inst_7615);

(statearr_7626_7766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7748,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
;
return ((function (__7748,switch__7082__auto__,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_7630 = [null,null,null,null,null,null,null];
(statearr_7630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__);

(statearr_7630[(1)] = (1));

return statearr_7630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1 = (function (state_7619){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7631){if((e7631 instanceof Object)){
var ex__7086__auto__ = e7631;
var statearr_7632_7767 = state_7619;
(statearr_7632_7767[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7768 = state_7619;
state_7619 = G__7768;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = function(state_7619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1.call(this,state_7619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__;
})()
;})(__7748,switch__7082__auto__,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
})();
var state__7196__auto__ = (function (){var statearr_7633 = f__7195__auto__.call(null);
(statearr_7633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7760);

return statearr_7633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(__7748,c__7194__auto___7760,G__7579_7749,n__5571__auto___7747,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7769 = (__7748 + (1));
__7748 = G__7769;
continue;
} else {
}
break;
}

var c__7194__auto___7770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___7770,jobs,results,process,async){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___7770,jobs,results,process,async){
return (function (state_7655){
var state_val_7656 = (state_7655[(1)]);
if((state_val_7656 === (1))){
var state_7655__$1 = state_7655;
var statearr_7657_7771 = state_7655__$1;
(statearr_7657_7771[(2)] = null);

(statearr_7657_7771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7656 === (2))){
var state_7655__$1 = state_7655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7655__$1,(4),from);
} else {
if((state_val_7656 === (3))){
var inst_7653 = (state_7655[(2)]);
var state_7655__$1 = state_7655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7655__$1,inst_7653);
} else {
if((state_val_7656 === (4))){
var inst_7636 = (state_7655[(7)]);
var inst_7636__$1 = (state_7655[(2)]);
var inst_7637 = (inst_7636__$1 == null);
var state_7655__$1 = (function (){var statearr_7658 = state_7655;
(statearr_7658[(7)] = inst_7636__$1);

return statearr_7658;
})();
if(cljs.core.truth_(inst_7637)){
var statearr_7659_7772 = state_7655__$1;
(statearr_7659_7772[(1)] = (5));

} else {
var statearr_7660_7773 = state_7655__$1;
(statearr_7660_7773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7656 === (5))){
var inst_7639 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7655__$1 = state_7655;
var statearr_7661_7774 = state_7655__$1;
(statearr_7661_7774[(2)] = inst_7639);

(statearr_7661_7774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7656 === (6))){
var inst_7636 = (state_7655[(7)]);
var inst_7641 = (state_7655[(8)]);
var inst_7641__$1 = cljs.core.async.chan.call(null,(1));
var inst_7642 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7643 = [inst_7636,inst_7641__$1];
var inst_7644 = (new cljs.core.PersistentVector(null,2,(5),inst_7642,inst_7643,null));
var state_7655__$1 = (function (){var statearr_7662 = state_7655;
(statearr_7662[(8)] = inst_7641__$1);

return statearr_7662;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7655__$1,(8),jobs,inst_7644);
} else {
if((state_val_7656 === (7))){
var inst_7651 = (state_7655[(2)]);
var state_7655__$1 = state_7655;
var statearr_7663_7775 = state_7655__$1;
(statearr_7663_7775[(2)] = inst_7651);

(statearr_7663_7775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7656 === (8))){
var inst_7641 = (state_7655[(8)]);
var inst_7646 = (state_7655[(2)]);
var state_7655__$1 = (function (){var statearr_7664 = state_7655;
(statearr_7664[(9)] = inst_7646);

return statearr_7664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7655__$1,(9),results,inst_7641);
} else {
if((state_val_7656 === (9))){
var inst_7648 = (state_7655[(2)]);
var state_7655__$1 = (function (){var statearr_7665 = state_7655;
(statearr_7665[(10)] = inst_7648);

return statearr_7665;
})();
var statearr_7666_7776 = state_7655__$1;
(statearr_7666_7776[(2)] = null);

(statearr_7666_7776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___7770,jobs,results,process,async))
;
return ((function (switch__7082__auto__,c__7194__auto___7770,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_7670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__);

(statearr_7670[(1)] = (1));

return statearr_7670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1 = (function (state_7655){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7671){if((e7671 instanceof Object)){
var ex__7086__auto__ = e7671;
var statearr_7672_7777 = state_7655;
(statearr_7672_7777[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7778 = state_7655;
state_7655 = G__7778;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = function(state_7655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1.call(this,state_7655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___7770,jobs,results,process,async))
})();
var state__7196__auto__ = (function (){var statearr_7673 = f__7195__auto__.call(null);
(statearr_7673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7770);

return statearr_7673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___7770,jobs,results,process,async))
);


var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__,jobs,results,process,async){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__,jobs,results,process,async){
return (function (state_7711){
var state_val_7712 = (state_7711[(1)]);
if((state_val_7712 === (7))){
var inst_7707 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
var statearr_7713_7779 = state_7711__$1;
(statearr_7713_7779[(2)] = inst_7707);

(statearr_7713_7779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (20))){
var state_7711__$1 = state_7711;
var statearr_7714_7780 = state_7711__$1;
(statearr_7714_7780[(2)] = null);

(statearr_7714_7780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (1))){
var state_7711__$1 = state_7711;
var statearr_7715_7781 = state_7711__$1;
(statearr_7715_7781[(2)] = null);

(statearr_7715_7781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (4))){
var inst_7676 = (state_7711[(7)]);
var inst_7676__$1 = (state_7711[(2)]);
var inst_7677 = (inst_7676__$1 == null);
var state_7711__$1 = (function (){var statearr_7716 = state_7711;
(statearr_7716[(7)] = inst_7676__$1);

return statearr_7716;
})();
if(cljs.core.truth_(inst_7677)){
var statearr_7717_7782 = state_7711__$1;
(statearr_7717_7782[(1)] = (5));

} else {
var statearr_7718_7783 = state_7711__$1;
(statearr_7718_7783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (15))){
var inst_7689 = (state_7711[(8)]);
var state_7711__$1 = state_7711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7711__$1,(18),to,inst_7689);
} else {
if((state_val_7712 === (21))){
var inst_7702 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
var statearr_7719_7784 = state_7711__$1;
(statearr_7719_7784[(2)] = inst_7702);

(statearr_7719_7784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (13))){
var inst_7704 = (state_7711[(2)]);
var state_7711__$1 = (function (){var statearr_7720 = state_7711;
(statearr_7720[(9)] = inst_7704);

return statearr_7720;
})();
var statearr_7721_7785 = state_7711__$1;
(statearr_7721_7785[(2)] = null);

(statearr_7721_7785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (6))){
var inst_7676 = (state_7711[(7)]);
var state_7711__$1 = state_7711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7711__$1,(11),inst_7676);
} else {
if((state_val_7712 === (17))){
var inst_7697 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
if(cljs.core.truth_(inst_7697)){
var statearr_7722_7786 = state_7711__$1;
(statearr_7722_7786[(1)] = (19));

} else {
var statearr_7723_7787 = state_7711__$1;
(statearr_7723_7787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (3))){
var inst_7709 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7711__$1,inst_7709);
} else {
if((state_val_7712 === (12))){
var inst_7686 = (state_7711[(10)]);
var state_7711__$1 = state_7711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7711__$1,(14),inst_7686);
} else {
if((state_val_7712 === (2))){
var state_7711__$1 = state_7711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7711__$1,(4),results);
} else {
if((state_val_7712 === (19))){
var state_7711__$1 = state_7711;
var statearr_7724_7788 = state_7711__$1;
(statearr_7724_7788[(2)] = null);

(statearr_7724_7788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (11))){
var inst_7686 = (state_7711[(2)]);
var state_7711__$1 = (function (){var statearr_7725 = state_7711;
(statearr_7725[(10)] = inst_7686);

return statearr_7725;
})();
var statearr_7726_7789 = state_7711__$1;
(statearr_7726_7789[(2)] = null);

(statearr_7726_7789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (9))){
var state_7711__$1 = state_7711;
var statearr_7727_7790 = state_7711__$1;
(statearr_7727_7790[(2)] = null);

(statearr_7727_7790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (5))){
var state_7711__$1 = state_7711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7728_7791 = state_7711__$1;
(statearr_7728_7791[(1)] = (8));

} else {
var statearr_7729_7792 = state_7711__$1;
(statearr_7729_7792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (14))){
var inst_7691 = (state_7711[(11)]);
var inst_7689 = (state_7711[(8)]);
var inst_7689__$1 = (state_7711[(2)]);
var inst_7690 = (inst_7689__$1 == null);
var inst_7691__$1 = cljs.core.not.call(null,inst_7690);
var state_7711__$1 = (function (){var statearr_7730 = state_7711;
(statearr_7730[(11)] = inst_7691__$1);

(statearr_7730[(8)] = inst_7689__$1);

return statearr_7730;
})();
if(inst_7691__$1){
var statearr_7731_7793 = state_7711__$1;
(statearr_7731_7793[(1)] = (15));

} else {
var statearr_7732_7794 = state_7711__$1;
(statearr_7732_7794[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (16))){
var inst_7691 = (state_7711[(11)]);
var state_7711__$1 = state_7711;
var statearr_7733_7795 = state_7711__$1;
(statearr_7733_7795[(2)] = inst_7691);

(statearr_7733_7795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (10))){
var inst_7683 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
var statearr_7734_7796 = state_7711__$1;
(statearr_7734_7796[(2)] = inst_7683);

(statearr_7734_7796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (18))){
var inst_7694 = (state_7711[(2)]);
var state_7711__$1 = state_7711;
var statearr_7735_7797 = state_7711__$1;
(statearr_7735_7797[(2)] = inst_7694);

(statearr_7735_7797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7712 === (8))){
var inst_7680 = cljs.core.async.close_BANG_.call(null,to);
var state_7711__$1 = state_7711;
var statearr_7736_7798 = state_7711__$1;
(statearr_7736_7798[(2)] = inst_7680);

(statearr_7736_7798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto__,jobs,results,process,async))
;
return ((function (switch__7082__auto__,c__7194__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_7740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__);

(statearr_7740[(1)] = (1));

return statearr_7740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1 = (function (state_7711){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7741){if((e7741 instanceof Object)){
var ex__7086__auto__ = e7741;
var statearr_7742_7799 = state_7711;
(statearr_7742_7799[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7800 = state_7711;
state_7711 = G__7800;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__ = function(state_7711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1.call(this,state_7711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__,jobs,results,process,async))
})();
var state__7196__auto__ = (function (){var statearr_7743 = f__7195__auto__.call(null);
(statearr_7743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_7743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__,jobs,results,process,async))
);

return c__7194__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7801 = [];
var len__5726__auto___7804 = arguments.length;
var i__5727__auto___7805 = (0);
while(true){
if((i__5727__auto___7805 < len__5726__auto___7804)){
args7801.push((arguments[i__5727__auto___7805]));

var G__7806 = (i__5727__auto___7805 + (1));
i__5727__auto___7805 = G__7806;
continue;
} else {
}
break;
}

var G__7803 = args7801.length;
switch (G__7803) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7801.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7808 = [];
var len__5726__auto___7811 = arguments.length;
var i__5727__auto___7812 = (0);
while(true){
if((i__5727__auto___7812 < len__5726__auto___7811)){
args7808.push((arguments[i__5727__auto___7812]));

var G__7813 = (i__5727__auto___7812 + (1));
i__5727__auto___7812 = G__7813;
continue;
} else {
}
break;
}

var G__7810 = args7808.length;
switch (G__7810) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7808.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args7815 = [];
var len__5726__auto___7868 = arguments.length;
var i__5727__auto___7869 = (0);
while(true){
if((i__5727__auto___7869 < len__5726__auto___7868)){
args7815.push((arguments[i__5727__auto___7869]));

var G__7870 = (i__5727__auto___7869 + (1));
i__5727__auto___7869 = G__7870;
continue;
} else {
}
break;
}

var G__7817 = args7815.length;
switch (G__7817) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7815.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7194__auto___7872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___7872,tc,fc){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___7872,tc,fc){
return (function (state_7843){
var state_val_7844 = (state_7843[(1)]);
if((state_val_7844 === (7))){
var inst_7839 = (state_7843[(2)]);
var state_7843__$1 = state_7843;
var statearr_7845_7873 = state_7843__$1;
(statearr_7845_7873[(2)] = inst_7839);

(statearr_7845_7873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (1))){
var state_7843__$1 = state_7843;
var statearr_7846_7874 = state_7843__$1;
(statearr_7846_7874[(2)] = null);

(statearr_7846_7874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (4))){
var inst_7820 = (state_7843[(7)]);
var inst_7820__$1 = (state_7843[(2)]);
var inst_7821 = (inst_7820__$1 == null);
var state_7843__$1 = (function (){var statearr_7847 = state_7843;
(statearr_7847[(7)] = inst_7820__$1);

return statearr_7847;
})();
if(cljs.core.truth_(inst_7821)){
var statearr_7848_7875 = state_7843__$1;
(statearr_7848_7875[(1)] = (5));

} else {
var statearr_7849_7876 = state_7843__$1;
(statearr_7849_7876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (13))){
var state_7843__$1 = state_7843;
var statearr_7850_7877 = state_7843__$1;
(statearr_7850_7877[(2)] = null);

(statearr_7850_7877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (6))){
var inst_7820 = (state_7843[(7)]);
var inst_7826 = p.call(null,inst_7820);
var state_7843__$1 = state_7843;
if(cljs.core.truth_(inst_7826)){
var statearr_7851_7878 = state_7843__$1;
(statearr_7851_7878[(1)] = (9));

} else {
var statearr_7852_7879 = state_7843__$1;
(statearr_7852_7879[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (3))){
var inst_7841 = (state_7843[(2)]);
var state_7843__$1 = state_7843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7843__$1,inst_7841);
} else {
if((state_val_7844 === (12))){
var state_7843__$1 = state_7843;
var statearr_7853_7880 = state_7843__$1;
(statearr_7853_7880[(2)] = null);

(statearr_7853_7880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (2))){
var state_7843__$1 = state_7843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7843__$1,(4),ch);
} else {
if((state_val_7844 === (11))){
var inst_7820 = (state_7843[(7)]);
var inst_7830 = (state_7843[(2)]);
var state_7843__$1 = state_7843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7843__$1,(8),inst_7830,inst_7820);
} else {
if((state_val_7844 === (9))){
var state_7843__$1 = state_7843;
var statearr_7854_7881 = state_7843__$1;
(statearr_7854_7881[(2)] = tc);

(statearr_7854_7881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (5))){
var inst_7823 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7824 = cljs.core.async.close_BANG_.call(null,fc);
var state_7843__$1 = (function (){var statearr_7855 = state_7843;
(statearr_7855[(8)] = inst_7823);

return statearr_7855;
})();
var statearr_7856_7882 = state_7843__$1;
(statearr_7856_7882[(2)] = inst_7824);

(statearr_7856_7882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (14))){
var inst_7837 = (state_7843[(2)]);
var state_7843__$1 = state_7843;
var statearr_7857_7883 = state_7843__$1;
(statearr_7857_7883[(2)] = inst_7837);

(statearr_7857_7883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (10))){
var state_7843__$1 = state_7843;
var statearr_7858_7884 = state_7843__$1;
(statearr_7858_7884[(2)] = fc);

(statearr_7858_7884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7844 === (8))){
var inst_7832 = (state_7843[(2)]);
var state_7843__$1 = state_7843;
if(cljs.core.truth_(inst_7832)){
var statearr_7859_7885 = state_7843__$1;
(statearr_7859_7885[(1)] = (12));

} else {
var statearr_7860_7886 = state_7843__$1;
(statearr_7860_7886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___7872,tc,fc))
;
return ((function (switch__7082__auto__,c__7194__auto___7872,tc,fc){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_7864 = [null,null,null,null,null,null,null,null,null];
(statearr_7864[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_7864[(1)] = (1));

return statearr_7864;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_7843){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7865){if((e7865 instanceof Object)){
var ex__7086__auto__ = e7865;
var statearr_7866_7887 = state_7843;
(statearr_7866_7887[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7888 = state_7843;
state_7843 = G__7888;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_7843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_7843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___7872,tc,fc))
})();
var state__7196__auto__ = (function (){var statearr_7867 = f__7195__auto__.call(null);
(statearr_7867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___7872);

return statearr_7867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___7872,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_7952){
var state_val_7953 = (state_7952[(1)]);
if((state_val_7953 === (7))){
var inst_7948 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
var statearr_7954_7975 = state_7952__$1;
(statearr_7954_7975[(2)] = inst_7948);

(statearr_7954_7975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (1))){
var inst_7932 = init;
var state_7952__$1 = (function (){var statearr_7955 = state_7952;
(statearr_7955[(7)] = inst_7932);

return statearr_7955;
})();
var statearr_7956_7976 = state_7952__$1;
(statearr_7956_7976[(2)] = null);

(statearr_7956_7976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (4))){
var inst_7935 = (state_7952[(8)]);
var inst_7935__$1 = (state_7952[(2)]);
var inst_7936 = (inst_7935__$1 == null);
var state_7952__$1 = (function (){var statearr_7957 = state_7952;
(statearr_7957[(8)] = inst_7935__$1);

return statearr_7957;
})();
if(cljs.core.truth_(inst_7936)){
var statearr_7958_7977 = state_7952__$1;
(statearr_7958_7977[(1)] = (5));

} else {
var statearr_7959_7978 = state_7952__$1;
(statearr_7959_7978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (6))){
var inst_7932 = (state_7952[(7)]);
var inst_7935 = (state_7952[(8)]);
var inst_7939 = (state_7952[(9)]);
var inst_7939__$1 = f.call(null,inst_7932,inst_7935);
var inst_7940 = cljs.core.reduced_QMARK_.call(null,inst_7939__$1);
var state_7952__$1 = (function (){var statearr_7960 = state_7952;
(statearr_7960[(9)] = inst_7939__$1);

return statearr_7960;
})();
if(inst_7940){
var statearr_7961_7979 = state_7952__$1;
(statearr_7961_7979[(1)] = (8));

} else {
var statearr_7962_7980 = state_7952__$1;
(statearr_7962_7980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (3))){
var inst_7950 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7952__$1,inst_7950);
} else {
if((state_val_7953 === (2))){
var state_7952__$1 = state_7952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7952__$1,(4),ch);
} else {
if((state_val_7953 === (9))){
var inst_7939 = (state_7952[(9)]);
var inst_7932 = inst_7939;
var state_7952__$1 = (function (){var statearr_7963 = state_7952;
(statearr_7963[(7)] = inst_7932);

return statearr_7963;
})();
var statearr_7964_7981 = state_7952__$1;
(statearr_7964_7981[(2)] = null);

(statearr_7964_7981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (5))){
var inst_7932 = (state_7952[(7)]);
var state_7952__$1 = state_7952;
var statearr_7965_7982 = state_7952__$1;
(statearr_7965_7982[(2)] = inst_7932);

(statearr_7965_7982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (10))){
var inst_7946 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
var statearr_7966_7983 = state_7952__$1;
(statearr_7966_7983[(2)] = inst_7946);

(statearr_7966_7983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (8))){
var inst_7939 = (state_7952[(9)]);
var inst_7942 = cljs.core.deref.call(null,inst_7939);
var state_7952__$1 = state_7952;
var statearr_7967_7984 = state_7952__$1;
(statearr_7967_7984[(2)] = inst_7942);

(statearr_7967_7984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
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
var cljs$core$async$reduce_$_state_machine__7083__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7083__auto____0 = (function (){
var statearr_7971 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7971[(0)] = cljs$core$async$reduce_$_state_machine__7083__auto__);

(statearr_7971[(1)] = (1));

return statearr_7971;
});
var cljs$core$async$reduce_$_state_machine__7083__auto____1 = (function (state_7952){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_7952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e7972){if((e7972 instanceof Object)){
var ex__7086__auto__ = e7972;
var statearr_7973_7985 = state_7952;
(statearr_7973_7985[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7986 = state_7952;
state_7952 = G__7986;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7083__auto__ = function(state_7952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7083__auto____1.call(this,state_7952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7083__auto____0;
cljs$core$async$reduce_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7083__auto____1;
return cljs$core$async$reduce_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_7974 = f__7195__auto__.call(null);
(statearr_7974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_7974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args7987 = [];
var len__5726__auto___8039 = arguments.length;
var i__5727__auto___8040 = (0);
while(true){
if((i__5727__auto___8040 < len__5726__auto___8039)){
args7987.push((arguments[i__5727__auto___8040]));

var G__8041 = (i__5727__auto___8040 + (1));
i__5727__auto___8040 = G__8041;
continue;
} else {
}
break;
}

var G__7989 = args7987.length;
switch (G__7989) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7987.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_8014){
var state_val_8015 = (state_8014[(1)]);
if((state_val_8015 === (7))){
var inst_7996 = (state_8014[(2)]);
var state_8014__$1 = state_8014;
var statearr_8016_8043 = state_8014__$1;
(statearr_8016_8043[(2)] = inst_7996);

(statearr_8016_8043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (1))){
var inst_7990 = cljs.core.seq.call(null,coll);
var inst_7991 = inst_7990;
var state_8014__$1 = (function (){var statearr_8017 = state_8014;
(statearr_8017[(7)] = inst_7991);

return statearr_8017;
})();
var statearr_8018_8044 = state_8014__$1;
(statearr_8018_8044[(2)] = null);

(statearr_8018_8044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (4))){
var inst_7991 = (state_8014[(7)]);
var inst_7994 = cljs.core.first.call(null,inst_7991);
var state_8014__$1 = state_8014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8014__$1,(7),ch,inst_7994);
} else {
if((state_val_8015 === (13))){
var inst_8008 = (state_8014[(2)]);
var state_8014__$1 = state_8014;
var statearr_8019_8045 = state_8014__$1;
(statearr_8019_8045[(2)] = inst_8008);

(statearr_8019_8045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (6))){
var inst_7999 = (state_8014[(2)]);
var state_8014__$1 = state_8014;
if(cljs.core.truth_(inst_7999)){
var statearr_8020_8046 = state_8014__$1;
(statearr_8020_8046[(1)] = (8));

} else {
var statearr_8021_8047 = state_8014__$1;
(statearr_8021_8047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (3))){
var inst_8012 = (state_8014[(2)]);
var state_8014__$1 = state_8014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8014__$1,inst_8012);
} else {
if((state_val_8015 === (12))){
var state_8014__$1 = state_8014;
var statearr_8022_8048 = state_8014__$1;
(statearr_8022_8048[(2)] = null);

(statearr_8022_8048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (2))){
var inst_7991 = (state_8014[(7)]);
var state_8014__$1 = state_8014;
if(cljs.core.truth_(inst_7991)){
var statearr_8023_8049 = state_8014__$1;
(statearr_8023_8049[(1)] = (4));

} else {
var statearr_8024_8050 = state_8014__$1;
(statearr_8024_8050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (11))){
var inst_8005 = cljs.core.async.close_BANG_.call(null,ch);
var state_8014__$1 = state_8014;
var statearr_8025_8051 = state_8014__$1;
(statearr_8025_8051[(2)] = inst_8005);

(statearr_8025_8051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (9))){
var state_8014__$1 = state_8014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8026_8052 = state_8014__$1;
(statearr_8026_8052[(1)] = (11));

} else {
var statearr_8027_8053 = state_8014__$1;
(statearr_8027_8053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (5))){
var inst_7991 = (state_8014[(7)]);
var state_8014__$1 = state_8014;
var statearr_8028_8054 = state_8014__$1;
(statearr_8028_8054[(2)] = inst_7991);

(statearr_8028_8054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (10))){
var inst_8010 = (state_8014[(2)]);
var state_8014__$1 = state_8014;
var statearr_8029_8055 = state_8014__$1;
(statearr_8029_8055[(2)] = inst_8010);

(statearr_8029_8055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8015 === (8))){
var inst_7991 = (state_8014[(7)]);
var inst_8001 = cljs.core.next.call(null,inst_7991);
var inst_7991__$1 = inst_8001;
var state_8014__$1 = (function (){var statearr_8030 = state_8014;
(statearr_8030[(7)] = inst_7991__$1);

return statearr_8030;
})();
var statearr_8031_8056 = state_8014__$1;
(statearr_8031_8056[(2)] = null);

(statearr_8031_8056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
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
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_8035 = [null,null,null,null,null,null,null,null];
(statearr_8035[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_8035[(1)] = (1));

return statearr_8035;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_8014){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_8014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e8036){if((e8036 instanceof Object)){
var ex__7086__auto__ = e8036;
var statearr_8037_8057 = state_8014;
(statearr_8037_8057[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8058 = state_8014;
state_8014 = G__8058;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_8014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_8014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_8038 = f__7195__auto__.call(null);
(statearr_8038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_8038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8280 = (function (mult,ch,cs,meta8281){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8281 = meta8281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8282,meta8281__$1){
var self__ = this;
var _8282__$1 = this;
return (new cljs.core.async.t_cljs$core$async8280(self__.mult,self__.ch,self__.cs,meta8281__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8282){
var self__ = this;
var _8282__$1 = this;
return self__.meta8281;
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8281","meta8281",-106874758,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8280";

cljs.core.async.t_cljs$core$async8280.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8280");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8280 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8280(mult__$1,ch__$1,cs__$1,meta8281){
return (new cljs.core.async.t_cljs$core$async8280(mult__$1,ch__$1,cs__$1,meta8281));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8280(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7194__auto___8501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___8501,cs,m,dchan,dctr,done){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___8501,cs,m,dchan,dctr,done){
return (function (state_8413){
var state_val_8414 = (state_8413[(1)]);
if((state_val_8414 === (7))){
var inst_8409 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8415_8502 = state_8413__$1;
(statearr_8415_8502[(2)] = inst_8409);

(statearr_8415_8502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (20))){
var inst_8314 = (state_8413[(7)]);
var inst_8324 = cljs.core.first.call(null,inst_8314);
var inst_8325 = cljs.core.nth.call(null,inst_8324,(0),null);
var inst_8326 = cljs.core.nth.call(null,inst_8324,(1),null);
var state_8413__$1 = (function (){var statearr_8416 = state_8413;
(statearr_8416[(8)] = inst_8325);

return statearr_8416;
})();
if(cljs.core.truth_(inst_8326)){
var statearr_8417_8503 = state_8413__$1;
(statearr_8417_8503[(1)] = (22));

} else {
var statearr_8418_8504 = state_8413__$1;
(statearr_8418_8504[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (27))){
var inst_8285 = (state_8413[(9)]);
var inst_8356 = (state_8413[(10)]);
var inst_8361 = (state_8413[(11)]);
var inst_8354 = (state_8413[(12)]);
var inst_8361__$1 = cljs.core._nth.call(null,inst_8354,inst_8356);
var inst_8362 = cljs.core.async.put_BANG_.call(null,inst_8361__$1,inst_8285,done);
var state_8413__$1 = (function (){var statearr_8419 = state_8413;
(statearr_8419[(11)] = inst_8361__$1);

return statearr_8419;
})();
if(cljs.core.truth_(inst_8362)){
var statearr_8420_8505 = state_8413__$1;
(statearr_8420_8505[(1)] = (30));

} else {
var statearr_8421_8506 = state_8413__$1;
(statearr_8421_8506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (1))){
var state_8413__$1 = state_8413;
var statearr_8422_8507 = state_8413__$1;
(statearr_8422_8507[(2)] = null);

(statearr_8422_8507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (24))){
var inst_8314 = (state_8413[(7)]);
var inst_8331 = (state_8413[(2)]);
var inst_8332 = cljs.core.next.call(null,inst_8314);
var inst_8294 = inst_8332;
var inst_8295 = null;
var inst_8296 = (0);
var inst_8297 = (0);
var state_8413__$1 = (function (){var statearr_8423 = state_8413;
(statearr_8423[(13)] = inst_8331);

(statearr_8423[(14)] = inst_8296);

(statearr_8423[(15)] = inst_8295);

(statearr_8423[(16)] = inst_8294);

(statearr_8423[(17)] = inst_8297);

return statearr_8423;
})();
var statearr_8424_8508 = state_8413__$1;
(statearr_8424_8508[(2)] = null);

(statearr_8424_8508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (39))){
var state_8413__$1 = state_8413;
var statearr_8428_8509 = state_8413__$1;
(statearr_8428_8509[(2)] = null);

(statearr_8428_8509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (4))){
var inst_8285 = (state_8413[(9)]);
var inst_8285__$1 = (state_8413[(2)]);
var inst_8286 = (inst_8285__$1 == null);
var state_8413__$1 = (function (){var statearr_8429 = state_8413;
(statearr_8429[(9)] = inst_8285__$1);

return statearr_8429;
})();
if(cljs.core.truth_(inst_8286)){
var statearr_8430_8510 = state_8413__$1;
(statearr_8430_8510[(1)] = (5));

} else {
var statearr_8431_8511 = state_8413__$1;
(statearr_8431_8511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (15))){
var inst_8296 = (state_8413[(14)]);
var inst_8295 = (state_8413[(15)]);
var inst_8294 = (state_8413[(16)]);
var inst_8297 = (state_8413[(17)]);
var inst_8310 = (state_8413[(2)]);
var inst_8311 = (inst_8297 + (1));
var tmp8425 = inst_8296;
var tmp8426 = inst_8295;
var tmp8427 = inst_8294;
var inst_8294__$1 = tmp8427;
var inst_8295__$1 = tmp8426;
var inst_8296__$1 = tmp8425;
var inst_8297__$1 = inst_8311;
var state_8413__$1 = (function (){var statearr_8432 = state_8413;
(statearr_8432[(18)] = inst_8310);

(statearr_8432[(14)] = inst_8296__$1);

(statearr_8432[(15)] = inst_8295__$1);

(statearr_8432[(16)] = inst_8294__$1);

(statearr_8432[(17)] = inst_8297__$1);

return statearr_8432;
})();
var statearr_8433_8512 = state_8413__$1;
(statearr_8433_8512[(2)] = null);

(statearr_8433_8512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (21))){
var inst_8335 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8437_8513 = state_8413__$1;
(statearr_8437_8513[(2)] = inst_8335);

(statearr_8437_8513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (31))){
var inst_8361 = (state_8413[(11)]);
var inst_8365 = done.call(null,null);
var inst_8366 = cljs.core.async.untap_STAR_.call(null,m,inst_8361);
var state_8413__$1 = (function (){var statearr_8438 = state_8413;
(statearr_8438[(19)] = inst_8365);

return statearr_8438;
})();
var statearr_8439_8514 = state_8413__$1;
(statearr_8439_8514[(2)] = inst_8366);

(statearr_8439_8514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (32))){
var inst_8355 = (state_8413[(20)]);
var inst_8356 = (state_8413[(10)]);
var inst_8353 = (state_8413[(21)]);
var inst_8354 = (state_8413[(12)]);
var inst_8368 = (state_8413[(2)]);
var inst_8369 = (inst_8356 + (1));
var tmp8434 = inst_8355;
var tmp8435 = inst_8353;
var tmp8436 = inst_8354;
var inst_8353__$1 = tmp8435;
var inst_8354__$1 = tmp8436;
var inst_8355__$1 = tmp8434;
var inst_8356__$1 = inst_8369;
var state_8413__$1 = (function (){var statearr_8440 = state_8413;
(statearr_8440[(20)] = inst_8355__$1);

(statearr_8440[(22)] = inst_8368);

(statearr_8440[(10)] = inst_8356__$1);

(statearr_8440[(21)] = inst_8353__$1);

(statearr_8440[(12)] = inst_8354__$1);

return statearr_8440;
})();
var statearr_8441_8515 = state_8413__$1;
(statearr_8441_8515[(2)] = null);

(statearr_8441_8515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (40))){
var inst_8381 = (state_8413[(23)]);
var inst_8385 = done.call(null,null);
var inst_8386 = cljs.core.async.untap_STAR_.call(null,m,inst_8381);
var state_8413__$1 = (function (){var statearr_8442 = state_8413;
(statearr_8442[(24)] = inst_8385);

return statearr_8442;
})();
var statearr_8443_8516 = state_8413__$1;
(statearr_8443_8516[(2)] = inst_8386);

(statearr_8443_8516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (33))){
var inst_8372 = (state_8413[(25)]);
var inst_8374 = cljs.core.chunked_seq_QMARK_.call(null,inst_8372);
var state_8413__$1 = state_8413;
if(inst_8374){
var statearr_8444_8517 = state_8413__$1;
(statearr_8444_8517[(1)] = (36));

} else {
var statearr_8445_8518 = state_8413__$1;
(statearr_8445_8518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (13))){
var inst_8304 = (state_8413[(26)]);
var inst_8307 = cljs.core.async.close_BANG_.call(null,inst_8304);
var state_8413__$1 = state_8413;
var statearr_8446_8519 = state_8413__$1;
(statearr_8446_8519[(2)] = inst_8307);

(statearr_8446_8519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (22))){
var inst_8325 = (state_8413[(8)]);
var inst_8328 = cljs.core.async.close_BANG_.call(null,inst_8325);
var state_8413__$1 = state_8413;
var statearr_8447_8520 = state_8413__$1;
(statearr_8447_8520[(2)] = inst_8328);

(statearr_8447_8520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (36))){
var inst_8372 = (state_8413[(25)]);
var inst_8376 = cljs.core.chunk_first.call(null,inst_8372);
var inst_8377 = cljs.core.chunk_rest.call(null,inst_8372);
var inst_8378 = cljs.core.count.call(null,inst_8376);
var inst_8353 = inst_8377;
var inst_8354 = inst_8376;
var inst_8355 = inst_8378;
var inst_8356 = (0);
var state_8413__$1 = (function (){var statearr_8448 = state_8413;
(statearr_8448[(20)] = inst_8355);

(statearr_8448[(10)] = inst_8356);

(statearr_8448[(21)] = inst_8353);

(statearr_8448[(12)] = inst_8354);

return statearr_8448;
})();
var statearr_8449_8521 = state_8413__$1;
(statearr_8449_8521[(2)] = null);

(statearr_8449_8521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (41))){
var inst_8372 = (state_8413[(25)]);
var inst_8388 = (state_8413[(2)]);
var inst_8389 = cljs.core.next.call(null,inst_8372);
var inst_8353 = inst_8389;
var inst_8354 = null;
var inst_8355 = (0);
var inst_8356 = (0);
var state_8413__$1 = (function (){var statearr_8450 = state_8413;
(statearr_8450[(20)] = inst_8355);

(statearr_8450[(10)] = inst_8356);

(statearr_8450[(27)] = inst_8388);

(statearr_8450[(21)] = inst_8353);

(statearr_8450[(12)] = inst_8354);

return statearr_8450;
})();
var statearr_8451_8522 = state_8413__$1;
(statearr_8451_8522[(2)] = null);

(statearr_8451_8522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (43))){
var state_8413__$1 = state_8413;
var statearr_8452_8523 = state_8413__$1;
(statearr_8452_8523[(2)] = null);

(statearr_8452_8523[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (29))){
var inst_8397 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8453_8524 = state_8413__$1;
(statearr_8453_8524[(2)] = inst_8397);

(statearr_8453_8524[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (44))){
var inst_8406 = (state_8413[(2)]);
var state_8413__$1 = (function (){var statearr_8454 = state_8413;
(statearr_8454[(28)] = inst_8406);

return statearr_8454;
})();
var statearr_8455_8525 = state_8413__$1;
(statearr_8455_8525[(2)] = null);

(statearr_8455_8525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (6))){
var inst_8345 = (state_8413[(29)]);
var inst_8344 = cljs.core.deref.call(null,cs);
var inst_8345__$1 = cljs.core.keys.call(null,inst_8344);
var inst_8346 = cljs.core.count.call(null,inst_8345__$1);
var inst_8347 = cljs.core.reset_BANG_.call(null,dctr,inst_8346);
var inst_8352 = cljs.core.seq.call(null,inst_8345__$1);
var inst_8353 = inst_8352;
var inst_8354 = null;
var inst_8355 = (0);
var inst_8356 = (0);
var state_8413__$1 = (function (){var statearr_8456 = state_8413;
(statearr_8456[(20)] = inst_8355);

(statearr_8456[(30)] = inst_8347);

(statearr_8456[(10)] = inst_8356);

(statearr_8456[(29)] = inst_8345__$1);

(statearr_8456[(21)] = inst_8353);

(statearr_8456[(12)] = inst_8354);

return statearr_8456;
})();
var statearr_8457_8526 = state_8413__$1;
(statearr_8457_8526[(2)] = null);

(statearr_8457_8526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (28))){
var inst_8372 = (state_8413[(25)]);
var inst_8353 = (state_8413[(21)]);
var inst_8372__$1 = cljs.core.seq.call(null,inst_8353);
var state_8413__$1 = (function (){var statearr_8458 = state_8413;
(statearr_8458[(25)] = inst_8372__$1);

return statearr_8458;
})();
if(inst_8372__$1){
var statearr_8459_8527 = state_8413__$1;
(statearr_8459_8527[(1)] = (33));

} else {
var statearr_8460_8528 = state_8413__$1;
(statearr_8460_8528[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (25))){
var inst_8355 = (state_8413[(20)]);
var inst_8356 = (state_8413[(10)]);
var inst_8358 = (inst_8356 < inst_8355);
var inst_8359 = inst_8358;
var state_8413__$1 = state_8413;
if(cljs.core.truth_(inst_8359)){
var statearr_8461_8529 = state_8413__$1;
(statearr_8461_8529[(1)] = (27));

} else {
var statearr_8462_8530 = state_8413__$1;
(statearr_8462_8530[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (34))){
var state_8413__$1 = state_8413;
var statearr_8463_8531 = state_8413__$1;
(statearr_8463_8531[(2)] = null);

(statearr_8463_8531[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (17))){
var state_8413__$1 = state_8413;
var statearr_8464_8532 = state_8413__$1;
(statearr_8464_8532[(2)] = null);

(statearr_8464_8532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (3))){
var inst_8411 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8413__$1,inst_8411);
} else {
if((state_val_8414 === (12))){
var inst_8340 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8465_8533 = state_8413__$1;
(statearr_8465_8533[(2)] = inst_8340);

(statearr_8465_8533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (2))){
var state_8413__$1 = state_8413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8413__$1,(4),ch);
} else {
if((state_val_8414 === (23))){
var state_8413__$1 = state_8413;
var statearr_8466_8534 = state_8413__$1;
(statearr_8466_8534[(2)] = null);

(statearr_8466_8534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (35))){
var inst_8395 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8467_8535 = state_8413__$1;
(statearr_8467_8535[(2)] = inst_8395);

(statearr_8467_8535[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (19))){
var inst_8314 = (state_8413[(7)]);
var inst_8318 = cljs.core.chunk_first.call(null,inst_8314);
var inst_8319 = cljs.core.chunk_rest.call(null,inst_8314);
var inst_8320 = cljs.core.count.call(null,inst_8318);
var inst_8294 = inst_8319;
var inst_8295 = inst_8318;
var inst_8296 = inst_8320;
var inst_8297 = (0);
var state_8413__$1 = (function (){var statearr_8468 = state_8413;
(statearr_8468[(14)] = inst_8296);

(statearr_8468[(15)] = inst_8295);

(statearr_8468[(16)] = inst_8294);

(statearr_8468[(17)] = inst_8297);

return statearr_8468;
})();
var statearr_8469_8536 = state_8413__$1;
(statearr_8469_8536[(2)] = null);

(statearr_8469_8536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (11))){
var inst_8294 = (state_8413[(16)]);
var inst_8314 = (state_8413[(7)]);
var inst_8314__$1 = cljs.core.seq.call(null,inst_8294);
var state_8413__$1 = (function (){var statearr_8470 = state_8413;
(statearr_8470[(7)] = inst_8314__$1);

return statearr_8470;
})();
if(inst_8314__$1){
var statearr_8471_8537 = state_8413__$1;
(statearr_8471_8537[(1)] = (16));

} else {
var statearr_8472_8538 = state_8413__$1;
(statearr_8472_8538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (9))){
var inst_8342 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8473_8539 = state_8413__$1;
(statearr_8473_8539[(2)] = inst_8342);

(statearr_8473_8539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (5))){
var inst_8292 = cljs.core.deref.call(null,cs);
var inst_8293 = cljs.core.seq.call(null,inst_8292);
var inst_8294 = inst_8293;
var inst_8295 = null;
var inst_8296 = (0);
var inst_8297 = (0);
var state_8413__$1 = (function (){var statearr_8474 = state_8413;
(statearr_8474[(14)] = inst_8296);

(statearr_8474[(15)] = inst_8295);

(statearr_8474[(16)] = inst_8294);

(statearr_8474[(17)] = inst_8297);

return statearr_8474;
})();
var statearr_8475_8540 = state_8413__$1;
(statearr_8475_8540[(2)] = null);

(statearr_8475_8540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (14))){
var state_8413__$1 = state_8413;
var statearr_8476_8541 = state_8413__$1;
(statearr_8476_8541[(2)] = null);

(statearr_8476_8541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (45))){
var inst_8403 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8477_8542 = state_8413__$1;
(statearr_8477_8542[(2)] = inst_8403);

(statearr_8477_8542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (26))){
var inst_8345 = (state_8413[(29)]);
var inst_8399 = (state_8413[(2)]);
var inst_8400 = cljs.core.seq.call(null,inst_8345);
var state_8413__$1 = (function (){var statearr_8478 = state_8413;
(statearr_8478[(31)] = inst_8399);

return statearr_8478;
})();
if(inst_8400){
var statearr_8479_8543 = state_8413__$1;
(statearr_8479_8543[(1)] = (42));

} else {
var statearr_8480_8544 = state_8413__$1;
(statearr_8480_8544[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (16))){
var inst_8314 = (state_8413[(7)]);
var inst_8316 = cljs.core.chunked_seq_QMARK_.call(null,inst_8314);
var state_8413__$1 = state_8413;
if(inst_8316){
var statearr_8481_8545 = state_8413__$1;
(statearr_8481_8545[(1)] = (19));

} else {
var statearr_8482_8546 = state_8413__$1;
(statearr_8482_8546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (38))){
var inst_8392 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8483_8547 = state_8413__$1;
(statearr_8483_8547[(2)] = inst_8392);

(statearr_8483_8547[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (30))){
var state_8413__$1 = state_8413;
var statearr_8484_8548 = state_8413__$1;
(statearr_8484_8548[(2)] = null);

(statearr_8484_8548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (10))){
var inst_8295 = (state_8413[(15)]);
var inst_8297 = (state_8413[(17)]);
var inst_8303 = cljs.core._nth.call(null,inst_8295,inst_8297);
var inst_8304 = cljs.core.nth.call(null,inst_8303,(0),null);
var inst_8305 = cljs.core.nth.call(null,inst_8303,(1),null);
var state_8413__$1 = (function (){var statearr_8485 = state_8413;
(statearr_8485[(26)] = inst_8304);

return statearr_8485;
})();
if(cljs.core.truth_(inst_8305)){
var statearr_8486_8549 = state_8413__$1;
(statearr_8486_8549[(1)] = (13));

} else {
var statearr_8487_8550 = state_8413__$1;
(statearr_8487_8550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (18))){
var inst_8338 = (state_8413[(2)]);
var state_8413__$1 = state_8413;
var statearr_8488_8551 = state_8413__$1;
(statearr_8488_8551[(2)] = inst_8338);

(statearr_8488_8551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (42))){
var state_8413__$1 = state_8413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8413__$1,(45),dchan);
} else {
if((state_val_8414 === (37))){
var inst_8285 = (state_8413[(9)]);
var inst_8381 = (state_8413[(23)]);
var inst_8372 = (state_8413[(25)]);
var inst_8381__$1 = cljs.core.first.call(null,inst_8372);
var inst_8382 = cljs.core.async.put_BANG_.call(null,inst_8381__$1,inst_8285,done);
var state_8413__$1 = (function (){var statearr_8489 = state_8413;
(statearr_8489[(23)] = inst_8381__$1);

return statearr_8489;
})();
if(cljs.core.truth_(inst_8382)){
var statearr_8490_8552 = state_8413__$1;
(statearr_8490_8552[(1)] = (39));

} else {
var statearr_8491_8553 = state_8413__$1;
(statearr_8491_8553[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8414 === (8))){
var inst_8296 = (state_8413[(14)]);
var inst_8297 = (state_8413[(17)]);
var inst_8299 = (inst_8297 < inst_8296);
var inst_8300 = inst_8299;
var state_8413__$1 = state_8413;
if(cljs.core.truth_(inst_8300)){
var statearr_8492_8554 = state_8413__$1;
(statearr_8492_8554[(1)] = (10));

} else {
var statearr_8493_8555 = state_8413__$1;
(statearr_8493_8555[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___8501,cs,m,dchan,dctr,done))
;
return ((function (switch__7082__auto__,c__7194__auto___8501,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7083__auto__ = null;
var cljs$core$async$mult_$_state_machine__7083__auto____0 = (function (){
var statearr_8497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8497[(0)] = cljs$core$async$mult_$_state_machine__7083__auto__);

(statearr_8497[(1)] = (1));

return statearr_8497;
});
var cljs$core$async$mult_$_state_machine__7083__auto____1 = (function (state_8413){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_8413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e8498){if((e8498 instanceof Object)){
var ex__7086__auto__ = e8498;
var statearr_8499_8556 = state_8413;
(statearr_8499_8556[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8557 = state_8413;
state_8413 = G__8557;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7083__auto__ = function(state_8413){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7083__auto____1.call(this,state_8413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7083__auto____0;
cljs$core$async$mult_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7083__auto____1;
return cljs$core$async$mult_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___8501,cs,m,dchan,dctr,done))
})();
var state__7196__auto__ = (function (){var statearr_8500 = f__7195__auto__.call(null);
(statearr_8500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___8501);

return statearr_8500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___8501,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8558 = [];
var len__5726__auto___8561 = arguments.length;
var i__5727__auto___8562 = (0);
while(true){
if((i__5727__auto___8562 < len__5726__auto___8561)){
args8558.push((arguments[i__5727__auto___8562]));

var G__8563 = (i__5727__auto___8562 + (1));
i__5727__auto___8562 = G__8563;
continue;
} else {
}
break;
}

var G__8560 = args8558.length;
switch (G__8560) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8558.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___8575 = arguments.length;
var i__5727__auto___8576 = (0);
while(true){
if((i__5727__auto___8576 < len__5726__auto___8575)){
args__5733__auto__.push((arguments[i__5727__auto___8576]));

var G__8577 = (i__5727__auto___8576 + (1));
i__5727__auto___8576 = G__8577;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8569){
var map__8570 = p__8569;
var map__8570__$1 = ((((!((map__8570 == null)))?((((map__8570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8570):map__8570);
var opts = map__8570__$1;
var statearr_8572_8578 = state;
(statearr_8572_8578[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8570,map__8570__$1,opts){
return (function (val){
var statearr_8573_8579 = state;
(statearr_8573_8579[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8570,map__8570__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8574_8580 = state;
(statearr_8574_8580[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8565){
var G__8566 = cljs.core.first.call(null,seq8565);
var seq8565__$1 = cljs.core.next.call(null,seq8565);
var G__8567 = cljs.core.first.call(null,seq8565__$1);
var seq8565__$2 = cljs.core.next.call(null,seq8565__$1);
var G__8568 = cljs.core.first.call(null,seq8565__$2);
var seq8565__$3 = cljs.core.next.call(null,seq8565__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8566,G__8567,G__8568,seq8565__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8744 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8745){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8745 = meta8745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8746,meta8745__$1){
var self__ = this;
var _8746__$1 = this;
return (new cljs.core.async.t_cljs$core$async8744(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8745__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8746){
var self__ = this;
var _8746__$1 = this;
return self__.meta8745;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8745","meta8745",-442306615,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8744";

cljs.core.async.t_cljs$core$async8744.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8744");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8744 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8745){
return (new cljs.core.async.t_cljs$core$async8744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8745));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8744(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7194__auto___8907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8844){
var state_val_8845 = (state_8844[(1)]);
if((state_val_8845 === (7))){
var inst_8762 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8846_8908 = state_8844__$1;
(statearr_8846_8908[(2)] = inst_8762);

(statearr_8846_8908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (20))){
var inst_8774 = (state_8844[(7)]);
var state_8844__$1 = state_8844;
var statearr_8847_8909 = state_8844__$1;
(statearr_8847_8909[(2)] = inst_8774);

(statearr_8847_8909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (27))){
var state_8844__$1 = state_8844;
var statearr_8848_8910 = state_8844__$1;
(statearr_8848_8910[(2)] = null);

(statearr_8848_8910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (1))){
var inst_8750 = (state_8844[(8)]);
var inst_8750__$1 = calc_state.call(null);
var inst_8752 = (inst_8750__$1 == null);
var inst_8753 = cljs.core.not.call(null,inst_8752);
var state_8844__$1 = (function (){var statearr_8849 = state_8844;
(statearr_8849[(8)] = inst_8750__$1);

return statearr_8849;
})();
if(inst_8753){
var statearr_8850_8911 = state_8844__$1;
(statearr_8850_8911[(1)] = (2));

} else {
var statearr_8851_8912 = state_8844__$1;
(statearr_8851_8912[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (24))){
var inst_8818 = (state_8844[(9)]);
var inst_8804 = (state_8844[(10)]);
var inst_8797 = (state_8844[(11)]);
var inst_8818__$1 = inst_8797.call(null,inst_8804);
var state_8844__$1 = (function (){var statearr_8852 = state_8844;
(statearr_8852[(9)] = inst_8818__$1);

return statearr_8852;
})();
if(cljs.core.truth_(inst_8818__$1)){
var statearr_8853_8913 = state_8844__$1;
(statearr_8853_8913[(1)] = (29));

} else {
var statearr_8854_8914 = state_8844__$1;
(statearr_8854_8914[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (4))){
var inst_8765 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8765)){
var statearr_8855_8915 = state_8844__$1;
(statearr_8855_8915[(1)] = (8));

} else {
var statearr_8856_8916 = state_8844__$1;
(statearr_8856_8916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (15))){
var inst_8791 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8791)){
var statearr_8857_8917 = state_8844__$1;
(statearr_8857_8917[(1)] = (19));

} else {
var statearr_8858_8918 = state_8844__$1;
(statearr_8858_8918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (21))){
var inst_8796 = (state_8844[(12)]);
var inst_8796__$1 = (state_8844[(2)]);
var inst_8797 = cljs.core.get.call(null,inst_8796__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8798 = cljs.core.get.call(null,inst_8796__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8799 = cljs.core.get.call(null,inst_8796__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8844__$1 = (function (){var statearr_8859 = state_8844;
(statearr_8859[(12)] = inst_8796__$1);

(statearr_8859[(13)] = inst_8798);

(statearr_8859[(11)] = inst_8797);

return statearr_8859;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8844__$1,(22),inst_8799);
} else {
if((state_val_8845 === (31))){
var inst_8826 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8826)){
var statearr_8860_8919 = state_8844__$1;
(statearr_8860_8919[(1)] = (32));

} else {
var statearr_8861_8920 = state_8844__$1;
(statearr_8861_8920[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (32))){
var inst_8803 = (state_8844[(14)]);
var state_8844__$1 = state_8844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8844__$1,(35),out,inst_8803);
} else {
if((state_val_8845 === (33))){
var inst_8796 = (state_8844[(12)]);
var inst_8774 = inst_8796;
var state_8844__$1 = (function (){var statearr_8862 = state_8844;
(statearr_8862[(7)] = inst_8774);

return statearr_8862;
})();
var statearr_8863_8921 = state_8844__$1;
(statearr_8863_8921[(2)] = null);

(statearr_8863_8921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (13))){
var inst_8774 = (state_8844[(7)]);
var inst_8781 = inst_8774.cljs$lang$protocol_mask$partition0$;
var inst_8782 = (inst_8781 & (64));
var inst_8783 = inst_8774.cljs$core$ISeq$;
var inst_8784 = (inst_8782) || (inst_8783);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8784)){
var statearr_8864_8922 = state_8844__$1;
(statearr_8864_8922[(1)] = (16));

} else {
var statearr_8865_8923 = state_8844__$1;
(statearr_8865_8923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (22))){
var inst_8803 = (state_8844[(14)]);
var inst_8804 = (state_8844[(10)]);
var inst_8802 = (state_8844[(2)]);
var inst_8803__$1 = cljs.core.nth.call(null,inst_8802,(0),null);
var inst_8804__$1 = cljs.core.nth.call(null,inst_8802,(1),null);
var inst_8805 = (inst_8803__$1 == null);
var inst_8806 = cljs.core._EQ_.call(null,inst_8804__$1,change);
var inst_8807 = (inst_8805) || (inst_8806);
var state_8844__$1 = (function (){var statearr_8866 = state_8844;
(statearr_8866[(14)] = inst_8803__$1);

(statearr_8866[(10)] = inst_8804__$1);

return statearr_8866;
})();
if(cljs.core.truth_(inst_8807)){
var statearr_8867_8924 = state_8844__$1;
(statearr_8867_8924[(1)] = (23));

} else {
var statearr_8868_8925 = state_8844__$1;
(statearr_8868_8925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (36))){
var inst_8796 = (state_8844[(12)]);
var inst_8774 = inst_8796;
var state_8844__$1 = (function (){var statearr_8869 = state_8844;
(statearr_8869[(7)] = inst_8774);

return statearr_8869;
})();
var statearr_8870_8926 = state_8844__$1;
(statearr_8870_8926[(2)] = null);

(statearr_8870_8926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (29))){
var inst_8818 = (state_8844[(9)]);
var state_8844__$1 = state_8844;
var statearr_8871_8927 = state_8844__$1;
(statearr_8871_8927[(2)] = inst_8818);

(statearr_8871_8927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (6))){
var state_8844__$1 = state_8844;
var statearr_8872_8928 = state_8844__$1;
(statearr_8872_8928[(2)] = false);

(statearr_8872_8928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (28))){
var inst_8814 = (state_8844[(2)]);
var inst_8815 = calc_state.call(null);
var inst_8774 = inst_8815;
var state_8844__$1 = (function (){var statearr_8873 = state_8844;
(statearr_8873[(7)] = inst_8774);

(statearr_8873[(15)] = inst_8814);

return statearr_8873;
})();
var statearr_8874_8929 = state_8844__$1;
(statearr_8874_8929[(2)] = null);

(statearr_8874_8929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (25))){
var inst_8840 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8875_8930 = state_8844__$1;
(statearr_8875_8930[(2)] = inst_8840);

(statearr_8875_8930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (34))){
var inst_8838 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8876_8931 = state_8844__$1;
(statearr_8876_8931[(2)] = inst_8838);

(statearr_8876_8931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (17))){
var state_8844__$1 = state_8844;
var statearr_8877_8932 = state_8844__$1;
(statearr_8877_8932[(2)] = false);

(statearr_8877_8932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (3))){
var state_8844__$1 = state_8844;
var statearr_8878_8933 = state_8844__$1;
(statearr_8878_8933[(2)] = false);

(statearr_8878_8933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (12))){
var inst_8842 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8844__$1,inst_8842);
} else {
if((state_val_8845 === (2))){
var inst_8750 = (state_8844[(8)]);
var inst_8755 = inst_8750.cljs$lang$protocol_mask$partition0$;
var inst_8756 = (inst_8755 & (64));
var inst_8757 = inst_8750.cljs$core$ISeq$;
var inst_8758 = (inst_8756) || (inst_8757);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8758)){
var statearr_8879_8934 = state_8844__$1;
(statearr_8879_8934[(1)] = (5));

} else {
var statearr_8880_8935 = state_8844__$1;
(statearr_8880_8935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (23))){
var inst_8803 = (state_8844[(14)]);
var inst_8809 = (inst_8803 == null);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8809)){
var statearr_8881_8936 = state_8844__$1;
(statearr_8881_8936[(1)] = (26));

} else {
var statearr_8882_8937 = state_8844__$1;
(statearr_8882_8937[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (35))){
var inst_8829 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8829)){
var statearr_8883_8938 = state_8844__$1;
(statearr_8883_8938[(1)] = (36));

} else {
var statearr_8884_8939 = state_8844__$1;
(statearr_8884_8939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (19))){
var inst_8774 = (state_8844[(7)]);
var inst_8793 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8774);
var state_8844__$1 = state_8844;
var statearr_8885_8940 = state_8844__$1;
(statearr_8885_8940[(2)] = inst_8793);

(statearr_8885_8940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (11))){
var inst_8774 = (state_8844[(7)]);
var inst_8778 = (inst_8774 == null);
var inst_8779 = cljs.core.not.call(null,inst_8778);
var state_8844__$1 = state_8844;
if(inst_8779){
var statearr_8886_8941 = state_8844__$1;
(statearr_8886_8941[(1)] = (13));

} else {
var statearr_8887_8942 = state_8844__$1;
(statearr_8887_8942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (9))){
var inst_8750 = (state_8844[(8)]);
var state_8844__$1 = state_8844;
var statearr_8888_8943 = state_8844__$1;
(statearr_8888_8943[(2)] = inst_8750);

(statearr_8888_8943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (5))){
var state_8844__$1 = state_8844;
var statearr_8889_8944 = state_8844__$1;
(statearr_8889_8944[(2)] = true);

(statearr_8889_8944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (14))){
var state_8844__$1 = state_8844;
var statearr_8890_8945 = state_8844__$1;
(statearr_8890_8945[(2)] = false);

(statearr_8890_8945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (26))){
var inst_8804 = (state_8844[(10)]);
var inst_8811 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8804);
var state_8844__$1 = state_8844;
var statearr_8891_8946 = state_8844__$1;
(statearr_8891_8946[(2)] = inst_8811);

(statearr_8891_8946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (16))){
var state_8844__$1 = state_8844;
var statearr_8892_8947 = state_8844__$1;
(statearr_8892_8947[(2)] = true);

(statearr_8892_8947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (38))){
var inst_8834 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8893_8948 = state_8844__$1;
(statearr_8893_8948[(2)] = inst_8834);

(statearr_8893_8948[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (30))){
var inst_8798 = (state_8844[(13)]);
var inst_8804 = (state_8844[(10)]);
var inst_8797 = (state_8844[(11)]);
var inst_8821 = cljs.core.empty_QMARK_.call(null,inst_8797);
var inst_8822 = inst_8798.call(null,inst_8804);
var inst_8823 = cljs.core.not.call(null,inst_8822);
var inst_8824 = (inst_8821) && (inst_8823);
var state_8844__$1 = state_8844;
var statearr_8894_8949 = state_8844__$1;
(statearr_8894_8949[(2)] = inst_8824);

(statearr_8894_8949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (10))){
var inst_8750 = (state_8844[(8)]);
var inst_8770 = (state_8844[(2)]);
var inst_8771 = cljs.core.get.call(null,inst_8770,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8772 = cljs.core.get.call(null,inst_8770,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8773 = cljs.core.get.call(null,inst_8770,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8774 = inst_8750;
var state_8844__$1 = (function (){var statearr_8895 = state_8844;
(statearr_8895[(16)] = inst_8772);

(statearr_8895[(7)] = inst_8774);

(statearr_8895[(17)] = inst_8771);

(statearr_8895[(18)] = inst_8773);

return statearr_8895;
})();
var statearr_8896_8950 = state_8844__$1;
(statearr_8896_8950[(2)] = null);

(statearr_8896_8950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (18))){
var inst_8788 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8897_8951 = state_8844__$1;
(statearr_8897_8951[(2)] = inst_8788);

(statearr_8897_8951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (37))){
var state_8844__$1 = state_8844;
var statearr_8898_8952 = state_8844__$1;
(statearr_8898_8952[(2)] = null);

(statearr_8898_8952[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8845 === (8))){
var inst_8750 = (state_8844[(8)]);
var inst_8767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8750);
var state_8844__$1 = state_8844;
var statearr_8899_8953 = state_8844__$1;
(statearr_8899_8953[(2)] = inst_8767);

(statearr_8899_8953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7082__auto__,c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7083__auto__ = null;
var cljs$core$async$mix_$_state_machine__7083__auto____0 = (function (){
var statearr_8903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8903[(0)] = cljs$core$async$mix_$_state_machine__7083__auto__);

(statearr_8903[(1)] = (1));

return statearr_8903;
});
var cljs$core$async$mix_$_state_machine__7083__auto____1 = (function (state_8844){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_8844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e8904){if((e8904 instanceof Object)){
var ex__7086__auto__ = e8904;
var statearr_8905_8954 = state_8844;
(statearr_8905_8954[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8955 = state_8844;
state_8844 = G__8955;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7083__auto__ = function(state_8844){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7083__auto____1.call(this,state_8844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7083__auto____0;
cljs$core$async$mix_$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7083__auto____1;
return cljs$core$async$mix_$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7196__auto__ = (function (){var statearr_8906 = f__7195__auto__.call(null);
(statearr_8906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___8907);

return statearr_8906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___8907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args8956 = [];
var len__5726__auto___8959 = arguments.length;
var i__5727__auto___8960 = (0);
while(true){
if((i__5727__auto___8960 < len__5726__auto___8959)){
args8956.push((arguments[i__5727__auto___8960]));

var G__8961 = (i__5727__auto___8960 + (1));
i__5727__auto___8960 = G__8961;
continue;
} else {
}
break;
}

var G__8958 = args8956.length;
switch (G__8958) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8956.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args8964 = [];
var len__5726__auto___9089 = arguments.length;
var i__5727__auto___9090 = (0);
while(true){
if((i__5727__auto___9090 < len__5726__auto___9089)){
args8964.push((arguments[i__5727__auto___9090]));

var G__9091 = (i__5727__auto___9090 + (1));
i__5727__auto___9090 = G__9091;
continue;
} else {
}
break;
}

var G__8966 = args8964.length;
switch (G__8966) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8964.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__8963_SHARP_){
if(cljs.core.truth_(p1__8963_SHARP_.call(null,topic))){
return p1__8963_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8963_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8967 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8968){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8968 = meta8968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8969,meta8968__$1){
var self__ = this;
var _8969__$1 = this;
return (new cljs.core.async.t_cljs$core$async8967(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8968__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8969){
var self__ = this;
var _8969__$1 = this;
return self__.meta8968;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8968","meta8968",-52945915,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8967";

cljs.core.async.t_cljs$core$async8967.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8967");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8967 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8968){
return (new cljs.core.async.t_cljs$core$async8967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8968));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8967(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7194__auto___9093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9093,mults,ensure_mult,p){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9093,mults,ensure_mult,p){
return (function (state_9041){
var state_val_9042 = (state_9041[(1)]);
if((state_val_9042 === (7))){
var inst_9037 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9043_9094 = state_9041__$1;
(statearr_9043_9094[(2)] = inst_9037);

(statearr_9043_9094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (20))){
var state_9041__$1 = state_9041;
var statearr_9044_9095 = state_9041__$1;
(statearr_9044_9095[(2)] = null);

(statearr_9044_9095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (1))){
var state_9041__$1 = state_9041;
var statearr_9045_9096 = state_9041__$1;
(statearr_9045_9096[(2)] = null);

(statearr_9045_9096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (24))){
var inst_9020 = (state_9041[(7)]);
var inst_9029 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9020);
var state_9041__$1 = state_9041;
var statearr_9046_9097 = state_9041__$1;
(statearr_9046_9097[(2)] = inst_9029);

(statearr_9046_9097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (4))){
var inst_8972 = (state_9041[(8)]);
var inst_8972__$1 = (state_9041[(2)]);
var inst_8973 = (inst_8972__$1 == null);
var state_9041__$1 = (function (){var statearr_9047 = state_9041;
(statearr_9047[(8)] = inst_8972__$1);

return statearr_9047;
})();
if(cljs.core.truth_(inst_8973)){
var statearr_9048_9098 = state_9041__$1;
(statearr_9048_9098[(1)] = (5));

} else {
var statearr_9049_9099 = state_9041__$1;
(statearr_9049_9099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (15))){
var inst_9014 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9050_9100 = state_9041__$1;
(statearr_9050_9100[(2)] = inst_9014);

(statearr_9050_9100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (21))){
var inst_9034 = (state_9041[(2)]);
var state_9041__$1 = (function (){var statearr_9051 = state_9041;
(statearr_9051[(9)] = inst_9034);

return statearr_9051;
})();
var statearr_9052_9101 = state_9041__$1;
(statearr_9052_9101[(2)] = null);

(statearr_9052_9101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (13))){
var inst_8996 = (state_9041[(10)]);
var inst_8998 = cljs.core.chunked_seq_QMARK_.call(null,inst_8996);
var state_9041__$1 = state_9041;
if(inst_8998){
var statearr_9053_9102 = state_9041__$1;
(statearr_9053_9102[(1)] = (16));

} else {
var statearr_9054_9103 = state_9041__$1;
(statearr_9054_9103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (22))){
var inst_9026 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
if(cljs.core.truth_(inst_9026)){
var statearr_9055_9104 = state_9041__$1;
(statearr_9055_9104[(1)] = (23));

} else {
var statearr_9056_9105 = state_9041__$1;
(statearr_9056_9105[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (6))){
var inst_8972 = (state_9041[(8)]);
var inst_9022 = (state_9041[(11)]);
var inst_9020 = (state_9041[(7)]);
var inst_9020__$1 = topic_fn.call(null,inst_8972);
var inst_9021 = cljs.core.deref.call(null,mults);
var inst_9022__$1 = cljs.core.get.call(null,inst_9021,inst_9020__$1);
var state_9041__$1 = (function (){var statearr_9057 = state_9041;
(statearr_9057[(11)] = inst_9022__$1);

(statearr_9057[(7)] = inst_9020__$1);

return statearr_9057;
})();
if(cljs.core.truth_(inst_9022__$1)){
var statearr_9058_9106 = state_9041__$1;
(statearr_9058_9106[(1)] = (19));

} else {
var statearr_9059_9107 = state_9041__$1;
(statearr_9059_9107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (25))){
var inst_9031 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9060_9108 = state_9041__$1;
(statearr_9060_9108[(2)] = inst_9031);

(statearr_9060_9108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (17))){
var inst_8996 = (state_9041[(10)]);
var inst_9005 = cljs.core.first.call(null,inst_8996);
var inst_9006 = cljs.core.async.muxch_STAR_.call(null,inst_9005);
var inst_9007 = cljs.core.async.close_BANG_.call(null,inst_9006);
var inst_9008 = cljs.core.next.call(null,inst_8996);
var inst_8982 = inst_9008;
var inst_8983 = null;
var inst_8984 = (0);
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9061 = state_9041;
(statearr_9061[(12)] = inst_8982);

(statearr_9061[(13)] = inst_8984);

(statearr_9061[(14)] = inst_8983);

(statearr_9061[(15)] = inst_8985);

(statearr_9061[(16)] = inst_9007);

return statearr_9061;
})();
var statearr_9062_9109 = state_9041__$1;
(statearr_9062_9109[(2)] = null);

(statearr_9062_9109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (3))){
var inst_9039 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9041__$1,inst_9039);
} else {
if((state_val_9042 === (12))){
var inst_9016 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9063_9110 = state_9041__$1;
(statearr_9063_9110[(2)] = inst_9016);

(statearr_9063_9110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (2))){
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9041__$1,(4),ch);
} else {
if((state_val_9042 === (23))){
var state_9041__$1 = state_9041;
var statearr_9064_9111 = state_9041__$1;
(statearr_9064_9111[(2)] = null);

(statearr_9064_9111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (19))){
var inst_8972 = (state_9041[(8)]);
var inst_9022 = (state_9041[(11)]);
var inst_9024 = cljs.core.async.muxch_STAR_.call(null,inst_9022);
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9041__$1,(22),inst_9024,inst_8972);
} else {
if((state_val_9042 === (11))){
var inst_8982 = (state_9041[(12)]);
var inst_8996 = (state_9041[(10)]);
var inst_8996__$1 = cljs.core.seq.call(null,inst_8982);
var state_9041__$1 = (function (){var statearr_9065 = state_9041;
(statearr_9065[(10)] = inst_8996__$1);

return statearr_9065;
})();
if(inst_8996__$1){
var statearr_9066_9112 = state_9041__$1;
(statearr_9066_9112[(1)] = (13));

} else {
var statearr_9067_9113 = state_9041__$1;
(statearr_9067_9113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (9))){
var inst_9018 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9068_9114 = state_9041__$1;
(statearr_9068_9114[(2)] = inst_9018);

(statearr_9068_9114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (5))){
var inst_8979 = cljs.core.deref.call(null,mults);
var inst_8980 = cljs.core.vals.call(null,inst_8979);
var inst_8981 = cljs.core.seq.call(null,inst_8980);
var inst_8982 = inst_8981;
var inst_8983 = null;
var inst_8984 = (0);
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9069 = state_9041;
(statearr_9069[(12)] = inst_8982);

(statearr_9069[(13)] = inst_8984);

(statearr_9069[(14)] = inst_8983);

(statearr_9069[(15)] = inst_8985);

return statearr_9069;
})();
var statearr_9070_9115 = state_9041__$1;
(statearr_9070_9115[(2)] = null);

(statearr_9070_9115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (14))){
var state_9041__$1 = state_9041;
var statearr_9074_9116 = state_9041__$1;
(statearr_9074_9116[(2)] = null);

(statearr_9074_9116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (16))){
var inst_8996 = (state_9041[(10)]);
var inst_9000 = cljs.core.chunk_first.call(null,inst_8996);
var inst_9001 = cljs.core.chunk_rest.call(null,inst_8996);
var inst_9002 = cljs.core.count.call(null,inst_9000);
var inst_8982 = inst_9001;
var inst_8983 = inst_9000;
var inst_8984 = inst_9002;
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9075 = state_9041;
(statearr_9075[(12)] = inst_8982);

(statearr_9075[(13)] = inst_8984);

(statearr_9075[(14)] = inst_8983);

(statearr_9075[(15)] = inst_8985);

return statearr_9075;
})();
var statearr_9076_9117 = state_9041__$1;
(statearr_9076_9117[(2)] = null);

(statearr_9076_9117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (10))){
var inst_8982 = (state_9041[(12)]);
var inst_8984 = (state_9041[(13)]);
var inst_8983 = (state_9041[(14)]);
var inst_8985 = (state_9041[(15)]);
var inst_8990 = cljs.core._nth.call(null,inst_8983,inst_8985);
var inst_8991 = cljs.core.async.muxch_STAR_.call(null,inst_8990);
var inst_8992 = cljs.core.async.close_BANG_.call(null,inst_8991);
var inst_8993 = (inst_8985 + (1));
var tmp9071 = inst_8982;
var tmp9072 = inst_8984;
var tmp9073 = inst_8983;
var inst_8982__$1 = tmp9071;
var inst_8983__$1 = tmp9073;
var inst_8984__$1 = tmp9072;
var inst_8985__$1 = inst_8993;
var state_9041__$1 = (function (){var statearr_9077 = state_9041;
(statearr_9077[(12)] = inst_8982__$1);

(statearr_9077[(13)] = inst_8984__$1);

(statearr_9077[(14)] = inst_8983__$1);

(statearr_9077[(15)] = inst_8985__$1);

(statearr_9077[(17)] = inst_8992);

return statearr_9077;
})();
var statearr_9078_9118 = state_9041__$1;
(statearr_9078_9118[(2)] = null);

(statearr_9078_9118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (18))){
var inst_9011 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9079_9119 = state_9041__$1;
(statearr_9079_9119[(2)] = inst_9011);

(statearr_9079_9119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9042 === (8))){
var inst_8984 = (state_9041[(13)]);
var inst_8985 = (state_9041[(15)]);
var inst_8987 = (inst_8985 < inst_8984);
var inst_8988 = inst_8987;
var state_9041__$1 = state_9041;
if(cljs.core.truth_(inst_8988)){
var statearr_9080_9120 = state_9041__$1;
(statearr_9080_9120[(1)] = (10));

} else {
var statearr_9081_9121 = state_9041__$1;
(statearr_9081_9121[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9093,mults,ensure_mult,p))
;
return ((function (switch__7082__auto__,c__7194__auto___9093,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9085[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9085[(1)] = (1));

return statearr_9085;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9041){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9086){if((e9086 instanceof Object)){
var ex__7086__auto__ = e9086;
var statearr_9087_9122 = state_9041;
(statearr_9087_9122[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9123 = state_9041;
state_9041 = G__9123;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9093,mults,ensure_mult,p))
})();
var state__7196__auto__ = (function (){var statearr_9088 = f__7195__auto__.call(null);
(statearr_9088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9093);

return statearr_9088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9093,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9124 = [];
var len__5726__auto___9127 = arguments.length;
var i__5727__auto___9128 = (0);
while(true){
if((i__5727__auto___9128 < len__5726__auto___9127)){
args9124.push((arguments[i__5727__auto___9128]));

var G__9129 = (i__5727__auto___9128 + (1));
i__5727__auto___9128 = G__9129;
continue;
} else {
}
break;
}

var G__9126 = args9124.length;
switch (G__9126) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9124.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9131 = [];
var len__5726__auto___9134 = arguments.length;
var i__5727__auto___9135 = (0);
while(true){
if((i__5727__auto___9135 < len__5726__auto___9134)){
args9131.push((arguments[i__5727__auto___9135]));

var G__9136 = (i__5727__auto___9135 + (1));
i__5727__auto___9135 = G__9136;
continue;
} else {
}
break;
}

var G__9133 = args9131.length;
switch (G__9133) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9131.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9138 = [];
var len__5726__auto___9209 = arguments.length;
var i__5727__auto___9210 = (0);
while(true){
if((i__5727__auto___9210 < len__5726__auto___9209)){
args9138.push((arguments[i__5727__auto___9210]));

var G__9211 = (i__5727__auto___9210 + (1));
i__5727__auto___9210 = G__9211;
continue;
} else {
}
break;
}

var G__9140 = args9138.length;
switch (G__9140) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9138.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7194__auto___9213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9179){
var state_val_9180 = (state_9179[(1)]);
if((state_val_9180 === (7))){
var state_9179__$1 = state_9179;
var statearr_9181_9214 = state_9179__$1;
(statearr_9181_9214[(2)] = null);

(statearr_9181_9214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (1))){
var state_9179__$1 = state_9179;
var statearr_9182_9215 = state_9179__$1;
(statearr_9182_9215[(2)] = null);

(statearr_9182_9215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (4))){
var inst_9143 = (state_9179[(7)]);
var inst_9145 = (inst_9143 < cnt);
var state_9179__$1 = state_9179;
if(cljs.core.truth_(inst_9145)){
var statearr_9183_9216 = state_9179__$1;
(statearr_9183_9216[(1)] = (6));

} else {
var statearr_9184_9217 = state_9179__$1;
(statearr_9184_9217[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (15))){
var inst_9175 = (state_9179[(2)]);
var state_9179__$1 = state_9179;
var statearr_9185_9218 = state_9179__$1;
(statearr_9185_9218[(2)] = inst_9175);

(statearr_9185_9218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (13))){
var inst_9168 = cljs.core.async.close_BANG_.call(null,out);
var state_9179__$1 = state_9179;
var statearr_9186_9219 = state_9179__$1;
(statearr_9186_9219[(2)] = inst_9168);

(statearr_9186_9219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (6))){
var state_9179__$1 = state_9179;
var statearr_9187_9220 = state_9179__$1;
(statearr_9187_9220[(2)] = null);

(statearr_9187_9220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (3))){
var inst_9177 = (state_9179[(2)]);
var state_9179__$1 = state_9179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9179__$1,inst_9177);
} else {
if((state_val_9180 === (12))){
var inst_9165 = (state_9179[(8)]);
var inst_9165__$1 = (state_9179[(2)]);
var inst_9166 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9165__$1);
var state_9179__$1 = (function (){var statearr_9188 = state_9179;
(statearr_9188[(8)] = inst_9165__$1);

return statearr_9188;
})();
if(cljs.core.truth_(inst_9166)){
var statearr_9189_9221 = state_9179__$1;
(statearr_9189_9221[(1)] = (13));

} else {
var statearr_9190_9222 = state_9179__$1;
(statearr_9190_9222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (2))){
var inst_9142 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9143 = (0);
var state_9179__$1 = (function (){var statearr_9191 = state_9179;
(statearr_9191[(7)] = inst_9143);

(statearr_9191[(9)] = inst_9142);

return statearr_9191;
})();
var statearr_9192_9223 = state_9179__$1;
(statearr_9192_9223[(2)] = null);

(statearr_9192_9223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (11))){
var inst_9143 = (state_9179[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9179,(10),Object,null,(9));
var inst_9152 = chs__$1.call(null,inst_9143);
var inst_9153 = done.call(null,inst_9143);
var inst_9154 = cljs.core.async.take_BANG_.call(null,inst_9152,inst_9153);
var state_9179__$1 = state_9179;
var statearr_9193_9224 = state_9179__$1;
(statearr_9193_9224[(2)] = inst_9154);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (9))){
var inst_9143 = (state_9179[(7)]);
var inst_9156 = (state_9179[(2)]);
var inst_9157 = (inst_9143 + (1));
var inst_9143__$1 = inst_9157;
var state_9179__$1 = (function (){var statearr_9194 = state_9179;
(statearr_9194[(7)] = inst_9143__$1);

(statearr_9194[(10)] = inst_9156);

return statearr_9194;
})();
var statearr_9195_9225 = state_9179__$1;
(statearr_9195_9225[(2)] = null);

(statearr_9195_9225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (5))){
var inst_9163 = (state_9179[(2)]);
var state_9179__$1 = (function (){var statearr_9196 = state_9179;
(statearr_9196[(11)] = inst_9163);

return statearr_9196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9179__$1,(12),dchan);
} else {
if((state_val_9180 === (14))){
var inst_9165 = (state_9179[(8)]);
var inst_9170 = cljs.core.apply.call(null,f,inst_9165);
var state_9179__$1 = state_9179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9179__$1,(16),out,inst_9170);
} else {
if((state_val_9180 === (16))){
var inst_9172 = (state_9179[(2)]);
var state_9179__$1 = (function (){var statearr_9197 = state_9179;
(statearr_9197[(12)] = inst_9172);

return statearr_9197;
})();
var statearr_9198_9226 = state_9179__$1;
(statearr_9198_9226[(2)] = null);

(statearr_9198_9226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (10))){
var inst_9147 = (state_9179[(2)]);
var inst_9148 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9179__$1 = (function (){var statearr_9199 = state_9179;
(statearr_9199[(13)] = inst_9147);

return statearr_9199;
})();
var statearr_9200_9227 = state_9179__$1;
(statearr_9200_9227[(2)] = inst_9148);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9180 === (8))){
var inst_9161 = (state_9179[(2)]);
var state_9179__$1 = state_9179;
var statearr_9201_9228 = state_9179__$1;
(statearr_9201_9228[(2)] = inst_9161);

(statearr_9201_9228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7082__auto__,c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9205[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9205[(1)] = (1));

return statearr_9205;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9179){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9206){if((e9206 instanceof Object)){
var ex__7086__auto__ = e9206;
var statearr_9207_9229 = state_9179;
(statearr_9207_9229[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9230 = state_9179;
state_9179 = G__9230;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7196__auto__ = (function (){var statearr_9208 = f__7195__auto__.call(null);
(statearr_9208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9213);

return statearr_9208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9213,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9232 = [];
var len__5726__auto___9288 = arguments.length;
var i__5727__auto___9289 = (0);
while(true){
if((i__5727__auto___9289 < len__5726__auto___9288)){
args9232.push((arguments[i__5727__auto___9289]));

var G__9290 = (i__5727__auto___9289 + (1));
i__5727__auto___9289 = G__9290;
continue;
} else {
}
break;
}

var G__9234 = args9232.length;
switch (G__9234) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9232.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9292,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9292,out){
return (function (state_9264){
var state_val_9265 = (state_9264[(1)]);
if((state_val_9265 === (7))){
var inst_9243 = (state_9264[(7)]);
var inst_9244 = (state_9264[(8)]);
var inst_9243__$1 = (state_9264[(2)]);
var inst_9244__$1 = cljs.core.nth.call(null,inst_9243__$1,(0),null);
var inst_9245 = cljs.core.nth.call(null,inst_9243__$1,(1),null);
var inst_9246 = (inst_9244__$1 == null);
var state_9264__$1 = (function (){var statearr_9266 = state_9264;
(statearr_9266[(9)] = inst_9245);

(statearr_9266[(7)] = inst_9243__$1);

(statearr_9266[(8)] = inst_9244__$1);

return statearr_9266;
})();
if(cljs.core.truth_(inst_9246)){
var statearr_9267_9293 = state_9264__$1;
(statearr_9267_9293[(1)] = (8));

} else {
var statearr_9268_9294 = state_9264__$1;
(statearr_9268_9294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (1))){
var inst_9235 = cljs.core.vec.call(null,chs);
var inst_9236 = inst_9235;
var state_9264__$1 = (function (){var statearr_9269 = state_9264;
(statearr_9269[(10)] = inst_9236);

return statearr_9269;
})();
var statearr_9270_9295 = state_9264__$1;
(statearr_9270_9295[(2)] = null);

(statearr_9270_9295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (4))){
var inst_9236 = (state_9264[(10)]);
var state_9264__$1 = state_9264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9264__$1,(7),inst_9236);
} else {
if((state_val_9265 === (6))){
var inst_9260 = (state_9264[(2)]);
var state_9264__$1 = state_9264;
var statearr_9271_9296 = state_9264__$1;
(statearr_9271_9296[(2)] = inst_9260);

(statearr_9271_9296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (3))){
var inst_9262 = (state_9264[(2)]);
var state_9264__$1 = state_9264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9264__$1,inst_9262);
} else {
if((state_val_9265 === (2))){
var inst_9236 = (state_9264[(10)]);
var inst_9238 = cljs.core.count.call(null,inst_9236);
var inst_9239 = (inst_9238 > (0));
var state_9264__$1 = state_9264;
if(cljs.core.truth_(inst_9239)){
var statearr_9273_9297 = state_9264__$1;
(statearr_9273_9297[(1)] = (4));

} else {
var statearr_9274_9298 = state_9264__$1;
(statearr_9274_9298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (11))){
var inst_9236 = (state_9264[(10)]);
var inst_9253 = (state_9264[(2)]);
var tmp9272 = inst_9236;
var inst_9236__$1 = tmp9272;
var state_9264__$1 = (function (){var statearr_9275 = state_9264;
(statearr_9275[(11)] = inst_9253);

(statearr_9275[(10)] = inst_9236__$1);

return statearr_9275;
})();
var statearr_9276_9299 = state_9264__$1;
(statearr_9276_9299[(2)] = null);

(statearr_9276_9299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (9))){
var inst_9244 = (state_9264[(8)]);
var state_9264__$1 = state_9264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9264__$1,(11),out,inst_9244);
} else {
if((state_val_9265 === (5))){
var inst_9258 = cljs.core.async.close_BANG_.call(null,out);
var state_9264__$1 = state_9264;
var statearr_9277_9300 = state_9264__$1;
(statearr_9277_9300[(2)] = inst_9258);

(statearr_9277_9300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (10))){
var inst_9256 = (state_9264[(2)]);
var state_9264__$1 = state_9264;
var statearr_9278_9301 = state_9264__$1;
(statearr_9278_9301[(2)] = inst_9256);

(statearr_9278_9301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9265 === (8))){
var inst_9245 = (state_9264[(9)]);
var inst_9243 = (state_9264[(7)]);
var inst_9236 = (state_9264[(10)]);
var inst_9244 = (state_9264[(8)]);
var inst_9248 = (function (){var cs = inst_9236;
var vec__9241 = inst_9243;
var v = inst_9244;
var c = inst_9245;
return ((function (cs,vec__9241,v,c,inst_9245,inst_9243,inst_9236,inst_9244,state_val_9265,c__7194__auto___9292,out){
return (function (p1__9231_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9231_SHARP_);
});
;})(cs,vec__9241,v,c,inst_9245,inst_9243,inst_9236,inst_9244,state_val_9265,c__7194__auto___9292,out))
})();
var inst_9249 = cljs.core.filterv.call(null,inst_9248,inst_9236);
var inst_9236__$1 = inst_9249;
var state_9264__$1 = (function (){var statearr_9279 = state_9264;
(statearr_9279[(10)] = inst_9236__$1);

return statearr_9279;
})();
var statearr_9280_9302 = state_9264__$1;
(statearr_9280_9302[(2)] = null);

(statearr_9280_9302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9292,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9292,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9284[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9284[(1)] = (1));

return statearr_9284;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9264){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9285){if((e9285 instanceof Object)){
var ex__7086__auto__ = e9285;
var statearr_9286_9303 = state_9264;
(statearr_9286_9303[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9304 = state_9264;
state_9264 = G__9304;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9292,out))
})();
var state__7196__auto__ = (function (){var statearr_9287 = f__7195__auto__.call(null);
(statearr_9287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9292);

return statearr_9287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9292,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9305 = [];
var len__5726__auto___9354 = arguments.length;
var i__5727__auto___9355 = (0);
while(true){
if((i__5727__auto___9355 < len__5726__auto___9354)){
args9305.push((arguments[i__5727__auto___9355]));

var G__9356 = (i__5727__auto___9355 + (1));
i__5727__auto___9355 = G__9356;
continue;
} else {
}
break;
}

var G__9307 = args9305.length;
switch (G__9307) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9305.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9358,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9358,out){
return (function (state_9331){
var state_val_9332 = (state_9331[(1)]);
if((state_val_9332 === (7))){
var inst_9313 = (state_9331[(7)]);
var inst_9313__$1 = (state_9331[(2)]);
var inst_9314 = (inst_9313__$1 == null);
var inst_9315 = cljs.core.not.call(null,inst_9314);
var state_9331__$1 = (function (){var statearr_9333 = state_9331;
(statearr_9333[(7)] = inst_9313__$1);

return statearr_9333;
})();
if(inst_9315){
var statearr_9334_9359 = state_9331__$1;
(statearr_9334_9359[(1)] = (8));

} else {
var statearr_9335_9360 = state_9331__$1;
(statearr_9335_9360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (1))){
var inst_9308 = (0);
var state_9331__$1 = (function (){var statearr_9336 = state_9331;
(statearr_9336[(8)] = inst_9308);

return statearr_9336;
})();
var statearr_9337_9361 = state_9331__$1;
(statearr_9337_9361[(2)] = null);

(statearr_9337_9361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (4))){
var state_9331__$1 = state_9331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9331__$1,(7),ch);
} else {
if((state_val_9332 === (6))){
var inst_9326 = (state_9331[(2)]);
var state_9331__$1 = state_9331;
var statearr_9338_9362 = state_9331__$1;
(statearr_9338_9362[(2)] = inst_9326);

(statearr_9338_9362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (3))){
var inst_9328 = (state_9331[(2)]);
var inst_9329 = cljs.core.async.close_BANG_.call(null,out);
var state_9331__$1 = (function (){var statearr_9339 = state_9331;
(statearr_9339[(9)] = inst_9328);

return statearr_9339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9331__$1,inst_9329);
} else {
if((state_val_9332 === (2))){
var inst_9308 = (state_9331[(8)]);
var inst_9310 = (inst_9308 < n);
var state_9331__$1 = state_9331;
if(cljs.core.truth_(inst_9310)){
var statearr_9340_9363 = state_9331__$1;
(statearr_9340_9363[(1)] = (4));

} else {
var statearr_9341_9364 = state_9331__$1;
(statearr_9341_9364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (11))){
var inst_9308 = (state_9331[(8)]);
var inst_9318 = (state_9331[(2)]);
var inst_9319 = (inst_9308 + (1));
var inst_9308__$1 = inst_9319;
var state_9331__$1 = (function (){var statearr_9342 = state_9331;
(statearr_9342[(10)] = inst_9318);

(statearr_9342[(8)] = inst_9308__$1);

return statearr_9342;
})();
var statearr_9343_9365 = state_9331__$1;
(statearr_9343_9365[(2)] = null);

(statearr_9343_9365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (9))){
var state_9331__$1 = state_9331;
var statearr_9344_9366 = state_9331__$1;
(statearr_9344_9366[(2)] = null);

(statearr_9344_9366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (5))){
var state_9331__$1 = state_9331;
var statearr_9345_9367 = state_9331__$1;
(statearr_9345_9367[(2)] = null);

(statearr_9345_9367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (10))){
var inst_9323 = (state_9331[(2)]);
var state_9331__$1 = state_9331;
var statearr_9346_9368 = state_9331__$1;
(statearr_9346_9368[(2)] = inst_9323);

(statearr_9346_9368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (8))){
var inst_9313 = (state_9331[(7)]);
var state_9331__$1 = state_9331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9331__$1,(11),out,inst_9313);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9358,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9358,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9350[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9350[(1)] = (1));

return statearr_9350;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9331){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9351){if((e9351 instanceof Object)){
var ex__7086__auto__ = e9351;
var statearr_9352_9369 = state_9331;
(statearr_9352_9369[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9370 = state_9331;
state_9331 = G__9370;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9358,out))
})();
var state__7196__auto__ = (function (){var statearr_9353 = f__7195__auto__.call(null);
(statearr_9353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9358);

return statearr_9353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9358,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9378 = (function (map_LT_,f,ch,meta9379){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9379 = meta9379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9380,meta9379__$1){
var self__ = this;
var _9380__$1 = this;
return (new cljs.core.async.t_cljs$core$async9378(self__.map_LT_,self__.f,self__.ch,meta9379__$1));
});

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9380){
var self__ = this;
var _9380__$1 = this;
return self__.meta9379;
});

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9381 = (function (map_LT_,f,ch,meta9379,_,fn1,meta9382){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9379 = meta9379;
this._ = _;
this.fn1 = fn1;
this.meta9382 = meta9382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9383,meta9382__$1){
var self__ = this;
var _9383__$1 = this;
return (new cljs.core.async.t_cljs$core$async9381(self__.map_LT_,self__.f,self__.ch,self__.meta9379,self__._,self__.fn1,meta9382__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9383){
var self__ = this;
var _9383__$1 = this;
return self__.meta9382;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9371_SHARP_){
return f1.call(null,(((p1__9371_SHARP_ == null))?null:self__.f.call(null,p1__9371_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9379","meta9379",-1709698448,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9378","cljs.core.async/t_cljs$core$async9378",-1681459187,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9382","meta9382",-2015972241,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9381";

cljs.core.async.t_cljs$core$async9381.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9381");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9381 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9381(map_LT___$1,f__$1,ch__$1,meta9379__$1,___$2,fn1__$1,meta9382){
return (new cljs.core.async.t_cljs$core$async9381(map_LT___$1,f__$1,ch__$1,meta9379__$1,___$2,fn1__$1,meta9382));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9381(self__.map_LT_,self__.f,self__.ch,self__.meta9379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9379","meta9379",-1709698448,null)], null);
});

cljs.core.async.t_cljs$core$async9378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9378";

cljs.core.async.t_cljs$core$async9378.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9378");
});

cljs.core.async.__GT_t_cljs$core$async9378 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9378(map_LT___$1,f__$1,ch__$1,meta9379){
return (new cljs.core.async.t_cljs$core$async9378(map_LT___$1,f__$1,ch__$1,meta9379));
});

}

return (new cljs.core.async.t_cljs$core$async9378(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9387 = (function (map_GT_,f,ch,meta9388){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9388 = meta9388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9389,meta9388__$1){
var self__ = this;
var _9389__$1 = this;
return (new cljs.core.async.t_cljs$core$async9387(self__.map_GT_,self__.f,self__.ch,meta9388__$1));
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9389){
var self__ = this;
var _9389__$1 = this;
return self__.meta9388;
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9388","meta9388",1208317834,null)], null);
});

cljs.core.async.t_cljs$core$async9387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9387";

cljs.core.async.t_cljs$core$async9387.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9387");
});

cljs.core.async.__GT_t_cljs$core$async9387 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9387(map_GT___$1,f__$1,ch__$1,meta9388){
return (new cljs.core.async.t_cljs$core$async9387(map_GT___$1,f__$1,ch__$1,meta9388));
});

}

return (new cljs.core.async.t_cljs$core$async9387(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9393 = (function (filter_GT_,p,ch,meta9394){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9394 = meta9394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9395,meta9394__$1){
var self__ = this;
var _9395__$1 = this;
return (new cljs.core.async.t_cljs$core$async9393(self__.filter_GT_,self__.p,self__.ch,meta9394__$1));
});

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9395){
var self__ = this;
var _9395__$1 = this;
return self__.meta9394;
});

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9394","meta9394",-1911478625,null)], null);
});

cljs.core.async.t_cljs$core$async9393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9393";

cljs.core.async.t_cljs$core$async9393.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9393");
});

cljs.core.async.__GT_t_cljs$core$async9393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9393(filter_GT___$1,p__$1,ch__$1,meta9394){
return (new cljs.core.async.t_cljs$core$async9393(filter_GT___$1,p__$1,ch__$1,meta9394));
});

}

return (new cljs.core.async.t_cljs$core$async9393(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9396 = [];
var len__5726__auto___9440 = arguments.length;
var i__5727__auto___9441 = (0);
while(true){
if((i__5727__auto___9441 < len__5726__auto___9440)){
args9396.push((arguments[i__5727__auto___9441]));

var G__9442 = (i__5727__auto___9441 + (1));
i__5727__auto___9441 = G__9442;
continue;
} else {
}
break;
}

var G__9398 = args9396.length;
switch (G__9398) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9396.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9444,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9444,out){
return (function (state_9419){
var state_val_9420 = (state_9419[(1)]);
if((state_val_9420 === (7))){
var inst_9415 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
var statearr_9421_9445 = state_9419__$1;
(statearr_9421_9445[(2)] = inst_9415);

(statearr_9421_9445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (1))){
var state_9419__$1 = state_9419;
var statearr_9422_9446 = state_9419__$1;
(statearr_9422_9446[(2)] = null);

(statearr_9422_9446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (4))){
var inst_9401 = (state_9419[(7)]);
var inst_9401__$1 = (state_9419[(2)]);
var inst_9402 = (inst_9401__$1 == null);
var state_9419__$1 = (function (){var statearr_9423 = state_9419;
(statearr_9423[(7)] = inst_9401__$1);

return statearr_9423;
})();
if(cljs.core.truth_(inst_9402)){
var statearr_9424_9447 = state_9419__$1;
(statearr_9424_9447[(1)] = (5));

} else {
var statearr_9425_9448 = state_9419__$1;
(statearr_9425_9448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (6))){
var inst_9401 = (state_9419[(7)]);
var inst_9406 = p.call(null,inst_9401);
var state_9419__$1 = state_9419;
if(cljs.core.truth_(inst_9406)){
var statearr_9426_9449 = state_9419__$1;
(statearr_9426_9449[(1)] = (8));

} else {
var statearr_9427_9450 = state_9419__$1;
(statearr_9427_9450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (3))){
var inst_9417 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9419__$1,inst_9417);
} else {
if((state_val_9420 === (2))){
var state_9419__$1 = state_9419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9419__$1,(4),ch);
} else {
if((state_val_9420 === (11))){
var inst_9409 = (state_9419[(2)]);
var state_9419__$1 = state_9419;
var statearr_9428_9451 = state_9419__$1;
(statearr_9428_9451[(2)] = inst_9409);

(statearr_9428_9451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (9))){
var state_9419__$1 = state_9419;
var statearr_9429_9452 = state_9419__$1;
(statearr_9429_9452[(2)] = null);

(statearr_9429_9452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (5))){
var inst_9404 = cljs.core.async.close_BANG_.call(null,out);
var state_9419__$1 = state_9419;
var statearr_9430_9453 = state_9419__$1;
(statearr_9430_9453[(2)] = inst_9404);

(statearr_9430_9453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (10))){
var inst_9412 = (state_9419[(2)]);
var state_9419__$1 = (function (){var statearr_9431 = state_9419;
(statearr_9431[(8)] = inst_9412);

return statearr_9431;
})();
var statearr_9432_9454 = state_9419__$1;
(statearr_9432_9454[(2)] = null);

(statearr_9432_9454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9420 === (8))){
var inst_9401 = (state_9419[(7)]);
var state_9419__$1 = state_9419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9419__$1,(11),out,inst_9401);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9444,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9444,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9436 = [null,null,null,null,null,null,null,null,null];
(statearr_9436[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9436[(1)] = (1));

return statearr_9436;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9419){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9437){if((e9437 instanceof Object)){
var ex__7086__auto__ = e9437;
var statearr_9438_9455 = state_9419;
(statearr_9438_9455[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9456 = state_9419;
state_9419 = G__9456;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9444,out))
})();
var state__7196__auto__ = (function (){var statearr_9439 = f__7195__auto__.call(null);
(statearr_9439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9444);

return statearr_9439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9444,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9457 = [];
var len__5726__auto___9460 = arguments.length;
var i__5727__auto___9461 = (0);
while(true){
if((i__5727__auto___9461 < len__5726__auto___9460)){
args9457.push((arguments[i__5727__auto___9461]));

var G__9462 = (i__5727__auto___9461 + (1));
i__5727__auto___9461 = G__9462;
continue;
} else {
}
break;
}

var G__9459 = args9457.length;
switch (G__9459) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9457.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto__){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto__){
return (function (state_9629){
var state_val_9630 = (state_9629[(1)]);
if((state_val_9630 === (7))){
var inst_9625 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9631_9672 = state_9629__$1;
(statearr_9631_9672[(2)] = inst_9625);

(statearr_9631_9672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (20))){
var inst_9595 = (state_9629[(7)]);
var inst_9606 = (state_9629[(2)]);
var inst_9607 = cljs.core.next.call(null,inst_9595);
var inst_9581 = inst_9607;
var inst_9582 = null;
var inst_9583 = (0);
var inst_9584 = (0);
var state_9629__$1 = (function (){var statearr_9632 = state_9629;
(statearr_9632[(8)] = inst_9581);

(statearr_9632[(9)] = inst_9582);

(statearr_9632[(10)] = inst_9583);

(statearr_9632[(11)] = inst_9606);

(statearr_9632[(12)] = inst_9584);

return statearr_9632;
})();
var statearr_9633_9673 = state_9629__$1;
(statearr_9633_9673[(2)] = null);

(statearr_9633_9673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (1))){
var state_9629__$1 = state_9629;
var statearr_9634_9674 = state_9629__$1;
(statearr_9634_9674[(2)] = null);

(statearr_9634_9674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (4))){
var inst_9570 = (state_9629[(13)]);
var inst_9570__$1 = (state_9629[(2)]);
var inst_9571 = (inst_9570__$1 == null);
var state_9629__$1 = (function (){var statearr_9635 = state_9629;
(statearr_9635[(13)] = inst_9570__$1);

return statearr_9635;
})();
if(cljs.core.truth_(inst_9571)){
var statearr_9636_9675 = state_9629__$1;
(statearr_9636_9675[(1)] = (5));

} else {
var statearr_9637_9676 = state_9629__$1;
(statearr_9637_9676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (15))){
var state_9629__$1 = state_9629;
var statearr_9641_9677 = state_9629__$1;
(statearr_9641_9677[(2)] = null);

(statearr_9641_9677[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (21))){
var state_9629__$1 = state_9629;
var statearr_9642_9678 = state_9629__$1;
(statearr_9642_9678[(2)] = null);

(statearr_9642_9678[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (13))){
var inst_9581 = (state_9629[(8)]);
var inst_9582 = (state_9629[(9)]);
var inst_9583 = (state_9629[(10)]);
var inst_9584 = (state_9629[(12)]);
var inst_9591 = (state_9629[(2)]);
var inst_9592 = (inst_9584 + (1));
var tmp9638 = inst_9581;
var tmp9639 = inst_9582;
var tmp9640 = inst_9583;
var inst_9581__$1 = tmp9638;
var inst_9582__$1 = tmp9639;
var inst_9583__$1 = tmp9640;
var inst_9584__$1 = inst_9592;
var state_9629__$1 = (function (){var statearr_9643 = state_9629;
(statearr_9643[(8)] = inst_9581__$1);

(statearr_9643[(14)] = inst_9591);

(statearr_9643[(9)] = inst_9582__$1);

(statearr_9643[(10)] = inst_9583__$1);

(statearr_9643[(12)] = inst_9584__$1);

return statearr_9643;
})();
var statearr_9644_9679 = state_9629__$1;
(statearr_9644_9679[(2)] = null);

(statearr_9644_9679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (22))){
var state_9629__$1 = state_9629;
var statearr_9645_9680 = state_9629__$1;
(statearr_9645_9680[(2)] = null);

(statearr_9645_9680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (6))){
var inst_9570 = (state_9629[(13)]);
var inst_9579 = f.call(null,inst_9570);
var inst_9580 = cljs.core.seq.call(null,inst_9579);
var inst_9581 = inst_9580;
var inst_9582 = null;
var inst_9583 = (0);
var inst_9584 = (0);
var state_9629__$1 = (function (){var statearr_9646 = state_9629;
(statearr_9646[(8)] = inst_9581);

(statearr_9646[(9)] = inst_9582);

(statearr_9646[(10)] = inst_9583);

(statearr_9646[(12)] = inst_9584);

return statearr_9646;
})();
var statearr_9647_9681 = state_9629__$1;
(statearr_9647_9681[(2)] = null);

(statearr_9647_9681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (17))){
var inst_9595 = (state_9629[(7)]);
var inst_9599 = cljs.core.chunk_first.call(null,inst_9595);
var inst_9600 = cljs.core.chunk_rest.call(null,inst_9595);
var inst_9601 = cljs.core.count.call(null,inst_9599);
var inst_9581 = inst_9600;
var inst_9582 = inst_9599;
var inst_9583 = inst_9601;
var inst_9584 = (0);
var state_9629__$1 = (function (){var statearr_9648 = state_9629;
(statearr_9648[(8)] = inst_9581);

(statearr_9648[(9)] = inst_9582);

(statearr_9648[(10)] = inst_9583);

(statearr_9648[(12)] = inst_9584);

return statearr_9648;
})();
var statearr_9649_9682 = state_9629__$1;
(statearr_9649_9682[(2)] = null);

(statearr_9649_9682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (3))){
var inst_9627 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9629__$1,inst_9627);
} else {
if((state_val_9630 === (12))){
var inst_9615 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9650_9683 = state_9629__$1;
(statearr_9650_9683[(2)] = inst_9615);

(statearr_9650_9683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (2))){
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9629__$1,(4),in$);
} else {
if((state_val_9630 === (23))){
var inst_9623 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9651_9684 = state_9629__$1;
(statearr_9651_9684[(2)] = inst_9623);

(statearr_9651_9684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (19))){
var inst_9610 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9652_9685 = state_9629__$1;
(statearr_9652_9685[(2)] = inst_9610);

(statearr_9652_9685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (11))){
var inst_9581 = (state_9629[(8)]);
var inst_9595 = (state_9629[(7)]);
var inst_9595__$1 = cljs.core.seq.call(null,inst_9581);
var state_9629__$1 = (function (){var statearr_9653 = state_9629;
(statearr_9653[(7)] = inst_9595__$1);

return statearr_9653;
})();
if(inst_9595__$1){
var statearr_9654_9686 = state_9629__$1;
(statearr_9654_9686[(1)] = (14));

} else {
var statearr_9655_9687 = state_9629__$1;
(statearr_9655_9687[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (9))){
var inst_9617 = (state_9629[(2)]);
var inst_9618 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9629__$1 = (function (){var statearr_9656 = state_9629;
(statearr_9656[(15)] = inst_9617);

return statearr_9656;
})();
if(cljs.core.truth_(inst_9618)){
var statearr_9657_9688 = state_9629__$1;
(statearr_9657_9688[(1)] = (21));

} else {
var statearr_9658_9689 = state_9629__$1;
(statearr_9658_9689[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (5))){
var inst_9573 = cljs.core.async.close_BANG_.call(null,out);
var state_9629__$1 = state_9629;
var statearr_9659_9690 = state_9629__$1;
(statearr_9659_9690[(2)] = inst_9573);

(statearr_9659_9690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (14))){
var inst_9595 = (state_9629[(7)]);
var inst_9597 = cljs.core.chunked_seq_QMARK_.call(null,inst_9595);
var state_9629__$1 = state_9629;
if(inst_9597){
var statearr_9660_9691 = state_9629__$1;
(statearr_9660_9691[(1)] = (17));

} else {
var statearr_9661_9692 = state_9629__$1;
(statearr_9661_9692[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (16))){
var inst_9613 = (state_9629[(2)]);
var state_9629__$1 = state_9629;
var statearr_9662_9693 = state_9629__$1;
(statearr_9662_9693[(2)] = inst_9613);

(statearr_9662_9693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9630 === (10))){
var inst_9582 = (state_9629[(9)]);
var inst_9584 = (state_9629[(12)]);
var inst_9589 = cljs.core._nth.call(null,inst_9582,inst_9584);
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9629__$1,(13),out,inst_9589);
} else {
if((state_val_9630 === (18))){
var inst_9595 = (state_9629[(7)]);
var inst_9604 = cljs.core.first.call(null,inst_9595);
var state_9629__$1 = state_9629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9629__$1,(20),out,inst_9604);
} else {
if((state_val_9630 === (8))){
var inst_9583 = (state_9629[(10)]);
var inst_9584 = (state_9629[(12)]);
var inst_9586 = (inst_9584 < inst_9583);
var inst_9587 = inst_9586;
var state_9629__$1 = state_9629;
if(cljs.core.truth_(inst_9587)){
var statearr_9663_9694 = state_9629__$1;
(statearr_9663_9694[(1)] = (10));

} else {
var statearr_9664_9695 = state_9629__$1;
(statearr_9664_9695[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____0 = (function (){
var statearr_9668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9668[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__);

(statearr_9668[(1)] = (1));

return statearr_9668;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____1 = (function (state_9629){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9669){if((e9669 instanceof Object)){
var ex__7086__auto__ = e9669;
var statearr_9670_9696 = state_9629;
(statearr_9670_9696[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9697 = state_9629;
state_9629 = G__9697;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__ = function(state_9629){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____1.call(this,state_9629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7083__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto__))
})();
var state__7196__auto__ = (function (){var statearr_9671 = f__7195__auto__.call(null);
(statearr_9671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto__);

return statearr_9671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto__))
);

return c__7194__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9698 = [];
var len__5726__auto___9701 = arguments.length;
var i__5727__auto___9702 = (0);
while(true){
if((i__5727__auto___9702 < len__5726__auto___9701)){
args9698.push((arguments[i__5727__auto___9702]));

var G__9703 = (i__5727__auto___9702 + (1));
i__5727__auto___9702 = G__9703;
continue;
} else {
}
break;
}

var G__9700 = args9698.length;
switch (G__9700) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9698.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9705 = [];
var len__5726__auto___9708 = arguments.length;
var i__5727__auto___9709 = (0);
while(true){
if((i__5727__auto___9709 < len__5726__auto___9708)){
args9705.push((arguments[i__5727__auto___9709]));

var G__9710 = (i__5727__auto___9709 + (1));
i__5727__auto___9709 = G__9710;
continue;
} else {
}
break;
}

var G__9707 = args9705.length;
switch (G__9707) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9705.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9712 = [];
var len__5726__auto___9763 = arguments.length;
var i__5727__auto___9764 = (0);
while(true){
if((i__5727__auto___9764 < len__5726__auto___9763)){
args9712.push((arguments[i__5727__auto___9764]));

var G__9765 = (i__5727__auto___9764 + (1));
i__5727__auto___9764 = G__9765;
continue;
} else {
}
break;
}

var G__9714 = args9712.length;
switch (G__9714) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9712.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9767,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9767,out){
return (function (state_9738){
var state_val_9739 = (state_9738[(1)]);
if((state_val_9739 === (7))){
var inst_9733 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
var statearr_9740_9768 = state_9738__$1;
(statearr_9740_9768[(2)] = inst_9733);

(statearr_9740_9768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (1))){
var inst_9715 = null;
var state_9738__$1 = (function (){var statearr_9741 = state_9738;
(statearr_9741[(7)] = inst_9715);

return statearr_9741;
})();
var statearr_9742_9769 = state_9738__$1;
(statearr_9742_9769[(2)] = null);

(statearr_9742_9769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (4))){
var inst_9718 = (state_9738[(8)]);
var inst_9718__$1 = (state_9738[(2)]);
var inst_9719 = (inst_9718__$1 == null);
var inst_9720 = cljs.core.not.call(null,inst_9719);
var state_9738__$1 = (function (){var statearr_9743 = state_9738;
(statearr_9743[(8)] = inst_9718__$1);

return statearr_9743;
})();
if(inst_9720){
var statearr_9744_9770 = state_9738__$1;
(statearr_9744_9770[(1)] = (5));

} else {
var statearr_9745_9771 = state_9738__$1;
(statearr_9745_9771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (6))){
var state_9738__$1 = state_9738;
var statearr_9746_9772 = state_9738__$1;
(statearr_9746_9772[(2)] = null);

(statearr_9746_9772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (3))){
var inst_9735 = (state_9738[(2)]);
var inst_9736 = cljs.core.async.close_BANG_.call(null,out);
var state_9738__$1 = (function (){var statearr_9747 = state_9738;
(statearr_9747[(9)] = inst_9735);

return statearr_9747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9738__$1,inst_9736);
} else {
if((state_val_9739 === (2))){
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9738__$1,(4),ch);
} else {
if((state_val_9739 === (11))){
var inst_9718 = (state_9738[(8)]);
var inst_9727 = (state_9738[(2)]);
var inst_9715 = inst_9718;
var state_9738__$1 = (function (){var statearr_9748 = state_9738;
(statearr_9748[(10)] = inst_9727);

(statearr_9748[(7)] = inst_9715);

return statearr_9748;
})();
var statearr_9749_9773 = state_9738__$1;
(statearr_9749_9773[(2)] = null);

(statearr_9749_9773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (9))){
var inst_9718 = (state_9738[(8)]);
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9738__$1,(11),out,inst_9718);
} else {
if((state_val_9739 === (5))){
var inst_9718 = (state_9738[(8)]);
var inst_9715 = (state_9738[(7)]);
var inst_9722 = cljs.core._EQ_.call(null,inst_9718,inst_9715);
var state_9738__$1 = state_9738;
if(inst_9722){
var statearr_9751_9774 = state_9738__$1;
(statearr_9751_9774[(1)] = (8));

} else {
var statearr_9752_9775 = state_9738__$1;
(statearr_9752_9775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (10))){
var inst_9730 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
var statearr_9753_9776 = state_9738__$1;
(statearr_9753_9776[(2)] = inst_9730);

(statearr_9753_9776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (8))){
var inst_9715 = (state_9738[(7)]);
var tmp9750 = inst_9715;
var inst_9715__$1 = tmp9750;
var state_9738__$1 = (function (){var statearr_9754 = state_9738;
(statearr_9754[(7)] = inst_9715__$1);

return statearr_9754;
})();
var statearr_9755_9777 = state_9738__$1;
(statearr_9755_9777[(2)] = null);

(statearr_9755_9777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9767,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9767,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9759[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9759[(1)] = (1));

return statearr_9759;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9738){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9760){if((e9760 instanceof Object)){
var ex__7086__auto__ = e9760;
var statearr_9761_9778 = state_9738;
(statearr_9761_9778[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9779 = state_9738;
state_9738 = G__9779;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9767,out))
})();
var state__7196__auto__ = (function (){var statearr_9762 = f__7195__auto__.call(null);
(statearr_9762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9767);

return statearr_9762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9767,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9780 = [];
var len__5726__auto___9850 = arguments.length;
var i__5727__auto___9851 = (0);
while(true){
if((i__5727__auto___9851 < len__5726__auto___9850)){
args9780.push((arguments[i__5727__auto___9851]));

var G__9852 = (i__5727__auto___9851 + (1));
i__5727__auto___9851 = G__9852;
continue;
} else {
}
break;
}

var G__9782 = args9780.length;
switch (G__9782) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9780.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9854,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9854,out){
return (function (state_9820){
var state_val_9821 = (state_9820[(1)]);
if((state_val_9821 === (7))){
var inst_9816 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
var statearr_9822_9855 = state_9820__$1;
(statearr_9822_9855[(2)] = inst_9816);

(statearr_9822_9855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (1))){
var inst_9783 = (new Array(n));
var inst_9784 = inst_9783;
var inst_9785 = (0);
var state_9820__$1 = (function (){var statearr_9823 = state_9820;
(statearr_9823[(7)] = inst_9784);

(statearr_9823[(8)] = inst_9785);

return statearr_9823;
})();
var statearr_9824_9856 = state_9820__$1;
(statearr_9824_9856[(2)] = null);

(statearr_9824_9856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (4))){
var inst_9788 = (state_9820[(9)]);
var inst_9788__$1 = (state_9820[(2)]);
var inst_9789 = (inst_9788__$1 == null);
var inst_9790 = cljs.core.not.call(null,inst_9789);
var state_9820__$1 = (function (){var statearr_9825 = state_9820;
(statearr_9825[(9)] = inst_9788__$1);

return statearr_9825;
})();
if(inst_9790){
var statearr_9826_9857 = state_9820__$1;
(statearr_9826_9857[(1)] = (5));

} else {
var statearr_9827_9858 = state_9820__$1;
(statearr_9827_9858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (15))){
var inst_9810 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
var statearr_9828_9859 = state_9820__$1;
(statearr_9828_9859[(2)] = inst_9810);

(statearr_9828_9859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (13))){
var state_9820__$1 = state_9820;
var statearr_9829_9860 = state_9820__$1;
(statearr_9829_9860[(2)] = null);

(statearr_9829_9860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (6))){
var inst_9785 = (state_9820[(8)]);
var inst_9806 = (inst_9785 > (0));
var state_9820__$1 = state_9820;
if(cljs.core.truth_(inst_9806)){
var statearr_9830_9861 = state_9820__$1;
(statearr_9830_9861[(1)] = (12));

} else {
var statearr_9831_9862 = state_9820__$1;
(statearr_9831_9862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (3))){
var inst_9818 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9820__$1,inst_9818);
} else {
if((state_val_9821 === (12))){
var inst_9784 = (state_9820[(7)]);
var inst_9808 = cljs.core.vec.call(null,inst_9784);
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9820__$1,(15),out,inst_9808);
} else {
if((state_val_9821 === (2))){
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9820__$1,(4),ch);
} else {
if((state_val_9821 === (11))){
var inst_9800 = (state_9820[(2)]);
var inst_9801 = (new Array(n));
var inst_9784 = inst_9801;
var inst_9785 = (0);
var state_9820__$1 = (function (){var statearr_9832 = state_9820;
(statearr_9832[(7)] = inst_9784);

(statearr_9832[(10)] = inst_9800);

(statearr_9832[(8)] = inst_9785);

return statearr_9832;
})();
var statearr_9833_9863 = state_9820__$1;
(statearr_9833_9863[(2)] = null);

(statearr_9833_9863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (9))){
var inst_9784 = (state_9820[(7)]);
var inst_9798 = cljs.core.vec.call(null,inst_9784);
var state_9820__$1 = state_9820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9820__$1,(11),out,inst_9798);
} else {
if((state_val_9821 === (5))){
var inst_9784 = (state_9820[(7)]);
var inst_9793 = (state_9820[(11)]);
var inst_9788 = (state_9820[(9)]);
var inst_9785 = (state_9820[(8)]);
var inst_9792 = (inst_9784[inst_9785] = inst_9788);
var inst_9793__$1 = (inst_9785 + (1));
var inst_9794 = (inst_9793__$1 < n);
var state_9820__$1 = (function (){var statearr_9834 = state_9820;
(statearr_9834[(11)] = inst_9793__$1);

(statearr_9834[(12)] = inst_9792);

return statearr_9834;
})();
if(cljs.core.truth_(inst_9794)){
var statearr_9835_9864 = state_9820__$1;
(statearr_9835_9864[(1)] = (8));

} else {
var statearr_9836_9865 = state_9820__$1;
(statearr_9836_9865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (14))){
var inst_9813 = (state_9820[(2)]);
var inst_9814 = cljs.core.async.close_BANG_.call(null,out);
var state_9820__$1 = (function (){var statearr_9838 = state_9820;
(statearr_9838[(13)] = inst_9813);

return statearr_9838;
})();
var statearr_9839_9866 = state_9820__$1;
(statearr_9839_9866[(2)] = inst_9814);

(statearr_9839_9866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (10))){
var inst_9804 = (state_9820[(2)]);
var state_9820__$1 = state_9820;
var statearr_9840_9867 = state_9820__$1;
(statearr_9840_9867[(2)] = inst_9804);

(statearr_9840_9867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9821 === (8))){
var inst_9784 = (state_9820[(7)]);
var inst_9793 = (state_9820[(11)]);
var tmp9837 = inst_9784;
var inst_9784__$1 = tmp9837;
var inst_9785 = inst_9793;
var state_9820__$1 = (function (){var statearr_9841 = state_9820;
(statearr_9841[(7)] = inst_9784__$1);

(statearr_9841[(8)] = inst_9785);

return statearr_9841;
})();
var statearr_9842_9868 = state_9820__$1;
(statearr_9842_9868[(2)] = null);

(statearr_9842_9868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9854,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9854,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9846[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9846[(1)] = (1));

return statearr_9846;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9820){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9847){if((e9847 instanceof Object)){
var ex__7086__auto__ = e9847;
var statearr_9848_9869 = state_9820;
(statearr_9848_9869[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9870 = state_9820;
state_9820 = G__9870;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9854,out))
})();
var state__7196__auto__ = (function (){var statearr_9849 = f__7195__auto__.call(null);
(statearr_9849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9854);

return statearr_9849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9854,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9871 = [];
var len__5726__auto___9945 = arguments.length;
var i__5727__auto___9946 = (0);
while(true){
if((i__5727__auto___9946 < len__5726__auto___9945)){
args9871.push((arguments[i__5727__auto___9946]));

var G__9947 = (i__5727__auto___9946 + (1));
i__5727__auto___9946 = G__9947;
continue;
} else {
}
break;
}

var G__9873 = args9871.length;
switch (G__9873) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9871.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7194__auto___9949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7194__auto___9949,out){
return (function (){
var f__7195__auto__ = (function (){var switch__7082__auto__ = ((function (c__7194__auto___9949,out){
return (function (state_9915){
var state_val_9916 = (state_9915[(1)]);
if((state_val_9916 === (7))){
var inst_9911 = (state_9915[(2)]);
var state_9915__$1 = state_9915;
var statearr_9917_9950 = state_9915__$1;
(statearr_9917_9950[(2)] = inst_9911);

(statearr_9917_9950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (1))){
var inst_9874 = [];
var inst_9875 = inst_9874;
var inst_9876 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9915__$1 = (function (){var statearr_9918 = state_9915;
(statearr_9918[(7)] = inst_9876);

(statearr_9918[(8)] = inst_9875);

return statearr_9918;
})();
var statearr_9919_9951 = state_9915__$1;
(statearr_9919_9951[(2)] = null);

(statearr_9919_9951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (4))){
var inst_9879 = (state_9915[(9)]);
var inst_9879__$1 = (state_9915[(2)]);
var inst_9880 = (inst_9879__$1 == null);
var inst_9881 = cljs.core.not.call(null,inst_9880);
var state_9915__$1 = (function (){var statearr_9920 = state_9915;
(statearr_9920[(9)] = inst_9879__$1);

return statearr_9920;
})();
if(inst_9881){
var statearr_9921_9952 = state_9915__$1;
(statearr_9921_9952[(1)] = (5));

} else {
var statearr_9922_9953 = state_9915__$1;
(statearr_9922_9953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (15))){
var inst_9905 = (state_9915[(2)]);
var state_9915__$1 = state_9915;
var statearr_9923_9954 = state_9915__$1;
(statearr_9923_9954[(2)] = inst_9905);

(statearr_9923_9954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (13))){
var state_9915__$1 = state_9915;
var statearr_9924_9955 = state_9915__$1;
(statearr_9924_9955[(2)] = null);

(statearr_9924_9955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (6))){
var inst_9875 = (state_9915[(8)]);
var inst_9900 = inst_9875.length;
var inst_9901 = (inst_9900 > (0));
var state_9915__$1 = state_9915;
if(cljs.core.truth_(inst_9901)){
var statearr_9925_9956 = state_9915__$1;
(statearr_9925_9956[(1)] = (12));

} else {
var statearr_9926_9957 = state_9915__$1;
(statearr_9926_9957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (3))){
var inst_9913 = (state_9915[(2)]);
var state_9915__$1 = state_9915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9915__$1,inst_9913);
} else {
if((state_val_9916 === (12))){
var inst_9875 = (state_9915[(8)]);
var inst_9903 = cljs.core.vec.call(null,inst_9875);
var state_9915__$1 = state_9915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9915__$1,(15),out,inst_9903);
} else {
if((state_val_9916 === (2))){
var state_9915__$1 = state_9915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9915__$1,(4),ch);
} else {
if((state_val_9916 === (11))){
var inst_9879 = (state_9915[(9)]);
var inst_9883 = (state_9915[(10)]);
var inst_9893 = (state_9915[(2)]);
var inst_9894 = [];
var inst_9895 = inst_9894.push(inst_9879);
var inst_9875 = inst_9894;
var inst_9876 = inst_9883;
var state_9915__$1 = (function (){var statearr_9927 = state_9915;
(statearr_9927[(7)] = inst_9876);

(statearr_9927[(8)] = inst_9875);

(statearr_9927[(11)] = inst_9893);

(statearr_9927[(12)] = inst_9895);

return statearr_9927;
})();
var statearr_9928_9958 = state_9915__$1;
(statearr_9928_9958[(2)] = null);

(statearr_9928_9958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (9))){
var inst_9875 = (state_9915[(8)]);
var inst_9891 = cljs.core.vec.call(null,inst_9875);
var state_9915__$1 = state_9915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9915__$1,(11),out,inst_9891);
} else {
if((state_val_9916 === (5))){
var inst_9876 = (state_9915[(7)]);
var inst_9879 = (state_9915[(9)]);
var inst_9883 = (state_9915[(10)]);
var inst_9883__$1 = f.call(null,inst_9879);
var inst_9884 = cljs.core._EQ_.call(null,inst_9883__$1,inst_9876);
var inst_9885 = cljs.core.keyword_identical_QMARK_.call(null,inst_9876,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9886 = (inst_9884) || (inst_9885);
var state_9915__$1 = (function (){var statearr_9929 = state_9915;
(statearr_9929[(10)] = inst_9883__$1);

return statearr_9929;
})();
if(cljs.core.truth_(inst_9886)){
var statearr_9930_9959 = state_9915__$1;
(statearr_9930_9959[(1)] = (8));

} else {
var statearr_9931_9960 = state_9915__$1;
(statearr_9931_9960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (14))){
var inst_9908 = (state_9915[(2)]);
var inst_9909 = cljs.core.async.close_BANG_.call(null,out);
var state_9915__$1 = (function (){var statearr_9933 = state_9915;
(statearr_9933[(13)] = inst_9908);

return statearr_9933;
})();
var statearr_9934_9961 = state_9915__$1;
(statearr_9934_9961[(2)] = inst_9909);

(statearr_9934_9961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (10))){
var inst_9898 = (state_9915[(2)]);
var state_9915__$1 = state_9915;
var statearr_9935_9962 = state_9915__$1;
(statearr_9935_9962[(2)] = inst_9898);

(statearr_9935_9962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9916 === (8))){
var inst_9875 = (state_9915[(8)]);
var inst_9879 = (state_9915[(9)]);
var inst_9883 = (state_9915[(10)]);
var inst_9888 = inst_9875.push(inst_9879);
var tmp9932 = inst_9875;
var inst_9875__$1 = tmp9932;
var inst_9876 = inst_9883;
var state_9915__$1 = (function (){var statearr_9936 = state_9915;
(statearr_9936[(7)] = inst_9876);

(statearr_9936[(8)] = inst_9875__$1);

(statearr_9936[(14)] = inst_9888);

return statearr_9936;
})();
var statearr_9937_9963 = state_9915__$1;
(statearr_9937_9963[(2)] = null);

(statearr_9937_9963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7194__auto___9949,out))
;
return ((function (switch__7082__auto__,c__7194__auto___9949,out){
return (function() {
var cljs$core$async$state_machine__7083__auto__ = null;
var cljs$core$async$state_machine__7083__auto____0 = (function (){
var statearr_9941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9941[(0)] = cljs$core$async$state_machine__7083__auto__);

(statearr_9941[(1)] = (1));

return statearr_9941;
});
var cljs$core$async$state_machine__7083__auto____1 = (function (state_9915){
while(true){
var ret_value__7084__auto__ = (function (){try{while(true){
var result__7085__auto__ = switch__7082__auto__.call(null,state_9915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7085__auto__;
}
break;
}
}catch (e9942){if((e9942 instanceof Object)){
var ex__7086__auto__ = e9942;
var statearr_9943_9964 = state_9915;
(statearr_9943_9964[(5)] = ex__7086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9965 = state_9915;
state_9915 = G__9965;
continue;
} else {
return ret_value__7084__auto__;
}
break;
}
});
cljs$core$async$state_machine__7083__auto__ = function(state_9915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7083__auto____1.call(this,state_9915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7083__auto____0;
cljs$core$async$state_machine__7083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7083__auto____1;
return cljs$core$async$state_machine__7083__auto__;
})()
;})(switch__7082__auto__,c__7194__auto___9949,out))
})();
var state__7196__auto__ = (function (){var statearr_9944 = f__7195__auto__.call(null);
(statearr_9944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7194__auto___9949);

return statearr_9944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7196__auto__);
});})(c__7194__auto___9949,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map