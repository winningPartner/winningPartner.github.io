(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[11],{267:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=function(e){var t=e.title,a=e.classes;return s.a.createElement("h1",{className:a},t)};o.defaultProps={title:"Simple title",classes:"page__title"},t.a=o},278:function(e,t,a){"use strict";a.r(t);var n=a(15),s=a(19),o=a(0),r=a.n(o),c=a(255),l=a(267),i=a(23),u=a(268),p=a.n(u),m=a(84),b=a(83),f=(a(82),[{name:"Month",selector:"date",sortable:!0},{name:"Commission",selector:"commission",sortable:!0},{name:"Net Cash",selector:"net_cash",sortable:!0},{name:"Deposits",selector:"deposits",sortable:!0},{name:"Clicks",selector:"clicks",sortable:!0},{name:"FTDS",selector:"ftds",sortable:!0},{name:"Registrations",selector:"registrations",sortable:!0},{name:"No of deposits",selector:"no_of_deposits",sortable:!0}]);t.default=function(){var e=Object(o.useState)({daily:[]}),t=Object(s.a)(e,2),a=t[0],u=t[1],d=Object(o.useState)(!1),g=Object(s.a)(d,2),h=g[0],j=g[1],O=Object(o.useState)(0),v=Object(s.a)(O,2),_=v[0],k=v[1],y=Object(i.c)((function(e){return e.auth.currentUser.token})),E=Object(o.useCallback)((function(e){j(!0);var t={token:y,page:e};b.b.fetchDataFromServer(Object(n.a)({type:"monthly"},t)).then((function(e){var t=e.data,a=t.reports,n=t.total_count;console.log(a),u({daily:a}),k(n),setTimeout((function(){j(!1)}),1e3)})).catch((function(){u({daily:{error:!0}})}))}),[y]);return Object(o.useEffect)((function(){E(1)}),[E]),r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Reports"}),r.a.createElement("div",{className:"data__wrapper"},r.a.createElement(p.a,{title:"Monthly",columns:f,data:a.daily,progressPending:h,pagination:!0,paginationServer:!0,paginationPerPage:20,paginationTotalRows:_,onChangePage:function(e){E(e)},progressComponent:r.a.createElement(m.a,null)})))}}}]);
//# sourceMappingURL=11.2c60b9c7.chunk.js.map