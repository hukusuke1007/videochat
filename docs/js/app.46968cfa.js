(function(e){function t(t){for(var n,c,i=t[0],r=t[1],s=t[2],d=0,v=[];d<i.length;d++)c=i[d],l[c]&&v.push(l[c][0]),l[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var r=o[i];0!==l[r]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},l={app:0},a=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/videochat/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=r;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"0af1":function(e,t,o){},"6a30":function(e,t,o){"use strict";var n=o("bda7"),l=o.n(n);l.a},"7faf":function(e,t,o){"use strict";var n=o("0af1"),l=o.n(n);l.a},bda7:function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("v-app",[o("v-content",[o("v-fade-transition",{attrs:{mode:"out-in"}},[o("router-view")],1)],1)],1)],1)},a=[],c=(o("7faf"),o("2877")),i={},r=Object(c["a"])(i,l,a,!1,null,null,null);r.options.__file="App.vue";var s=r.exports,u=o("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[o("v-card",[o("v-container",{attrs:{fluid:""}},[o("v-text-field",{attrs:{label:"コールID",required:""},model:{value:e.callId,callback:function(t){e.callId=t},expression:"callId"}}),o("v-btn",{staticClass:"white--text",attrs:{color:"blue",disabled:e.computedCallEnable},on:{click:e.onCall}},[e._v("\n          Call\n        ")]),o("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:e.onClose}},[e._v("\n          Close\n        ")])],1)],1),o("v-card",[o("v-container",{attrs:{fluid:""}},[o("h3",[e._v("相手の画面")]),o("v-flex",[e.connectingCall?o("div",[e._v("\n            通話中 "+e._s(e.connectingCall.remoteid)+"\n          ")]):e._e(),o("v-card-media",[o("video",{staticClass:"video",attrs:{id:"other_video",autoplay:"",playsinline:"",controls:""}})]),o("v-slider",{attrs:{min:"0",max:"100","thumb-label":"","append-icon":"volume_up","prepend-icon":"volume_down"},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1),o("v-flex",[o("v-card-media",[o("video",{staticClass:"video__me",attrs:{id:"my_video",muted:"true",autoplay:"",playsinline:"",controls:""},domProps:{muted:!0}})])],1)],1)],1),o("v-card",[o("v-container",{attrs:{fluid:""}},[e._v("\n        あなたのID: "+e._s(e.peerId)+"\n        "),o("v-select",{attrs:{items:e.audios,label:"マイク設定"},on:{change:e.setDevice},model:{value:e.selectAudio,callback:function(t){e.selectAudio=t},expression:"selectAudio"}}),o("v-select",{attrs:{items:e.videos,label:"ビデオ設定"},on:{change:e.setDevice},model:{value:e.selectVideo,callback:function(t){e.selectVideo=t},expression:"selectVideo"}})],1)],1)],1),o("v-dialog",{attrs:{persistent:"","max-width":"300px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[e.call?o("v-card-title",[o("span",{staticClass:"headline"},[e._v("着信 "+e._s(e.call.remoteId))])]):e._e(),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"success"},on:{click:e.connect}},[e._v("通話する")]),o("v-btn",{attrs:{color:"error"},on:{click:e.disconnect}},[e._v("切断")])],1)],1)],1)],1)},v=[],f=(o("ac6a"),o("c665")),p=o("dc0a"),h=o("aa9a"),m=o("d328"),g=o("11d9"),b=o("9ab4"),y=o("60a3"),C=o("0b69"),_=o.n(C),k=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.dialog=!1,e.peerId="",e.audios=[],e.videos=[],e.selectAudio="",e.selectVideo="",e.callId="",e.call=null,e.connectingCall=null,e.videoCodec="H264",e.volume=30,e}return Object(h["a"])(t,[{key:"onValueChange",value:function(e,t){console.log("watch: ".concat(e,", ").concat(t));var o=document.getElementById("other_video");o.volume=e/100,console.log(o.volume)}},{key:"mounted",value:function(){var e=this;this.peer=new _.a({key:"eb02c9bd-3eea-432d-a6fd-511c1b177e32",debug:0}),this.peer.on("open",function(){e.peerId=e.peer.id,console.log(e.peerId)}),this.peer.on("close",function(){e.onClose()}),this.peer.on("error",function(){console.log("error"),e.onClose()}),this.peer.on("disconnected",function(t){console.log("disconnected",t),e.onClose()}),this.peer.on("call",function(t){console.log("call"),e.dialog=!0,e.call=t}),navigator.mediaDevices.enumerateDevices().then(function(t){t.forEach(function(t){"audioinput"===t.kind?e.audios.push({text:t.label||"Microphone ".concat(e.audios.length+1),value:t.deviceId}):"videoinput"===t.kind&&e.videos.push({text:t.label||"Camera ".concat(e.videos.length-1),value:t.deviceId})}),console.log(e.audios),console.log(e.videos),e.selectAudio=e.audios[0].value,e.selectVideo=e.videos[0].value,e.setDevice()})}},{key:"setDevice",value:function(){var e=this;y["b"].nextTick(function(){console.log(e.selectAudio,e.selectVideo);var t={audio:!!e.selectAudio&&{deviceId:{exact:e.selectAudio}},video:!!e.selectVideo&&{deviceId:{exact:e.selectVideo}}};console.log(t),navigator.mediaDevices.getUserMedia(t).then(function(t){e.replaceStream(t)}).catch(function(e){console.error(e)})})}},{key:"onCall",value:function(){var e=this.peer.call(this.callId,this.localStream,{videoCodec:this.videoCodec});this.receive(e)}},{key:"connect",value:function(){this.dialog=!1,this.call.answer(this.localStream,{videoCodec:this.videoCodec}),this.receive(this.call)}},{key:"disconnect",value:function(){this.dialog=!1,this.call.close(),this.call=null}},{key:"receive",value:function(e){var t=this;this.onClose(),e.on("stream",function(e){var t=document.getElementById("other_video");t.srcObject=e,t.volume=.3,t.play()}),this.connectingCall=e,this.connectingCall.on("close",function(){console.log("connectingCall","close"),t.onClose()})}},{key:"onClose",value:function(){this.connectingCall&&(this.connectingCall.close(),this.connectingCall=null)}},{key:"replaceStream",value:function(e){var t=document.getElementById("my_video");t.srcObject=e,this.localStream=e,this.connectingCall&&this.connectingCall.replaceStream(e)}},{key:"computedCallEnable",get:function(){return!(this.callId&&!this.connectingCall)}}]),Object(p["a"])(t,e),t}(y["b"]);b["a"]([Object(y["c"])("volume")],k.prototype,"onValueChange",null),k=b["a"]([y["a"]],k);var x=k,w=x,j=(o("6a30"),Object(c["a"])(w,d,v,!1,null,"9efd1620",null));j.options.__file="VideChat.vue";var I=j.exports;n["default"].use(u["a"]);var O=new u["a"]({mode:"history",base:"/videochat/",routes:[{path:"/",name:"VideChat",component:I}]}),A=o("2f62");n["default"].use(A["a"]);var E=new A["a"].Store({state:{},mutations:{},actions:{}}),V=o("ce5b"),F=o.n(V),S=o("c0a4"),D=o.n(S),P=o("9483");Object(P["a"])("".concat("/videochat/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].use(F.a,{theme:{original:D.a.purple.base,theme:"#FFDEEA",background:"#FFF6EA",view:"#ffa07a",select:"#FF7F78",button:"#5FACEF"},options:{themeVariations:["original","secondary"]}}),n["default"].config.productionTip=!1,new n["default"]({router:O,store:E,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.46968cfa.js.map