(()=>{"use strict";var e,t,o,n={797:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DocsMapComponent=void 0;var i=n(o(6540)),l=o(2745);o(1780);var r=function(e){var t=e.bounds,o=e.zoom,n=e.center,r=(0,l.useMap)();i.default.useEffect((function(){t&&r.fitBounds(t)}),[t]);var c=function(e){var t=e.latlng,o=window.location.href,n=new URL(o);n.searchParams.set("z","".concat(r.getZoom())),n.searchParams.set("c","".concat(Object.values(t).map((function(e){return e.toFixed(2)})).join(",")).trim());var i=window.location.pathname+"?"+n.searchParams.toString();history.pushState(null,"",i)};return i.default.useEffect((function(){return r.on("click",c),function(){r.off("click",c)}}),[]),i.default.useEffect((function(){n&&o&&r.setView(n,o,{animate:!0})}),[o,n]),i.default.createElement(i.default.Fragment,null)};t.DocsMapComponent=function(){var e=i.default.useState(""),t=e[0],o=e[1],n=i.default.useState(),c=n[0],a=n[1],s=i.default.useState(),d=s[0],u=s[1];return i.default.useEffect((function(){var e=window.location.href,t=new URL(e),n=t.searchParams.get("id"),i=t.searchParams.get("z"),l=t.searchParams.get("c");n&&o(n),l&&u(l.split(",").map((function(e){return+e}))),i&&a(+i)}),[]),i.default.createElement(i.default.Fragment,null,i.default.createElement(l.MapContainer,{attributionControl:!1,id:"map",bounds:[[-47.63578359086485,-117.94921875000001],[-47.754097979680026,118.03710937500001],[47.635783590864854,117.86132812500001],[47.517200697839414,-117.94921875000001]],trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},i.default.createElement(r,{center:d,zoom:c}),t&&i.default.createElement(l.TileLayer,{url:"https://raw.githubusercontent.com/shappoff/storage/".concat(t,"/tiles/{z}/{y}/{x}.jpg"),maxZoom:20,noWrap:!0}),d&&i.default.createElement(l.Popup,{position:d,closeButton:!1,closeOnClick:!1,autoPan:!0},"??")))}},1376:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MapComponent=void 0;var i=n(o(6540)),l=o(2745),r=o(5214);o(1780),o(4753);var c=o(3481),a=n(o(9875));o(2407),o(6203);var s=function(e){var t=e.children,o=e.toShow,n=e.setOpenSlider,r=(0,l.useMap)(),a=i.default.useState(),s=a[0],d=a[1];return i.default.useEffect((function(){s&&o?s.show():s&&s.hide()}),[o]),i.default.useEffect((function(){var e=c.control.sidebar("sidebar",{position:"left",autoPan:!0});return e.on("hidden",(function(){return n(!1)})),r.addControl(e),d(e),function(){}}),[]),i.default.createElement("div",{id:"sidebar"},t)},d=function(e){var t=e.bounds,o=(0,l.useMap)();i.default.useEffect((function(){t&&o.fitBounds(t)}),[t]);var n=function(e){o.fitBounds(e.layer.getBounds())},r=function(e){var t=e.latlng;try{navigator.clipboard.writeText("".concat(Object.values(t).join(", ")).trim()),console.log("".concat(Object.values(t).join(", ")).trim())}catch(e){console.error("Failed to copy: ",e)}},a=function(e){"ControlLeft"===e.originalEvent.code&&(o.on("click",r),c.DomUtil.addClass(o.getContainer(),"crosshair-cursor-enabled"))},s=function(e){"ControlLeft"===e.originalEvent.code&&(o.off("click",r),c.DomUtil.removeClass(o.getContainer(),"crosshair-cursor-enabled"))};return i.default.useEffect((function(){return o.on("baselayerchange",n),o.on("keydown",a),o.on("keyup",s),function(){o.off("baselayerchange",n),o.off("keydown",a),o.off("keyup",s)}}),[]),i.default.createElement(i.default.Fragment,null)};t.MapComponent=function(e){var t=e.data,o=i.default.useRef(),n=i.default.useState(!1),u=n[0],p=n[1],f=i.default.useState({}),g=f[0],m=f[1],_=i.default.useState(""),h=_[0],v=_[1],b=i.default.useState(),y=b[0],E=b[1];return i.default.useEffect((function(){var e=new URL(location.href).searchParams.get("id");e&&v(e),t&&t.forEach((function(t){var o=t.id,n=t.bounds;o===e&&E(n)}))}),[t]),i.default.createElement(i.default.Fragment,null,!u&&i.default.createElement("div",{id:"filter-button",onClick:function(){return p(!u)}}),i.default.createElement(l.MapContainer,{attributionControl:!1,id:"map",ref:o,center:[53.902287,27.561824],zoom:11,trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},i.default.createElement(d,{bounds:y}),i.default.createElement(l.TileLayer,{url:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],maxZoom:20}),i.default.createElement(l.LayersControl,{hideSingleBase:!0,position:"topright",collapsed:!1},t.filter((function(e){var t=e.id;return!((new Date).getFullYear()<2026)||t===h})).map((function(e,t){return i.default.createElement(l.LayersControl.BaseLayer,{key:t,checked:0===t,name:e.title},i.default.createElement(l.FeatureGroup,null,i.default.createElement(a.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},e.markers.map((function(e,t){var o=e._geoloc,n=e.title,r=e.description,a=o[0],s=o[1];return i.default.createElement(l.Marker,{key:t,position:[a,s],icon:(0,c.divIcon)({html:'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">\n                                                                        <path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z"></path>\n                                                                      </svg>',className:"marker-div-icon"}),eventHandlers:{click:function(){}}},i.default.createElement(l.Tooltip,null,n),i.default.createElement(l.Popup,null,i.default.createElement("b",null,n),i.default.createElement("p",null,i.default.createElement("a",{href:"#",onClick:function(){m({title:n,description:r}),p(!0)}},"Подробнее"))))}))),e.polygons.map((function(e,t){var o=e.positions,n=e.title,r=e.description;return i.default.createElement(l.Polygon,{key:t,positions:[o],pathOptions:{opacity:.1}},i.default.createElement(l.Tooltip,null,n),r&&i.default.createElement(l.Popup,null,i.default.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))}))))}))),i.default.createElement(l.FeatureGroup,null,i.default.createElement(r.EditControl,{position:"topleft",onCreated:function(e){var t=e.layer._latlngs[0].map((function(e){return Object.values(e)}));console.log(t);try{navigator.clipboard.writeText(JSON.stringify(t))}catch(e){console.error("Failed to copy: ",e)}},draw:{polyline:!1,polygon:!0,rectangle:!1,circle:!1,marker:!1,circlemarker:!1}})),i.default.createElement(s,{toShow:u,setOpenSlider:p},i.default.createElement("h3",null,g.title),i.default.createElement("p",{dangerouslySetInnerHTML:{__html:g.description}}))))}},3264:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TreeMapComponent=void 0;var i=n(o(6540)),l=o(2745);o(1780),t.TreeMapComponent=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement(l.MapContainer,{attributionControl:!1,id:"map",bounds:[[-47.63578359086485,-117.94921875000001],[-47.754097979680026,118.03710937500001],[47.635783590864854,117.86132812500001],[47.517200697839414,-117.94921875000001]],trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},i.default.createElement(l.TileLayer,{url:"https://raw.githubusercontent.com/shappoff/tree/0ce817cd98225a74cdb3122e1bff65c880144440/img/{z}/{y}/{x}.jpg",maxZoom:20,noWrap:!0})))}},8434:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataMinsk=void 0;var o="style='color: #0066cc;'";t.dataMinsk=[{_geoloc:[53.958482,27.66246],title:"кв. в Новой Боровой",description:"\nЖиву тут с семьей с 19-го февраля 2022-го. (приняли квартиру 25-го января)<br>\nКвартиру купили в рассрочку от застройщика, потому на время рассрочки не прописаны в квартире,\nа что бы сдать квартиру на <a ".concat(o," href='#1'>Тимирязева</a> и не платить за нее пришлось нам прописаться у мамы на <a ").concat(o," href='#2'>Новавилке</a>,\nт.к. больше некуда да и там у меня собственность 10кв.м.\n\n<br><i>д. Копище, ул. Миля 2, кв.131</i>\n")},{_geoloc:[53.931776,27.486342],title:"Кв. на Тимирязева",description:"\nТут я прожил 7 лет.<br>\nС 2015-го (официально с декабря 2014-го) по 25 февр. 2022-го. Это арендная квартира (коммерческое арендное жильё), что я получил по очереди нуждающихся.<br>\nКогда женился, прописал сюда жену Наташу и дочь Екатерину.\n<br><i>ул.Тимирязева 80, к.1, кв.21</i>\n"},{_geoloc:[53.92992,27.538263],title:"Кв. на Нововилке",description:"Тут я жил с родителями с 1997-го до 2015-ый.<br>\nЭту квартиру дали папе, как служебную. Потом он ее приватизировал.\n<br><i>пер.Нововиленский 14, кв.2</i>\n"},{_geoloc:[53.931833,27.542336],title:"Центральное РУВД",description:"\nЦентральное РУВД. <br>\nТут папа проработал всю жизнь. Иногда, я заходил к нему, передавал что нибудь из дома, когда он был на службе.\n"},{_geoloc:[53.925423,27.561204],title:"Общага на Крапоткина",description:"\nТут изначально жил папа, как устроился в мимлицию после армии. Жил в одной комнате с\n<a ".concat(o," href='/ahnentafel#Гордейко-Виктор'>дядей Витей (Гордейко)</a>\n и Антановичем<br>\nПотом, как женился, им с мамой дали комнату на девятом этаже.\nНедолго пожив, они переехали на 7-ой (моя сестра Саша уже помнит ту конату, я - нет).\nА позже, нам дали две комнаты на 6-ом, в 613-ой квартире. Это я и помню, тут и прошло мое детство. И прожили мы там до 1997-го.\nПока папе не дали квартриру на\n<a ").concat(o," href='#2'>Новавилке</a>.\n<br><i>ул.Крапоткина 97, кв.613</i>\n")},{_geoloc:[53.923826,27.555427],title:"дед Володя",description:"\nТут жил\n<a ".concat(o," href='/ahnentafel#Шаппо-Владимир-Иванович'>дед Володя</a>\n, родной брат моего\n<a ").concat(o," href='/ahnentafel#Шаппо-Николай-Иванович'>деда Коли</a>\n.\nВ детстве, смутно, но помню, я с папаой ходили в гости к нему.\nСейчас, вроде слышал, там живет внук Паша.\n")},{_geoloc:[53.928077,27.542422],title:"тетя Галя, Нововилка",description:"\nГде-то тут стоял дом-барак, где жила тётя Галя с дядем Витей, Андреем и тут еще родилась Даша.\n"},{_geoloc:[53.862831,27.451169],title:"тетя Галя, Рафиева",description:"\nСюда переехала тётя Галя, после Новавилки\n"},{_geoloc:[53.894422,27.416378],title:"сестра Саша, Мазурава",description:"\nТут жила Саша с Федей, их первая квартира (однокомнатная).\nВроде ее посторили в 2009-ом и они продали ее в 2019-ом.\n"},{_geoloc:[53.872857,27.474463],title:"сестра Саша, кв. на Брыля",description:"\nКваритра сестры Саши с 2019-го.\nОни продали квартиру на Мазурава и купили тут трехкомнатную.\nПричем купля и продажа происходила в один день.\n"},{_geoloc:[53.92235,27.511957],title:"Exadel, Тимирязева",description:"\nТут был первый офис Эксадел.\nСюда я устраивался изначально и проработал несколько лет.\nМой проект находился на 7-ом этаже.\nПотом, фирма перехала на Купревича, причины переезда: фирма активно росла; воняло с радиаторного завода.\n"},{_geoloc:[53.92766,27.683406],title:"Exadel, Купревича",description:"\nТут был офис Эксадел.\nСюда фирма переехала, когда на Тимирязева стало тесно.\nТут Фирма арендовала второй и третьи этажи.\nПроработал тут продолжительное время, а когда фирма еще расширилась, то открыла филиал на Каменной горке, куда я с трудом выбил место.\n"},{_geoloc:[53.908669,27.42994],title:"Exadel, кам.горка",description:"\nТут был новый офис, когда я работал на Эксадел.\nПроработал я там может год, до увольнения.\n"},{_geoloc:[53.914267,27.601748],title:"Brimit",description:"\nМое текущее место работы, сюда я устроился в июне 2020-го, из-за пандемии пришлось уйти из Exadel.\n<br>\nПлатонова, 49\n"},{_geoloc:[53.924715,27.638155],title:"тётя Валюша, на Филимонова",description:"\nТут живет тётя Валюша с дядей Сашей.\nСюда они переехали из общаги на Фабрициуса.\nПомню новоселье гуляли в тот же день, что и открытие Нац.Библиотеки, что рядом."},{_geoloc:[53.916021,27.428027],title:"тётя Таня",description:"\nТут живет тётя Таня.\nПостроила тут квартиру и переехала из общаги."},{_geoloc:[53.919213,27.558017],title:"СШ №27",description:"\nВ этой школе учился я (1992-2003) и сестра Саша (1990-2001)."},{_geoloc:[53.937578,27.56436],title:"Дет.сад №266",description:"\nВ этодетский сад ходил я и сестра Саша."},{_geoloc:[53.95261,27.602422],title:"Репетитор по Физике",description:"\nТут жила репетрор по физике, к ней я проездил примерно с пол-года в 2009-ом."},{_geoloc:[53.913547,27.571258],title:"Горизнот, телевизионка",description:"\nГоризонт, цех телевизионки. Тут я проработал продолжительное время. Потом завод переехал.\n"},{_geoloc:[53.862211,27.506552],title:"Мидеа-горизонт",description:"\nМидеа-горизонт. Сюда я перешел из телевизионки, точнее мастер производства - Квачков взял меня с собой.\n"},{_geoloc:[53.865665,27.510868],title:"Горизонт, телевизионка",description:"\nСюда переехал Горизонт. Один из цехов. Я работал в этом.\n"},{_geoloc:[53.850272,27.502028],title:"Наташа, кв на Казинца",description:"\nТут Наташа снимала однокомнатную квартиру, немного больше года.\nПотом, в 2019-ом она переехала ко мне на Тимирязева.\n"},{_geoloc:[53.895528,27.487813],title:"Наташа, кв на Пономаренко",description:"\nТут Наташа снимала комнату в двухкомнатной квартире вместе с другой девушкой. Потом переехала на Казинца.\n"},{_geoloc:[53.842745,27.632785],title:"Алеся, кв на Ташкенской",description:"\nТут живет Алеся с семьей. Знаю, что это не их квартира, а родственника её мужа Андрея.\nТашкентская д18, к2, кв116.\n"},{_geoloc:[53.858053,27.500194],title:"Автошкола ФОСААФ",description:"\nТут я учился на права, работая недалеко на заводе. Там же, рядом и ГАИ, где сдавал экзамен.\n"},{_geoloc:[53.84064,27.527429],title:"Фармтехнология",description:"\nМесто работы Наташи. Работает тут с послеуниверской отработки в г. Лиде.\n"},{_geoloc:[53.836243,27.590449],title:"Андрей, кв на ул. Пташука",description:'\nВ одном из этих пяти "столбиков" он живет. Построил 4-ех комнатную квартиру, в связи с многодетностью.\n'},{_geoloc:[53.88601,27.591053],title:"Общежитие на Фабричной",description:"\nОбщежитие № 4 Минские городские общежития.\nТут жили тётя Валюша и тётя Таня со своими семьями, до того, как построили свои квартиры.\n"},{_geoloc:[53.926251,27.57492],title:"Миша Устин",description:"\nТут Живет дядя Миша (Машкович Михаил Викторович), мамин двоюродный брат.\n"},{_geoloc:[53.923716,27.669283],title:"Футберг",description:"\nООО «Футберг». Тут работает мама, это уже новый офис. Саша тут уже не работала.\n"},{_geoloc:[53.839399,27.258107],title:"Могила отца",description:"\nТут похоронен мой папа.\n"},{_geoloc:[53.934454,27.379047],title:"Могила дяди Саши",description:"\nТут похоронен брат моего папы - Шаппо Александр Николаевич<br>\nТарасовское кладбище\n\n"},{_geoloc:[53.896575,27.479038],title:"Роддом № 2",description:"\nТут я родился.<br>\nГородской родильный дом № 2, улица Бельского, 60\n"},{_geoloc:[53.930835,27.536429],title:"Мать и дитя",description:"\nТут родилась сестра Саша и она же тут рожала Аню.<br>\nРНПЦ Мать и дитя, родильный дом, Орловская улица, 66к2\n"},{_geoloc:[53.922696,27.67163],title:"Областной роддом",description:"\nТут родилась моя дочька Катя.<br>\nЯ и моя мама раболи рядом с роддомом. Мама на выписку просто вышла после работы к роддому. А я, так совпало, после рождения Кати, переехал работать в новый офис на каменной горке.<br>\nКлинический родильный дом Минской области, улица Франциска Скорины, 16к2\n"},{_geoloc:[53.924868,27.543878],title:"Дворец молодежи",description:"\nМинский государственный дворец детей и молодёжи<br>\nСтаровиленский тракт, 41\n<br><br>\nТут я проводил очень много времени в детстве, посещая разные кружки.\n"}]},6550:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataSkakunovshchina=void 0,t.dataSkakunovshchina=[{_geoloc:[55.064832,29.109589],title:"наша хата",description:"Тут жили дед Коля и баба Аня. Эту хату тут, вроде как купили в 1950-х у какой-то женщины."},{_geoloc:[55.067003,29.11667],title:"Каркоза",description:"Хата Николая Владимировича Каркоза, троюродный брат моей бабушки Ани."},{_geoloc:[55.065288,29.110417],title:"баба Маша",description:"Тут была хата бабы Маши (Мария Иванова Шаппо), сестры моего деда Коли."},{_geoloc:[55.06566,29.111742],title:"Конопелько",description:"Тут хата Конопелько Леонида, родного брата моей бабушки Ани. Он жил в Калининграде. Сюда, помню приезжали его дочь с внуками из Ростова."},{_geoloc:[55.066203,29.113367],title:"Кощеевы",description:"Тут жил Кащеев Степан Кириллович. Как я узнал, он воевал и после войны работал учителем. Жена - Пискунова Нина Михайловна."},{_geoloc:[55.066187,29.114029],title:"Настуля",description:"Тут жила бабушка Настуля - родная тётка моей бабушки Ани. Родная сестра отца Ивана семеновича. Каркоза Настуля Семеновна, после замужества - Сорока. Муж погиб на финской."},{_geoloc:[55.062648,29.16781],title:"Кладбище Двор-Низголово",description:"Кладбище Двор-Низголово.<br>\nТут похоронены дед Коля и его отец Иван.\n"},{_geoloc:[55.018766,29.143541],title:"дед Володя в Бочейково",description:"Дом деда Володи в Бочейково, брата моего деда Коли.<br>\nВроде как этот дом с участком просто купили. (местоположение вроде это, если я ничего не путаю)\n"},{_geoloc:[55.082656,29.078548],title:"Глебовщина",description:"дер. Глебовщина, Сокоровское сельское общество.<br>Дед Коля рассказывал, что часто пешком ходил сюда к деду Исаку из Двора-Низголово."}]},4847:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataZalazje=t.dataZalazjePolygons=void 0,t.dataZalazjePolygons=[{positions:[[54.255199,29.405862],[54.254834,29.405424],[54.255117,29.40475],[54.255271,29.404952],[54.255169,29.405188],[54.255374,29.405447]],title:"Наша хата, двор и огород.",description:""},{positions:[[54.254887,29.405654],[54.254805,29.405549],[54.254672,29.405874],[54.254752,29.405992]],title:"Старый двор",description:""},{positions:[[54.25769165247414,29.407069087028507],[54.25715894128973,29.407034218311313],[54.25716990894234,29.407530426979065],[54.25768695211143,29.407578706741337]],title:"Школьный двор",description:"Школьный двор. Школа появилась после воны. Сначала уроки были на дому у Артюховых. Школа была начальная: 1-4 классы. Была упразднена в 1970-е."},{positions:[[54.25764308203363,29.408294856548313],[54.25755220815257,29.408707916736606],[54.25742529774219,29.408608675003055],[54.257511471520196,29.408230483531952]],title:"Копань (Сажалка)",description:"<b>Копань (Сажалка)</b> точнее их там две. Их выкопал и разводил рыбу - Иосиф Федорович Латушкин."},{positions:[[54.257285,29.410355],[54.257179,29.410178],[54.25737,29.409888],[54.257471,29.41006]],title:"Конюшня",description:"Тут когда-то стояла колхозная конюшня"},{positions:[[54.257604,29.410253],[54.257441,29.410583],[54.25732,29.410424],[54.257493,29.410092]],title:"Свиноферма",description:"Тут когда-то стояла колхозная свино-ферма."},{positions:[[54.245978,29.394835],[54.244406,29.397309]],title:"Гребля (Гать)",description:"Гребля (Гать) фото"},{positions:[[54.254482,29.422723],[54.255274,29.424547],[54.25594,29.428345],[54.255488,29.431263],[54.254181,29.432014],[54.2531,29.431371],[54.252623,29.42959],[54.252196,29.428281],[54.251442,29.427272],[54.25065,29.426671],[54.24957,29.427186],[54.24924,29.426277],[54.249266,29.424882],[54.250246,29.423616],[54.251465,29.422822],[54.252729,29.422054],[54.254148,29.422376]],title:"Падзёрны",description:"Падзёрны, местное название. Эдакий остров земли среди болота."},{positions:[[54.256144,29.407818],[54.256377,29.40792],[54.256534,29.408081],[54.256675,29.408226],[54.256707,29.408553],[54.256703,29.408923],[54.256647,29.409384],[54.256515,29.409615],[54.256433,29.40984],[54.256323,29.409894],[54.256148,29.409717],[54.256056,29.409508],[54.255915,29.409218],[54.25583,29.408875],[54.255827,29.408494],[54.255881,29.408193],[54.25595,29.40799],[54.256148,29.407823]],title:"Кладбище",description:"Кладбище"},{positions:[[[54.255134,29.40598],[54.255001,29.406313],[54.25477,29.406021],[54.254896,29.405676]]],title:"Двор деда Володи и бабы Татьяны",description:""},{positions:[[54.255524,29.405057],[54.255335,29.404826],[54.255411,29.404633],[54.255599,29.40489]],title:"Огород деда Володи и бабы Татьяны Машковичей",description:""},{positions:[[54.255227,29.405878],[54.255507,29.405256],[54.255638,29.405447],[54.255389,29.406061]],title:"Козики",description:"Козики"},{positions:[[54.25551,29.405788],[54.255711,29.406043],[54.255606,29.406285],[54.255394,29.406078]],title:"Кирилловы",description:"Кирилловы. Они нам родственники по жене деда Кирилла (Машкович Кирилл Александрович) - Машкович Анна Антоновна."},{positions:[[54.254808,29.405531],[54.254658,29.405891],[54.254533,29.405714],[54.254677,29.405381]],title:"Пожарицкие",description:"Пожарицкие Лида и Люба Аврамовны. Сейчас там живут дачники."},{positions:[[[54.254616,29.405173],[54.25482,29.404757],[54.254671,29.404554],[54.254467,29.404982]],[[54.254608,29.405286],[54.254457,29.405629],[54.25428,29.405366],[54.254426,29.405061]]],title:"Паша сосед",description:"Павел Степанович Машкович"},{positions:[[54.255943,29.406653],[54.256047,29.406379],[54.255902,29.406226],[54.25578952860322,29.406470954418186]],title:"Двор Павлюковых",description:""},{positions:[[54.255747,29.406612],[54.255577,29.407044],[54.255796,29.407293],[54.255979,29.406859]],title:"Сад Павлюковых",description:""},{positions:[[54.256083101354704,29.40746068954468],[54.25598276854643,29.407342672348026],[54.256032934981086,29.407236725091938],[54.25596787537441,29.407148212194446],[54.25604861197941,29.406960457563404],[54.2562210585675,29.407144188880924]],title:"Двор Доцента",description:""},{positions:[[54.257123,29.407042],[54.256856,29.406978],[54.256825,29.407262],[54.256649,29.407863],[54.256775,29.408018],[54.256935,29.407579],[54.256988,29.4076],[54.257013,29.407493],[54.257092,29.407485],[54.2571,29.407423],[54.257063,29.407396]],title:"Двор Маньки лесничихи",description:""},{positions:[[54.25659,29.406811],[54.256708,29.406478],[54.256452,29.40617],[54.256169,29.406814],[54.25648,29.40683],[54.256508,29.40672]],title:"Мишка Данилков",description:"Мишка Данилков"},{positions:[[54.254467,29.404982],[54.254662,29.404556],[54.25472,29.40462],[54.254814,29.404446],[54.25464,29.404212],[54.254536,29.404446],[54.254587,29.40454],[54.254426,29.404915]],title:"Пожарицкие",description:"Пожарицкие Василь Абрамович и Анна Егоровна"},{positions:[[54.255501,29.406343],[54.255344,29.406158],[54.255212,29.406507],[54.255372,29.406681]],title:"баба Надя",description:"тут когда-то была хата бабы Нади, примерно в 1990-е перехали в Авхуты."},{positions:[[54.254827,29.405411],[54.254636,29.405175],[54.25493,29.404603],[54.255082,29.404802]],title:"Саукау огород",description:"Саукау огород, брата деда Никифора Козика"},{positions:[[54.25521974514525,29.40588086843491],[54.25520250010018,29.405863434076313],[54.256156013701165,29.403621107339863],[54.25617796143164,29.403646588325504]],title:"Вулка (Улка)",description:"Когда-то тут был конец деревни и эта дорога за хатой вела на поле. Даже прадеда называли - Федор канцавы. Теперь это просто дорожка на поле посреди деревни."},{positions:[[54.25048202155068,29.437203705310825],[54.25046947825963,29.43736463785172],[54.25043184836353,29.437614083290104],[54.25043812001524,29.437686502933506],[54.25037697137017,29.437791109085087],[54.25029543970238,29.437884986400608],[54.25020920410914,29.437949359416965],[54.25013237588329,29.437970817089084],[54.25003516445368,29.438091516494755],[54.24992384140608,29.43808883428574],[54.249842308842595,29.437986910343174],[54.2497858631273,29.437933266162876],[54.24976861581003,29.43786889314652],[54.249743528790155,29.437772333621982],[54.24970589823176,29.437721371650696],[54.24963377289889,29.437686502933506],[54.24958203073455,29.43761140108109],[54.249555375654886,29.437522888183597],[54.24958046278918,29.437394142150882],[54.249558511547505,29.437214434146885],[54.249558511547505,29.437061548233036],[54.24963690878553,29.43694889545441],[54.249756072301984,29.436884522438053],[54.249806246311195,29.436887204647068],[54.249843876778016,29.436956942081455],[54.249916001743514,29.43692207336426],[54.24998655865296,29.436895251274112],[54.25001321345398,29.436889886856083],[54.250041436165716,29.436919391155246],[54.25010101738265,29.436903297901157],[54.250193524890996,29.43699717521668],[54.25027192092209,29.43706423044205],[54.25030641512859,29.437032043933872],[54.25034874888802,29.436973035335544],[54.25038637885992,29.436962306499485],[54.250424008797495,29.437010586261753],[54.25046163870075,29.43708568811417],[54.25048202155068,29.437139332294468]],title:"оз. Бездонное",description:"Озеро Бездонное – маленькое озеро у Зяблицкого озера.\nПро него удалось узнать историю его названия:\nв давние времена местные мужчины хотели измерить глубину этого озера связанными жердями. Но что-то пошло не так и жерди уплыли. Ничего не измерив, спустя время, к озеру привязалось название – Бездонное. Подразумевая, что дно так и не было измерено.\nЕще, интересно то, что если история названия правда, то она очень давно живет в памяти людей т.к. в инвентаре имения Глинники 1849, уже записано как Бездонное."},{positions:[],title:"",description:""},{positions:[],title:"",description:""},{positions:[],title:"",description:""},{positions:[],title:"",description:""}],t.dataZalazje=[{_geoloc:[54.255198,29.405763],title:"наша хата",description:"\nНаша хата.\nИзначально тут жил прадед Фёдор Иванович и прабабушка Пелагея Трофимовна.\nПередняя часть хаты дореволюционная (по похозяйственной книге 1950-го).\nПотом тут жил дед Витя с семьей, до 1970-го года.\nА с примерно 1977-го - дед Шура с бабой Любой.\nПосле войны, хата была последняя, до кладбища не было хат.\n"},{_geoloc:[54.254854,29.405381],title:"хата бабы Домны",description:"когда-то была хата бабы Домны, сестра Тимки"},{_geoloc:[54.255082,29.40604],title:"баба Татьяна",description:"хата деда Володи и бабы Татьяны"},{_geoloc:[54.255474,29.406107],title:"Кирилловы",description:"хата деда Кирилла и его семьи, рядом была старая хата - стояла торцом к дороге."},{_geoloc:[54.255536,29.405626],title:"Козики",description:"Козик Петр Николаевич и Козик (Бельская) Александра Ивановна."},{_geoloc:[54.255941,29.406558],title:"Павлюковы",description:"хата Машкович Николай Павлович и Машкович Вера Елисеевна"},{_geoloc:[54.256148,29.407207],title:"Доцент",description:"Тут живет Козик Григорий Владимирович, по прозвищу Доцент. Это дом его родителей - Козик Владимир Николаевич (прозвище Коммунист) и Козик (Парахневич) Анна Эдуардовна."},{_geoloc:[54.256607,29.406671],title:"Мишка Данилков",description:"Хата Машкович Михаил Данилович и Машкович Вера Макаровна"},{_geoloc:[54.256885,29.406614],title:"баба Лена",description:"Хата Иосиф Федорович Латушкин (1 Jul 1925 - 2 Aug 1991) и Елена Романовна Латушкина (10 Nov 1925 - 6 Aug 2004)"},{_geoloc:[54.257062,29.407202],title:"москвичи",description:"Хата Маньки лесничихи и ее семьи. Муж Петр Кулик, он родом из Боровцов."},{_geoloc:[54.257424,29.406785],title:"Вася Носович",description:"Хата Васи Носовича и его отца - Старика"},{_geoloc:[54.255659,29.406595],title:"Устинья",description:"Хата бабы Устиньи, жена Тимки. Машкович Устинья Семеновна и Машкович Тимофей Степанович."},{_geoloc:[54.25474,29.405596],title:"дачники",description:"Хата дачников, до этого была Лиды и Зины Пожарицких"},{_geoloc:[54.25463,29.405057],title:"Паша Машкович",description:"Хата Паши Степановича Машковича"},{_geoloc:[54.255292,29.406246],title:"баба Надя",description:"когда-то тут была хата бабы Нади, до переезда в Авхуты. (Латушкина (Машкович) Надежда Прохоровна)"},{_geoloc:[54.25542,29.406375],title:"баба Надя",description:"старая хата бабы Нади, (Латушкина (Машкович) Надежда Прохоровна)"},{_geoloc:[54.254851,29.405714],title:"старая хата деда Шуры",description:"\nТут дед Шура после армии построил хату и жил там с Проской, нерасписаные.\nКогда разошлись - судились и переднюю часть, что у дороги отошла к Проске, а заднюю часть (пристройку) отсудили деду.\nКогда дед женился и переехал в отцовский дом бабушки Любы, то эту пристройку забрал с собой.\nОна и сейчас стоит, как вторая часть хаты. \n"},{_geoloc:[54.254968,29.40552],title:"хата Христинки",description:"тут была хата бабы Христинки, прямо перед старым колодцем, рядом с новым (Машкович Кристина Ивановна)."},{_geoloc:[54.254666,29.404483],title:"хата деда Василя Пожарицкого",description:"хата деда Василя, Пожарицкого. А к дороге вела узкая улка-сад."},{_geoloc:[54.254379,29.405088],title:"хата мати Василя Пожарицкого",description:"хата мати Василя Пожарицкого. Её все звали Зенка. Жила напротив Василя. В мое время там уже был сарай с сеном и др."},{_geoloc:[54.253849,29.403992],title:"хата бабы Вали",description:"хата бабы Вали (Козик (Новикова) Валентина Михайловна) и деда Никифора (Козик Никифор Николаевич)"},{_geoloc:[54.253673,29.403658],title:"хата Политыко",description:"хата Политыко (Латушкина) Людмила Афанасьевна"},{_geoloc:[54.251771,29.400893],title:"хата деда Василя, Елисеевича",description:"хата деда Василя, Елисеевича, дед Сергея Хлебника"},{_geoloc:[54.252225,29.401532],title:"Атрюховы",description:"Артюхов Александр Кузьмич и Артюхова (Машкович) Любовь Егоровна"},{_geoloc:[54.251444,29.401376],title:"Петя Пожарицкий",description:"Пожарицкий Петр Владимирович, хата ему осталась от батьки."},{_geoloc:[54.25178,29.401918],title:"баня Артюховых",description:"баня Артюховых, но раньше, на этом месте стояла хата Нади Апанасовой (Машкович (Латушкина) Надежда Афанасьевна)"},{_geoloc:[54.251506,29.400861],title:"хата бабы Елены",description:"Тут раньше стояла хата мати бабы Татьяны (Татьяна Андреевна Машкович)- Елена Пракофовны Машкович (1900 - 30 Jul 1978)"},{_geoloc:[54.257106,29.406827],title:"хата родителей Маньки Лесничихи",description:"хата родителей Маньки Лесничихи. Марина Мартиновна Петухова (1899 - 1973) и Роман Абрамович Петухов (1881 - 1967)"},{_geoloc:[54.256382,29.406757],title:"хата бабы Авдотия",description:"хата бабы Авдотия"},{_geoloc:[54.256673,29.407038],title:"хата Нади Гула",description:"сестра Осипа Федоровича"},{_geoloc:[54.254551,29.405342],title:"хата Ганны Ивановны",description:"хата Ганны Ивановны (Машкович Анна Ивановна), дочь Машкович Марфы Трофимовны"},{_geoloc:[54.254424,29.404818],title:"хата Коли хромого",description:"хата Коли хромого. Николай Аврамович Пожарицкий (Mar 1921 - 18 Feb 1991)"},{_geoloc:[54.254187,29.404383],title:"хата Федор",description:"хата Федора, отец Осипа Латушкина."},{_geoloc:[54.254026,29.404179],title:"хата Степан Ляксеев",description:"хата Степан Ляксеев"},{_geoloc:[54.253626,29.404096],title:"хата Грики",description:"хата Грики. Латушкин Григорий Николаевич"},{_geoloc:[54.253342,29.40319],title:"хата Моси",description:"хата Моси. Артюхов Александр Иванович"},{_geoloc:[54.253436,29.403423],title:"хата Миши Марьна",description:"хата Миши Марьна. Козик Михаил, сейчас живет в Авхутах. Сын Козик (Машкович) Мария Трофимовна"},{_geoloc:[54.253882,29.40367],title:"хата деда Коли, Гриков отец",description:"хата деда Коли, Гриков отец. Латушкин Николай Афанасьевич (1.06.1932-2.06.2013)"},{_geoloc:[54.253132,29.402436],title:"хата Зины Тарасихины",description:"хата Зины Тарасихины. Макаревич (Машкович) Зинаида Тарасовна"},{_geoloc:[54.25272,29.402096],title:"Болсуны",description:"хата семьи Болсунов. Болсун Николай Дмитриевич и Болсун (Машкович) Анна Макаровна"},{_geoloc:[54.252983,29.403237],title:"хата Шыбунихи",description:"хата Шыбунихи. Анастасия Романовна Шабунова (1909 - 1999). Вроде как, она сгорела в своей хате."},{_geoloc:[54.252807,29.402647],title:"хата Проски",description:"хата Проски, что сгорела. Ефросинья Елисеевна Машкович (15 Mar 1925 - 11 Jul 2008)"},{_geoloc:[54.252426,29.402125],title:"хата Сашки Артюхова",description:"хата Сашки Артюхова (Артюхов Александр Михайлович), сын Артюхова Михаила Кузьмича (27.09.1927 - 8.02.2008)"},{_geoloc:[54.252531,29.401434],title:"хата Кацьки, старая",description:"хата Кацьки. Машкович Екатерина Степановна (1926-2006)"},{_geoloc:[54.252049,29.402079],title:"хата Кацьки, новая",description:"хата Кацьки, тут она жила сначала с Лявоном (Леонид Афанасьевич Макаревич 1941 - 2001), потом осо Стариком"},{_geoloc:[54.252089,29.4011],title:"хата Ксеньки Егорчиковой",description:"хата Ксеньки Егорчиковой (Носович (Машкович) Ксения Егоровна), сестра жены Василя Пожарицкого."},{_geoloc:[54.251609,29.401608],title:"хата Гены Рыжего",description:"хата Гены Рыжего. Геннадий Никитович Машкович (6 Dec 1958 - 20 Oct 2017)"},{_geoloc:[54.295112,29.452314],title:"баба Надя в Авхутах",description:"хата бабы Нади в Авхутах. Из Залазья, она переехала сюда."},{_geoloc:[54.298613,29.444132],title:"дед Витя в Авхутах",description:"хата деда Вити в Авхутах. Из Залазья, он с семьей переехали сюда. Его жена из Авхут родом."},{_geoloc:[54.276899,29.409993],title:"баба Катя (Горожоны)",description:"хата бабы Кати в Горожонах, сестра деда Шуры. До этого она с мужем жили в соседней Зяблице.\n "},{_geoloc:[54.287196,29.431088],title:"Алик из Курчей",description:"хата Алика из Курчей"},{_geoloc:[54.27128,29.415169],title:"старые Горожоны",description:"Старое расположение Горожон (примерно).\nТут в основном жили евреи.\nВроде в 1936, стали людей сгонять с хуторов и мелких деревень в курпные деревни.\nИ получается, сегодняшние Горожоны, это место, куда переселились люди с окресных мест.\nА сами евреи переехали в Славное."},{_geoloc:[54.295794,29.443427],title:"хата Лёньки (Авхуты)",description:"Хата Лёньки из Авхут. Дед Витя:\nЛёнькава матка - тётка моей матке (т.е. Пелогее). Их было три браты - Лёнька, Апанас и Василь. Они Латушкины по батьку. А матка была Машкович, Юдава дочка - Татьяна, она была с Залазья, а замуж вышла в Авхуты."},{_geoloc:[54.271583,29.393463],title:"Замостье",description:"\nТут был застенок Замостье. В нем жили католики по вереисповеданию, поляки по национальности и мещане по сословию.\n"},{_geoloc:[54.339246,29.399816],title:"Молявка",description:'\nТут, в Молявке, до революции находилась православная церковь, к которой отнисилось Залазье, Зяблица, Курчи, Ахуты, Глинники, Ильяни и Еленка.\nКрещения, свдьбы и отпевания уопших регистрировали тут.\nЛюбовь Александровна, уроженка д.Молявка:\nМоя бабушка по линии матери жила на "дворне". Это в самом конце  деревни, дом их сохранился. Их фамилия Федарцовы. Там есть ещё такие фамилии. Церковь Архангела Михаила  стояла в центре села, на горе, она была деревянная, а рядом находилась школа церковно-приходская. Я ещё в ней училась до четырёх классов. А церковь сгорела во время войны, там держали военнопленных. А через дорогу от церкви жил батюшка Осипов Федот. Дом где он жил сохранился. Летом там дача, живёт его внучка Инна Всеволодовна (дочь  сына батюшки, ей уже под 80 лет). И  там же построена часовня Архангела Михаила. Построена на средства жителя деревни. Мой дедушка  был крестным сына  батюшки. Но фамилия у дедушки была Шабанов. Он говорил, что родился здесь, но таких фамилий у нас в деревне небыло.\nЧасовня напротив бывшей  церкви была. Это место не  перепутать, если въезжать в деревню, то там две улицы, сразу въезжаешь и  улица поднимается на горку, там где была школа (её снесли)  стоит дом, а рядом была церковь, там был школьный стадион.\n'}]},3900:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(5338)),l=n(o(6540)),r=o(2648),c=o(1376),a=o(8434),s=o(4847),d=o(6550),u=o(3264),p=o(797);i.default.createRoot(document.getElementById("root")).render(l.default.createElement(l.default.StrictMode,null,l.default.createElement(r.BrowserRouter,null,l.default.createElement((function(){var e=(0,r.useNavigate)();return l.default.useEffect((function(){var t=localStorage.getItem("pathname"),o=localStorage.getItem("search")||"";t&&e("".concat(t).concat(o)),location&&"localhost"===location.hostname&&e("/map".concat(location.search)),localStorage.clear()}),[]),l.default.createElement(l.default.Fragment,null,l.default.createElement(r.Routes,null,l.default.createElement(r.Route,{path:"*",element:l.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),l.default.createElement(r.Route,{path:"/",element:l.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),l.default.createElement(r.Route,{path:"/map",element:l.default.createElement(c.MapComponent,{data:[{id:"minsk",title:"Минск",markers:a.dataMinsk,polygons:[]},{id:"zalazje",title:"Залазье",markers:s.dataZalazje,polygons:s.dataZalazjePolygons,bounds:[[54.25737531111551,29.43670749664307],[54.250480817026435,29.37078952789307]]},{id:"skakunovshchina",title:"Скакуновщина",markers:d.dataSkakunovshchina,polygons:[]}]})}),l.default.createElement(r.Route,{path:"/tree",element:l.default.createElement(u.TreeMapComponent,null)}),l.default.createElement(r.Route,{path:"/docs",element:l.default.createElement(p.DocsMapComponent,null)})))}),null))))}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={id:e,exports:{}};return n[e].call(o.exports,o,o.exports,l),o.exports}l.m=n,e=[],l.O=(t,o,n,i)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){for(var[o,n,i]=e[d],c=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(l.O).every((e=>l.O[e](o[a])))?o.splice(a--,1):(c=!1,i<r&&(r=i));if(c){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);l.r(i);var r={};t=t||[null,o({}),o([]),o(o)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,l.d(i,r),i},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={524:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[r,c,a]=o,s=0;if(r.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(a)var d=a(l)}for(t&&t(o);s<r.length;s++)i=r[s],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},o=self.webpackChunkblog=self.webpackChunkblog||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),l.nc=void 0;var r=l.O(void 0,[689],(()=>l(3900)));r=l.O(r)})();