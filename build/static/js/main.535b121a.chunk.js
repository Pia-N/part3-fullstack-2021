(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),c=t(16),a=t.n(c),s=(t(7),t(6)),i=t(3),u=t(4),l=t.n(u),d="http://localhost:3001/api/persons",j={getAll:function(){return l.a.get(d)},create:function(e){return l.a.post(d,e)},update:function(e,n){return l.a.put("".concat(d,"/").concat(e),n)},remove:function(e){return l.a.delete("".concat(d,"/").concat(e))}},b=t(0),f=function(e){return Object(b.jsx)("button",{onClick:function(){return function(e){var n=e.id,t=e.persons,o=e.setPersons;if(console.log("nappi delete"),console.log(n,"id"),console.log(o,"uusi tila"),console.log(t,"tyypit"),window.confirm("Do you really want to delete your information?"))return o(t.filter((function(e){return e.id!==n}))),j.remove(n)}(e)},children:"Delete"})},h=function(e){var n=e.person,t=e.persons,o=e.setPersons;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[n.name," ",n.number," "]}),Object(b.jsx)(f,{id:n.id,persons:t,setPersons:o})]})},p=function(e){var n=e.showPersons,t=e.persons,o=e.setPersons;return n.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(h,{person:e,persons:t,setPersons:o})},e.name)}))},m=function(e){var n=e.addPerson,t=e.newName,o=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return Object(b.jsx)("form",{onSubmit:n,children:Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:t,onChange:o}),Object(b.jsxs)("div",{children:["number:",Object(b.jsx)("input",{value:r,onChange:c})]}),Object(b.jsx)("button",{type:"submit",children:"add"})]})})},O=function(e){return Object(b.jsxs)("div",{children:["Filter content: ",Object(b.jsx)("input",{value:e.value,onChange:e.onChange})]})},g=function(e){var n=e.message,t=e.notificationType;return null===n?null:"error"===t?Object(b.jsx)("div",{className:"error",children:n}):"notification"===t?Object(b.jsx)("div",{className:"notification",children:n}):void 0},v=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),a=Object(i.a)(c,2),u=a[0],l=a[1],d=Object(o.useState)(""),f=Object(i.a)(d,2),h=f[0],v=f[1],x=Object(o.useState)(""),w=Object(i.a)(x,2),C=w[0],y=w[1],N=Object(o.useState)(null),P=Object(i.a)(N,2),S=P[0],k=P[1],T=Object(o.useState)("error"),L=Object(i.a)(T,2),A=L[0],D=L[1];Object(o.useEffect)((function(){console.log("effect"),j.getAll().then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]),console.log("render",t.length,"persons");var E=0===C.length?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)("div",{children:Object(b.jsx)(g,{message:S,notificationType:A})}),Object(b.jsx)(O,{value:C,onChange:function(e){console.log(e.target.value),y(e.target.value)}}),Object(b.jsx)("h3",{children:"Add a new number"}),Object(b.jsx)(m,{addPerson:function(e){e.preventDefault(),console.log("nappia painettu",e.target);var n={name:h,number:u},o=t.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));if(t.every((function(e){return e.name.toLowerCase()!==h.toLowerCase()}))&&j.create(n).then((function(e){r(t.concat(e.data)),v(""),l(""),k("Person '".concat(h,"' has been added ")),D("notification"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){console.log("fail")})),o&&window.confirm("".concat(h," is already added to phonebook, replace the old number with the new one? "))){console.log(n,"uudet tiedot");var c=Object(s.a)(Object(s.a)({},o),{},{number:u});j.update(o.id,c).then((function(e){r(t.map((function(n){return n.id!==o.id?n:e.data}))),k("'".concat(h,"' has been updated")),D("notification"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){k("'".concat(h,"' was already deleted from server")),D("error"),r(t.filter((function(e){return e.id!==o.id}))),setTimeout((function(){k(null)}),5e3)}))}v(""),l("")},newName:h,handleNameChange:function(e){console.log(e.target.value),v(e.target.value)},newNumber:u,handleNumberChange:function(e){console.log(e.target.value),l(e.target.value)},setErrorMsg:k,notificationType:A,setNotificationType:D}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(p,{showPersons:E,persons:t,setPersons:r})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.535b121a.chunk.js.map