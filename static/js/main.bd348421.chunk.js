(this["webpackJsonpbible-verse-converter"]=this["webpackJsonpbible-verse-converter"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(13),n(1)),i=n(2),l=n(4),u=n(3),v=n(5),h=function(e,t){return new Array(t-e.toString().length).fill(0).join("")+e},d=["Gen","Exod","Lev","Num","Deut","Josh","Judg","Ruth","1Sam","2Sam","1Kgs","2Kgs","1Chr","2Chr","Ezra","Neh","Esth","Job","Ps","Prov","Eccl","Song","Isa","Jer","Lam","Ezek","Dan","Hos","Joel","Amos","Obad","Jonah","Mic","Nah","Hab","Zeph","Hag","Zech","Mal","Matt","Mark","Luke","John","Acts","Rom","1Cor","2Cor","Gal","Eph","Phil","Col","1Thess","2Thess","1Tim","2Tim","Titus","Phlm","Heb","Jas","1Pet","2Pet","1John","2John","3John","Jude","Rev"],f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={textArea:""},e._onTextChange=e._onTextChange.bind(Object(v.a)(e)),e._onConvert=e._onConvert.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"_onTextChange",value:function(e){this.setState({textArea:e.target.value})}},{key:"_onConvert",value:function(){var e=this.state.textArea;this.props.onConvert(function(e){var t=new(0,n(14).bcv_parser),a=t.parse(e).parsed_entities(),r=t.parse(e).osis(),o=a.reduce((function(e,t){return e.concat(t.entities)}),[]);return{converted:a[0]?o.reduce((function(e,t){var n=JSON.stringify(t.start)===JSON.stringify(t.end)?"".concat(h(d.indexOf(t.start.b)+1,2),".").concat(h(t.start.c,3),".").concat(h(t.start.v,3)):"".concat(h(d.indexOf(t.start.b)+1,2),".").concat(h(t.start.c,3),".").concat(h(t.start.v,3),"-").concat(h(d.indexOf(t.end.b)+1,2),".").concat(h(t.end.c,3),".").concat(h(t.end.v,3));return""===e?n:e+";;"+n}),""):null,verses:r}}(e))}},{key:"render",value:function(){var e=this.state.textArea;return r.a.createElement("div",{className:"converter"},r.a.createElement("label",{className:"header"},"Text To Convert",r.a.createElement("span",{className:"button",onClick:this._onConvert},"Convert")),r.a.createElement("textarea",{placeholder:"Text To Convert",value:e,onChange:this._onTextChange.bind(this)}))}}]),a}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.converted,n=e.verses;return r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"parsed"},r.a.createElement("label",{className:"header"}," Conversions "),r.a.createElement("span",null," ",t," ")),r.a.createElement("div",{className:"found"},r.a.createElement("label",{className:"header"}," What We Found "),r.a.createElement("ul",null," ",n.split(",").map((function(e,t){return r.a.createElement("li",{key:t}," ",e," ")}))," ")))}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={convertedVerses:"",verses:""},a}return Object(i.a)(n,[{key:"onConvert",value:function(e){var t=e.converted,n=e.verses;this.setState({converted:t,verses:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"base"},r.a.createElement("header",null," Bible Verse Converter "),r.a.createElement("div",{className:"card"},r.a.createElement(f,{onConvert:this.onConvert.bind(this)}),r.a.createElement(m,{converted:this.state.converted,verses:this.state.verses})))}}]),n}(a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bible-verse-converter-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/bible-verse-converter-app","/service-worker.js");p?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd348421.chunk.js.map