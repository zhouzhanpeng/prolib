!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("http"),require("https"),require("url"),require("assert"),require("stream"),require("tty"),require("util"),require("zlib")):"function"==typeof define&&define.amd?define(["http","https","url","assert","stream","tty","util","zlib"],t):t((e=e||self).http,e.https,e.url,e.assert,e.stream,e.tty,e.util,e.zlib)}(this,function(R,E,A,i,e,r,n,B){"use strict";R=R&&R.hasOwnProperty("default")?R.default:R,E=E&&E.hasOwnProperty("default")?E.default:E,A=A&&A.hasOwnProperty("default")?A.default:A,i=i&&i.hasOwnProperty("default")?i.default:i,e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n,B=B&&B.hasOwnProperty("default")?B.default:B;function o(r,n){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return r.apply(n,e)}}var t=Object.prototype.toString;function s(e){return"[object Array]"===t.call(e)}function a(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===t.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var j={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===t.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===t.call(e)},isFile:function(e){return"[object File]"===t.call(e)},isBlob:function(e){return"[object Blob]"===t.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function r(){var n={};function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=r(n[t],e):n[t]=e}for(var t=0,o=arguments.length;t<o;t++)f(arguments[t],e);return n},deepMerge:function r(){var n={};function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=r(n[t],e):n[t]="object"==typeof e?r({},e):e}for(var t=0,o=arguments.length;t<o;t++)f(arguments[t],e);return n},extend:function(r,e,n){return f(e,function(e,t){r[t]=n&&"function"==typeof e?o(e,n):e}),r},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function p(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function k(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(j.isURLSearchParams(t))n=t.toString();else{var o=[];j.forEach(t,function(e,t){null!=e&&(j.isArray(e)?t+="[]":e=[e],j.forEach(e,function(e){j.isDate(e)?e=e.toISOString():j.isObject(e)&&(e=JSON.stringify(e)),o.push(p(t)+"="+p(e))}))}),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}function d(){this.handlers=[]}d.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},d.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},d.prototype.forEach=function(t){j.forEach(this.handlers,function(e){null!==e&&t(e)})};function l(t,r,e){return j.forEach(e,function(e){t=e(t,r)}),t}function h(e){return!(!e||!e.__CANCEL__)}function m(r,n){j.forEach(r,function(e,t){t!==n&&t.toUpperCase()===n.toUpperCase()&&(r[n]=e,delete r[t])})}function q(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}function S(e,t,r,n,o){var s=new Error(e);return q(s,t,r,n,o)}function N(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(S("Request failed with status code "+r.status,r.config,null,r.request,r))}function T(e,t){return e&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)?(r=e,(n=t)?r.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):r):t;var r,n}var g,y,v,C=d,b=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],w=j.isStandardBrowserEnv()?(y=/(msie|trident)/i.test(navigator.userAgent),v=document.createElement("a"),g=x(window.location.href),function(e){var t=j.isString(e)?x(e):e;return t.protocol===g.protocol&&t.host===g.host}):function(){return!0};function x(e){var t=e;return y&&(v.setAttribute("href",t),t=v.href),v.setAttribute("href",t),{href:v.href,protocol:v.protocol?v.protocol.replace(/:$/,""):"",host:v.host,search:v.search?v.search.replace(/^\?/,""):"",hash:v.hash?v.hash.replace(/^#/,""):"",hostname:v.hostname,port:v.port,pathname:"/"===v.pathname.charAt(0)?v.pathname:"/"+v.pathname}}function _(f){return new Promise(function(i,u){var r=f.data,n=f.headers;j.isFormData(r)&&delete n["Content-Type"];var c=new XMLHttpRequest;if(f.auth){var e=f.auth.username||"",t=f.auth.password||"";n.Authorization="Basic "+btoa(e+":"+t)}var o=T(f.baseURL,f.url);if(c.open(f.method.toUpperCase(),k(o,f.params,f.paramsSerializer),!0),c.timeout=f.timeout,c.onreadystatechange=function(){if(c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))){var e,t,r,n,o,s="getAllResponseHeaders"in c?(e=c.getAllResponseHeaders(),o={},e&&j.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),t=j.trim(e.substr(0,n)).toLowerCase(),r=j.trim(e.substr(n+1)),t){if(o[t]&&0<=b.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}}),o):null,a={data:f.responseType&&"text"!==f.responseType?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:s,config:f,request:c};N(i,u,a),c=null}},c.onabort=function(){c&&(u(S("Request aborted",f,"ECONNABORTED",c)),c=null)},c.onerror=function(){u(S("Network Error",f,null,c)),c=null},c.ontimeout=function(){var e="timeout of "+f.timeout+"ms exceeded";f.timeoutErrorMessage&&(e=f.timeoutErrorMessage),u(S(e,f,"ECONNABORTED",c)),c=null},j.isStandardBrowserEnv()){var s=F,a=(f.withCredentials||w(o))&&f.xsrfCookieName?s.read(f.xsrfCookieName):void 0;a&&(n[f.xsrfHeaderName]=a)}if("setRequestHeader"in c&&j.forEach(n,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete n[t]:c.setRequestHeader(t,e)}),j.isUndefined(f.withCredentials)||(c.withCredentials=!!f.withCredentials),f.responseType)try{c.responseType=f.responseType}catch(e){if("json"!==f.responseType)throw e}"function"==typeof f.onDownloadProgress&&c.addEventListener("progress",f.onDownloadProgress),"function"==typeof f.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",f.onUploadProgress),f.cancelToken&&f.cancelToken.promise.then(function(e){c&&(c.abort(),u(e),c=null)}),void 0===r&&(r=null),c.send(r)})}var F=j.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),j.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),j.isString(n)&&a.push("path="+n),j.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function O(e,t){return e(t={exports:{}},t.exports),t.exports}function L(e,t){t=t||{};var r,n=typeof e;if("string"==n&&0<e.length)return function(e){if(100<(e=String(e)).length)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return r*P;case"hours":case"hour":case"hrs":case"hr":case"h":return r*U;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(e);if("number"==n&&!1===isNaN(e))return t.long?D(r=e,P,"day")||D(r,U,"hour")||D(r,6e4,"minute")||D(r,1e3,"second")||r+" ms":function(e){if(P<=e)return Math.round(e/P)+"d";if(U<=e)return Math.round(e/U)+"h";if(6e4<=e)return Math.round(e/6e4)+"m";if(1e3<=e)return Math.round(e/1e3)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}var U=36e5,P=864e5;function D(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}function z(e){e="--"+e;var t=I.indexOf(e);return-1!==t&&(-1===$||t<$)}var M=O(function(e,u){function t(e){var n;function i(){if(i.enabled){var o=i,e=+new Date,t=e-(n||e);o.diff=t,o.prev=n,o.curr=e,n=e;for(var s=new Array(arguments.length),r=0;r<s.length;r++)s[r]=arguments[r];s[0]=u.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e;a++;var r=u.formatters[t];if("function"==typeof r){var n=s[a];e=r.call(o,n),s.splice(a,1),a--}return e}),u.formatArgs.call(o,s),(i.log||u.log||console.log.bind(console)).apply(o,s)}}return i.namespace=e,i.enabled=u.enabled(e),i.useColors=u.useColors(),i.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return u.colors[Math.abs(r)%u.colors.length]}(e),i.destroy=r,"function"==typeof u.init&&u.init(i),u.instances.push(i),i}function r(){var e=u.instances.indexOf(this);return-1!==e&&(u.instances.splice(e,1),!0)}(u=e.exports=t.debug=t.default=t).coerce=function(e){return e instanceof Error?e.stack||e.message:e},u.disable=function(){u.enable("")},u.enable=function(e){var t;u.save(e),u.names=[],u.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length;for(t=0;t<n;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+e.substr(1)+"$")):u.names.push(new RegExp("^"+e+"$")));for(t=0;t<u.instances.length;t++){var o=u.instances[t];o.enabled=u.enabled(o.namespace)}},u.enabled=function(e){if("*"===e[e.length-1])return!0;var t,r;for(t=0,r=u.skips.length;t<r;t++)if(u.skips[t].test(e))return!1;for(t=0,r=u.names.length;t<r;t++)if(u.names[t].test(e))return!0;return!1},u.humanize=L,u.instances=[],u.names=[],u.skips=[],u.formatters={}}),H=(M.coerce,M.disable,M.enable,M.enabled,M.humanize,M.instances,M.names,M.skips,M.formatters,O(function(e,s){function t(){var e;try{e=s.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(s=e.exports=M).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},s.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+s.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))}),e.splice(o,0,r)},s.save=function(e){try{null==e?s.storage.removeItem("debug"):s.storage.debug=e}catch(e){}},s.load=t,s.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},s.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),s.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],s.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},s.enable(t())})),I=(H.log,H.formatArgs,H.save,H.load,H.useColors,H.storage,H.colors,process.argv),$=I.indexOf("--"),G="FORCE_COLOR"in process.env||!(z("no-color")||z("no-colors")||z("color=false"))&&(!!(z("color")||z("colors")||z("color=true")||z("color=always"))||!(process.stdout&&!process.stdout.isTTY)&&("win32"===process.platform||"COLORTERM"in process.env||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM))),X=O(function(e,s){(s=e.exports=M).init=function(e){e.inspectOpts={};for(var t=Object.keys(s.inspectOpts),r=0;r<t.length;r++)e.inspectOpts[t[r]]=s.inspectOpts[t[r]]},s.log=function(){return process.stderr.write(n.format.apply(n,arguments)+"\n")},s.formatArgs=function(e){var t=this.namespace;if(this.useColors){var r=this.color,n="[3"+(r<8?r:"8;5;"+r),o="  "+n+";1m"+t+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push(n+"m+"+s.humanize(this.diff)+"[0m")}else e[0]=(s.inspectOpts.hideDate?"":(new Date).toISOString()+" ")+t+" "+e[0]},s.save=function(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e},s.load=t,s.useColors=function(){return"colors"in s.inspectOpts?Boolean(s.inspectOpts.colors):r.isatty(process.stderr.fd)},s.colors=[6,2,3,4,5,1];try{G&&2<=G.level&&(s.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}function t(){return process.env.DEBUG}s.inspectOpts=Object.keys(process.env).filter(function(e){return/^debug_/i.test(e)}).reduce(function(e,t){var r=t.substring(6).toLowerCase().replace(/_([a-z])/g,function(e,t){return t.toUpperCase()}),n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{}),s.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts).split("\n").map(function(e){return e.trim()}).join(" ")},s.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts)},s.enable(t())}),J=(X.init,X.log,X.formatArgs,X.save,X.load,X.useColors,X.colors,X.inspectOpts,O(function(e){"undefined"==typeof process||"renderer"===process.type?e.exports=H:e.exports=X})),V=e.Writable,K=J("follow-redirects"),Y={GET:!0,HEAD:!0,OPTIONS:!0,TRACE:!0},Z=Object.create(null);function W(e,t){V.call(this),e.headers=e.headers||{},this._options=e,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],e.host&&(e.hostname||(e.hostname=e.host),delete e.host),t&&this.on("response",t);var r=this;if(this._onNativeResponse=function(e){r._processResponse(e)},!e.pathname&&e.path){var n=e.path.indexOf("?");n<0?e.pathname=e.path:(e.pathname=e.path.substring(0,n),e.search=e.path.substring(n))}this._performRequest()}function Q(o){var s={maxRedirects:21,maxBodyLength:10485760},a={};return Object.keys(o).forEach(function(e){var r=e+":",t=a[r]=o[e],n=s[e]=Object.create(t);n.request=function(e,t){return"string"==typeof e?(e=A.parse(e)).maxRedirects=s.maxRedirects:e=Object.assign({protocol:r,maxRedirects:s.maxRedirects,maxBodyLength:s.maxBodyLength},e),e.nativeProtocols=a,i.equal(e.protocol,r,"protocol mismatch"),K("options",e),new W(e,t)},n.get=function(e,t){var r=n.request(e,t);return r.end(),r}}),s}["abort","aborted","error","socket","timeout"].forEach(function(t){Z[t]=function(e){this._redirectable.emit(t,e)}}),(W.prototype=Object.create(V.prototype)).write=function(e,t,r){if(!("string"==typeof e||"object"==typeof e&&"length"in e))throw new Error("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new Error("Request body larger than maxBodyLength limit")),this.abort()):r&&r()},W.prototype.end=function(e,t,r){"function"==typeof e?(r=e,e=t=null):"function"==typeof t&&(r=t,t=null);var n=this._currentRequest;this.write(e||"",t,function(){n.end(null,null,r)})},W.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},W.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},["abort","flushHeaders","getHeader","setNoDelay","setSocketKeepAlive","setTimeout"].forEach(function(r){W.prototype[r]=function(e,t){return this._currentRequest[r](e,t)}}),["aborted","connection","socket"].forEach(function(e){Object.defineProperty(W.prototype,e,{get:function(){return this._currentRequest[e]}})}),W.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var r=e.substr(0,e.length-1);this._options.agent=this._options.agents[r]}var n=this._currentRequest=t.request(this._options,this._onNativeResponse);for(var o in this._currentUrl=A.format(this._options),n._redirectable=this,Z)o&&n.on(o,Z[o]);if(this._isRedirect){var s=0,a=this._requestBodyBuffers;!function e(){if(s<a.length){var t=a[s++];n.write(t.data,t.encoding,e)}else n.end()}()}}else this.emit("error",new Error("Unsupported protocol "+e))},W.prototype._processResponse=function(e){this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:e.statusCode});var t=e.headers.location;if(t&&!1!==this._options.followRedirects&&300<=e.statusCode&&e.statusCode<400){if(++this._redirectCount>this._options.maxRedirects)return void this.emit("error",new Error("Max redirects exceeded."));var r,n=this._options.headers;if(307!==e.statusCode&&!(this._options.method in Y))for(r in this._options.method="GET",this._requestBodyBuffers=[],n)/^content-/i.test(r)&&delete n[r];if(!this._isRedirect)for(r in n)/^host$/i.test(r)&&delete n[r];var o=A.resolve(this._currentUrl,t);K("redirecting to",o),Object.assign(this._options,A.parse(o)),this._isRedirect=!0,this._performRequest(),e.destroy()}else e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[]};var ee=Q({http:R,https:E}),te=Q;ee.wrap=te;function re(O){return new Promise(function(t,r){function s(e){t(e)}function a(e){r(e)}var e=O.data,n=O.headers;if(n["User-Agent"]||n["user-agent"]||(n["User-Agent"]="axios/"+Ae.version),e&&!j.isStream(e)){if(!Buffer.isBuffer(e))if(j.isArrayBuffer(e))e=Buffer.from(new Uint8Array(e));else{if(!j.isString(e))return a(S("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",O));e=Buffer.from(e,"utf-8")}n["Content-Length"]=e.length}var o=void 0;O.auth&&(o=(O.auth.username||"")+":"+(O.auth.password||""));var i=T(O.baseURL,O.url),u=A.parse(i),c=u.protocol||"http:";if(!o&&u.auth){var f=u.auth.split(":");o=(f[0]||"")+":"+(f[1]||"")}o&&delete n.Authorization;var p=ke.test(c),d=p?O.httpsAgent:O.httpAgent,l={path:k(u.path,O.params,O.paramsSerializer).replace(/^\?/,""),method:O.method.toUpperCase(),headers:n,agent:d,agents:{http:O.httpAgent,https:O.httpsAgent},auth:o};O.socketPath?l.socketPath=O.socketPath:(l.hostname=u.hostname,l.port=u.port);var h,m=O.proxy;if(!m&&!1!==m){var g=c.slice(0,-1)+"_proxy",y=process.env[g]||process.env[g.toUpperCase()];if(y){var v=A.parse(y),C=process.env.no_proxy||process.env.NO_PROXY,b=!0;if(C)b=!C.split(",").map(function(e){return e.trim()}).some(function(e){return!!e&&("*"===e||("."===e[0]&&u.hostname.substr(u.hostname.length-e.length)===e||u.hostname===e))});if(b&&(m={host:v.hostname,port:v.port},v.auth)){var w=v.auth.split(":");m.auth={username:w[0],password:w[1]}}}}if(m&&(l.hostname=m.host,l.host=m.host,l.headers.host=u.hostname+(u.port?":"+u.port:""),l.port=m.port,l.path=c+"//"+u.hostname+(u.port?":"+u.port:"")+l.path,m.auth)){var x=Buffer.from(m.auth.username+":"+m.auth.password,"utf8").toString("base64");l.headers["Proxy-Authorization"]="Basic "+x}var _=p&&(!m||ke.test(m.protocol));h=O.transport?O.transport:0===O.maxRedirects?_?E:R:(O.maxRedirects&&(l.maxRedirects=O.maxRedirects),_?je:Be),O.maxContentLength&&-1<O.maxContentLength&&(l.maxBodyLength=O.maxContentLength);var F=h.request(l,function(e){if(!F.aborted){var t=e;switch(e.headers["content-encoding"]){case"gzip":case"compress":case"deflate":t=204===e.statusCode?t:t.pipe(B.createUnzip()),delete e.headers["content-encoding"]}var r=e.req||F,n={status:e.statusCode,statusText:e.statusMessage,headers:e.headers,config:O,request:r};if("stream"===O.responseType)n.data=t,N(s,a,n);else{var o=[];t.on("data",function(e){o.push(e),-1<O.maxContentLength&&Buffer.concat(o).length>O.maxContentLength&&(t.destroy(),a(S("maxContentLength size of "+O.maxContentLength+" exceeded",O,null,r)))}),t.on("error",function(e){F.aborted||a(q(e,O,null,r))}),t.on("end",function(){var e=Buffer.concat(o);"arraybuffer"!==O.responseType&&(e=e.toString(O.responseEncoding)),n.data=e,N(s,a,n)})}}});F.on("error",function(e){F.aborted||a(q(e,O,null,F))}),O.timeout&&F.setTimeout(O.timeout,function(){F.abort(),a(S("timeout of "+O.timeout+"ms exceeded",O,"ECONNABORTED",F))}),O.cancelToken&&O.cancelToken.promise.then(function(e){F.aborted||(F.abort(),a(e))}),j.isStream(e)?e.on("error",function(e){a(q(e,O,null,F))}).pipe(F):F.end(e)})}var ne,oe="axios@^0.19.2",se="axios@0.19.2",ae="sha1-PqNsXYgY0NX4qKl6bTa4bNwAyyc=",ie={},ue={type:"range",registry:!0,raw:"axios@^0.19.2",name:"axios",escapedName:"axios",rawSpec:"^0.19.2",saveSpec:null,fetchSpec:"^0.19.2"},ce=["#USER","/"],fe="https://registry.npm.taobao.org/axios/download/axios-0.19.2.tgz",pe="3ea36c5d8818d0d5f8a8a97a6d36b86cdc00cb27",de="axios@^0.19.2",le="F:\\work\\prolib",he={name:"Matt Zabriskie"},me={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},ge={url:"https://github.com/axios/axios/issues"},ye=[{path:"./dist/axios.min.js",threshold:"5kB"}],ve={"follow-redirects":"1.5.10"},Ce="Promise based HTTP client for the browser and node.js",be={bundlesize:"^0.17.0",coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^5.2.0",sinon:"^4.5.0",typescript:"^2.8.1","url-search-params":"^0.10.0",webpack:"^1.13.1","webpack-dev-server":"^1.14.1"},we="https://github.com/axios/axios",xe=["xhr","http","ajax","promise","node"],_e="index.js",Fe={type:"git",url:"git+https://github.com/axios/axios.git"},Oe={build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test && bundlesize",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},Re="./index.d.ts",Ee={_from:oe,_id:se,_inBundle:!1,_integrity:ae,_location:"/axios",_phantomChildren:ie,_requested:ue,_requiredBy:ce,_resolved:fe,_shasum:pe,_spec:de,_where:le,author:he,browser:me,bugs:ge,bundleDependencies:!1,bundlesize:ye,dependencies:ve,deprecated:!1,description:Ce,devDependencies:be,homepage:we,keywords:xe,license:"MIT",main:_e,name:"axios",repository:Fe,scripts:Oe,typings:Re,version:"0.19.2"},Ae=(ne=Object.freeze({__proto__:null,_from:oe,_id:se,_inBundle:!1,_integrity:ae,_location:"/axios",_phantomChildren:ie,_requested:ue,_requiredBy:ce,_resolved:fe,_shasum:pe,_spec:de,_where:le,author:he,browser:me,bugs:ge,bundleDependencies:!1,bundlesize:ye,dependencies:ve,deprecated:!1,description:Ce,devDependencies:be,homepage:we,keywords:xe,license:"MIT",main:_e,name:"axios",repository:Fe,scripts:Oe,typings:Re,version:"0.19.2",default:Ee}))&&ne.default||ne,Be=ee.http,je=ee.https,ke=/https:?/,qe={"Content-Type":"application/x-www-form-urlencoded"};function Se(e,t){!j.isUndefined(e)&&j.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ne,Te={adapter:("undefined"!=typeof XMLHttpRequest?Ne=_:"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(Ne=re),Ne),transformRequest:[function(e,t){return m(t,"Accept"),m(t,"Content-Type"),j.isFormData(e)||j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)?e:j.isArrayBufferView(e)?e.buffer:j.isURLSearchParams(e)?(Se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):j.isObject(e)?(Se(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};Te.headers={common:{Accept:"application/json, text/plain, */*"}},j.forEach(["delete","get","head"],function(e){Te.headers[e]={}}),j.forEach(["post","put","patch"],function(e){Te.headers[e]=j.merge(qe)});var Le=Te;function Ue(e){e.cancelToken&&e.cancelToken.throwIfRequested()}function Pe(t){return Ue(t),t.headers=t.headers||{},t.data=l(t.data,t.headers,t.transformRequest),t.headers=j.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),j.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||Le.adapter)(t).then(function(e){return Ue(t),e.data=l(e.data,e.headers,t.transformResponse),e},function(e){return h(e)||(Ue(t),e&&e.response&&(e.response.data=l(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}function De(t,r){r=r||{};var n={},e=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];j.forEach(e,function(e){void 0!==r[e]&&(n[e]=r[e])}),j.forEach(o,function(e){j.isObject(r[e])?n[e]=j.deepMerge(t[e],r[e]):void 0!==r[e]?n[e]=r[e]:j.isObject(t[e])?n[e]=j.deepMerge(t[e]):void 0!==t[e]&&(n[e]=t[e])}),j.forEach(s,function(e){void 0!==r[e]?n[e]=r[e]:void 0!==t[e]&&(n[e]=t[e])});var a=e.concat(o).concat(s),i=Object.keys(r).filter(function(e){return-1===a.indexOf(e)});return j.forEach(i,function(e){void 0!==r[e]?n[e]=r[e]:void 0!==t[e]&&(n[e]=t[e])}),n}function ze(e){this.defaults=e,this.interceptors={request:new C,response:new C}}ze.prototype.request=function(e,t){"string"==typeof e?(e=t||{}).url=arguments[0]:e=e||{},(e=De(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=[Pe,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){r.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){r.push(e.fulfilled,e.rejected)});r.length;)n=n.then(r.shift(),r.shift());return n},ze.prototype.getUri=function(e){return e=De(this.defaults,e),k(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},j.forEach(["delete","get","head","options"],function(r){ze.prototype[r]=function(e,t){return this.request(j.merge(t||{},{method:r,url:e}))}}),j.forEach(["post","put","patch"],function(n){ze.prototype[n]=function(e,t,r){return this.request(j.merge(r||{},{method:n,url:e,data:t}))}});var Me=ze;function He(e){this.message=e}He.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},He.prototype.__CANCEL__=!0;var Ie=He;function $e(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new Ie(e),t(r.reason))})}$e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},$e.source=function(){var t;return{token:new $e(function(e){t=e}),cancel:t}};var Ge=$e;function Xe(e){var t=new Me(e),r=o(Me.prototype.request,t);return j.extend(r,Me.prototype,t),j.extend(r,t),r}var Je=Xe(Le);Je.Axios=Me,Je.create=function(e){return Xe(De(Je.defaults,e))},Je.Cancel=Ie,Je.CancelToken=Ge,Je.isCancel=h,Je.all=function(e){return Promise.all(e)},Je.spread=function(t){return function(e){return t.apply(null,e)}};var Ve=Je,Ke=Je;Ve.default=Ke;var Ye=Ve;console.log(Ye+{a:1}),console.log("223432r")});