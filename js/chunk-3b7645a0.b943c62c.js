(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7645a0"],{"21a6":function(e,t,n){(function(n){var o,a,i;(function(n,r){a=[],o=r,i="function"===typeof o?o.apply(t,a):o,void 0===i||(e.exports=i)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=r.URL||r.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):a(l.href)?o(e,t,n):i(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(a(e))o(e,n,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){i(c)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var i="application/octet-stream"===e.type,l=/constructor/i.test(r.HTMLElement)||r.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&l||c)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},p.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});r.saveAs=l.saveAs=l,e.exports=l}))}).call(this,n("c8ba"))},"2b7b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[e._t("plainText",(function(){return[n("v-textarea",{attrs:{label:"Plain Text","auto-grow":"",clearable:""},model:{value:e.plainText,callback:function(t){e.plainText=t},expression:"plainText"}})]}),null,{plainText:e.plainText}),e._t("cipherText",(function(){return[n("v-textarea",{attrs:{label:"Cipher Text",value:e.cipherText,"prepend-inner-icon":"file_copy","append-icon":"save",outline:"","auto-grow":"",readonly:""},on:{"click:prepend-inner":function(t){return e.copyToClipboard(e.cipherText)},"click:append":function(t){return e.save(e.cipherText)}}})]}),null,{cipherText:e.cipherText,copyToClipboard:e.copyToClipboard,save:e.save})],2)],1)},a=[],i=n("21a6"),r=n.n(i),c={name:"EncryptMessage",props:{encryptAlgorithm:{type:Function,required:!0},cipherKey:{type:[Object,Boolean],required:!0}},data:function(){return{plainText:""}},computed:{cipherText:function(){return this.cipherKey?this.encryptAlgorithm(this.plainText,this.cipherKey):""}},methods:{copyToClipboard:function(e){var t=this;this.$copyText(e).then((function(){t.$emit("success","copied!")})).catch((function(e){t.$emit("error",e.message)}))},save:function(e){var t=new Blob([e],{type:"text/plain;charset=utf-8"});r.a.saveAs(t,"Cipher.txt")}}},l=c,s=n("2877"),p=n("6544"),u=n.n(p),f=n("b0af"),d=n("99d9"),v=n("a844"),b=Object(s["a"])(l,o,a,!1,null,"295335eb",null);t["default"]=b.exports;u()(b,{VCard:f["a"],VCardText:d["b"],VTextarea:v["a"]})}}]);
//# sourceMappingURL=chunk-3b7645a0.b943c62c.js.map