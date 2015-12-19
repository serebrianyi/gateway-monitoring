// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('gateway_monitoring.server.mailing');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('gateway_monitoring.server.config');
goog.require('gateway_monitoring.server.logging');
gateway_monitoring.server.mailing.nodemailer = cljs.nodejs.require.call(null,"nodemailer");
gateway_monitoring.server.mailing.create_mail = (function gateway_monitoring$server$mailing$create_mail(mail_address,gateway_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),mail_address,new cljs.core.Keyword(null,"to","to",192099007),mail_address,new cljs.core.Keyword(null,"subject","subject",-1411880451),"Gateway offline",new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Gateway with id "),cljs.core.str(gateway_id),cljs.core.str(" went offline")].join('')], null);
});
gateway_monitoring.server.mailing.mail_sent = (function gateway_monitoring$server$mailing$mail_sent(error,info){
if(cljs.core.empty_QMARK_.call(null,error)){
return gateway_monitoring.server.logging.info.call(null,"Gateway offline mail was sent");
} else {
return gateway_monitoring.server.logging.error.call(null,error);
}
});
gateway_monitoring.server.mailing.mail_adress_from_props = (function gateway_monitoring$server$mailing$mail_adress_from_props(props){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(props));
});
gateway_monitoring.server.mailing.send_gateway_offline_mail = (function gateway_monitoring$server$mailing$send_gateway_offline_mail(gateway_id){
try{var mail_config = new cljs.core.Keyword(null,"mail","mail",795732905).cljs$core$IFn$_invoke$arity$1(gateway_monitoring.server.config.config_file.call(null));
var mail_address = gateway_monitoring.server.mailing.mail_adress_from_props.call(null,mail_config);
var mail = cljs.core.clj__GT_js.call(null,gateway_monitoring.server.mailing.create_mail.call(null,mail_address,gateway_id));
var transporter = gateway_monitoring.server.mailing.nodemailer.createTransport(cljs.core.clj__GT_js.call(null,mail_config));
return transporter.sendMail(mail,gateway_monitoring.server.mailing.mail_sent);
}catch (e10259){if((e10259 instanceof Error)){
var e = e10259;
return gateway_monitoring.server.logging.error.call(null,e);
} else {
throw e10259;

}
}});

//# sourceMappingURL=mailing.js.map