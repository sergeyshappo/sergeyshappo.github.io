(()=>{"use strict";var e,t,n,o={1376:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MapComponent=void 0;var i=o(n(6540)),l=n(2745),r=n(3481),c=o(n(9875));function a(e){var t=e.facets,n=e.toShow,o=e.setOpenSlider,c=(0,l.useMap)(),a=i.default.useState(),d=a[0],s=a[1];return i.default.useEffect((function(){d&&n?d.show():d&&d.hide()}),[n]),i.default.useEffect((function(){var e=r.control.sidebar("sidebar",{position:"left",autoPan:!0});return e.on("hidden",(function(){return o(!1)})),c.addControl(e),s(e),function(){}}),[t]),i.default.createElement("div",{id:"sidebar"},i.default.createElement("h1",null,"Фильтры"))}n(2407),n(6203);var d=function(){var e=(0,l.useMap)(),t=function(t){e.fitBounds(t.layer.getBounds())};return i.default.useEffect((function(){return e.on("baselayerchange",t),function(){e.off("baselayerchange",t)}}),[]),i.default.createElement(i.default.Fragment,null)};t.MapComponent=function(e){var t=e.dataMinsk,n=e.dataZalazje,o=e.dataSkakunovshchina,s=i.default.useRef(),u=i.default.useState(!1),p=u[0],f=u[1];return i.default.createElement(i.default.Fragment,null,!p&&i.default.createElement("div",{id:"filter-button",onClick:function(){return f(!p)}}),i.default.createElement(l.MapContainer,{id:"map",ref:s,center:[53.902287,27.561824],zoom:11,trackResize:!0,scrollWheelZoom:!0,style:{height:"100vh"}},i.default.createElement(d,null),i.default.createElement(l.TileLayer,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.default.createElement(l.LayersControl,{position:"topright",collapsed:!1},i.default.createElement(l.LayersControl.BaseLayer,{checked:!0,name:"Минск"},i.default.createElement(l.FeatureGroup,null,i.default.createElement(c.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},t.map((function(e,t){var n=e._geoloc,o=e.title,c=e.description,a=n[0],d=n[1];return i.default.createElement(l.Marker,{key:t,position:[a,d],icon:(0,r.divIcon)({html:"<b>".concat(o,"</b>"),className:"marker-div-icon"}),eventHandlers:{click:function(){}}},i.default.createElement(l.Popup,null,i.default.createElement("b",null,o),c?i.default.createElement("p",{dangerouslySetInnerHTML:{__html:c}}):""))}))))),i.default.createElement(l.LayersControl.BaseLayer,{name:"Залазье"},i.default.createElement(l.FeatureGroup,null,i.default.createElement(c.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},n.map((function(e,t){var n=e._geoloc,o=e.title,c=e.description,a=n[0],d=n[1];return i.default.createElement(l.Marker,{key:t,position:[a,d],icon:(0,r.divIcon)({html:"<b>".concat(o,"</b>"),className:"marker-div-icon"}),eventHandlers:{click:function(){}}},i.default.createElement(l.Popup,null,i.default.createElement("b",null,o),c?i.default.createElement("p",{dangerouslySetInnerHTML:{__html:c}}):""))}))))),i.default.createElement(l.LayersControl.BaseLayer,{name:"Скакуновщина"},i.default.createElement(l.FeatureGroup,null,i.default.createElement(c.default,{chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0},o.map((function(e,t){var n=e._geoloc,o=e.title,c=e.description,a=n[0],d=n[1];return i.default.createElement(l.Marker,{key:t,position:[a,d],icon:(0,r.divIcon)({html:"<b>".concat(o,"</b>"),className:"marker-div-icon"}),eventHandlers:{click:function(){}}},i.default.createElement(l.Popup,null,i.default.createElement("b",null,o),c?i.default.createElement("p",{dangerouslySetInnerHTML:{__html:c}}):""))})))))),i.default.createElement(a,{facets:{},toShow:p,setOpenSlider:f})))}},8434:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataMinsk=void 0;var n="style='color: #0066cc;'";t.dataMinsk=[{_geoloc:[53.958482,27.66246],title:"кв. в Новой Боровой",description:"\nЖиву тут с семьей с 19-го февраля 2022-го. (приняли квартиру 25-го января)<br>\nКвартиру купили в рассрочку от застройщика, потому на время рассрочки не прописаны в квартире,\nа что бы сдать квартиру на <a ".concat(n," href='#1'>Тимирязева</a> и не платить за нее пришлось нам прописаться у мамы на <a ").concat(n," href='#2'>Новавилке</a>,\nт.к. больше некуда да и там у меня собственность 10кв.м.\n\n<br><i>д. Копище, ул. Миля 2, кв.131</i>\n")},{_geoloc:[53.931776,27.486342],title:"Кв. на Тимирязева",description:"\nТут я прожил 7 лет.<br>\nС 2015-го (официально с декабря 2014-го) по 25 февр. 2022-го. Это арендная квартира (коммерческое арендное жильё), что я получил по очереди нуждающихся.<br>\nКогда женился, прописал сюда жену Наташу и дочь Екатерину.\n<br><i>ул.Тимирязева 80, к.1, кв.21</i>\n"},{_geoloc:[53.92992,27.538263],title:"Кв. на Нововилке",description:"Тут я жил с родителями с 1997-го до 2015-ый.<br>\nЭту квартиру дали папе, как служебную. Потом он ее приватизировал.\n<br><i>пер.Нововиленский 14, кв.2</i>\n"},{_geoloc:[53.931833,27.542336],title:"Центральное РУВД",description:"\nЦентральное РУВД. <br>\nТут папа проработал всю жизнь. Иногда, я заходил к нему, передавал что нибудь из дома, когда он был на службе.\n"},{_geoloc:[53.925423,27.561204],title:"Общага на Крапоткина",description:"\nТут изначально жил папа, как устроился в мимлицию после армии. Жил в одной комнате с\n<a ".concat(n," href='/ahnentafel#Гордейко-Виктор'>дядей Витей (Гордейко)</a>\n и Антановичем<br>\nПотом, как женился, им с мамой дали комнату на девятом этаже.\nНедолго пожив, они переехали на 7-ой (моя сестра Саша уже помнит ту конату, я - нет).\nА позже, нам дали две комнаты на 6-ом, в 613-ой квартире. Это я и помню, тут и прошло мое детство. И прожили мы там до 1997-го.\nПока папе не дали квартриру на\n<a ").concat(n," href='#2'>Новавилке</a>.\n<br><i>ул.Крапоткина 97, кв.613</i>\n")},{_geoloc:[53.923826,27.555427],title:"дед Володя",description:"\nТут жил\n<a ".concat(n," href='/ahnentafel#Шаппо-Владимир-Иванович'>дед Володя</a>\n, родной брат моего\n<a ").concat(n," href='/ahnentafel#Шаппо-Николай-Иванович'>деда Коли</a>\n.\nВ детстве, смутно, но помню, я с папаой ходили в гости к нему.\nСейчас, вроде слышал, там живет внук Паша.\n")},{_geoloc:[53.928077,27.542422],title:"тетя Галя, Нововилка",description:"\nГде-то тут стоял дом-барак, где жила тётя Галя с дядем Витей, Андреем и тут еще родилась Даша.\n"},{_geoloc:[53.862831,27.451169],title:"тетя Галя, Рафиева",description:"\nСюда переехала тётя Галя, после Новавилки\n"},{_geoloc:[53.894422,27.416378],title:"сестра Саша, Мазурава",description:"\nТут жила Саша с Федей, их первая квартира (однокомнатная).\nВроде ее посторили в 2009-ом и они продали ее в 2019-ом.\n"},{_geoloc:[53.872857,27.474463],title:"сестра Саша, кв. на Брыля",description:"\nКваритра сестры Саши с 2019-го.\nОни продали квартиру на Мазурава и купили тут трехкомнатную.\nПричем купля и продажа происходила в один день.\n"},{_geoloc:[53.92235,27.511957],title:"Exadel, Тимирязева",description:"\nТут был первый офис Эксадел.\nСюда я устраивался изначально и проработал несколько лет.\nМой проект находился на 7-ом этаже.\nПотом, фирма перехала на Купревича, причины переезда: фирма активно росла; воняло с радиаторного завода.\n"},{_geoloc:[53.92766,27.683406],title:"Exadel, Купревича",description:"\nТут был офис Эксадел.\nСюда фирма переехала, когда на Тимирязева стало тесно.\nТут Фирма арендовала второй и третьи этажи.\nПроработал тут продолжительное время, а когда фирма еще расширилась, то открыла филиал на Каменной горке, куда я с трудом выбил место.\n"},{_geoloc:[53.908669,27.42994],title:"Exadel, кам.горка",description:"\nТут был новый офис, когда я работал на Эксадел.\nПроработал я там может год, до увольнения.\n"},{_geoloc:[53.914267,27.601748],title:"Brimit",description:"\nМое текущее место работы, сюда я устроился в июне 2020-го, из-за пандемии пришлось уйти из Exadel.\n<br>\nПлатонова, 49\n"},{_geoloc:[53.924715,27.638155],title:"тётя Валюша, на Филимонова",description:"\nТут живет тётя Валюша с дядей Сашей.\nСюда они переехали из общаги на Фабрициуса.\nПомню новоселье гуляли в тот же день, что и открытие Нац.Библиотеки, что рядом."},{_geoloc:[53.916021,27.428027],title:"тётя Таня",description:"\nТут живет тётя Таня.\nПостроила тут квартиру и переехала из общаги."},{_geoloc:[53.919213,27.558017],title:"СШ №27",description:"\nВ этой школе учился я (1992-2003) и сестра Саша (1990-2001)."},{_geoloc:[53.937578,27.56436],title:"Дет.сад №266",description:"\nВ этодетский сад ходил я и сестра Саша."},{_geoloc:[53.95261,27.602422],title:"Репетитор по Физике",description:"\nТут жила репетрор по физике, к ней я проездил примерно с пол-года в 2009-ом."},{_geoloc:[53.913547,27.571258],title:"Горизнот, телевизионка",description:"\nГоризонт, цех телевизионки. Тут я проработал продолжительное время. Потом завод переехал.\n"},{_geoloc:[53.862211,27.506552],title:"Мидеа-горизонт",description:"\nМидеа-горизонт. Сюда я перешел из телевизионки, точнее мастер производства - Квачков взял меня с собой.\n"},{_geoloc:[53.865665,27.510868],title:"Горизонт, телевизионка",description:"\nСюда переехал Горизонт. Один из цехов. Я работал в этом.\n"},{_geoloc:[53.850272,27.502028],title:"Наташа, кв на Казинца",description:"\nТут Наташа снимала однокомнатную квартиру, немного больше года.\nПотом, в 2019-ом она переехала ко мне на Тимирязева.\n"},{_geoloc:[53.895528,27.487813],title:"Наташа, кв на Пономаренко",description:"\nТут Наташа снимала комнату в двухкомнатной квартире вместе с другой девушкой. Потом переехала на Казинца.\n"},{_geoloc:[53.842745,27.632785],title:"Алеся, кв на Ташкенской",description:"\nТут живет Алеся с семьей. Знаю, что это не их квартира, а родственника её мужа Андрея.\nТашкентская д18, к2, кв116.\n"},{_geoloc:[53.858053,27.500194],title:"Автошкола ФОСААФ",description:"\nТут я учился на права, работая недалеко на заводе. Там же, рядом и ГАИ, где сдавал экзамен.\n"},{_geoloc:[53.84064,27.527429],title:"Фармтехнология",description:"\nМесто работы Наташи. Работает тут с послеуниверской отработки в г. Лиде.\n"},{_geoloc:[53.836243,27.590449],title:"Андрей, кв на ул. Пташука",description:'\nВ одном из этих пяти "столбиков" он живет. Построил 4-ех комнатную квартиру, в связи с многодетностью.\n'},{_geoloc:[53.88601,27.591053],title:"Общежитие на Фабричной",description:"\nОбщежитие № 4 Минские городские общежития.\nТут жили тётя Валюша и тётя Таня со своими семьями, до того, как построили свои квартиры.\n"},{_geoloc:[53.926251,27.57492],title:"Миша Устин",description:"\nТут Живет дядя Миша (Машкович Михаил Викторович), мамин двоюродный брат.\n"},{_geoloc:[53.923716,27.669283],title:"Футберг",description:"\nООО «Футберг». Тут работает мама, это уже новый офис. Саша тут уже не работала.\n"},{_geoloc:[53.839399,27.258107],title:"Могила отца",description:"\nТут похоронен мой папа.\n"},{_geoloc:[53.934454,27.379047],title:"Могила дяди Саши",description:"\nТут похоронен брат моего папы - Шаппо Александр Николаевич<br>\nТарасовское кладбище\n\n"},{_geoloc:[53.896575,27.479038],title:"Роддом № 2",description:"\nТут я родился.<br>\nГородской родильный дом № 2, улица Бельского, 60\n"},{_geoloc:[53.930835,27.536429],title:"Мать и дитя",description:"\nТут родилась сестра Саша и она же тут рожала Аню.<br>\nРНПЦ Мать и дитя, родильный дом, Орловская улица, 66к2\n"},{_geoloc:[53.922696,27.67163],title:"Областной роддом",description:"\nТут родилась моя дочька Катя.<br>\nЯ и моя мама раболи рядом с роддомом. Мама на выписку просто вышла после работы к роддому. А я, так совпало, после рождения Кати, переехал работать в новый офис на каменной горке.<br>\nКлинический родильный дом Минской области, улица Франциска Скорины, 16к2\n"},{_geoloc:[53.924868,27.543878],title:"Дворец молодежи",description:"\nМинский государственный дворец детей и молодёжи<br>\nСтаровиленский тракт, 41\n<br><br>\nТут я проводил очень много времени в детстве, посещая разные кружки.\n"}]},6550:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataSkakunovshchina=void 0,t.dataSkakunovshchina=[{_geoloc:[55.064832,29.109589],title:"наша хата",description:"Тут жили дед Коля и баба Аня. Эту хату тут, вроде как купили в 1950-х у какой-то женщины."},{_geoloc:[55.067003,29.11667],title:"Каркоза",description:"Хата Николая Владимировича Каркоза, троюродный брат моей бабушки Ани."},{_geoloc:[55.065288,29.110417],title:"баба Маша",description:"Тут была хата бабы Маши (Мария Иванова Шаппо), сестры моего деда Коли."},{_geoloc:[55.06566,29.111742],title:"Конопелько",description:"Тут хата Конопелько Леонида, родного брата моей бабушки Ани. Он жил в Калининграде. Сюда, помню приезжали его дочь с внуками из Ростова."},{_geoloc:[55.066203,29.113367],title:"Кощеевы",description:"Тут жил Кащеев Степан Кириллович. Как я узнал, он воевал и после войны работал учителем. Жена - Пискунова Нина Михайловна."},{_geoloc:[55.066187,29.114029],title:"Настуля",description:"Тут жила бабушка Настуля - родная тётка моей бабушки Ани. Родная сестра отца Ивана семеновича. Каркоза Настуля Семеновна, после замужества - Сорока. Муж погиб на финской."},{_geoloc:[55.062648,29.16781],title:"Кладбище Двор-Низголово",description:"Кладбище Двор-Низголово.<br>\nТут похоронены дед Коля и его отец Иван.\n"},{_geoloc:[55.018766,29.143541],title:"дед Володя в Бочейково",description:"Дом деда Володи в Бочейково, брата моего деда Коли.<br>\nВроде как этот дом с участком просто купили. (местоположение вроде это, если я ничего не путаю)\n"},{_geoloc:[55.082656,29.078548],title:"Глебовщина",description:"дер. Глебовщина, Сокоровское сельское общество.<br>Дед Коля рассказывал, что часто пешком ходил сюда к деду Исаку из Двора-Низголово."}]},4847:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataZalazje=void 0;var n="style='color: #0066cc;'";t.dataZalazje=[{_geoloc:[54.255198,29.405763],title:"наша хата",description:"\nНаша хата.\nИзначально тут жил\n<a ".concat(n," href='/ahnentafel#Машкович-Федор-Иванович'>дед Фёдор</a>\nс\n<a ").concat(n," href='/ahnentafel#Машкович-Пелагея-Трофимовна'>бабой Пелогеей</a>.\nПередняя часть хаты дореволюционная (по похозяйственной книге 1950-го).\nПотом тут жил\n<a ").concat(n," href='/ahnentafel#Машкович-Виктор-Федорович'>дед Витя</a>\nс семьей, до 1970-го года.\nА с примерно 1977-го -\n<a ").concat(n," href='/ahnentafel#Новиков-Александр-Михайлович'>дед Шура</a>\nс\n<a ").concat(n," href='/ahnentafel#Машкович-Любовь-Федоровна'>бабой Любой</a>.\n")},{_geoloc:[54.254854,29.405381],title:"хата бабы Домны",description:"когда-то была хата бабы Домны, сестра Тимки"},{_geoloc:[54.255082,29.40604],title:"баба Татьяна",description:"хата деда Володи и бабы Татьяны"},{_geoloc:[54.255474,29.406107],title:"Кирилловы",description:"хата деда Кирилла и его семьи, рядом была старая хата - стояла торцом к дороге."},{_geoloc:[54.255536,29.405626],title:"Козики",description:"Козик Петр Николаевич и Козик (Бельская) Александра Ивановна."},{_geoloc:[54.255941,29.406558],title:"Павлюковы",description:"хата Машкович Николай Павлович и Машкович Вера Елисеевна"},{_geoloc:[54.256148,29.407207],title:"Доцент",description:"Хата Козик Григорий Владимирович(Доцент). Это хата его родителей - Козик Владимир Николаевич (Коммунист) и Козик (Парахневич) Анна Эдуардовна"},{_geoloc:[54.256607,29.406671],title:"Мишка Данилков",description:"Хата Машкович Михаил Данилович и Машкович Вера Макаровна"},{_geoloc:[54.256885,29.406614],title:"баба Лена",description:"Хата Иосиф Федорович Латушкин (1 Jul 1925 - 2 Aug 1991) и Елена Романовна Латушкина (10 Nov 1925 - 6 Aug 2004)"},{_geoloc:[54.257062,29.407202],title:"москвичи",description:"Хата Маньки лесничихи и ее семьи. Муж Петр Кулик, он родом из Боровцов."},{_geoloc:[54.257424,29.406785],title:"Вася Носович",description:"Хата Васи Носовича и его отца - Старика"},{_geoloc:[54.255659,29.406595],title:"Устинья",description:"Хата бабы Устиньи, жена Тимки. <br>Машкович Устинья Семеновна и Машкович Тимофей Степанович."},{_geoloc:[54.25474,29.405596],title:"дачники",description:"Хата дачников, до этого была Лиды и Зины Пожарицких"},{_geoloc:[54.25463,29.405057],title:"Паша Машкович",description:"Хата Паши Степановича Машковича"},{_geoloc:[54.255292,29.406246],title:"баба Надя",description:"когда-то тут была хата бабы Нади, до переезда в Авхуты. (Латушкина (Машкович) Надежда Прохоровна)"},{_geoloc:[54.25542,29.406375],title:"баба Надя",description:"старая хата бабы Нади, (Латушкина (Машкович) Надежда Прохоровна)"},{_geoloc:[54.254851,29.405714],title:"старая хата деда Шуры",description:"\nкогда-то тут была хата деда Шуры и\n<a ".concat(n," href='/ahnentafel#Машкович-Ефросиния-Елисеевна'>Проски</a>\n, потом, когда они разошлись, хата отшла Проске с дочкой, а пристройка - деду.")},{_geoloc:[54.254968,29.40552],title:"хата Христинки",description:"тут была хата бабы Христинки, прямо перед старым колодцем, рядом с новым (Машкович Кристина Ивановна)."},{_geoloc:[54.254666,29.404483],title:"хата деда Василя Пожарицкого",description:"хата деда Василя, Пожарицкого. А к дороге вела узкая улка-сад."},{_geoloc:[54.254379,29.405088],title:"хата мати Василя Пожарицкого",description:"хата мати Василя Пожарицкого. Её все звали Зенка. Жила напротив Василя. В мое время там уже был сарай с сеном и др."},{_geoloc:[54.253849,29.403992],title:"хата бабы Вали",description:"хата бабы Вали (Козик (Новикова) Валентина Михайловна) и деда Никифора (Козик Никифор Николаевич)"},{_geoloc:[54.253673,29.403658],title:"хата Политыко",description:"хата Политыко (Латушкина) Людмила Афанасьевна"},{_geoloc:[54.251771,29.400893],title:"хата деда Василя, Елисеевича",description:"хата деда Василя, Елисеевича, дед Сергея Хлебника"},{_geoloc:[54.252225,29.401532],title:"Атрюховы",description:"Артюхов Александр Кузьмич и Артюхова (Машкович) Любовь Егоровна"},{_geoloc:[54.251444,29.401376],title:"Петя Пожарицкий",description:"Пожарицкий Петр Владимирович, хата ему осталась от батьки."},{_geoloc:[54.25178,29.401918],title:"баня Артюховых",description:"баня Артюховых, но раньше, на этом месте стояла хата Нади Апанасовой (Машкович (Латушкина) Надежда Афанасьевна)"},{_geoloc:[54.251506,29.400861],title:"хата бабы Елены",description:"хата мати бабы Татьяны. Елена Пракофовна Машкович (1900 - 30 Jul 1978)"},{_geoloc:[54.257106,29.406827],title:"хата родителей Маньки Лесничихи",description:"хата родителей Маньки Лесничихи. Марина Мартиновна Петухова (1899 - 1973) и Роман Абрамович Петухов (1881 - 1967)"},{_geoloc:[54.256382,29.406757],title:"хата бабы Авдотия",description:"хата бабы Авдотия"},{_geoloc:[54.256673,29.407038],title:"хата Нади Гула",description:"сестра Осипа Федоровича"},{_geoloc:[54.254551,29.405342],title:"хата Ганны Ивановны",description:"хата Ганны Ивановны (Машкович Анна Ивановна), дочь Машкович Марфы Трофимовны"},{_geoloc:[54.254424,29.404818],title:"хата Коли хромого",description:"хата Коли хромого. Николай Аврамович Пожарицкий (Mar 1921 - 18 Feb 1991)"},{_geoloc:[54.254187,29.404383],title:"хата Федор",description:"хата Федора, отец Осипа Латушкина."},{_geoloc:[54.254026,29.404179],title:"хата Степан Ляксеев",description:"хата Степан Ляксеев"},{_geoloc:[54.253626,29.404096],title:"хата Грики",description:"хата Грики. Латушкин Григорий Николаевич"},{_geoloc:[54.253342,29.40319],title:"хата Моси",description:"хата Моси. Артюхов Александр Иванович"},{_geoloc:[54.253436,29.403423],title:"хата Миши Марьна",description:"хата Миши Марьна. Козик Михаил, сейчас живет в Авхутах. Сын Козик (Машкович) Мария Трофимовна"},{_geoloc:[54.253882,29.40367],title:"хата деда Коли, Гриков отец",description:"хата деда Коли, Гриков отец. Латушкин Николай Афанасьевич (1.06.1932-2.06.2013)"},{_geoloc:[54.253132,29.402436],title:"хата Зины Тарасихины",description:"хата Зины Тарасихины. Макаревич (Машкович) Зинаида Тарасовна"},{_geoloc:[54.25272,29.402096],title:"Болсуны",description:"хата семьи Болсунов.\n<a ".concat(n," href='/ahnentafel#Болсун-Николай-Дмитриевич'>Болсун Николай Дмитриевич</a>\nи\n<a ").concat(n," href='/ahnentafel#Машкович-Анна-Макаровна'>Болсун (Машкович) Анна Макаровна</a>")},{_geoloc:[54.252983,29.403237],title:"хата Шыбунихи",description:"хата Шыбунихи. Анастасия Романовна Шабунова (1909 - 1999). Вроде как, она сгорела в своей хате."},{_geoloc:[54.252807,29.402647],title:"хата Проски",description:"\nхата\n<a ".concat(n," href='/ahnentafel#Машкович-Ефросиния-Елисеевна'>Проски</a>\n, что сгорела. Ефросинья Елисеевна Машкович (15 Mar 1925 - 11 Jul 2008)")},{_geoloc:[54.252426,29.402125],title:"хата Сашки Артюхова",description:"хата Сашки Артюхова (Артюхов Александр Михайлович), сын Артюхова Михаила Кузьмича (27.09.1927 - 8.02.2008)"},{_geoloc:[54.252531,29.401434],title:"хата Кацьки, старая",description:"хата Кацьки. Машкович Екатерина Степановна (1926-2006)"},{_geoloc:[54.252049,29.402079],title:"хата Кацьки, новая",description:"хата Кацьки, тут она жила сначала с Лявоном (Леонид Афанасьевич Макаревич 1941 - 2001), потом осо Стариком"},{_geoloc:[54.252089,29.4011],title:"хата Ксеньки Егорчиковой",description:"хата Ксеньки Егорчиковой (Носович (Машкович) Ксения Егоровна), сестра жены Василя Пожарицкого."},{_geoloc:[54.251609,29.401608],title:"хата Гены Рыжего",description:"хата Гены Рыжего. Геннадий Никитович Машкович (6 Dec 1958 - 20 Oct 2017)"},{_geoloc:[54.295112,29.452314],title:"баба Надя в Авхутах",description:"хата бабы Нади в Авхутах. Из Залазья, она переехала сюда."},{_geoloc:[54.298613,29.444132],title:"дед Витя в Авхутах",description:"хата\n <a ".concat(n," href='/ahnentafel#Машкович-Виктор-Федорович'>деда Вити</a>\n в Авхутах. Из Залазья, он с семьей переехали сюда. Его жена из Авхут родом.")},{_geoloc:[54.276899,29.409993],title:"баба Катя (Горожоны)",description:"хата\n <a ".concat(n," href='/ahnentafel#Новикова-Екатерина-Михайловна'>бабы Кати</a>\n в Горожонах, сестра деда Шуры. До этого она с мужем жили в соседней Зяблице.\n ")},{_geoloc:[54.287196,29.431088],title:"Алик из Курчей",description:"хата Алика из Курчей"},{_geoloc:[54.27128,29.415169],title:"старые Горожоны",description:"Старое расположение Горожон (примерно).\nТут в основном жили евреи.\nВроде в 1936, стали людей сгонять с хуторов и мелких деревень в курпные деревни.\nИ получается, сегодняшние Горожоны, это место, куда переселились люди с окресных мест.\nА сами евреи переехали в Славное."},{_geoloc:[54.295794,29.443427],title:"хата Лёньки (Авхуты)",description:"Хата Лёньки из Авхут.<br>\n<a ".concat(n," href='/ahnentafel#Машкович-Виктор-Федорович'>Дед Витя:</a>\n<br>\n<i>Лёнькава матка - тётка моей матке (т.е. Пелогее). Их было три браты - Лёнька, Апанас и Василь. Они Латушкины по батьку. А матка была Машкович, Юдава дочка - Татьяна, она была с Залазья, а замуж вышла в Авхуты.</i>\n")},{_geoloc:[54.271583,29.393463],title:"Замостье",description:"\nТут был застенок Замостье. В нем жили католики по вереисповеданию, поляки по национальности и мещане по сословию.\n"},{_geoloc:[54.339246,29.399816],title:"Молявка",description:'\nТут, в Молявке, до революции находилась православная церковь, к которой отнисилось Залазье, Зяблица, Курчи, Ахуты, Глинники, Ильяни и Еленка.\nКрещения, свдьбы и отпевания уопших регистрировали тут.<br>\n<b>Любовь Александровна</b>, уроженка д.Молявка:<br>\n<i>Моя бабушка по линии матери жила на "дворне". Это в самом конце  деревни, дом их сохранился. Их фамилия Федарцовы. Там есть ещё такие фамилии. Церковь Архангела Михаила  стояла в центре села, на горе, она была деревянная, а рядом находилась школа церковно-приходская. Я ещё в ней училась до четырёх классов. А церковь сгорела во время войны, там держали военнопленных. А через дорогу от церкви жил батюшка Осипов Федот. Дом где он жил сохранился. Летом там дача, живёт его внучка Инна Всеволодовна (дочь  сына батюшки, ей уже под 80 лет). И  там же построена часовня Архангела Михаила. Построена на средства жителя деревни. Мой дедушка  был крестным сына  батюшки. Но фамилия у дедушки была Шабанов. Он говорил, что родился здесь, но таких фамилий у нас в деревне небыло.<br>\nЧасовня напротив бывшей  церкви была. Это место не  перепутать, если въезжать в деревню, то там две улицы, сразу въезжаешь и  улица поднимается на горку, там где была школа (её снесли)  стоит дом, а рядом была церковь, там был школьный стадион.</i>\n'}]},3900:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(5338)),l=o(n(6540)),r=n(2648),c=n(1376),a=n(8434),d=n(4847),s=n(6550);i.default.createRoot(document.getElementById("root")).render(l.default.createElement(l.default.StrictMode,null,l.default.createElement(r.BrowserRouter,null,l.default.createElement((function(){var e=(0,r.useNavigate)();return l.default.useEffect((function(){var t=localStorage.getItem("pathname"),n=localStorage.getItem("search")||"";t&&e("".concat(t).concat(n)),localStorage.clear()}),[]),l.default.createElement(l.default.Fragment,null,l.default.createElement(r.Routes,null,l.default.createElement(r.Route,{path:"*",element:l.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),l.default.createElement(r.Route,{path:"/",element:l.default.createElement("iframe",{src:"https://shappoff.github.io/123123",style:{width:"100%",height:"calc(99vh)",border:0}})}),l.default.createElement(r.Route,{path:"/map",element:l.default.createElement(c.MapComponent,{dataMinsk:a.dataMinsk,dataZalazje:d.dataZalazje,dataSkakunovshchina:s.dataSkakunovshchina})})))}),null))))}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,l),n.exports}l.m=o,e=[],l.O=(t,n,o,i)=>{if(!n){var r=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],c=!0,a=0;a<n.length;a++)(!1&i||r>=i)&&Object.keys(l.O).every((e=>l.O[e](n[a])))?n.splice(a--,1):(c=!1,i<r&&(r=i));if(c){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);l.r(i);var r={};t=t||[null,n({}),n([]),n(n)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,l.d(i,r),i},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={524:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[r,c,a]=n,d=0;if(r.some((t=>0!==e[t]))){for(o in c)l.o(c,o)&&(l.m[o]=c[o]);if(a)var s=a(l)}for(t&&t(n);d<r.length;d++)i=r[d],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(s)},n=self.webpackChunkblog=self.webpackChunkblog||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var r=l.O(void 0,[511],(()=>l(3900)));r=l.O(r)})();