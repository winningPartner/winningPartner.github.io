(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{267:function(e,t,a){"use strict";var s=a(0),n=a.n(s),o=function(e){var t=e.title,a=e.classes;return n.a.createElement("h1",{className:a},t)};o.defaultProps={title:"Simple title",classes:"page__title"},t.a=o},273:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var s=a(15),n=a(19),o=a(0),r=a.n(o),c=function(e){var t=e.title,a=e.symbol,s=e.value;return r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"cardStat"},r.a.createElement("span",{className:"symbol"},a),s)))};c.defaultProps={title:"Empty field",symbol:"",value:0};var l=function(e){var t=e.stats;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(c,{title:"Clicks",value:t.clicks}),r.a.createElement(c,{title:"Registrations",value:t.registrations}),r.a.createElement(c,{title:"FTD",value:t.ftd}),r.a.createElement(c,{title:"Commission",value:t.commission,symbol:"\xa3"}),r.a.createElement(c,{title:"Deposits",value:t.deposits,symbol:"\xa3"}),r.a.createElement(c,{title:"Net Cash",symbol:"\xa3",value:t.net_cash}))},i=a(23),m=a(267),d=a(255),u=(a(82),a(268)),p=a.n(u),b=a(84),f=a(260),g=a(83),v=a(57),h=a.n(v),E=(a(273),{header:{style:{fontSize:"24px",fontWeight:"800"}},headCells:{style:{fontSize:"16px"}}}),_=[{name:"Brand",selector:"brand",sortable:!0,grow:3,style:{fontSize:"16px",fontWeight:600}},{name:"Commission",selector:"commission",sortable:!0},{name:"Net Cash",selector:"net_cash",sortable:!0},{name:"Deposits",selector:"deposits",sortable:!0},{name:"Clicks",selector:"clicks",sortable:!0},{name:"FTDS",selector:"ftds",sortable:!0},{name:"Registrations",selector:"registrations",sortable:!0},{name:"No of deposits",selector:"no_of_deposits",sortable:!0}],S=[{name:"Deal",selector:"deal",sortable:!0,grow:3,style:{fontSize:"16px",fontWeight:600}},{name:"Commission",selector:"commission",sortable:!0},{name:"Net Cash",selector:"net_cash",sortable:!0},{name:"Deposits",selector:"deposits",sortable:!0},{name:"Clicks",selector:"clicks",sortable:!0},{name:"FTDS",selector:"ftds",sortable:!0},{name:"Registrations",selector:"registrations",sortable:!0},{name:"No of deposits",selector:"no_of_deposits",sortable:!0}];t.default=function(){var e=Object(o.useState)({casinos:[],stats:[]}),t=Object(n.a)(e,2),a=t[0],c=t[1],u=Object(o.useState)({deals:[]}),v=Object(n.a)(u,2),C=v[0],O=v[1],j=Object(o.useState)({casino:!1,deal:!1}),y=Object(n.a)(j,2),N=y[0],k=y[1],D=Object(o.useState)({casino:0,deal:0}),w=Object(n.a)(D,2),P=w[0],T=w[1],F=Object(i.c)((function(e){return e.brands})),R=Object(i.c)((function(e){return e.dates})),x=Object(i.c)((function(e){return e.auth.currentUser.token})),z="";0!==F.brands.length&&F.brands.map((function(e){return z+="&brand_ids[]=".concat(e)}));var Y=h()(new Date).format("YYYY-MM-DD"),W="date_from=".concat(Y,"&date_to=").concat(Y);0!==R.dates.start&&0!==R.dates.end&&(W="date_from=".concat(R.dates.start,"&date_to=").concat(R.dates.end));var J=Object(o.useCallback)((function(e){k({casino:!0});var t={sort:z,date:W,token:x,page:e};g.b.fetchDataFromServer(Object(s.a)({type:"casinos"},t)).then((function(e){var t=e.data,a=t.reports,s=t.totals,n=t.total_count;c({casinos:a,stats:s}),T({casino:n}),setTimeout((function(){k({casino:!1})}),1e3)})).catch((function(){c({casinos:{error:!0}})}))}),[z,W,x]),M=Object(o.useCallback)((function(e){k({deal:!0});var t={sort:z,date:W,token:x,page:e};g.b.fetchDataFromServer(Object(s.a)({type:"deals"},t)).then((function(e){var t=e.data,a=t.reports,s=t.total_count;O({deals:a}),T({deal:s}),setTimeout((function(){k({deal:!1})}),1e3)})).catch((function(){c({casinos:{error:!0}})}))}),[z,W,x]);Object(o.useEffect)((function(){J(1),M(1)}),[R,F,J,M]);return r.a.createElement(d.a,null,r.a.createElement(m.a,{title:"Overview"}),r.a.createElement(f.a,{in:!0,timeout:1e3,classNames:"fade"},r.a.createElement(l,{stats:a.stats})),r.a.createElement("div",{className:"data__wrapper"},r.a.createElement(p.a,{title:"Casinos",columns:_,data:a.casinos,progressPending:N.casino,customStyles:E,pagination:!0,paginationServer:!0,paginationPerPage:20,paginationTotalRows:P.casino,onChangePage:function(e){J(e)},progressComponent:r.a.createElement(b.a,null)})),r.a.createElement("div",{className:"data__wrapper"},r.a.createElement(p.a,{title:"Deals",columns:S,data:C.deals,progressPending:N.deal,customStyles:E,pagination:!0,paginationServer:!0,paginationPerPage:20,paginationTotalRows:P.deal,onChangePage:function(e){M(e)},progressComponent:r.a.createElement(b.a,null)})))}}}]);
//# sourceMappingURL=6.ad47c3e9.chunk.js.map