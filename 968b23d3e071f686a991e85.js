"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[968],{3968:function(t,e,n){var l=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var l,c=0,a=e.length;c<a;c++)!l&&c in e||(l||(l=Array.prototype.slice.call(e,0,c)),l[c]=e[c]);return t.concat(l||Array.prototype.slice.call(e))},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MapApp=void 0;var a=c(n(6540)),o=n(2745),r=n(5214);n(1780),n(4753);var i=n(3481),s=c(n(9875));n(2407),n(6203);var u=n(9937),d=function(t){var e=t.children,n=t.toShow,l=t.setOpenSlider,c=(0,o.useMap)(),r=a.default.useState(),s=r[0],u=r[1];return a.default.useEffect((function(){s&&n?s.show():s&&s.hide()}),[n]),a.default.useEffect((function(){var t=i.control.sidebar("sidebar",{position:"left",autoPan:!0});return t.on("hidden",(function(){return l(!1)})),c.addControl(t),u(t),function(){}}),[]),a.default.createElement("div",{id:"sidebar"},e)},f=function(t){var e=t.bounds,n=t.callback,l=(0,o.useMap)();a.default.useEffect((function(){e&&l.fitBounds(e)}),[e]);var c=function(t){n&&n(t,l)};return a.default.useEffect((function(){return l.on("baselayerchange",c),function(){l.off("baselayerchange",c)}}),[]),a.default.createElement(a.default.Fragment,null)};e.MapApp=function(t){var e,n=t.sourceUrlProps,c=a.default.useState(!1),g=c[0],h=c[1],p=a.default.useState({}),v=p[0],y=p[1],m=a.default.useState(""),w=m[0],C=m[1],M=a.default.useState(),z=M[0],E=M[1],L=a.default.useState([]),x=L[0],V=L[1],b=a.default.useState([]),k=b[0],S=b[1],_=a.default.useState([]),F=_[0],I=_[1],O=a.default.useState([]),H=O[0],B=O[1],T=a.default.useState([]),A=T[0],P=T[1],j=a.default.useState([]),N=j[0],D=j[1];return a.default.useEffect((function(){var t="";n&&(t="https://raw.githubusercontent.com/".concat(n));var e=new URL(location.href).searchParams,l=e.get("url"),c=e.get("id");c&&C(c),l&&(t="https://raw.githubusercontent.com/".concat(l)),fetch(t).then((function(t){return t.json()})).then((function(t){var e=t.polygons,n=t.houses,l=t.polylines,a={};n.forEach((function(t){var e=t.village;a[e]=e})),e&&V(e),n&&I(n),l&&S(l);var o=Object.keys(a);B(o),!c&&C(o[0])}))}),[]),a.default.useEffect((function(){var t=0,e=0,n=0,c=0;F&&F.length&&l([],F,!0).forEach((function(l){var a=l.coords,o=l.village;if(a&&o===w){var r=JSON.parse(a),i=r[0],s=r[1];i&&((i>t||!t)&&(t=i),(i<n||!n)&&(n=i)),s&&((s>e||!e)&&(e=s),(s<c||!c)&&(c=s))}})),E([[t,e],[n,c]])}),[F,x,w]),a.default.useEffect((function(){var t=F.map((function(t,e){var n=t.title,l=t.description,c=t.coords,r=t.village,s=t.iconColor,d=t.iconType;if(c&&r===w){var f=JSON.parse(c),g=f[0],p=f[1];return a.default.createElement(o.Marker,{key:e,position:[g,p],icon:(0,i.divIcon)({html:(0,u.getIcon)(d)({iconColor:s}),className:"marker-div-icon"}),eventHandlers:{click:function(){}}},!l&&a.default.createElement(o.Tooltip,null,n),l&&a.default.createElement(o.Popup,null,a.default.createElement("b",null,n),a.default.createElement("p",null,a.default.createElement("span",{className:"popup-readmore-link",onClick:function(){y({title:n,description:l}),h(!0)}},"Подробнее"))))}}));P(t)}),[F,w]),a.default.useEffect((function(){var t=k.map((function(t,e){var n=t.title,l=t.description,c=t.coords,r=t.village,i=t.iconColor;if(c&&r===w){var s=JSON.parse(c);return a.default.createElement(o.Polyline,{positions:s,color:i||"red",dashArray:"5,10"},a.default.createElement(o.Tooltip,null,n),l&&a.default.createElement(o.Popup,null,a.default.createElement("b",null,n),a.default.createElement("p",null,l)))}}));D(t)}),[k,w]),a.default.createElement(a.default.Fragment,null,!g&&a.default.createElement("div",{id:"filter-button",onClick:function(){return h(!g)}}),a.default.createElement(o.MapContainer,{attributionControl:!1,id:"map",center:[53.902287,27.561824],zoom:11,trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},a.default.createElement(f,{bounds:z,callback:function(t){C(t.name)}}),a.default.createElement(o.TileLayer,{url:"http://{s}.google.com/vt/lyrs=s".concat(~location.search.indexOf("m=h")?"":",h","&x={x}&y={y}&z={z}"),subdomains:["mt0","mt1","mt2","mt3"],maxZoom:20}),a.default.createElement(o.LayersControl,{hideSingleBase:!0,position:"topright",collapsed:!1},H.filter((function(t){return!(n&&"localhost"!==location.hostname&&(new Date).getFullYear()<2026&&t!==w)})).map((function(t,e){return a.default.createElement(o.LayersControl.BaseLayer,{key:e,checked:0===e,name:t},a.default.createElement(o.FeatureGroup,null,a.default.createElement(s.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},A),x.map((function(e,n){var l=e.title,c=e.description,r=e.coords,i=e.village,s=e.iconColor;if(r&&i===t)return a.default.createElement(o.Polygon,{key:n,positions:JSON.parse(r),color:s,pathOptions:{opacity:.1}},a.default.createElement(o.Tooltip,null,l),c&&a.default.createElement(o.Popup,null,a.default.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))})),N))}))),a.default.createElement(o.FeatureGroup,null,a.default.createElement(r.EditControl,{position:"topleft",onCreated:function(t){var e;if("polygon"===t.layerType&&(console.log("getLatLngs",t.layer.getLatLngs()),e=t.layer.getLatLngs()[0].map((function(t){return Object.values(t)})),console.log("dataToSave",e)),"polyline"===t.layerType&&(console.log("getLatLngs",t.layer.getLatLngs()),e=t.layer.getLatLngs().map((function(t){return Object.values(t)})),console.log("dataToSave",e)),"marker"===t.layerType){console.log("getLatLng",t.layer.getLatLng());var n=t.layer.getLatLng();e=[n.lat,n.lng],console.log("dataToSave",e)}try{!function(){try{return window.self!==window.top}catch(t){return!0}}()?navigator.clipboard.writeText(JSON.stringify(e)):window.top.postMessage(e,"*")}catch(t){console.error("Failed to copy: ",t)}},draw:{polyline:!0,polygon:!0,rectangle:!1,circle:!1,marker:!0,circlemarker:!1}})),a.default.createElement(d,{toShow:g,setOpenSlider:h},a.default.createElement("h3",null,v.title),null===(e=null==v?void 0:v.description)||void 0===e?void 0:e.split("\n\n").map((function(t,e){return a.default.createElement("p",{key:e,dangerouslySetInnerHTML:{__html:null==t?void 0:t.split("\n").join("<br>")}})})))))}},9937:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getIcon=e.schoolIcon=e.houseIcon=e.pilIcon=e.circleIcon=e.pinIcon=void 0,e.pinIcon=function(){return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n        <path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z" fill="red"/>\n    </svg>'},e.circleIcon=function(t){var e=t.iconColor;return'<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">\n        <circle cx="12" cy="12" r="5" fill="'.concat(e||"red",'" />\n    </svg>')},e.pilIcon=function(t){var e=t.iconColor;return'<svg fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\n        <path fill="'.concat(e||"red",'" d="M5.601 18.621c-1.952 1.953-1.952 5.119 0 7.072l0.708 0.707c1.952 1.951 5.118 1.951 7.071 0l5.656-5.658-7.778-7.778-5.657 5.657zM12.672 25.693c-1.562 1.562-4.095 1.562-5.656 0l-0.707-0.707c-1.562-1.562-1.562-4.096 0-5.658l4.949-4.949 6.364 6.363-4.95 4.951zM25.4 7.308l-0.707-0.707c-1.952-1.953-5.118-1.953-7.071 0l-5.657 5.656 7.778 7.778 5.657-5.656c1.953-1.953 1.953-5.119 0-7.071z"></path>\n</svg>')},e.houseIcon=function(t){var e=t.iconColor;return'<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n\t width="15px" height="15px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">\n<g>\n\t<path fill="#F9EBB2" d="M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2\n\t\tV31.411L32.009,7.403L56,31.394V60z"/>\n\t<polygon fill="'.concat(e||"red",'" points="14,6 18,6 18,12.601 14,16.593 "/>\n\t<rect x="28" y="48" fill="#F9EBB2" width="8" height="14"/>\n\t<path fill="').concat(e||"red",'" d="M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293\n\t\ts-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803\n\t\tL31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32\n\t\tC62,32.552,61.553,33,61,33z"/>\n\t<g>\n\t\t<path fill="').concat(e||"red",'" d="M63.211,29.789L34.438,1.015c0,0-0.937-1.015-2.43-1.015s-2.376,0.991-2.376,0.991L20,10.604V5\n\t\t\tc0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v13.589L0.783,29.783C0.24,30.326,0,31.172,0,32c0,1.656,1.343,3,3,3\n\t\t\tc0.828,0,1.662-0.251,2.205-0.794L6,33.411V60c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4V33.394l0.804,0.804\n\t\t\tC59.347,34.739,60.172,35,61,35c1.657,0,3-1.343,3-3C64,31.171,63.754,30.332,63.211,29.789z M14,6h4v6.601l-4,3.992V6z M36,62h-8\n\t\t\tV48h8V62z M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2V31.411\n\t\t\tL32.009,7.403L56,31.394V60z M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293\n\t\t\ts-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803\n\t\t\tL31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32\n\t\t\tC62,32.552,61.553,33,61,33z"/>\n\t\t<path fill="').concat(e||"red",'" d="M23,32h-8c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-8\n\t\t\tC24,32.447,23.553,32,23,32z M22,40h-6v-6h6V40z"/>\n\t\t<path fill="').concat(e||"red",'" d="M41,42h8c0.553,0,1-0.447,1-1v-8c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v8\n\t\t\tC40,41.553,40.447,42,41,42z M42,34h6v6h-6V34z"/>\n\t</g>\n\t<rect x="28" y="48" fill="#506C7F" width="8" height="14"/>\n\t<g>\n\t\t<rect x="16" y="34" fill="#45AAB8" width="6" height="6"/>\n\t\t<rect x="42" y="34" fill="#45AAB8" width="6" height="6"/>\n\t</g>\n</g>\n</svg>')},e.schoolIcon=function(t){var e=t.iconColor;return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"  viewBox="0 0 478.68 478.68" xml:space="preserve" width="20" height="20">\n<g id="_x32_8._School_2_">\n\t<g id="XMLID_76_">\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<polygon style="fill:#F2D59F;" points="468.68,255.61 468.68,463.15 376.95,463.15 376.95,255.6 468.67,255.6     "/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style="fill:#8ECAC1;" points="416.91,186.8 468.67,255.6 376.95,255.6 376.95,186.8     "/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:#F2D59F;" d="M376.95,255.6v207.55h-91.74v-100.4h-45.87h-45.87v100.4h-91.74V255.6v-68.8L239.34,118      l137.61,68.8V255.6z M261.92,205.41c0-12.47-10.11-22.58-22.58-22.58s-22.58,10.11-22.58,22.58s10.11,22.58,22.58,22.58      S261.92,217.88,261.92,205.41z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style="fill:#FF7124;" points="326.06,15.53 294.99,41.85 326.06,68.17 239.34,68.17 239.34,15.53     "/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x="239.34" y="362.75" style="fill:#FF7124;" width="45.87" height="100.4"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<circle style="fill:#E6B263;" cx="239.34" cy="205.41" r="22.58"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x="193.47" y="362.75" style="fill:#FF7124;" width="45.87" height="100.4"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style="fill:#F2D59F;" points="101.73,255.6 101.73,463.15 10,463.15 10,255.61 10.01,255.6     "/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style="fill:#8ECAC1;" points="101.73,186.8 101.73,255.6 10.01,255.6 61.77,186.8     "/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:'.concat(e||"red",';" d="M376.95,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C386.95,468.673,382.473,473.15,376.95,473.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M193.47,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C203.47,468.673,198.992,473.15,193.47,473.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M101.729,473.15H10c-5.523,0-10-4.477-10-10V255.61c0-5.523,4.477-10,10-10      c5.522,0,10,4.477,10,10v197.54h81.729c5.522,0,10,4.477,10,10C111.729,468.673,107.252,473.15,101.729,473.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M101.729,265.6H10.01c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C111.729,261.122,107.252,265.6,101.729,265.6z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M468.67,265.6h-91.72c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C478.67,261.122,474.192,265.6,468.67,265.6z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M468.68,473.15H376.95c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h81.729V255.61      c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10v207.54C478.68,468.673,474.202,473.15,468.68,473.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M285.21,472.15h-91.74c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9h91.74      c4.971,0,9,4.029,9,9v100.4C294.21,468.121,290.181,472.15,285.21,472.15z M202.47,454.15h73.74v-82.4h-73.74V454.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M55.87,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,420.093,61.393,424.57,55.87,424.57z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M422.81,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,420.093,428.332,424.57,422.81,424.57z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M55.87,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,340.613,61.393,345.09,55.87,345.09z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M422.81,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,340.613,428.332,345.09,422.81,345.09z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M147.6,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,390.233,153.122,394.71,147.6,394.71z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M331.08,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,390.233,336.603,394.71,331.08,394.71z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M147.6,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,310.753,153.122,315.23,147.6,315.23z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M331.08,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,310.753,336.603,315.23,331.08,315.23z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M239.34,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C249.34,310.753,244.862,315.23,239.34,315.23z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M468.674,265.607c-2.639,0-5.271-1.039-7.235-3.101c-0.267-0.28-0.527-0.586-0.76-0.895      L411.92,196.8h-34.97c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h39.96c3.143,0,6.102,1.477,7.991,3.988l51.684,68.698      c3.102,4.005,2.733,9.791-1.014,13.36C473.635,264.691,471.151,265.607,468.674,265.607z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M10.001,265.603c-2.478,0-4.958-0.914-6.892-2.756c-3.769-3.589-4.127-9.413-0.969-13.418      l51.639-68.64c1.89-2.511,4.849-3.988,7.991-3.988h39.96c5.522,0,10,4.477,10,10c0,5.523-4.478,10-10,10H66.76l-48.759,64.811      c-0.232,0.309-0.483,0.604-0.75,0.885C15.284,264.561,12.644,265.603,10.001,265.603z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M239.34,472.15c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9s9,4.029,9,9v100.4      C248.34,468.121,244.311,472.15,239.34,472.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M376.95,473.15c-5.522,0-10-4.477-10-10V192.98l-127.61-63.8l-127.61,63.8V463.15      c0,5.523-4.478,10-10,10c-5.522,0-10-4.477-10-10V186.8c0-3.788,2.141-7.251,5.528-8.944l137.61-68.8      c2.814-1.407,6.129-1.407,8.943,0l137.61,68.8c3.388,1.694,5.528,5.157,5.528,8.944v276.35      C386.95,468.673,382.473,473.15,376.95,473.15z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M239.34,128c-5.522,0-10-4.477-10-10V68.17c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10V118      C249.34,123.523,244.862,128,239.34,128z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M326.06,78.17h-86.72c-5.522,0-10-4.477-10-10V15.53c0-5.523,4.478-10,10-10h86.72      c4.195,0,7.944,2.619,9.389,6.558c1.444,3.939,0.276,8.361-2.925,11.073l-22.063,18.69l22.063,18.69      c3.201,2.712,4.369,7.134,2.925,11.073C334.004,75.551,330.255,78.17,326.06,78.17z M249.34,58.17h49.444l-10.258-8.69      c-2.243-1.9-3.536-4.69-3.536-7.63c0-2.94,1.293-5.73,3.536-7.63l10.258-8.69H249.34V58.17z"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style="fill:').concat(e||"red",';" d="M239.34,236.99c-17.413,0-31.58-14.167-31.58-31.58s14.167-31.58,31.58-31.58      s31.58,14.167,31.58,31.58S256.753,236.99,239.34,236.99z M239.34,191.83c-7.488,0-13.58,6.092-13.58,13.58      c0,7.488,6.092,13.58,13.58,13.58s13.58-6.092,13.58-13.58C252.92,197.922,246.828,191.83,239.34,191.83z"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</g>\n</svg>')},e.getIcon=function(t){switch(t){case"house":return e.houseIcon;case"school":return e.schoolIcon;case"post":case"pharmacy":case"post and pharmacy":return e.pilIcon;default:return e.circleIcon}}}}]);