(function(g){var window=this;var rya=function(a,b){var c=[];g.Nl(b,function(a){try{var b=g.OD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.ND(b)&&c.push(a):c.push(a)},a);
return c},sya=function(a,b){var c=rya(a,b);
(0,g.H)(c,function(a){g.OD.prototype.remove.call(this,a)},a)},S7=function(a,b){g.J0.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.T=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},tya=function(){var a=g.oH;
sya(a,a.g.Yd(!0))},T7=function(a){g.RH.call(this,"ScreenServiceProxy");
this.dd=a;this.o=[];this.o.push(this.dd.$_s("screenChange",(0,g.A)(this.sU,this)));this.o.push(this.dd.$_s("onlineScreenChange",(0,g.A)(this.AQ,this)))},U7=function(a){g.EH("cloudview",a)},uya=function(a){U7("setApiReady_ "+a);
g.ra("yt.mdx.remote.cloudview.apiReady_",a,void 0)},V7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},vya=function(a){g.HG[a]&&(a=g.HG[a],(0,g.H)(a,function(a){g.FG[a]&&delete g.FG[a]}),a.length=0)},wya=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},W7=function(){return g.x("yt.mdx.remote.connection_")},X7=function(a){g.ra("yt.mdx.remote.connectData_",a,void 0)},xya=function(a){g.ra("yt.mdx.remote.currentScreenId_",a,void 0)},Y7=function(){return g.x("yt.mdx.remote.currentScreenId_")},
$7=function(){if(!Z7){var a=g.x("yt.mdx.remote.screenService_");
Z7=a?new T7(a):null}return Z7},a8=function(a){g.ra("yt.mdx.remote.cloudview.initializing_",a,void 0)},b8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},c8=function(a){U7("setCastInstalled_ "+a);
g.qH("yt-remote-cast-installed",a)},d8=function(a){g.EH("cloudview",a)},yya=function(a,b){V7().init(a,b)},e8=function(){return!!g.rH("yt-remote-cast-installed")},zya=function(){U7("dispose");
var a=V7();a&&a.dispose();g.ra("yt.mdx.remote.cloudview.instance_",null,void 0);uya(!1);g.JG(f8);f8.length=0},Aya=function(){var a=window.document.createElement("a");
g.Tc(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Va(a)},Bya=function(a,b){var c=g.yd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Uc(c,g.Zd("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Cya=function(a){var b=g.EG();
if(b)if(b.clear(a),a)vya(a);else for(var c in g.HG)vya(c)},g8=function(){var a=wya();
a&&a(!1,"No cast extension found")},h8=function(a){return 0<=window.navigator.userAgent.indexOf(a)},i8=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},Dya=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},j8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},l8=function(a){var b=W7();
X7(null);a||xya("");g.ra("yt.mdx.remote.connection_",a,void 0);k8&&((0,g.H)(k8,function(b){b(a)}),k8.length=0);
b&&!a?g.MG("yt-remote-connection-change",!1):!b&&a&&g.MG("yt-remote-connection-change",!0)},Eya=function(){return g.x("yt.mdx.remote.connectData_")},m8=function(){var a=Y7();
if(!a)return null;var b=$7().fe();return g.QH(b,a)},Fya=function(a,b){c8(!0);
a8(!1);yya(a,function(a){a?(uya(!0),g.KG("yt-remote-cast2-api-ready")):(d8("Failed to initialize cast API."),c8(!1),g.sH("yt-remote-cast-available"),g.sH("yt-remote-cast-receiver"),zya());b(a)})},Gya=function(){return e8()?V7()?V7().getCastSession():(d8("getCastSelector: Cast is not initialized."),null):(d8("getCastSelector: Cast API is not installed!"),null)},Hya=function(){var a=Aya(),b=window.document.getElementById(a),c=b&&g.UF(b,"loaded");
c||b&&!c||(b=Bya(a,function(){g.UF(b,"loaded")||(g.VF(b,"loaded","true"),g.KG(a),g.YE(g.Aa(Cya,a),0))}))},Iya=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},Jya=function(){if(g.era){var a=2,b=wya(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;i8("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g8,c)}},n8=function(a){if(a>=g.gra.length)g8();
else{var b=g.gra[a],c="chrome-extension://"+b+g.dra;0<=g.d2.indexOf(b)?Dya(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,i8(c,g8)):n8(a+1)}):i8(c,function(){n8(a+1)})}},p8=function(a,b){Y7();
m8()&&m8();xya(a.id);var c=new g.WI(o8,a,j8());c.connect(b,Eya());c.subscribe("beforeDisconnect",function(a){g.MG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){W7()&&(W7(),l8(null))});
l8(c)},q8=function(){var a=g.YH();
if(!a)return null;var b=$7().fe();return g.QH(b,a)},r8=function(a){g.EH("remote",a)},s8=function(){var a=W7();
return!!a&&3!=a.getProxyState()},t8=function(){b8()?V7().stopSession():d8("stopSession called before API ready.");
var a=W7();a&&(a.disconnect(1),l8(null))},Kya=function(){var a=$7().dd.$_gos();
var b=m8();b&&W7()&&(g.PH(a,b)||a.push(b));return Iya(a)},v8=function(a,b){g.vG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.VB;this.A=this.o=null;this.I=(0,g.A)(this.IO,this);this.F=(0,g.A)(this.Bl,this);this.G=(0,g.A)(this.HO,this);this.J=(0,g.A)(this.VO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Lu,this),Lya(this))):c=3;0!=c&&(b?this.Lu(c):g.YE((0,g.A)(function(){this.Lu(c)},this),0));
var d=Gya();d&&u8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},w8=function(a){return new g.LI(a.B.getPlayerContextData())},Mya=function(a,b,c,d,e){var f=w8(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.PI(f,b,d);g.t(c)&&(g.NI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);x8(a,"setPlaylist",l);e||y8(a,f)},Lya=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Aa(this.RQ,a),this))},a)},Nya=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},z8=function(a,b){50>a.C.Jc()&&g.XB(a.C,b)},A8=function(a,b,c){var d=w8(a);
g.NI(d,c);-1E3!=d.g&&(d.g=b);y8(a,d)},x8=function(a,b,c){a.B.sendMessage(b,c)},y8=function(a,b){Nya(a);
a.B.setPlayerContextData(g.QI(b));Lya(a)},u8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.Bl(null));
a.A=b;a.A&&(B8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.Bl(a.A.media[0]))},Oya=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=w8(a);b.contentId!=d.videoId&&B8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.NI(d,a.o.getEstimatedTime());y8(a,d)}else B8("No cast media video. Ignoring state update.")},B8=function(a){g.EH("CP",a)},C8=function(a,b,c){return(0,g.A)(function(a){this.hc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.hc("Retrying "+b+" using MDx browser channel."),x8(this,b,c))},a)},Pya=function(a,b,c){var d=!1;
V7()||(a=new g.FI(a,b,c),a.subscribe("yt-remote-cast2-availability-change",function(a){g.qH("yt-remote-cast-available",a);g.MG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){U7("onReceiverSelected: "+a.friendlyName);
g.qH("yt-remote-cast-receiver",a);g.MG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){U7("onReceiverResumed: "+a.friendlyName);
g.qH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){U7("onSessionChange: "+g.MH(a));
a||g.sH("yt-remote-cast-receiver");g.MG("yt-remote-cast2-session-change",a)}),g.ra("yt.mdx.remote.cloudview.instance_",a,void 0),d=!0);
U7("cloudview.createSingleton_: "+d);return d},Qya=function(){var a=0<=g.Hb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.rF||a},D8=function(a,b){b8()?V7().setConnectedScreenStatus(a,b):d8("setConnectedScreenStatus called before ready.")},Rya=function(){U7("clearCurrentReceiver");
g.sH("yt-remote-cast-receiver")},Sya=function(){if(h8("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Jya();a({command:"cast.sender.init"});return}}if(!window.chrome||h8("Edge"))g8();else if(Jya(),h8("Android")&&h8("Chrome/")&&window.navigator.presentation){a="";var b=g.Mh();55<=b?a="55":50<=b&&(a="50");i8("//www.gstatic.com/eureka/clank"+a+g.dra,g8)}else n8(0)},Tya=function(a){a?(g.qH("yt-remote-session-app",a.app),g.qH("yt-remote-session-name",a.name)):(g.sH("yt-remote-session-app"),g.sH("yt-remote-session-name"));
g.ra("yt.mdx.remote.channelParams_",a,void 0)},Uya=function(){var a=j8();
if(g.Vb(a)){a=g.XH();var b=g.rH("yt-remote-session-name")||"",c=g.rH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ra("yt.mdx.remote.channelParams_",a,void 0)}},Vya=function(){var a=q8();
a?(r8("Resume connection to: "+g.MH(a)),p8(a,0)):(g.eI(),Rya(),r8("Skipping connecting because no session screen found."))},Wya=function(a){r8("remote.onCastSessionChange_: "+g.MH(a));
if(a){var b=m8();b&&b.id==a.id?D8(b.id,"YouTube TV"):(b&&t8(),p8(a,1))}else W7()&&t8()},Xya=function(){var a=Kya(),b=m8();
b||(b=q8());return g.cb(a,function(a){return b&&g.JH(b,a.key)?!0:!1})},Yya=function(){var a=g.rH("yt-remote-cast-receiver");
return a?a.friendlyName:null},Zya=function(a,b,c,d,e,f){Qya()?Pya(b,e,f)&&(a8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Fya(a,c):(window.__onGCastApiAvailable=function(b,d){b?Fya(a,c):(d8("Failed to load cast API: "+d),c8(!1),a8(!1),g.sH("yt-remote-cast-available"),g.sH("yt-remote-cast-receiver"),zya(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Hya():Sya())):U7("Cannot initialize because not running Chrome")},
$ya=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Hg(a)||"";b&&(this.port=":"+b);this.domain=g.Gg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ua(a,"10.0")&&(this.o=!1))},E8=function(){var a=Xya();
!a&&e8()&&Yya()&&(a={key:"cast-selector-receiver",name:Yya()});return a},aza=function(){var a=Kya();
e8()&&g.rH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},bza=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.oE("MDX_CONFIG")||b;g.oH&&tya();g.ZH();o8||(o8=new $ya(b?b.loungeApiHost:void 0),g.gI()&&(o8.g="/api/loungedev"));k8||(k8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ra("yt.mdx.remote.deferredProxies_",k8,void 0));Uya();var c=$7();if(!c){var d=new g.rI(o8);g.ra("yt.mdx.remote.screenService_",d,void 0);c=$7();Zya(a,d,function(a){a?Y7()&&D8(Y7(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.MG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),
b?b.appId:void 0,b?b.U2:!1)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ra("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.yg(b)),F8.push(g.IG("yt-remote-cast2-availability-change",function(){g.MG("yt-remote-receiver-availability-change")})),F8.push(g.IG("yt-remote-cast2-receiver-selected",function(){X7(null);
g.MG("yt-remote-auto-connect","cast-selector-receiver")})),F8.push(g.IG("yt-remote-cast2-receiver-resumed",function(){g.MG("yt-remote-receiver-resumed","cast-selector-receiver")})),F8.push(g.IG("yt-remote-cast2-session-change",Wya)),F8.push(g.IG("yt-remote-connection-change",function(a){a?D8(Y7(),"YouTube TV"):q8()||(D8(null,null),Rya())})),a=j8(),b.isAuto&&(a.id+="#dial"),g.BF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),r8(" -- with channel params: "+
g.yg(a)),Tya(a),c.start(),Y7()||Vya())},G8=function(){e8()?V7()?b8()?(U7("Requesting cast selector."),V7().requestSession()):(U7("Wait for cast API to be ready to request the session."),f8.push(g.IG("yt-remote-cast2-api-ready",G8))):d8("requestCastSelector: Cast is not initialized."):d8("requestCastSelector: Cast API is not installed!")},H8=function(a,b,c){g.L.call(this);
this.F=a;this.T=b;this.o=new g.sG(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.UP);this.o.P(b,"captionschanged",this.GO);this.o.P(b,"captionssettingschanged",this.ZC);this.o.P(b,"videoplayerreset",this.Ao);this.o.P(b,"mdxautoplaycancel",this.qH);this.N=this.o.P(b,"onVolumeChange",this.tB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.FB,this);c.subscribe("remotePlayerChange",this.El,this);c.subscribe("remoteQueueChange",this.Ao,this);c.subscribe("autoplayUpNext",this.gB,
this);c.subscribe("previousNextChange",this.CB,this);c.subscribe("nowAutoplaying",this.uB,this);c.subscribe("autoplayDismissed",this.fB,this);this.suggestion=null;this.G=new g.bR(64);this.A=new g.Ft(this.UC,500,this);g.M(this,this.A);this.B=new g.Ft(this.VC,1E3,this);g.M(this,this.B);this.C={};this.J=new g.Ft(this.nD,1E3,this);g.M(this,this.J);this.I=new g.uk(this.EM,1E3,this);g.M(this,this.I);this.L=g.y;this.ZC();this.Ao();this.El()},I8=function(a,b){var c=a.F,d=a.T.ga().lengthSeconds;
c.I=b||0;c.g.X("progresssync",b,d)},cza=function(a){I8(a,0);
a.A.stop();J8(a,new g.bR(64))},L8=function(a,b){if(K8(a)&&!a.D){var c=null;
b&&(c={style:a.T.ti()},g.cc(c,b));a.g.NC(a.T.ga().videoId,c);a.C=w8(a.g).o}},X8=function(a,b){var c=a.T.Yf();
c?Mya(a.g,a.T.ga().videoId,b,c.ce(),c.listId.toString()):Mya(a.g,a.T.ga().videoId,b);J8(a,new g.bR(1))},dza=function(a,b){if(b){var c=a.T.xc("captions","tracklist",{Sy:1});
c&&c.length?(a.T.Cd("captions","track",b),a.D=!1):(a.T.nl("captions"),a.D=!0)}else a.T.Cd("captions","track",{})},K8=function(a){return w8(a.g).videoId==a.T.ga().videoId},J8=function(a,b){a.B.stop();
var c=a.G;if(!g.hR(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.T;g.B1(e.app,d,e.playerType)}a.G=b;eza(a.F,c,b)}},i9=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.tE()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.aX(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);fza(this,g.YV(a))},fza=function(a,b){if(3==a.A.Za()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.xb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.Ga("statustext",c);a.o.show()}else a.o.hide()},j9=function(a){g.VW.call(this,a);
this.A={key:g.OH(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.bR(64);this.I=0;var b=g.RV(a).F;b&&(b=b.A&&b.A.g)&&(b=new S7(a,b),g.M(this,b));b=new i9(a);g.M(this,b);g.sW(a,b.element,4)},eza=function(a,b,c){a.F=c;
a.g.X("presentingplayerstatechange",new g.mR(c,b))},r9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)t8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga().videoId;if(c||d){var e=a.g.Yf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.dc(k).videoId}else f=[a.g.ga().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Gz(),0),currentTime:a.g.getCurrentTime()}}else c=null;r8("Connecting to: "+g.yg(b));"cast-selector-receiver"==b.key?(X7(c||null),c=c||null,b8()?V7().setLaunchParams(c):d8("setLaunchParams called before ready.")):!c&&s8()&&Y7()==b.key?g.MG("yt-remote-connection-change",!0):
(t8(),X7(c||null),c=$7().fe(),(c=g.QH(c,b.key))&&p8(c,1))}};
g.p(S7,g.J0);S7.prototype.I=function(){var a=this.T.xc("remote","receivers");a&&1<a.length&&!this.T.xc("remote","quickCast")?(this.F=g.Eb(a,this.B,this),g.K0(this,(0,g.J)(a,this.B)),a=this.T.xc("remote","currentReceiver"),this.pf(this.B(a)),this.enable(!0)):this.enable(!1)};
S7.prototype.B=function(a){return a.key};
S7.prototype.nf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
S7.prototype.rd=function(a){g.J0.prototype.rd.call(this,a);this.T.Cd("remote","currentReceiver",this.F[a]);this.A.Ub()};
g.D(T7,g.RH);g.h=T7.prototype;g.h.fe=function(a){return this.dd.$_gs(a)};
g.h.contains=function(a){return!!this.dd.$_c(a)};
g.h.get=function(a){return this.dd.$_g(a)};
g.h.start=function(){this.dd.$_st()};
g.h.zp=function(a,b,c){this.dd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.dd.$_r(a,b,c)};
g.h.jp=function(a,b,c,d){this.dd.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.dd.$_ubk(this.o[a]);this.o.length=0;this.dd=null;T7.Z.W.call(this)};
g.h.sU=function(){this.X("screenChange")};
g.h.AQ=function(){this.X("onlineScreenChange")};
var Z7=null,f8=[],k8=null,o8=null;g.D(v8,g.vG);g.h=v8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,C8(this,"play")):x8(this,"play"),A8(this,1,g.OI(w8(this))),this.X("remotePlayerChange")):z8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,C8(this,"pause")):x8(this,"pause"),A8(this,2,g.OI(w8(this))),this.X("remotePlayerChange")):z8(this,this.pause)};
g.h.zD=function(a){if(1==this.g){if(this.o){var b=w8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.xb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,C8(this,"seekTo",{newTime:a}))}else x8(this,"seekTo",{newTime:a});A8(this,3,a);this.X("remotePlayerChange")}else z8(this,g.Aa(this.zD,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,C8(this,"stopVideo")):x8(this,"stopVideo");var a=w8(this);a.index=-1;a.videoId="";g.MI(a);y8(this,a);this.X("remotePlayerChange")}else z8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=w8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.A)(function(){B8("set receiver volume: "+d)},this),(0,g.A)(function(){this.hc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.A)(function(){B8("set receiver muted: "+b)},this),(0,g.A)(function(){this.hc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);x8(this,"setVolume",e)}c.muted=b;c.volume=a;y8(this,c)}else z8(this,g.Aa(this.setVolume,a,b))};
g.h.NC=function(a,b){if(1==this.g){var c=w8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.yg(b.style),g.cc(d,c.o));x8(this,"setSubtitlesTrack",d);y8(this,c)}else z8(this,g.Aa(this.NC,a,b))};
g.h.Ku=function(a,b){if(1==this.g){x8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Sc.id});var c=w8(this);c.audioTrackId=b.Sc.id;y8(this,c)}else z8(this,g.Aa(this.Ku,a,b))};
g.h.yD=function(a,b){if(1==this.g){if(a&&b){var c=w8(this);g.PI(c,a,b);y8(this,c)}x8(this,"previous")}else z8(this,g.Aa(this.yD,a,b))};
g.h.xD=function(a,b){if(1==this.g){if(a&&b){var c=w8(this);g.PI(c,a,b);y8(this,c)}x8(this,"next")}else z8(this,g.Aa(this.xD,a,b))};
g.h.lx=function(){1==this.g?x8(this,"dismissAutoplay"):z8(this,this.lx)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.X("proxyStateChange",a,this.g)}v8.Z.dispose.call(this)};
g.h.W=function(){Nya(this);this.B=null;this.C.clear();u8(this,null);v8.Z.W.call(this)};
g.h.Lu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.X("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.YB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.RQ=function(a,b){this.X(a,b)};
g.h.IO=function(a){if(!a)this.Bl(null),u8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=w8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)B8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,y8(this,b)}};
g.h.Bl=function(a){B8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Oya(this),this.X("remotePlayerChange")};
g.h.HO=function(a){a?(Oya(this),this.X("remotePlayerChange")):this.Bl(null)};
g.h.VO=function(){var a=Gya();a&&u8(this,a)};
g.h.hc=function(a){g.EH("CP",a)};
var F8=[];g.h=$ya.prototype;g.h.fi=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Og(b+a,{})};
g.h.Ju=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Vb:g.Aa(this.nU,c,!0),onError:g.Aa(this.mU,d),Ed:g.Aa(this.oU,d)};b&&(c.Nb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.lF(a,c)};
g.h.nU=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.mU=function(a,b){a(Error("Request error: "+b.status))};
g.h.oU=function(a){a(Error("request timed out"))};g.p(H8,g.L);g.h=H8.prototype;g.h.W=function(){g.L.prototype.W.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.FB,this);this.g.unsubscribe("remotePlayerChange",this.El,this);this.g.unsubscribe("remoteQueueChange",this.Ao,this);this.g.unsubscribe("autoplayUpNext",this.gB,this);this.g.unsubscribe("previousNextChange",this.CB,this);this.g.unsubscribe("nowAutoplaying",this.uB,this);this.g.unsubscribe("autoplayDismissed",this.fB,this);this.g=this.F=null};
g.h.gA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(K8(this)){if(1081!=w8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":w8(this.g).xb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.jj(c[0],c[1]);break;case "control_subtitles_set_track":L8(this,c[0]);break;case "control_set_audio_track":c=c[0],K8(this)&&this.g.Ku(this.T.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":X8(this,this.T.getCurrentTime());break;case "control_seek":X8(this,c[0]);break;case "control_subtitles_set_track":L8(this,c[0]);break;case "control_set_audio_track":c=c[0],K8(this)&&this.g.Ku(this.T.ga().videoId,c)}};
g.h.GO=function(a){this.gA("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.ZC=function(){var a=this.T.xc("captions","track");g.Vb(a)||L8(this,a)};
g.h.tB=function(a){if(K8(this)){this.g.unsubscribe("remotePlayerChange",this.El,this);var b=Math.round(a.volume);a=!!a.muted;var c=w8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.J.start();this.g.subscribe("remotePlayerChange",this.El,this)}};
g.h.UP=function(){g.Vb(this.C)||dza(this,this.C);this.D=!1};
g.h.FB=function(a,b){this.B.stop();2==b&&this.VC()};
g.h.El=function(){if(K8(this)){this.A.stop();var a=w8(this.g);switch(a.g){case 1081:J8(this,new g.bR(8));break;case 1:this.UC();J8(this,new g.bR(8));break;case 1083:case 3:J8(this,new g.bR(9));break;case 0:J8(this,new g.bR(2));this.I.stop();I8(this,this.T.ga().lengthSeconds);break;case 1082:J8(this,new g.bR(4));break;case 2:J8(this,new g.bR(4));I8(this,g.OI(a));break;case -1:J8(this,new g.bR(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},J8(this,new g.bR(128,
a))}a=w8(this.g).o;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,dza(this,a));a=w8(this.g);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.Le()==a.muted||this.J.isActive()||this.nD()}else cza(this)};
g.h.CB=function(){this.T.X("mdxpreviousnextchange")};
g.h.Ao=function(){K8(this)||cza(this)};
g.h.qH=function(){this.g.lx()};
g.h.gB=function(a){a&&(a=g.lF("/watch_queue_ajax",{method:"GET",Yc:{action_get_watch_queue_item:1,video_id:a},Vb:(0,g.A)(this.TR,this)}))&&(this.L=(0,g.A)(a.abort,a))};
g.h.TR=function(a,b){var c=new g.ZP({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.X("mdxautoplayupnext",c)};
g.h.uB=function(a){(0,window.isNaN)(a)||this.T.X("mdxnowautoplaying",a)};
g.h.fB=function(){this.T.X("mdxautoplaycanceled")};
g.h.EM=function(a,b){-1==w8(this.g).g?X8(this,a):b&&this.g.zD(a)};
g.h.nD=function(){if(K8(this)){var a=w8(this.g);this.o.Ca(this.N);a.muted?this.T.mute():this.T.cg();this.T.setVolume(a.volume);this.N=this.o.P(this.T,"onVolumeChange",this.tB)}};
g.h.UC=function(){this.A.stop();if(!this.g.ma()){var a=w8(this.g);a.xb()&&J8(this,new g.bR(8));I8(this,g.OI(a));this.A.start()}};
g.h.VC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(i9,g.Y);i9.prototype.B=function(a){fza(this,a.state)};g.p(j9,g.VW);g.h=j9.prototype;g.h.create=function(){bza(g.ZN(g.X(this.g)));this.D.push(g.IG("yt-remote-before-disconnect",this.DO,this));this.D.push(g.IG("yt-remote-connection-change",this.bR,this));this.D.push(g.IG("yt-remote-receiver-availability-change",this.DB,this));this.D.push(g.IG("yt-remote-auto-connect",this.ZQ,this));this.D.push(g.IG("yt-remote-receiver-resumed",this.YQ,this));this.DB()};
g.h.load=function(){this.g.Cq();g.VW.prototype.load.call(this);this.C=new H8(this,this.g,this.o);var a=Eya();a=a?a.currentTime:0;var b=s8()?new v8(W7(),void 0):null;0==a&&b&&(a=g.OI(w8(b)));0!=a&&(this.I=a||0,this.g.X("progresssync",a,void 0));eza(this,this.F,this.F);g.G1(this.g.app,6)};
g.h.unload=function(){this.g.X("mdxautoplaycanceled");this.B=this.A;g.Ye(this.C,this.o);this.o=this.C=null;g.VW.prototype.unload.call(this);g.G1(this.g.app,5)};
g.h.W=function(){g.JG(this.D);g.VW.prototype.W.call(this)};
g.h.sl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.gA.apply(this.C,[].concat([a],g.ma(c)))};
g.h.cI=function(){return this.loaded?this.C.suggestion:null};
g.h.Rf=function(){return this.o?w8(this.o).Rf:!1};
g.h.hasNext=function(){return this.o?w8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.iM=function(){var a=w8(this.o),b=this.g.ga();return{allowSeeking:this.g.Rd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.jM=function(){this.o&&this.o.xD()};
g.h.kM=function(){this.o&&this.o.yD()};
g.h.DO=function(a){1==a&&(this.J=this.o?w8(this.o):null)};
g.h.bR=function(){var a=s8()?new v8(W7(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Xe(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.Ez(a.videoId,g.OI(a)));this.g.X("videodatachange","newdata",this.g.ga(),3)};
g.h.DB=function(){this.G=[this.A].concat(aza());var a=E8()||this.A;r9(this,a);this.g.za("onMdxReceiversChange")};
g.h.ZQ=function(){var a=E8();r9(this,a)};
g.h.YQ=function(){this.B=E8()};
g.h.hM=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?G8():r9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&G8(),!0):!1}};
g.h.lM=function(){x8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Fd=function(){return!1};g.gX("remote",j9);})(_yt_player);
