(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c(13),s=c.n(r),l=(c(20),c(3)),o=(c(21),function(){return Object(n.jsxs)("article",{className:"mw10 center ph3 ph5-ns tc br2 pv2 bg-dark-gray ba bw2 b--green white mb5",children:[Object(n.jsx)("h1",{className:"fw6 f3 f2-ns lh-title mt0 mb3",children:"Employee Directory"}),Object(n.jsx)("h6",{className:"white",children:"Click on column headings to sort or use the search box to narrow your results."})]})}),i=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("form",{className:"bg-moon-gray mw6 center pa1 br2-ns ba b--green bw3 mb4",children:Object(n.jsx)("fieldset",{className:"cf bn ma0 pa0",children:Object(n.jsx)("div",{className:"cf",children:Object(n.jsx)("input",{className:"f6 f5-1 input-reset bn fl black-80 bg-white pa3 lh-solid w-100",placeholder:"Search...",type:"text",name:"employeeName",value:e.filter,id:"employeeName",onChange:e.handleChange})})})})})},d=(c(22),function(e){return Object(n.jsx)("div",{className:"ml4 mr4",children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",className:"tableHead",onClick:function(){e.handleClick("name")},children:"Name "}),Object(n.jsx)("th",{scope:"col",className:"tableHead",onClick:function(){e.handleClick("email")},children:"Email"}),Object(n.jsx)("th",{scope:"col",className:"tableHead",onClick:function(){e.handleClick("dob")},children:"Date Of Birth"}),Object(n.jsx)("th",{scope:"col",className:"tableHead",onClick:function(){e.handleClick("contact")},children:"Contact"}),Object(n.jsx)("th",{scope:"col",className:"tableHead",children:"Picture"})]})}),Object(n.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:e.name}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.dob}),Object(n.jsx)("td",{children:e.contact}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{alt:"picture",src:e.url})})]},t)}))})]})})}),b=c(14),j=c.n(b),h=function(){return j.a.get("https://randomuser.me/api?results=30")};var m=function(){var e,t=Object(a.useState)([]),c=Object(l.a)(t,2),r=c[0],s=c[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),m=j[0],u=j[1],f=Object(a.useState)({propertyClicked:"",orderBy:"ascending"}),p=Object(l.a)(f,2),O=p[0],x=p[1];return Object(a.useEffect)((function(){h().then((function(e){console.log(e.data);var t=e.data.results.map((function(e){return{name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,dob:e.dob.date,contact:e.cell,url:e.picture.thumbnail}}));s(t)})).catch((function(e){console.log(e),alert("something went wrong..:(")}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(o,{}),Object(n.jsx)(i,{handleChange:function(e){u(e.target.value),console.log(e.target.value)},filter:m}),Object(n.jsx)(d,{employees:(e=r,e.filter((function(e){return e.name.toLowerCase().indexOf(m)>-1||e.email.toLowerCase().indexOf(m)>-1||e.dob.toLowerCase().indexOf(m)>-1||e.contact.toLowerCase().indexOf(m)>-1}))),handleClick:function(e){var t,c,n="ascending";O.propertyClicked===e&&"ascending"===O.orderBy&&(n="descending"),x({propertyClicked:e,orderBy:n}),c=e,"ascending"===(t=n)?s(r.map((function(e){return e})).sort((function(e,t){return e[c]>t[c]?1:-1}))):"descending"===t&&s(r.map((function(e){return e})).sort((function(e,t){return e[c]>t[c]?-1:1})))}})]})};c(41),c(42);s.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.53e53747.chunk.js.map