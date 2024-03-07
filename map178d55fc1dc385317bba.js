(()=>{"use strict";var e,t={961:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(2551)},6540:(e,t,n)=>{e.exports=n(5287)},3968:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MapApp=void 0;var o=a(n(6540)),l=n(2745),u=n(5214);n(1780),n(4753);var i=n(3481),c=a(n(9875));n(2407),n(6203);var f=function(e){var t=e.children,n=e.toShow,r=e.setOpenSlider,a=(0,l.useMap)(),u=o.default.useState(),c=u[0],f=u[1];return o.default.useEffect((function(){c&&n?c.show():c&&c.hide()}),[n]),o.default.useEffect((function(){var e=i.control.sidebar("sidebar",{position:"left",autoPan:!0});return e.on("hidden",(function(){return r(!1)})),a.addControl(e),f(e),function(){}}),[]),o.default.createElement("div",{id:"sidebar"},t)},d=function(e){var t=e.bounds,n=e.callback,r=(0,l.useMap)();o.default.useEffect((function(){t&&r.fitBounds(t)}),[t]);var a=function(e){r.fitBounds(e.layer.getBounds()),n&&n(e)};return o.default.useEffect((function(){return r.on("baselayerchange",a),function(){r.off("baselayerchange",a)}}),[]),o.default.createElement(o.default.Fragment,null)};t.MapApp=function(){var e,t=o.default.useState(!1),n=t[0],a=t[1],s=o.default.useState({}),p=s[0],v=s[1],m=o.default.useState(""),h=m[0],g=m[1],y=o.default.useState(),E=y[0],L=y[1],b=o.default.useState([]),O=b[0],_=b[1],w=o.default.useState([]),S=w[0],k=w[1],T=o.default.useState([]),M=T[0],x=T[1];return o.default.useEffect((function(){var e=new URL(location.href).searchParams.get("url");if(e){var t="https://raw.githubusercontent.com/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){var t,n,a,o,l=e.results,u=l[0],i=l[1];_(null===(t=null==u?void 0:u.result)||void 0===t?void 0:t.rawData),k(null===(n=null==i?void 0:i.result)||void 0===n?void 0:n.rawData);var c=r(r([],null===(a=null==u?void 0:u.result)||void 0===a?void 0:a.rawData.map((function(e){return e[3]})),!0),null===(o=null==i?void 0:i.result)||void 0===o?void 0:o.rawData.map((function(e){return e[3]})),!0),f=c.filter((function(e,t){return c.indexOf(e)==t}));x(f)}))}}),[]),o.default.useEffect((function(){var e=0,t=0,n=0,a=0;S&&S.length&&r([],S,!0).forEach((function(r){var o=r[2];if(r[3]===h){var l=JSON.parse(o),u=l[0],i=l[1];u&&((u>e||!e)&&(e=u),(u<n||!n)&&(n=u)),i&&((i>t||!t)&&(t=i),(i<a||!a)&&(a=i))}})),L([[e,t],[n,a]])}),[S,O,h]),o.default.createElement(o.default.Fragment,null,!n&&o.default.createElement("div",{id:"filter-button",onClick:function(){return a(!n)}}),o.default.createElement(l.MapContainer,{attributionControl:!1,id:"map",center:[53.902287,27.561824],zoom:11,trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},o.default.createElement(d,{bounds:E,callback:function(e){g(e.name)}}),o.default.createElement(l.TileLayer,{url:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],maxZoom:20}),o.default.createElement(l.LayersControl,{hideSingleBase:!0,position:"topright",collapsed:!1},M.map((function(e,t){return o.default.createElement(l.LayersControl.BaseLayer,{key:t,checked:0===t,name:e},o.default.createElement(l.FeatureGroup,null,o.default.createElement(c.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},S.map((function(t,n){var r=t[0],u=t[1],c=t[2];if(t[3]===e){var f=JSON.parse(c),d=f[0],s=f[1];return o.default.createElement(l.Marker,{key:n,position:[d,s],icon:(0,i.divIcon)({html:'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">\n                                                                        <path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z" fill="red"></path>\n                                                                      </svg>',className:"marker-div-icon"}),eventHandlers:{click:function(){}}},!u&&o.default.createElement(l.Tooltip,null,r),u&&o.default.createElement(l.Popup,null,o.default.createElement("b",null,r),o.default.createElement("p",null,o.default.createElement("span",{className:"popup-readmore-link",onClick:function(){v({title:r,description:u}),a(!0)}},"Подробнее"))))}}))),O.map((function(t,n){var r=t[0],a=t[1],u=t[2],i=t[3];if(u&&i===e)return o.default.createElement(l.Polygon,{key:n,positions:JSON.parse(u),pathOptions:{opacity:.1}},o.default.createElement(l.Tooltip,null,r),a&&o.default.createElement(l.Popup,null,o.default.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))}))))}))),o.default.createElement(l.FeatureGroup,null,o.default.createElement(u.EditControl,{position:"topleft",onCreated:function(e){var t;if("polygon"===e.layerType&&(console.log("getLatLngs",e.layer.getLatLngs()),t=e.layer.getLatLngs()[0].map((function(e){return Object.values(e)})),console.log("dataToSave",t)),"marker"===e.layerType){console.log("getLatLng",e.layer.getLatLng());var n=e.layer.getLatLng();t=[n.lat,n.lng],console.log("dataToSave",t)}try{!function(){try{return window.self!==window.top}catch(e){return!0}}()?navigator.clipboard.writeText(JSON.stringify(t)):window.top.postMessage(t,"*")}catch(e){console.error("Failed to copy: ",e)}},draw:{polyline:!1,polygon:!0,rectangle:!1,circle:!1,marker:!0,circlemarker:!1}})),o.default.createElement(f,{toShow:n,setOpenSlider:a},o.default.createElement("h3",null,p.title),null===(e=null==p?void 0:p.description)||void 0===e?void 0:e.split("\n\n").map((function(e,t){return o.default.createElement("p",{key:t,dangerouslySetInnerHTML:{__html:null==e?void 0:e.split("\n").join("<br>")}})})))))}},5722:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(5338)),o=r(n(6540)),l=n(3968);a.default.createRoot(document.getElementById("root")).render(o.default.createElement(l.MapApp,null))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(f=0;f<e.length;f++){for(var[n,a,o]=e[f],u=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(u=!1,o<l&&(l=o));if(u){e.splice(f--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={163:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,u,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(i)var f=i(r)}for(t&&t(n);c<l.length;c++)o=l[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(f)},n=self.webpackChunkblog=self.webpackChunkblog||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var a=r.O(void 0,[500],(()=>r(5722)));a=r.O(a)})();