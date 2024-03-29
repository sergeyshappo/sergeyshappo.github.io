(()=>{"use strict";var e,t,a,l={4991:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(6540)),r=a(8890),c=l(a(9151)),u=l(a(3524)),o=l(a(9556)),i=a(6987);t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Дата"),n.default.createElement("th",{className:"born-name-tr"},"Родился"),n.default.createElement("th",null,"Родители"),n.default.createElement("th",null,"Восприемники"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,d,s=e.church,f=e.fod,m=e.page,h=e.year,p=e.month,v=e.born,E=e.baptism,g=e.notes,b=e.parants_note,_=e.godparents_note,y=(e.churchTitle,e.source_link),w=e.archive,k=e.field1,M=e.field2,N=e.field3,x=e._highlightResult,O="",S="",C=h,j=h;p.length>3?(O=p.slice(0,3),S=p.slice(-3),"DEC"===O&&"JAN"===S&&(C=h-1,j=h)):(O=p,S=p);var P="Рождение: ".concat(v," ").concat(r.monthMapping.get(O)," ").concat(C),T="Крещение: ".concat(E," ").concat(r.monthMapping.get(S)," ").concat(j),H="".concat(P,"\n\n ").concat(T),F="".concat(w,", Ф-О-Д: ").concat(f,", стр. ").concat(m,"; ").concat(r.churchesMapping.get(s)||s),A='<i class="mobile-version">Родители: </i><span>'.concat(null===(a=null==x?void 0:x.field2)||void 0===a?void 0:a.value,"</span>"),z='<i class="mobile-version">Крёстные: </i><span>'.concat(null===(l=null==x?void 0:x.field3)||void 0===l?void 0:l.value,"</span>");return n.default.createElement("tr",{key:t,className:"born-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.year,t.month,t.born,t.church;var l=t.field1,n=t.field2,r=t.field3,c=a.date_born_note,u=a.date_baptism_note,o=a.church_note;try{navigator.clipboard.writeText("\n".concat(o,"\n").concat(c,"\n").concat(u,"\nИмя родившегося: ").concat(l,"\nРодители: ").concat(n,"\nКрестные: ").concat(r,"\n            ").trim());var i=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});i.show(),setTimeout((function(){return i.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{date_born_note:P,date_baptism_note:T,church_note:F})}},"Copy")),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:F,value:r.churchesMapping.get(s)||s,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:H,value:h,dotsWidth:4}))),n.default.createElement("td",{className:"born-name-tr"},n.default.createElement("i",{className:"mobile-version"},"Имя младенца: "),n.default.createElement("span",{dangerouslySetInnerHTML:{__html:null===(d=null==x?void 0:x.field1)||void 0===d?void 0:d.value}})),n.default.createElement("td",null,b?n.default.createElement(o.default,{note:b,value:A}):n.default.createElement("span",{onMouseUp:function(e){return(0,i.sendFeedback)(e,{church:s,fod:f,page:m,year:h,month:p,born:v,baptism:E,field1:k,field2:M,field3:N})},dangerouslySetInnerHTML:{__html:A}})),n.default.createElement("td",null,_?n.default.createElement(o.default,{note:_,value:z}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:z}})),n.default.createElement("td",{className:"note-info"},g?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},g)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,y&&n.default.createElement("a",{target:"_blank",href:y},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},6506:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(6540)),r=a(8890),c=l(a(9151)),u=l(a(3524)),o=l(a(9556));t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Год"),n.default.createElement("th",null,"Кто умер"),n.default.createElement("th",null,"Возраст"),n.default.createElement("th",null,"От чего"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,i=e.church,d=e.fod,s=e.page,f=e.year,m=e.month,h=e.died,p=e.buried,v=e.age,E=e.reason,g=e.notes,b=e.name_note,_=(e.churchTitle,e.source_link),y=e.archive,w=(e.churchFromTable,e._highlightResult),k="",M="",N=f,x=f;m.length>3?(k=m.slice(0,3),M=m.slice(-3),"DEC"===k&&"JAN"===M&&(N=f-1,x=f)):(k=m,M=m);var O="Умер: ".concat(h," ").concat(r.monthMapping.get(k)," ").concat(N),S="Похоронен: ".concat(p," ").concat(r.monthMapping.get(M)," ").concat(x),C="".concat(O,"\n\n ").concat(S),j="".concat(y,", Ф-О-Д: ").concat(d,", стр. ").concat(s,"; ").concat(r.churchesMapping.get(i)||i);return n.default.createElement("tr",{key:t,className:"died-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.year,t.month,t.died;var l=t.field1,n=t.age,r=t.reason,c=(t.church,a.date_died_note),u=a.date_buried_note,o=a.church_note;try{navigator.clipboard.writeText("\n".concat(o,"\n").concat(c,"\n").concat(u,"\nКто умер: ").concat(l,"\nВозраст: ").concat(n,"\n").concat(r?"Причина смерти: ".concat(r):"","\n").trim());var i=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});i.show(),setTimeout((function(){return i.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{date_died_note:O,date_buried_note:S,church_note:j})}},"Copy")),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:j,value:r.churchesMapping.get(i)||i,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:C,value:f,dotsWidth:4}))),n.default.createElement("td",null,b?n.default.createElement(o.default,{note:b,value:null===(a=null==w?void 0:w.field1)||void 0===a?void 0:a.value}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:null===(l=null==w?void 0:w.field1)||void 0===l?void 0:l.value}})),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Возраст: "),n.default.createElement("span",null,v)),n.default.createElement("td",null,E),n.default.createElement("td",{className:"note-info"},g?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},g)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,_&&n.default.createElement("a",{target:"_blank",href:_},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},797:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DocsMapComponent=void 0;var n=l(a(6540)),r=a(2745);a(1780);var c={usaya1640:[{position:[-15.45,23.66],title:"Анищенко Евгений Константинович прочел это как 'Cвирид Зола'<br>Зола - подозреваю это то, из чего произошло мое Шаппо.<br>Возможно, это первое упоминание моего прямого предка."}],zalazje1925:[{position:[-39.22,-82.31],title:"Моя пра-пра-бабушка Ганна.<br>Машкович Анна Юдовна<br>Похоже, что её муж Трофим Константинов, на момент записи - умер."},{position:[5.8,-84.18],title:"Пузырицкий<br>Интересно то, что скорее всего его дети были уже Пожарицкими.<br>Они похоронены в Залазье и они все Абрамовичи."}]},u=function(e){var t=e.bounds,a=e.zoom,l=e.center,c=(0,r.useMap)();n.default.useEffect((function(){t&&c.fitBounds(t)}),[t]);var u=function(e){var t=e.latlng,a=window.location.href,l=new URL(a);l.searchParams.set("z","".concat(c.getZoom())),l.searchParams.set("c","".concat(Object.values(t).map((function(e){return e.toFixed(2)})).join(",")).trim());var n=window.location.pathname+"?"+l.searchParams.toString();history.pushState(null,"",n)};return n.default.useEffect((function(){return c.on("click",u),function(){c.off("click",u)}}),[]),n.default.useEffect((function(){l&&a&&c.setView(l,a,{animate:!0})}),[a,l]),n.default.createElement(n.default.Fragment,null)};t.DocsMapComponent=function(){var e=n.default.useState(""),t=e[0],a=e[1],l=n.default.useState(""),o=l[0],i=l[1],d=n.default.useState(),s=d[0],f=d[1],m=n.default.useState(),h=m[0],p=m[1],v=n.default.useState(),E=v[0],g=v[1];return n.default.useEffect((function(){var e=window.location.href,t=new URL(e),l=t.searchParams.get("id"),n=t.searchParams.get("n"),r=t.searchParams.get("z"),u=t.searchParams.get("c"),o=t.searchParams.get("notes");l&&(a(l),o&&g(c[l])),u&&p(u.split(",").map((function(e){return+e}))),r&&f(+r),u&&r&&n&&i(n)}),[]),n.default.createElement(n.default.Fragment,null,n.default.createElement(r.MapContainer,{attributionControl:!1,id:"map",bounds:[[-47.63578359086485,-117.94921875000001],[-47.754097979680026,118.03710937500001],[47.635783590864854,117.86132812500001],[47.517200697839414,-117.94921875000001]],trackResize:!0,zoomControl:!1,scrollWheelZoom:!0,style:{height:"100vh"}},n.default.createElement(u,{center:h,zoom:s}),t&&n.default.createElement(r.TileLayer,{url:"https://raw.githubusercontent.com/shappoff/storage/".concat(t,"/tiles/{z}/{y}/{x}.jpg"),maxZoom:6,noWrap:!0}),h&&n.default.createElement(r.Popup,{position:h,closeButton:!0,closeOnClick:!1,autoPan:!0},o||"??"),E&&E.map((function(e,t){var a=e.position,l=e.title;return n.default.createElement(r.Popup,{key:t,position:a,autoClose:!1,closeOnClick:!1},n.default.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))}))))}},6987:function(e,t,a){var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},n=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var l,n=0,r=t.length;n<r;n++)!l&&n in t||(l||(l=Array.prototype.slice.call(t,0,n)),l[n]=t[n]);return e.concat(l||Array.prototype.slice.call(t))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendFeedback=void 0;var c=r(a(6540)),u=a(961),o=r(a(3994)),i=r(a(8166));a(9722);var d=r(a(4991)),s=r(a(5892)),f=r(a(6506)),m=r(a(3311)),h=r(a(5831)),p=a(4938)("1SQITOMPJN","2f1a6c924bc9f33235bb98e570053a79").initIndex("metrics"),v=function(e){var t=[],a=[];return e.forEach((function(e){var l=e.value,n=e.label,r=e.uezd;"np"===r&&t.push({value:l,label:n,uezd:r}),"default"===r&&a.push({value:l,label:n,uezd:r})})),[{label:"Церкви:",options:a},{label:"н.п.",options:t}]},E={display:"flex",alignItems:"center",justifyContent:"space-between"},g={backgroundColor:"#EBECF0",borderRadius:"2em",color:"#172B4D",display:"inline-block",fontSize:12,fontWeight:"normal",lineHeight:"1",minWidth:1,padding:"0.16666666666667em 0.5em",textAlign:"center"},b=function(e){return c.default.createElement("div",{style:E},c.default.createElement("span",null,e.label),c.default.createElement("span",{style:g},e.options.length))};t.default=function(){var e=c.default.useState(!0),t=e[0],a=e[1],r=c.default.useState(""),u=r[0],E=r[1],g=c.default.useState([]),_=g[0],y=g[1],w=c.default.useState([]),k=w[0],M=w[1],N=c.default.useState(),x=N[0],O=N[1],S=c.default.useState(),C=S[0],j=S[1],P=c.default.useState([]),T=(P[0],P[1]),H=c.default.useState([]),F=H[0],A=H[1],z=c.default.useState([]),R=z[0],L=z[1],D=c.default.useState([]),I=D[0],W=D[1],B=c.default.useState("born"),U=B[0],Z=B[1],V=c.default.useState([]),J=V[0],G=V[1],Q=(0,m.default)(u,500);c.default.useEffect((function(){var e=[];I.length&&e.push(n([],I.map((function(e){return"church:".concat(e)})),!0)),p.search("",{responseFields:["facets","facets_stats"],facets:["_tags","year"],facetFilters:e}).then((function(e){var t=e.facets,a=e.facets_stats;if(j(a),O(t),t&&t._tags){var l=Object.keys(t._tags||{});A(l.map((function(e){return void 0===e&&(e=""),{key:~e.indexOf(";")?e.split(";")[0]:e,value:e}})))}}))}),[I]),c.default.useEffect((function(){p.search("",{hitsPerPage:0,facets:["church"]}).then((function(e){e.nbHits;var t=e.facets;t&&t.church&&L(Object.keys(t.church).map((function(e){return{key:e,value:t.church[e]}})))}))}),[]),c.default.useEffect((function(){if(Q){var e=[],a="";I.length&&e.push(n([],I.map((function(e){return"church:".concat(e)})),!0)),k.length&&e.push(n([],k.map((function(e){return"_tags:".concat(e)})),!0)),_.length&&(a="(year >= ".concat(_[0],") AND (year <= ").concat(_[1],")")),p.search(Q,{facets:["year","church","_tags"],typoTolerance:t,facetFilters:e,filters:a}).then((function(e){var t=e.hits,a=(e.nbHits,e.facets),l=e.facets_stats;j(l);var n=a.year;O(a),T(Object.keys(n||{}).map((function(e){return{year:e,state:!0}}))),G(t);var r=Object.keys(a._tags||{});A(r.map((function(e){return void 0===e&&(e=""),{key:~e.indexOf(";")?e.split(";")[0]:e,value:e}})))}))}}),[_,Q,t,k,I]);var K=J.filter((function(e){return"born"===e.type})),X=J.filter((function(e){return"married"===e.type})),$=J.filter((function(e){return"died"===e.type}));return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"years-facets"},c.default.createElement(i.default,{handleRender:function(e){return c.default.createElement("div",l({},e.props),c.default.createElement(h.default,null,e.props["aria-valuenow"]))},range:!0,min:C&&C.year.min,max:C&&C.year.max,defaultValue:[1800,1920],allowCross:!1,dots:!x||!x.year||Object.keys(x.year).length<15,marks:x&&x.year?Object.keys(x.year).filter((function(e){return Number.isInteger(+e)})).reduce((function(e,t,a,l){return l.length>10&&+t%10!=0&&0!==a&&a!==l.length-1||(e[t]={style:{color:"gray"},label:t}),e}),{}):{},onChangeComplete:function(e){return y(e)}})),c.default.createElement("input",{autoFocus:!0,onInput:function(e){var t=e.target;E(t.value)},onChange:function(e){27==e.which&&(E(""),G([]))},type:"text",value:u,id:"input"}),c.default.createElement("ul",{className:"nav nav-tabs"},c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"born"===U?"nav-link active":"nav-link",onClick:function(){Z("born")},"aria-current":"page",href:"#"},"О родившихся (",K.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"married"===U?"nav-link active":"nav-link",onClick:function(){Z("married")},"aria-current":"page",href:"#"},"О бракосочетавшихся (",X.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"died"===U?"nav-link active":"nav-link",onClick:function(){Z("died")},"aria-current":"page",href:"#"},"О умершихъ (",$.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("div",{className:"form-check form-check-inline form-switch"},c.default.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onChange:function(e){return a(!e.target.checked)}}),c.default.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Точный поиск"))),c.default.createElement("li",{className:"nav-item filters-select-bar"},c.default.createElement(o.default,{placeholder:"Церковь",isMulti:!0,options:v(R.map((function(e){var t=e.key;return e.value,{value:t,label:t,uezd:"default"}}))),formatGroupLabel:b,onChange:function(e){G([]),W(e.map((function(e){return e.value})))}}),c.default.createElement(o.default,{placeholder:"Нас.пункты",isMulti:!0,options:v(F.map((function(e){var t=e.key;return{value:e.value,label:t,uezd:"np"}}))),formatGroupLabel:b,onChange:function(e){return M(e.map((function(e){return e.value})))}}))),J.length&&"born"===U?c.default.createElement(d.default,{hits:K}):"",J.length&&"married"===U?c.default.createElement(s.default,{hits:X}):"",J.length&&"died"===U?c.default.createElement(f.default,{hits:$}):"")},t.sendFeedback=function(e,t){var a=e.target;(0,u.createPortal)(c.default.createElement(c.default.Fragment,null,c.default.createElement("a",{id:"clickable"},"◕‿‿◕"),c.default.createElement("button",null,"You can click me!")),a)}},5892:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(6540)),r=a(8890),c=l(a(9151)),u=l(a(3524)),o=l(a(9556));t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Дата"),n.default.createElement("th",null,"Жених"),n.default.createElement("th",{className:"age-tr"},"Его возраст"),n.default.createElement("th",null,"Невеста"),n.default.createElement("th",{className:"age-tr"},"Ее возраст"),n.default.createElement("th",null,"Кто были попечители"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,i,d=e.church,s=e.page,f=e.fod,m=e.year,h=e.month,p=e.day,v=e.husband_age,E=e.wife_age,g=e.notes,b=e.husband_note,_=e.wife_note,y=e.trustees_note,w=(e.churchTitle,e.source_link),k=e.archive,M=(e.churchFromTable,e._highlightResult),N='<i class="mobile-version">Жених: </i><span>'.concat(null===(a=null==M?void 0:M.field1)||void 0===a?void 0:a.value,"</span>"),x='<i class="mobile-version">Невеста: </i><span>'.concat(null===(l=null==M?void 0:M.field2)||void 0===l?void 0:l.value,"</span>"),O='<i class="mobile-version">Попечители: </i><span>'.concat(null===(i=null==M?void 0:M.field3)||void 0===i?void 0:i.value,"</span>"),S="".concat(p," ").concat(r.monthMapping.get(h)," ").concat(m),C="".concat(k,", Ф-О-Д: ").concat(f,", стр. ").concat(s,"; ").concat(r.churchesMapping.get(d)||d);return n.default.createElement("tr",{key:t,className:"marriage-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.church;var l=t.year,n=t.month,c=t.day,u=t.field1,o=t.husband_age,i=t.field2,d=t.wife_age,s=t.field3,f=a.church_note;try{navigator.clipboard.writeText("\n".concat(f,"\nДата: ").concat(c," ").concat(r.monthMapping.get(n)," ").concat(l," \nЖених: ").concat(u,"\nВозраст жениха: ").concat(o,"\nНевеста: ").concat(i,"\nВозраст невесты: ").concat(d,"\nПопечители: \n").concat(s,"\n            ").trim());var m=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});m.show(),setTimeout((function(){return m.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{church_note:C})}},"Copy")),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:C,value:r.churchesMapping.get(d)||d,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:S,value:m,dotsWidth:4}))),n.default.createElement("td",null,b?n.default.createElement(o.default,{note:b,value:N}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:N}})),n.default.createElement("td",{className:"age-tr"},n.default.createElement("i",{className:"mobile-version"},"Жениху лет: "),n.default.createElement("span",null,v)),n.default.createElement("td",null,_?n.default.createElement(o.default,{note:_,value:x}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:x}})),n.default.createElement("td",{className:"age-tr"},n.default.createElement("i",{className:"mobile-version"},"Невесте лет: "),n.default.createElement("span",null,E)),n.default.createElement("td",null,y?n.default.createElement(o.default,{note:y,value:O}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:O}})),n.default.createElement("td",{className:"note-info"},g?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},g)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,w&&n.default.createElement("a",{target:"_blank",href:w},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},5419:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(6540)),r=l(a(6987));new FontFace("Monomakh Unicode","url(./MonomakhUnicode.otf)").load().then((function(e){document.fonts.add(e),console.log("Font loaded")})),t.default=function(){var e=n.default.useState(!0),t=e[0];return e[1],t?n.default.createElement(r.default,null):n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"login-cmp"},n.default.createElement("button",{className:"btn btn-primary type-table",onClick:function(){Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}},"Google"),n.default.createElement("div",{className:"book-title"},"Метрическаѧ кни́га"),n.default.createElement("div",{className:"book-description"},"​длѧ​ записи ​родившихсѧ​, ​бракомъ​ сочета́вшихсѧ ​и҆​ ᲂу҆ме́ршихъ")),n.default.createElement("div",{className:"login-cmp"},n.default.createElement("a",{className:"btn btn-primary type-table",href:"/metrics/map"},"Карта")))}},5831:function(e,t,a){var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(6540));t.default=function(e){var t=e.children,a=e.theme,n=void 0===a?{}:a,c=l(l({},n),{color:n.color||"red",fontSize:n.fontSize||"11px",fontFamily:n.fontFamily||"var(--bs-font-sans-serif)",whiteSpace:n.whiteSpace||"nowrap",position:"relative",bottom:"100%",transform:"translate(-58%, -10px)"});return r.default.createElement("div",{style:c},t)}},9556:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(6540)),r=l(a(3524)),c=l(a(9151));t.default=function(e){var t=e.value,a=e.note,l=e.dotsWidth,u=void 0===l?7:l;return n.default.createElement(c.default,{placement:"auto",overlay:n.default.createElement(r.default,{id:"tooltip"},a)},n.default.createElement("span",null,n.default.createElement("div",{className:"tooltip-content-wrapper",style:{display:"flex"}},n.default.createElement("div",{className:"tooltip-value-wrapper",dangerouslySetInnerHTML:{__html:t}}),n.default.createElement("svg",{id:"Layer_1","data-name":"Layer 1",style:{width:"".concat(u,"px"),marginLeft:"5px",marginRight:"5px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.96 122.88"},n.default.createElement("path",{className:"cls-1",fill:"#212529",d:"M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"})))))}},3264:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TreeMapComponent=void 0;var n=l(a(6540)),r=a(2745);a(1780),t.TreeMapComponent=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.MapContainer,{attributionControl:!1,id:"map",bounds:[[-47.63578359086485,-117.94921875000001],[-47.754097979680026,118.03710937500001],[47.635783590864854,117.86132812500001],[47.517200697839414,-117.94921875000001]],trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},n.default.createElement(r.TileLayer,{url:"https://raw.githubusercontent.com/shappoff/storage/tree/tiles/{z}/{y}/{x}.jpg",maxZoom:20,noWrap:!0})))}},8890:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.monthMapping=t.churchesMapping=void 0;var a=new Map([["molyavka","Молявковская Михайловская церковь"],["sloveny","Словенинская Петропавловская церковь"],["bobr","Бобрская святителя Николая церковь"],["nizgolovo","Низголовская Иоанно-Предчетинская церковь"],["martinovo","Мартиновская Покрова Пресвятой Богородицы церковь"],["usaya","Усайская Покрова Пресвятой Богородицы церковь"],["hotino","Хотинская Святого Иосифа Обручника церковь"],["uhvala","Ухвальская Успения Пресвятой Богородицы церковь"],["pyshachi","Пышчаская Рождества Пресвятой Богородицы церковь"],["sokolovichi","Сокольская Покрова Пресвятой Богородицы (приписная) церковь"],["ploskoye","Плосковская Покрова Пресвятой Богородицы церковь"],["slobodka","Слободская церковь"],["obchuga","Обчугская Преображения Господня церковь"],["shiyka","Шийковская вмч. Георгия Победоносца цековь"],["plisa","Плисская Вознесения Господня церковь"],["pochaevichy","Почаевичcкая Покрова Пресвятой Богородицы церковь"],["esmony","Эсьмонская церковь"],["hudovo","Худовская Ильинская церковь, с. Худово"],["lisichino","Лисичинская Воздвижения Креста Господня церковь"],["Молявковская","Молявковская Михайловская церковь"],["Молявская","Молявковская Михайловская церковь"],["Словенинская","Словенинская Петропавловская церковь"],["Словенская","Словенинская Петропавловская церковь"],["Бобрская","Бобрская святителя Николая церковь"],["Низголовская","Низголовская Иоанно-Предчетинская церковь"],["Мартиновская","Мартиновская Покрова Пресвятой Богородицы церковь"],["Усайская","Усайская Покрова Пресвятой Богородицы церковь"],["Хотинская","Хотинская Святого Иосифа Обручника церковь"],["Ухвальская","Ухвальская Успения Пресвятой Богородицы церковь"],["Пышчаская","Пышчаская Рождества Пресвятой Богородицы церковь"],["Сокольская","Сокольская Покрова Пресвятой Богородицы (приписная) церковь"],["Плосковская","Плосковская Покрова Пресвятой Богородицы церковь"],["Слободская","Слободская церковь"],["Обчугская","Обчугская Преображения Господня церковь"],["Шийковская","Шийковская вмч. Георгия Победоносца цековь"],["Плисская","Плисская Вознесения Господня церковь"],["Почаевичcкая","Почаевичcкая Покрова Пресвятой Богородицы церковь"],["Эсьмонская","Эсьмонская церковь"],["Худовская","Худовская Ильинская церковь, с. Худово"],["Лисичинская","Лисичинская Воздвижения Креста Господня церковь"]]);t.churchesMapping=a;var l=new Map([["JAN","января"],["FEB","февраля"],["MAR","марта"],["APR","апреля"],["MAY","мая"],["JUN","июня"],["JUL","июля"],["AUG","августа"],["SEP","сентября"],["OCT","октября"],["NOV","ноября"],["DEC","декабря"]]);t.monthMapping=l},3311:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var l=a(6540);t.default=function(e,t){var a=(0,l.useState)(e),n=a[0],r=a[1];return(0,l.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e]),n}},3900:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(5338)),r=l(a(6540)),c=a(2648),u=a(3264),o=a(797),i=l(a(5419)),d=a(3968);n.default.createRoot(document.getElementById("root")).render(r.default.createElement(r.default.StrictMode,null,r.default.createElement(c.BrowserRouter,null,r.default.createElement((function(){var e=(0,c.useNavigate)(),t=(0,c.useLocation)();return r.default.useEffect((function(){var t=localStorage.getItem("pathname"),a=localStorage.getItem("search")||"";t&&e("".concat(t).concat(a),{replace:!0}),localStorage.clear()}),[]),r.default.useEffect((function(){switch(t.pathname.replace(/\/$/,"")){case"/docs":document.title="Документы";break;case"/map":document.title="Карта";break;case"/tree":document.title="Древо";break;case"/zhigalo":document.title="Семен Жигало. Дневник.";break;case"/fond":document.title="ФОНДЫ";break;case"/metrics":document.title="Метрические книги";break;default:document.title="Page not found · GitHub Pages"}}),[t]),r.default.createElement(r.default.Fragment,null,r.default.createElement(c.Routes,null,r.default.createElement(c.Route,{path:"*",element:r.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),r.default.createElement(c.Route,{path:"/",element:r.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),r.default.createElement(c.Route,{path:"/map",element:r.default.createElement(d.MapApp,{sourceUrlProps:"sergeyshappo/sergeyshappo.github.io/main/res2.json"})}),r.default.createElement(c.Route,{path:"/tree",element:r.default.createElement(u.TreeMapComponent,null)}),r.default.createElement(c.Route,{path:"/docs",element:r.default.createElement(o.DocsMapComponent,null)}),r.default.createElement(c.Route,{path:"/zhigalo",element:r.default.createElement("iframe",{src:"https://docs.google.com/document/d/e/2PACX-1vSUy-9XWba6l6b_9qVTzxNNWYLH3saNdaaKXbR5ApEO86BcFdrgw9MguvLvxoLbLiQl49HxZisNAQNv/pub?embedded=true",style:{width:"100%",height:"calc(100vh - 16px)",border:0}})}),r.default.createElement(c.Route,{path:"/fond",element:r.default.createElement("iframe",{src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT-t2qsmh2uhOQCMkRcgdSQlFWIliAGlAkvbHx1Qqh82RzLeKllCPEjvJHA-UjHNxxoO6Kv9H4Mdg8l/pubhtml",style:{width:"100%",height:"calc(100vh - 16px)",border:0}})}),r.default.createElement(c.Route,{path:"/metrics",element:r.default.createElement(i.default,null)}),r.default.createElement(c.Route,{path:"/metrics/map",element:r.default.createElement("div",null,"OK. /metrics/map")})))}),null))))}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,exports:{}};return l[e].call(a.exports,a,a.exports,r),a.exports}r.m=l,e=[],r.O=(t,a,l,n)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){for(var[a,l,n]=e[d],u=!0,o=0;o<a.length;o++)(!1&n||c>=n)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(u=!1,n<c&&(c=n));if(u){e.splice(d--,1);var i=l();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,l,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var n=Object.create(null);r.r(n);var c={};t=t||[null,a({}),a([]),a(a)];for(var u=2&l&&e;"object"==typeof u&&!~t.indexOf(u);u=a(u))Object.getOwnPropertyNames(u).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,r.d(n,c),n},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&(!e||!/^http(s?):/.test(e));)e=a[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={524:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var l,n,[c,u,o]=a,i=0;if(c.some((t=>0!==e[t]))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(o)var d=o(r)}for(t&&t(a);i<c.length;i++)n=c[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},a=self.webpackChunkblog=self.webpackChunkblog||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.nc=void 0;var c=r.O(void 0,[500,422,968],(()=>r(3900)));c=r.O(c)})();