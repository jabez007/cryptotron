(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-150f6f4a"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var r=n("3a38"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=o(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"169a":function(t,e,n){"use strict";n("6ec0");var r=n("c69d"),i=n("30d4"),o=n("14ec"),a=n("e949"),c=n("261e"),u=n("98a1"),s=n("c584"),f=n("80d2"),l=n("bfc5"),d=n("d9bd"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e["a"]={name:"v-dialog",directives:{ClickOutside:s["a"]},mixins:[r["a"],i["a"],o["a"],a["a"],c["a"],u["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},v(t,("v-dialog "+this.contentClass).trim(),!0),v(t,"v-dialog--active",this.isActive),v(t,"v-dialog--persistent",this.persistent),v(t,"v-dialog--fullscreen",this.fullscreen),v(t,"v-dialog--scrollable",this.scrollable),v(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):this.removeOverlay()},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},mounted:function(){"v-slot"===Object(f["l"])(this,"activator",!0)&&Object(d["a"])("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o["a"].options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus()},onKeydown:function(t){if(t.keyCode===f["o"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,n=e&&e.elm;if(n)return n}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(f["l"])(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],r={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(r.style={maxWidth:"none"===this.maxWidth?void 0:Object(f["c"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["c"])(this.width)}),n.push(this.genActivator());var i=t("div",r,this.showLazyContent(this.$slots.default));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),n.push(t("div",{class:this.contentClasses,attrs:h({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(l["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}}},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"20de":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"760"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("a",t._g({staticClass:"yellow--text text--darken-4"},r),[t._v("Tabula Recta")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticStyle:{"z-index":"inherit"}},[n("v-layout",{attrs:{row:""}},[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("close")])],1)],1),n("v-card-text",[n("table",[n("thead",[n("th"),t._l(26,(function(e){return n("th",{key:e},[t._v(t._s(String.fromCharCode(64+e)))])}))],2),n("tbody",t._l(26,(function(e){return n("tr",{key:e},[n("th",[t._v(t._s(String.fromCharCode(64+e)))]),t._l(26,(function(r){return n("td",{key:r},[t._v(t._s(String.fromCharCode(65+(e-1+(r-1))%26)))])}))],2)})),0)])])],1)],1)},i=[],o={name:"TabulaRecta",data:function(){return{dialog:!1}}},a=o,c=(n("780b"),n("2877")),u=n("6544"),s=n.n(u),f=n("8336"),l=n("b0af"),d=n("99d9"),h=n("169a"),v=n("132d"),p=n("a722"),y=n("9910"),b=Object(c["a"])(a,r,i,!1,null,"2c146214",null);e["a"]=b.exports;s()(b,{VBtn:f["a"],VCard:l["a"],VCardText:d["b"],VDialog:h["a"],VIcon:v["a"],VLayout:p["a"],VSpacer:y["a"]})},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),i=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"261e":function(t,e,n){"use strict";var r=n("2b0e"),i=n("80d2");function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}e["a"]=r["a"].extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(i["m"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(i["m"])(e)],r=[].concat(o(document.getElementsByClassName(this.stackClass))),a=0;a<r.length;a++)t.includes(r[a])||n.push(Object(i["m"])(r[a]));return Math.max.apply(Math,n)}}})},2677:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("8654"),i=n("a844"),o=n("7cf7"),a=n("ab6d"),c=n("d9bd"),u={functional:!0,$_wrapperFor:r["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var n=e.props,s=e.data,f=e.slots,l=e.parent;Object(a["a"])(s);var d=Object(o["a"])(f(),t);return n.textarea&&Object(c["d"])("<v-text-field textarea>","<v-textarea outline>",u,l),n.multiLine&&Object(c["d"])("<v-text-field multi-line>","<v-textarea>",u,l),n.textarea||n.multiLine?(s.attrs.outline=n.textarea,t(i["a"],s,d)):t(r["a"],s,d)}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"30d4":function(t,e,n){"use strict";var r=n("3e79"),i=n("d9bd"),o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e="undefined"===typeof t?"undefined":o(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]={name:"detachable",mixins:[r["a"]],props:{attach:{type:null,default:!1,validator:c},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)}))}}))},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&a({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(i["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),i=n("63b6"),o=n("9138"),a=n("35e8"),c=n("481b"),u=n("8f60"),s=n("45f2"),f=n("53e2"),l=n("5168")("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",p="values",y=function(){return this};t.exports=function(t,e,n,b,m,g,x){u(n,e,b);var A,w,O,_=function(t){if(!d&&t in C)return C[t];switch(t){case v:return function(){return new n(this,t)};case p:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",S=m==p,T=!1,C=t.prototype,I=C[l]||C[h]||m&&C[m],E=I||_(m),N=m?S?_("entries"):E:void 0,j="Array"==e&&C.entries||I;if(j&&(O=f(j.call(new t)),O!==Object.prototype&&O.next&&(s(O,k,!0),r||"function"==typeof O[l]||a(O,l,y))),S&&I&&I.name!==p&&(T=!0,E=function(){return I.call(this)}),r&&!x||!d&&!T&&C[l]||a(C,l,E),c[e]=E,c[k]=y,m)if(A={values:S?E:_(p),keys:g?E:_(v),entries:N},x)for(w in A)w in C||o(C,w,A[w]);else i(i.P+i.F*(d||T),e,A);return A}},"327d":function(t,e,n){},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),i=n("25eb");t.exports=function(t){return r(i(t))}},3702:function(t,e,n){var r=n("481b"),i=n("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"40c3":function(t,e,n){var r=n("6b4c"),i=n("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"45f2":function(t,e,n){var r=n("d9f6").f,i=n("07e3"),o=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,n){var r=n("5168")("iterator"),i=!1;try{var o=[7][r]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:n=!0}},o[r]=function(){return c},t(o)}catch(a){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},5168:function(t,e,n){var r=n("dbdb")("wks"),i=n("62a0"),o=n("e53d").Symbol,a="function"==typeof o,c=t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))};c.store=r},"53e2":function(t,e,n){var r=n("07e3"),i=n("241e"),o=n("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"549b":function(t,e,n){"use strict";var r=n("d864"),i=n("63b6"),o=n("241e"),a=n("b0dc"),c=n("3702"),u=n("b447"),s=n("20fd"),f=n("7cd6");i(i.S+i.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=o(t),h="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,y=void 0!==p,b=0,m=f(d);if(y&&(p=r(p,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&c(m))for(e=u(d.length),n=new h(e);e>b;b++)s(n,b,y?p(d[b],b):d[b]);else for(l=m.call(d),n=new h;!(i=l.next()).done;b++)s(n,b,y?a(l,p,[i.value,b],!0):i.value);return n.length=b,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5559:function(t,e,n){var r=n("dbdb")("keys"),i=n("62a0");t.exports=function(t){return r[t]||(r[t]=i(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),i=n("b447"),o=n("0fc9");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=i(u.length),f=o(a,s);if(t&&n!=n){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),u="prototype",s=function(t,e,n){var f,l,d,h=t&s.F,v=t&s.G,p=t&s.S,y=t&s.P,b=t&s.B,m=t&s.W,g=v?i:i[e]||(i[e]={}),x=g[u],A=v?r:p?r[e]:(r[e]||{})[u];for(f in v&&(n=e),n)l=!h&&A&&void 0!==A[f],l&&c(g,f)||(d=l?A[f]:n[f],g[f]=v&&"function"!=typeof A[f]?n[f]:b&&l?o(d,r):m&&A[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(d):y&&"function"==typeof d?o(Function.call,d):d,y&&((g.virtual||(g.virtual={}))[f]=d,t&s.R&&x&&!x[f]&&a(x,f,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),i=n("35e8"),o=n("481b"),a=n("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],f=r[s],l=f&&f.prototype;l&&!l[a]&&i(l,a,s),o[s]=o.Array}},"6e8c":function(t,e,n){"use strict";n("a481"),n("c5f6"),n("7cdf");function r(t){return!!t||0===t||"A value is required"}function i(t){return Number.isInteger(Number(t))||"The value must be an integer"}function o(t){return!(t||"").replace(/[a-zA-Z]/g,"")||"The value must be a word"}function a(t){return function(e){return(e||"").length===t||"The value must have a length of exactly ".concat(t)}}function c(t){return!!t&&t>0||"The value must be positive"}function u(t){return function(e){return(e||"").length>=t||"The value must have a length of at least ".concat(t)}}e["a"]={required:r,integer:i,word:o,exactLength:a,positive:c,minLength:u}},"6ec0":function(t,e,n){},"6fa2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Cipher",{attrs:{encryptAlgorithm:t.encrypt,decryptAlgorithm:t.decrypt,cipherKey:t.key}},[n("v-card",{attrs:{slot:"description"},slot:"description"},[n("v-card-title",[n("h5",{staticClass:"headline"},[t._v("The Beaufort Cipher")])]),n("v-card-text",[n("p",[t._v("\n        The Beaufort cipher, created by Sir Francis Beaufort,\n        is a polyalphabetic substitution cipher that is similar to the Vigenère cipher,\n        except that it enciphers characters in a slightly different manner.\n      ")]),n("h6",{staticClass:"title"},[t._v("Encryption")]),n("p",[t._v("\n        The beaufort cipher uses a key word, e.g. 'FORTIFICATION',\n        as its key with the "),n("TabulaRecta"),t._v(" to encipher the plaintext.\n\n        To encipher a message, repeat the keyword below the plaintext.\n        Now we take the letter we will be encoding, and find the column on the "),n("TabulaRecta"),t._v(",\n        Then, we move down that column of the "),n("TabulaRecta"),t._v(" until we come to the key letter.\n        Our ciphertext character is then read from the far left of the row our key character was in.\n        "),n("pre",[t._v("Plaintext:  DEFEND THE EAST WALL OF THE CASTLE\nKey:        FORTIF ICA TION FORT IF ICA TIONFO\nCiphertext: CKMPVC PVW PIWU JOGI UA PVW RIWUUK\n        ")])],1),n("p",[t._v("\n        This can also be described through modular arithmetic.\n        First, we convert all the letters of the plaintext and key to numbers ('a'=0, 'b'=1, ..., 'z'=25).\n        Then we subtract each plaintext value from its corresponding key value, modulo 26.\n        "),n("code",[t._v("c = k - p (mod 26)")]),t._v("\n        Finally, we convert those computed values back to letters.\n      ")]),n("h6",{staticClass:"title"},[t._v("Decryption")]),n("p",[t._v("\n        Deciphering is performed in an identical fashion, i.e. encryption and decryption using the beaufort cipher uses exactly the same algorithm.\n        "),n("pre",[t._v("Ciphertext: CKMPVC PVW PIWU JOGI UA PVW RIWUUK\nKey:        FORTIF ICA TION FORT IF ICA TIONFO\nPlaintext:  DEFEND THE EAST WALL OF THE CASTLE\n        ")])]),n("p",[t._v("\n        From the modular arithmetic forumula used for encryption,\n        it becomes a bit more obvious that the decryption algorithm is the same:\n        "),n("code",[t._v("p = k - c (mod 26)")])])])],1),n("beaufort-key",{attrs:{slot:"key"},slot:"key",model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1)},i=[],o=n("a684"),a=n("3620"),c=n("20de"),u=n("d579"),s={components:{Cipher:a["a"],TabulaRecta:c["a"],BeaufortKey:u["a"]},data:function(){return{key:{keyword:""}}},methods:{encrypt:function(t,e){return Object(o["b"])(e)(t)},decrypt:function(t,e){return Object(o["a"])(e)(t)}}},f=s,l=n("2877"),d=n("6544"),h=n.n(d),v=n("b0af"),p=n("99d9"),y=n("12b2"),b=Object(l["a"])(f,r,i,!1,null,"70003e28",null);e["default"]=b.exports;h()(b,{VCard:v["a"],VCardText:p["b"],VCardTitle:y["a"]})},"71c1":function(t,e,n){var r=n("3a38"),i=n("25eb");t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("a745"),i=n.n(r);function o(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var a=n("774e"),c=n.n(a),u=n("c8bb"),s=n.n(u);function f(t){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return o(t)||f(t)||l()}},"774e":function(t,e,n){t.exports=n("d2d5")},"780b":function(t,e,n){"use strict";var r=n("327d"),i=n.n(r);i.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7cd6":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"7cdf":function(t,e,n){var r=n("5ca1");r(r.S,"Number",{isInteger:n("9c12")})},"7cf7":function(t,e,n){"use strict";function r(t,e){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(e("template",{slot:r},t[r]));return n}n.d(e,"a",(function(){return r}))},"7e90":function(t,e,n){var r=n("d9f6"),i=n("e4ae"),o=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8f60":function(t,e,n){"use strict";var r=n("a159"),i=n("aebd"),o=n("45f2"),a={};n("35e8")(a,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},9138:function(t,e,n){t.exports=n("35e8")},"95d5":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},"97d3":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c}));n("6762"),n("2fdb");var r=n("75fc"),i=Object(r["a"])(Array(26)).map((function(t,e){return String.fromCharCode(97+e)})).join(""),o=/[a-z]/;Object(r["a"])(Array(26)).map((function(t,e){return String.fromCharCode(65+e)})).join("");function a(t,e){return(t%e+e)%e}function c(t){for(var e=t||"",n="",r=0;r<e.length;r+=1)n.includes(e[r])||(n+=e[r]);return n}},"9c12":function(t,e,n){var r=n("d3f4"),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},a159:function(t,e,n){var r=n("e4ae"),i=n("7e90"),o=n("1691"),a=n("5559")("IE_PROTO"),c=function(){},u="prototype",s=function(){var t,e=n("1ec9")("iframe"),r=o.length,i="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),s=t.F;while(r--)delete s[u][o[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=s(),void 0===e?n:i(n,e)}},a684:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));n("a481");var r=n("97d3");function i(t,e){for(var n=(e||"").toLowerCase(),i=(t.keyword||"").toLowerCase().replace(/[^a-z]/g,""),o="",a=0,c=0;c<n.length;c+=1)r["d"].test(n.charAt(c))?(o+=String.fromCharCode(Object(r["c"])(i.charCodeAt(a%i.length)-97-(n.charCodeAt(c)-97),26)+97),a+=1):o+=n.charAt(c);return o}function o(t){return function(e){return i(t,e)}}function a(t){return function(e){return i(t,e)}}},a745:function(t,e,n){t.exports=n("f410")},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",u="​",s=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var i={},c=o((function(){return!!a[t]()||u[t]()!=u})),s=i[t]=c?e(d):a[t];n&&(i[n]=s),r(r.P+r.F*c,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},ab6d:function(t,e,n){"use strict";function r(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){var e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}n.d(e,"a",(function(){return r}))},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){var o=t["return"];throw void 0!==o&&r(o.call(t)),a}}},b447:function(t,e,n){var r=n("3a38"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c367:function(t,e,n){"use strict";var r=n("8436"),i=n("50ed"),o=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),i=n("1691");t.exports=Object.keys||function(t){return r(t,i)}},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),u=n("79e5"),s=n("9093").f,f=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,h="Number",v=r[h],p=v,y=v.prototype,b=o(n("2aeb")(y))==h,m="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),s=0,f=u.length;s<f;s++)if(a=u.charCodeAt(s),a<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(b?u((function(){y.valueOf.call(n)})):o(n)!=h)?a(new p(g(e)),n,v):g(e)};for(var x,A=n("9e1e")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;A.length>w;w++)i(p,x=A[w])&&!i(v,x)&&l(v,x,f(p,x));v.prototype=y,y.constructor=v,n("2aba")(r,h,v)}},c8bb:function(t,e,n){t.exports=n("54a1")},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d579:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form"},[n("v-text-field",{attrs:{label:"Keyword",rules:t.rules,clearable:"",required:""},model:{value:t.key.keyword,callback:function(e){t.$set(t.key,"keyword","string"===typeof e?e.trim():e)},expression:"key.keyword"}})],1)},i=[],o=n("6e8c"),a=n("e5a1"),c={mixins:[a["a"]],computed:{rules:function(){return[o["a"].required,o["a"].word]}}},u=c,s=n("2877"),f=n("6544"),l=n.n(f),d=n("4bd4"),h=n("2677"),v=Object(s["a"])(u,r,i,!1,null,null,null);e["a"]=v.exports;l()(v,{VForm:d["a"],VTextField:h["a"]})},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),i=n("e53d"),o="__core-js_shared__",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),i=n("36c3"),o=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=i(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);while(e.length>u)r(c,n=e[u++])&&(~o(s,n)||s.push(n));return s}},e949:function(t,e,n){"use strict";var r=n("2b0e");e["a"]=r["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-150f6f4a.e0576d5b.js.map