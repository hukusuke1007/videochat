(function(e){function t(t){for(var o,l,a=t[0],r=t[1],s=t[2],u=0,v=[];u<a.length;u++)l=a[u],c[l]&&v.push(c[l][0]),c[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==c[r]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},c={app:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/videochat/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0af1":function(e,t,n){},"4e5e":function(e,t,n){"use strict";var o=n("bfd1"),c=n.n(o);c.a},"7faf":function(e,t,n){"use strict";var o=n("0af1"),c=n.n(o);c.a},bfd1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-content",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},i=[],l=(n("7faf"),n("2877")),a={},r=Object(l["a"])(a,c,i,!1,null,null,null);r.options.__file="App.vue";var s=r.exports,d=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-container",{attrs:{fluid:""}},[n("v-text-field",{attrs:{label:"コールID",required:""},model:{value:e.callId,callback:function(t){e.callId=t},expression:"callId"}}),n("v-btn",{staticClass:"white--text",attrs:{color:"blue",disabled:e.computedCallEnable},on:{click:e.onCall}},[e._v("\n          Call\n        ")]),n("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:e.onClose}},[e._v("\n          Close\n        ")])],1)],1),n("v-card",[n("v-container",{attrs:{fluid:""}},[n("h3",[e._v("相手の画面")]),n("v-flex",[e.connectingCall?n("div",[e._v("\n            通話中 "+e._s(e.connectingCall.remoteid)+"\n          ")]):e._e(),n("v-card-media",[n("video",{staticClass:"video",attrs:{id:"other_video",autoplay:"",playsinline:"",controls:""}})])],1),n("v-flex",[n("v-card-media",[n("video",{staticClass:"video__me",attrs:{id:"my_video",muted:"true",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}})])],1)],1)],1),n("v-card",[n("v-container",{attrs:{fluid:""}},[e._v("\n        あなたのID: "+e._s(e.peerId)+"\n        "),n("v-select",{attrs:{items:e.audios,label:"マイク設定"},on:{change:e.setDevice},model:{value:e.selectAudio,callback:function(t){e.selectAudio=t},expression:"selectAudio"}}),n("v-select",{attrs:{items:e.videos,label:"ビデオ設定"},on:{change:e.setDevice},model:{value:e.selectVideo,callback:function(t){e.selectVideo=t},expression:"selectVideo"}})],1)],1)],1),n("v-dialog",{attrs:{persistent:"","max-width":"300px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[e.call?n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Calling from "+e._s(e.call.remoteId))])]):e._e(),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"success"},on:{click:e.connect}},[e._v("Connect")]),n("v-btn",{attrs:{color:"error"},on:{click:e.disconnect}},[e._v("Disconnect")])],1)],1)],1)],1)},v=[],f=(n("ac6a"),n("c665")),p=n("dc0a"),h=n("aa9a"),g=n("d328"),b=n("11d9"),m=n("9ab4"),y=n("60a3"),C=n("0b69"),_=n.n(C),k=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(g["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.dialog=!1,e.peerId="",e.audios=[],e.videos=[],e.selectAudio="",e.selectVideo="",e.callId="",e.call=null,e.connectingCall=null,e}return Object(h["a"])(t,[{key:"mounted",value:function(){var e=this;this.peer=new _.a({key:"eb02c9bd-3eea-432d-a6fd-511c1b177e32",debug:0}),this.peer.on("open",function(){e.peerId=e.peer.id,console.log(e.peerId)}),this.peer.on("close",function(){e.onClose()}),this.peer.on("error",function(){console.log("error"),e.onClose()}),this.peer.on("disconnected",function(t){console.log("disconnected",t),e.onClose()}),this.peer.on("call",function(t){console.log("call"),e.dialog=!0,e.call=t}),navigator.mediaDevices.enumerateDevices().then(function(t){t.forEach(function(t){"audioinput"===t.kind?e.audios.push({text:t.label||"Microphone ".concat(e.audios.length+1),value:t.deviceId}):"videoinput"===t.kind&&e.videos.push({text:t.label||"Camera ".concat(e.videos.length-1),value:t.deviceId})}),console.log(e.audios),console.log(e.videos),e.selectAudio=e.audios[0].value,e.selectVideo=e.videos[0].value,e.setDevice()})}},{key:"setDevice",value:function(){var e=this;y["b"].nextTick(function(){console.log(e.selectAudio,e.selectVideo);var t={audio:!!e.selectAudio&&{deviceId:{exact:e.selectAudio}},video:!!e.selectVideo&&{deviceId:{exact:e.selectVideo}}};console.log(t),navigator.mediaDevices.getUserMedia(t).then(function(t){e.replaceStream(t)}).catch(function(e){console.error(e)})})}},{key:"onCall",value:function(){var e=this.peer.call(this.callId,this.localStream,{videoCodec:"VP8"});this.receive(e)}},{key:"connect",value:function(){this.dialog=!1,this.call.answer(this.localStream,{videoCodec:"VP8"}),this.receive(this.call)}},{key:"disconnect",value:function(){this.dialog=!1,this.call.close(),this.call=null}},{key:"receive",value:function(e){var t=this;this.onClose(),e.on("stream",function(e){var t=document.getElementById("other_video");t.srcObject=e,t.play()}),this.connectingCall=e,this.connectingCall.on("close",function(){console.log("connectingCall","close"),t.onClose()})}},{key:"onClose",value:function(){this.connectingCall&&(this.connectingCall.close(),this.connectingCall=null)}},{key:"replaceStream",value:function(e){var t=document.getElementById("my_video");t.srcObject=e,this.localStream=e,this.connectingCall&&this.connectingCall.replaceStream(e)}},{key:"computedCallEnable",get:function(){return!(this.callId&&!this.connectingCall)}}]),Object(p["a"])(t,e),t}(y["b"]);k=m["a"]([y["a"]],k);var x=k,w=x,j=(n("4e5e"),Object(l["a"])(w,u,v,!1,null,"198ddc91",null));j.options.__file="VideChat.vue";var I=j.exports;o["default"].use(d["a"]);var O=new d["a"]({mode:"history",base:"/videochat/",routes:[{path:"/",name:"VideChat",component:I}]}),A=n("2f62");o["default"].use(A["a"]);var V=new A["a"].Store({state:{},mutations:{},actions:{}}),E=n("ce5b"),F=n.n(E),S=n("c0a4"),D=n.n(S),P=n("9483");Object(P["a"])("".concat("/videochat/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].use(F.a,{theme:{original:D.a.purple.base,theme:"#FFDEEA",background:"#FFF6EA",view:"#ffa07a",select:"#FF7F78",button:"#5FACEF"},options:{themeVariations:["original","secondary"]}}),o["default"].config.productionTip=!1,new o["default"]({router:O,store:V,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.71605adb.js.map