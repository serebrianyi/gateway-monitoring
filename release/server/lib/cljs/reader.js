// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

/**
 * @interface
 */
cljs.reader.PushbackReader = function(){};

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$read_char$arity$1 == null)))){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__5323__auto__ = (((reader == null))?null:reader);
var m__5324__auto__ = (cljs.reader.read_char[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,reader);
} else {
var m__5324__auto____$1 = (cljs.reader.read_char["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,reader);
} else {
throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$unread$arity$2 == null)))){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__5323__auto__ = (((reader == null))?null:reader);
var m__5324__auto__ = (cljs.reader.unread[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,reader,ch);
} else {
var m__5324__auto____$1 = (cljs.reader.unread["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,reader,ch);
} else {
throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
}
});


/**
* @constructor
 * @implements {cljs.reader.PushbackReader}
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__4668__auto__ = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch);

return next_ch;
})())));
});
cljs.reader.read;

cljs.reader.macros;

cljs.reader.dispatch_macros;
cljs.reader.reader_error = (function cljs$reader$reader_error(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10139 = arguments.length;
var i__5727__auto___10140 = (0);
while(true){
if((i__5727__auto___10140 < len__5726__auto___10139)){
args__5733__auto__.push((arguments[i__5727__auto___10140]));

var G__10141 = (i__5727__auto___10140 + (1));
i__5727__auto___10140 = G__10141;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

cljs.reader.reader_error.cljs$lang$applyTo = (function (seq10137){
var G__10138 = cljs.core.first.call(null,seq10137);
var seq10137__$1 = cljs.core.next.call(null,seq10137);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__10138,seq10137__$1);
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__4656__auto__ = !((ch === "#"));
if(and__4656__auto__){
var and__4656__auto____$1 = !((ch === "'"));
if(and__4656__auto____$1){
var and__4656__auto____$2 = !((ch === ":"));
if(and__4656__auto____$2){
return cljs.reader.macros.call(null,ch);
} else {
return and__4656__auto____$2;
}
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_.call(null,ch)) || (cljs.reader.macro_terminating_QMARK_.call(null,ch))){
cljs.reader.unread.call(null,rdr,ch);

return sb.toString();
} else {
var G__10142 = (function (){
sb.append(ch);

return sb;
})()
;
var G__10143 = cljs.reader.read_char.call(null,rdr);
sb = G__10142;
ch = G__10143;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char.call(null,reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.call(null,ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),parseInt((groups[(6)]),(10))]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = parseInt(n,radix);
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return (parseInt(numinator,(10)) / parseInt(denominator,(10)));
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
return parseFloat(s);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s))){
return cljs.reader.match_int.call(null,s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio.call(null,s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s))){
return cljs.reader.match_float.call(null,s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = parseInt(code_str,(16));
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char.call(null,reader);
var mapresult = cljs.reader.escape_char_map.call(null,ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else {
if(cljs.reader.numeric_QMARK_.call(null,ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch))){
var G__10144 = cljs.reader.read_char.call(null,rdr);
ch = G__10144;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}

if((delim === ch)){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__4423__auto__ = cljs.reader.macros.call(null,ch);
if(cljs.core.truth_(temp__4423__auto__)){
var macrofn = temp__4423__auto__;
var mret = macrofn.call(null,rdr,ch);
var G__10145 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__10145;
continue;
} else {
cljs.reader.unread.call(null,rdr,ch);

var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
var G__10146 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__10146;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.maybe_read_tagged_type;
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char.call(null,rdr);
var dm = cljs.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(dm)){
return dm.call(null,rdr,_);
} else {
var temp__4423__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);
if(cljs.core.truth_(temp__4423__auto__)){
var obj = temp__4423__auto__;
return obj;
} else {
return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l))){
cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__4668__auto__ = (ch == null);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
return cljs.reader.macros.call(null,ch);
}
}
})())){
cljs.reader.unread.call(null,reader,ch);

var s = buffer.toString();
var or__4668__auto__ = cljs.reader.match_number.call(null,s);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else {
var G__10147 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__10148 = cljs.reader.read_char.call(null,reader);
buffer = G__10147;
ch = G__10148;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
if(("\\" === ch)){
var G__10149 = (function (){
buffer.append(cljs.reader.escape_char.call(null,buffer,reader));

return buffer;
})()
;
var G__10150 = cljs.reader.read_char.call(null,reader);
buffer = G__10149;
ch = G__10150;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__10151 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__10152 = cljs.reader.read_char.call(null,reader);
buffer = G__10151;
ch = G__10152;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char.call(null,reader);
if((nch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
var G__10157 = (function (){var G__10155 = buffer;
G__10155.append(nch);

return G__10155;
})();
var G__10158 = cljs.reader.read_char.call(null,reader);
buffer = G__10157;
ch = G__10158;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__10159 = (function (){var G__10156 = buffer;
G__10156.append(ch);

return G__10156;
})();
var G__10160 = cljs.reader.read_char.call(null,reader);
buffer = G__10159;
ch = G__10160;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_((function (){var and__4656__auto__ = goog.string.contains(token,"/");
if(cljs.core.truth_(and__4656__auto__)){
return !((token.length === (1)));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,(0),token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_literal = (function cljs$reader$read_literal(rdr,ch){
var token = cljs.reader.read_token.call(null,rdr,ch);
var chars = cljs.core.subs.call(null,token,(1));
if((chars.length === (1))){
return chars;
} else {
if((chars === "tab")){
return "\t";
} else {
if((chars === "return")){
return "\r";
} else {
if((chars === "newline")){
return "\n";
} else {
if((chars === "space")){
return " ";
} else {
if((chars === "backspace")){
return "\b";
} else {
if((chars === "formfeed")){
return "\f";
} else {
if((chars.charAt((0)) === "u")){
return cljs.reader.make_unicode_char.call(null,cljs.core.subs.call(null,chars,(1)));
} else {
if((chars.charAt((0)) === "o")){
return cljs.reader.not_implemented.call(null,rdr,token);
} else {
return cljs.reader.reader_error.call(null,rdr,"Unknown character literal: ",token);

}
}
}
}
}
}
}
}
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.call(null,ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.call(null,token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}

var o = cljs.reader.read.call(null,rdr,true,null,true);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || (o.cljs$core$IWithMeta$))?true:(((!o.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,o))){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_raw_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_literal;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
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
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 * 
 * Only supports edn (similar to clojure.edn/read)
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char.call(null,reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_.call(null,ch)){
var G__10163 = reader;
var G__10164 = eof_is_error;
var G__10165 = sentinel;
var G__10166 = is_recursive;
reader = G__10163;
eof_is_error = G__10164;
sentinel = G__10165;
is_recursive = G__10166;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_.call(null,ch)){
var G__10167 = cljs.reader.read_comment.call(null,reader,ch);
var G__10168 = eof_is_error;
var G__10169 = sentinel;
var G__10170 = is_recursive;
reader = G__10167;
eof_is_error = G__10168;
sentinel = G__10169;
is_recursive = G__10170;
continue;
} else {
var f = cljs.reader.macros.call(null,ch);
var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):cljs.reader.read_symbol.call(null,reader,ch)
));
if((res === reader)){
var G__10171 = reader;
var G__10172 = eof_is_error;
var G__10173 = sentinel;
var G__10174 = is_recursive;
reader = G__10171;
eof_is_error = G__10172;
sentinel = G__10173;
is_recursive = G__10174;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
if(typeof s === 'string'){
} else {
throw (new Error("Cannot read from non-string object."));
}

var r = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__10175 = b.append("0");
b = G__10175;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__4656__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__4656__auto__)){
var or__4668__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__4656__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.call(null,null,[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join(''));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__10177 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__10177,(0),null);
var years = cljs.core.nth.call(null,vec__10177,(1),null);
var months = cljs.core.nth.call(null,vec__10177,(2),null);
var days = cljs.core.nth.call(null,vec__10177,(3),null);
var hours = cljs.core.nth.call(null,vec__10177,(4),null);
var minutes = cljs.core.nth.call(null,vec__10177,(5),null);
var seconds = cljs.core.nth.call(null,vec__10177,(6),null);
var fraction = cljs.core.nth.call(null,vec__10177,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__10177,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__10177,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__10177,(10),null);
var v = vec__10177;
if(cljs.core.not.call(null,v)){
return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join(''));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4668__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4423__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10179 = temp__4423__auto__;
var years = cljs.core.nth.call(null,vec__10179,(0),null);
var months = cljs.core.nth.call(null,vec__10179,(1),null);
var days = cljs.core.nth.call(null,vec__10179,(2),null);
var hours = cljs.core.nth.call(null,vec__10179,(3),null);
var minutes = cljs.core.nth.call(null,vec__10179,(4),null);
var seconds = cljs.core.nth.call(null,vec__10179,(5),null);
var ms = cljs.core.nth.call(null,vec__10179,(6),null);
var offset = cljs.core.nth.call(null,vec__10179,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__10192_10204 = cljs.core.seq.call(null,form);
var chunk__10193_10205 = null;
var count__10194_10206 = (0);
var i__10195_10207 = (0);
while(true){
if((i__10195_10207 < count__10194_10206)){
var x_10208 = cljs.core._nth.call(null,chunk__10193_10205,i__10195_10207);
arr.push(x_10208);

var G__10209 = seq__10192_10204;
var G__10210 = chunk__10193_10205;
var G__10211 = count__10194_10206;
var G__10212 = (i__10195_10207 + (1));
seq__10192_10204 = G__10209;
chunk__10193_10205 = G__10210;
count__10194_10206 = G__10211;
i__10195_10207 = G__10212;
continue;
} else {
var temp__4425__auto___10213 = cljs.core.seq.call(null,seq__10192_10204);
if(temp__4425__auto___10213){
var seq__10192_10214__$1 = temp__4425__auto___10213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10192_10214__$1)){
var c__5471__auto___10215 = cljs.core.chunk_first.call(null,seq__10192_10214__$1);
var G__10216 = cljs.core.chunk_rest.call(null,seq__10192_10214__$1);
var G__10217 = c__5471__auto___10215;
var G__10218 = cljs.core.count.call(null,c__5471__auto___10215);
var G__10219 = (0);
seq__10192_10204 = G__10216;
chunk__10193_10205 = G__10217;
count__10194_10206 = G__10218;
i__10195_10207 = G__10219;
continue;
} else {
var x_10220 = cljs.core.first.call(null,seq__10192_10214__$1);
arr.push(x_10220);

var G__10221 = cljs.core.next.call(null,seq__10192_10214__$1);
var G__10222 = null;
var G__10223 = (0);
var G__10224 = (0);
seq__10192_10204 = G__10221;
chunk__10193_10205 = G__10222;
count__10194_10206 = G__10223;
i__10195_10207 = G__10224;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
var seq__10198_10225 = cljs.core.seq.call(null,form);
var chunk__10199_10226 = null;
var count__10200_10227 = (0);
var i__10201_10228 = (0);
while(true){
if((i__10201_10228 < count__10200_10227)){
var vec__10202_10229 = cljs.core._nth.call(null,chunk__10199_10226,i__10201_10228);
var k_10230 = cljs.core.nth.call(null,vec__10202_10229,(0),null);
var v_10231 = cljs.core.nth.call(null,vec__10202_10229,(1),null);
(obj[cljs.core.name.call(null,k_10230)] = v_10231);

var G__10232 = seq__10198_10225;
var G__10233 = chunk__10199_10226;
var G__10234 = count__10200_10227;
var G__10235 = (i__10201_10228 + (1));
seq__10198_10225 = G__10232;
chunk__10199_10226 = G__10233;
count__10200_10227 = G__10234;
i__10201_10228 = G__10235;
continue;
} else {
var temp__4425__auto___10236 = cljs.core.seq.call(null,seq__10198_10225);
if(temp__4425__auto___10236){
var seq__10198_10237__$1 = temp__4425__auto___10236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10198_10237__$1)){
var c__5471__auto___10238 = cljs.core.chunk_first.call(null,seq__10198_10237__$1);
var G__10239 = cljs.core.chunk_rest.call(null,seq__10198_10237__$1);
var G__10240 = c__5471__auto___10238;
var G__10241 = cljs.core.count.call(null,c__5471__auto___10238);
var G__10242 = (0);
seq__10198_10225 = G__10239;
chunk__10199_10226 = G__10240;
count__10200_10227 = G__10241;
i__10201_10228 = G__10242;
continue;
} else {
var vec__10203_10243 = cljs.core.first.call(null,seq__10198_10237__$1);
var k_10244 = cljs.core.nth.call(null,vec__10203_10243,(0),null);
var v_10245 = cljs.core.nth.call(null,vec__10203_10243,(1),null);
(obj[cljs.core.name.call(null,k_10244)] = v_10245);

var G__10246 = cljs.core.next.call(null,seq__10198_10237__$1);
var G__10247 = null;
var G__10248 = (0);
var G__10249 = (0);
seq__10198_10225 = G__10246;
chunk__10199_10226 = G__10247;
count__10200_10227 = G__10248;
i__10201_10228 = G__10249;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.call(null,null,[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join(''));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol.call(null,rdr,initch);
var pfn = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(tag)].join(''));
var dfn = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
if(cljs.core.truth_(pfn)){
return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else {
if(cljs.core.truth_(dfn)){
return dfn.call(null,tag,cljs.reader.read.call(null,rdr,true,null,false));
} else {
return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map