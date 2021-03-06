// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5798__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5799__i = 0, G__5799__a = new Array(arguments.length -  0);
while (G__5799__i < G__5799__a.length) {G__5799__a[G__5799__i] = arguments[G__5799__i + 0]; ++G__5799__i;}
  args = new cljs.core.IndexedSeq(G__5799__a,0);
} 
return G__5798__delegate.call(this,args);};
G__5798.cljs$lang$maxFixedArity = 0;
G__5798.cljs$lang$applyTo = (function (arglist__5800){
var args = cljs.core.seq(arglist__5800);
return G__5798__delegate(args);
});
G__5798.cljs$core$IFn$_invoke$arity$variadic = G__5798__delegate;
return G__5798;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5801__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5802__i = 0, G__5802__a = new Array(arguments.length -  0);
while (G__5802__i < G__5802__a.length) {G__5802__a[G__5802__i] = arguments[G__5802__i + 0]; ++G__5802__i;}
  args = new cljs.core.IndexedSeq(G__5802__a,0);
} 
return G__5801__delegate.call(this,args);};
G__5801.cljs$lang$maxFixedArity = 0;
G__5801.cljs$lang$applyTo = (function (arglist__5803){
var args = cljs.core.seq(arglist__5803);
return G__5801__delegate(args);
});
G__5801.cljs$core$IFn$_invoke$arity$variadic = G__5801__delegate;
return G__5801;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map