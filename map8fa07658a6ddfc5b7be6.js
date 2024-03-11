(()=>{"use strict";var e,t={961:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(2551)},6540:(e,t,n)=>{e.exports=n(5287)},3968:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MapApp=void 0;var a=o(n(6540)),l=n(2745),u=n(5214);n(1780),n(4753);var c=n(3481),i=o(n(9875));n(2407),n(6203);var s=n(9937),f=function(e){var t=e.children,n=e.toShow,r=e.setOpenSlider,o=(0,l.useMap)(),u=a.default.useState(),i=u[0],s=u[1];return a.default.useEffect((function(){i&&n?i.show():i&&i.hide()}),[n]),a.default.useEffect((function(){var e=c.control.sidebar("sidebar",{position:"left",autoPan:!0});return e.on("hidden",(function(){return r(!1)})),o.addControl(e),s(e),function(){}}),[]),a.default.createElement("div",{id:"sidebar"},t)},d=function(e){var t=e.bounds,n=e.callback,r=(0,l.useMap)();a.default.useEffect((function(){t&&r.fitBounds(t)}),[t]);var o=function(e){r.fitBounds(e.layer.getBounds()),n&&n(e)};return a.default.useEffect((function(){return r.on("baselayerchange",o),function(){r.off("baselayerchange",o)}}),[]),a.default.createElement(a.default.Fragment,null)};t.MapApp=function(e){var t,n=e.sourceUrlProps,o=a.default.useState(!1),p=o[0],h=o[1],v=a.default.useState({}),g=v[0],m=v[1],y=a.default.useState(""),w=y[0],L=y[1],b=a.default.useState(),E=b[0],_=b[1],O=a.default.useState([]),S=O[0],M=O[1],k=a.default.useState([]),x=k[0],T=k[1],C=a.default.useState([]),I=C[0],z=C[1];return a.default.useEffect((function(){var e="";n&&(e="https://raw.githubusercontent.com/".concat(n));var t=new URL(location.href).searchParams,r=t.get("url"),o=t.get("id");o&&L(o),r&&(e="https://raw.githubusercontent.com/".concat(r)),fetch(e).then((function(e){return e.json()})).then((function(e){var t,n,r=e.results,a=r[0],l=r[1],u=null===(t=null==a?void 0:a.result)||void 0===t?void 0:t.rawData,c=null===(n=null==l?void 0:l.result)||void 0===n?void 0:n.rawData,i={},s=c.filter((function(e){var t=e[3];return i[t]=t,!!t})),f=u.filter((function(e){var t=e[3];return i[t]=t,!!t}));M(f),T(s);var d=Object.keys(i);z(d),!o&&L(d[0])}))}),[]),a.default.useEffect((function(){var e=0,t=0,n=0,o=0;x&&x.length&&r([],x,!0).forEach((function(r){var a=r[2],l=r[3];if(a&&l===w){var u=JSON.parse(a),c=u[0],i=u[1];c&&((c>e||!e)&&(e=c),(c<n||!n)&&(n=c)),i&&((i>t||!t)&&(t=i),(i<o||!o)&&(o=i))}})),_([[e,t],[n,o]])}),[x,S,w]),a.default.createElement(a.default.Fragment,null,!p&&a.default.createElement("div",{id:"filter-button",onClick:function(){return h(!p)}}),a.default.createElement(l.MapContainer,{attributionControl:!1,id:"map",center:[53.902287,27.561824],zoom:11,trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},a.default.createElement(d,{bounds:E,callback:function(e){L(e.name)}}),a.default.createElement(l.TileLayer,{url:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],maxZoom:20}),a.default.createElement(l.LayersControl,{hideSingleBase:!0,position:"topright",collapsed:!1},I.filter((function(e){return!(n&&"localhost"!==location.hostname&&(new Date).getFullYear()<2026&&e!==w)})).map((function(e,t){return a.default.createElement(l.LayersControl.BaseLayer,{key:t,checked:0===t,name:e},a.default.createElement(l.FeatureGroup,null,a.default.createElement(i.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},x.map((function(t,n){var r=t[0],o=t[1],u=t[2],i=t[3],f=t[4],d=t[5];if(u&&i===e){var p=JSON.parse(u),v=p[0],g=p[1];return a.default.createElement(l.Marker,{key:n,position:[v,g],icon:(0,c.divIcon)({html:(0,s.getIcon)(d)({color:f}),className:"marker-div-icon"}),eventHandlers:{click:function(){}}},!o&&a.default.createElement(l.Tooltip,null,r),o&&a.default.createElement(l.Popup,null,a.default.createElement("b",null,r),a.default.createElement("p",null,a.default.createElement("span",{className:"popup-readmore-link",onClick:function(){m({title:r,description:o}),h(!0)}},"Подробнее"))))}}))),S.map((function(t,n){var r=t[0],o=t[1],u=t[2],c=t[3],i=t[4],s=void 0===i?"blue":i;if(u&&c===e)return a.default.createElement(l.Polygon,{key:n,positions:JSON.parse(u),color:s,pathOptions:{opacity:.1}},a.default.createElement(l.Tooltip,null,r),o&&a.default.createElement(l.Popup,null,a.default.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))}))))}))),a.default.createElement(l.FeatureGroup,null,a.default.createElement(u.EditControl,{position:"topleft",onCreated:function(e){var t;if("polygon"===e.layerType&&(console.log("getLatLngs",e.layer.getLatLngs()),t=e.layer.getLatLngs()[0].map((function(e){return Object.values(e)})),console.log("dataToSave",t)),"marker"===e.layerType){console.log("getLatLng",e.layer.getLatLng());var n=e.layer.getLatLng();t=[n.lat,n.lng],console.log("dataToSave",t)}try{!function(){try{return window.self!==window.top}catch(e){return!0}}()?navigator.clipboard.writeText(JSON.stringify(t)):window.top.postMessage(t,"*")}catch(e){console.error("Failed to copy: ",e)}},draw:{polyline:!1,polygon:!0,rectangle:!1,circle:!1,marker:!0,circlemarker:!1}})),a.default.createElement(f,{toShow:p,setOpenSlider:h},a.default.createElement("h3",null,g.title),null===(t=null==g?void 0:g.description)||void 0===t?void 0:t.split("\n\n").map((function(e,t){return a.default.createElement("p",{key:t,dangerouslySetInnerHTML:{__html:null==e?void 0:e.split("\n").join("<br>")}})})))))}},9937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getIcon=t.schoolIcon=t.houseIcon=t.circleIcon=t.pinIcon=void 0,t.pinIcon=function(){return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n        <path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z" fill="red"/>\n    </svg>'},t.circleIcon=function(e){var t=e.color;return'<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">\n        <circle cx="12" cy="12" r="5" fill="'.concat(t||"red",'" />\n    </svg>')},t.houseIcon=function(e){var t=e.color;return'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">\n        <path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z" fill="'.concat(t||"red",'"></path>\n    </svg>')},t.schoolIcon=function(e){var t=e.color;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="20" height="20">\n        <path fill="'.concat(t||"red",'" d="M247.007 75.015a5.18 5.18 0 0 0-2.506-6.881l-29.979-13.979a5.175 5.175 0 0 0-6.881 2.505l-15.506 33.253-7.58-22.266a5.18 5.18 0 0 0-4.903-3.51H77.857a5.18 5.18 0 0 0-4.015 1.908L53.67 90.814a5.181 5.181 0 0 0-.886 4.938l50.065 147.069a5.177 5.177 0 0 0 4.9 3.509h109.384a5.179 5.179 0 1 0 0-10.356H111.457L64.917 99.262l24.411.005h.001a5.18 5.18 0 0 0 4.363-2.389 5.179 5.179 0 0 0 .334-4.963L85.96 74.491h89.987l9.866 28.98-34.446 73.872a5.157 5.157 0 0 0-.454 2.708l-.006.002 3.257 32.149a5.179 5.179 0 0 0 2.963 4.172 5.18 5.18 0 0 0 5.099-.413l26.722-18.17v-.002a5.15 5.15 0 0 0 1.781-2.091l15.307-32.823 27.214 79.944a5.182 5.182 0 0 0 6.569 3.233 5.179 5.179 0 0 0 3.233-6.571l-30.693-90.164 34.648-74.302zM68.576 88.907l8.063-9.9 4.585 9.903-12.648-.003zm146.263-23.18 20.594 9.604-4.733 10.151-20.597-9.603 4.736-10.152zm-52.711 122.347 13.464 6.278-12.002 8.16-1.462-14.438zm21.405-1.444-20.594-9.604 42.79-91.763 20.593 9.604-42.789 91.763z"/>\n        <path fill="').concat(t||"red",'" d="m204.084 103.424-20.928 44.88a5.178 5.178 0 1 0 9.385 4.376l20.927-44.879a5.175 5.175 0 0 0-2.503-6.881 5.179 5.179 0 0 0-6.881 2.504zM183.379 160.077a5.178 5.178 0 0 0-6.881 2.504l-.706 1.514a5.18 5.18 0 0 0 4.69 7.367 5.181 5.181 0 0 0 4.697-2.992l.705-1.512a5.178 5.178 0 0 0-2.505-6.881zM92.145 109.681a5.178 5.178 0 1 0 0 10.356h.86a5.176 5.176 0 0 0 5.177-5.178 5.177 5.177 0 0 0-5.177-5.178h-.86zM161.201 120.036a5.178 5.178 0 1 0 0-10.356h-52.449a5.178 5.178 0 0 0 0 10.356h52.449zM154.821 155.233a5.178 5.178 0 0 0-5.178-5.178h-43.754a5.177 5.177 0 0 0-5.177 5.178 5.177 5.177 0 0 0 5.177 5.178h43.754a5.178 5.178 0 0 0 5.178-5.178zM119.633 190.429a5.178 5.178 0 1 0 0 10.356h20.944a5.177 5.177 0 0 0 0-10.356h-20.944z"/>\n</svg>')},t.getIcon=function(e){switch(e){case"house":return t.houseIcon;case"school":return t.schoolIcon;default:return t.circleIcon}}},5722:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(5338)),a=r(n(6540)),l=n(3968);o.default.createRoot(document.getElementById("root")).render(a.default.createElement(l.MapApp,null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],u=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(u=!1,a<l&&(l=a));if(u){e.splice(s--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={163:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,u,c]=n,i=0;if(l.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var s=c(r)}for(t&&t(n);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunkblog=self.webpackChunkblog||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[500],(()=>r(5722)));o=r.O(o)})();