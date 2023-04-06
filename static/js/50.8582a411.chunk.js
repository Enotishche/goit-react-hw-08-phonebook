"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{1050:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(9434),a=function(e){return e.contacts.contacts},c=function(e){return e.filter},s=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.error},i=function(e){var n=e.contacts,t=e.filter;if(!t)return n.contacts;var r=t.toLocaleLowerCase();return n.contacts.filter((function(e){var n=e.name,t=e.number,a=n.toLocaleLowerCase(),c=t.toLocaleLowerCase();return a.includes(r)||c.includes(r)}))},l="ContactList_title__9L2pD",u="ContactList_item__bG316",d="ContactList_remove__+YVta",m=t(2791),h=t(926),f=t(184),v=function(){var e=(0,r.v9)(i),n=(0,r.I0)(),t=e.map((function(e){var t=e.name,r=e.number,a=e.id;return(0,f.jsxs)("li",{className:u,children:[t,": ",r,(0,f.jsx)("span",{onClick:function(){return function(e){var t=(0,h.zY)(e);n(t)}(a)},className:d,children:"delete"})]},a)}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h4",{className:l,children:"Contacts"}),(0,f.jsx)("ol",{children:t})]})},x=t(4942),p=t(1413),_=t(9439),j=t(5984),b="FormAddContact_formGroup__rjYFL",C="FormAddContact_btn__N3Fz3",N={name:"",number:""},g=function(){var e=(0,m.useState)(N),n=(0,_.Z)(e,2),t=n[0],c=n[1],s=t.name,o=t.number,i=(0,r.v9)(a),l=(0,r.I0)(),u=(0,j.x0)(),d=(0,j.x0)(),v=function(e){var n=e.target,t=n.name,r=n.value;c((function(e){return(0,p.Z)((0,p.Z)({},e),{},(0,x.Z)({},t,r))}))};return(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i.find((function(e){return e.name.toLowerCase()===s.toLowerCase()||e.number===o})))return alert("".concat(s," and ").concat(o," is already in contacts list."));l((0,h.uK)({name:s,number:o})),c(N)},children:[(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("label",{htmlFor:u,children:"Name: "}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:u,value:s,onChange:v,className:"field",placeholder:"Name"})]}),(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("label",{htmlFor:d,children:"Number: "}),(0,f.jsx)("input",{id:d,name:"number",value:o,onChange:v,className:"field",placeholder:"Number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{className:C,children:"Add contact"})]})},L="Filter_filter__ESc4Y",w=t(2713),F=function(){var e=(0,r.I0)(),n=(0,r.v9)(c);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Find contacts by name"}),(0,f.jsx)("input",{type:"text",name:"filter",onChange:function(n){e((0,w.T)(n.currentTarget.value))},value:n,className:L,placeholder:"Filter"})]})},k="Phonebook_container__u4h5I",y="Phonebook_title__ipARL",A="Phonebook_contactBlock__4Uzwi",Z=t(8809),z=function(){var e=(0,r.I0)(),n=(0,r.v9)(i),t=(0,r.v9)(s),a=(0,r.v9)(o);return(0,m.useEffect)((function(){e((0,h.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[a&&alert("something wrong! PHONEBOOK:  ".concat(a)),t?(0,f.jsx)(Z.Z,{}):(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)("h2",{className:y,children:"Contacts"}),(0,f.jsxs)("div",{className:A,children:[(0,f.jsx)("div",{children:(0,f.jsx)(g,{})}),(0,f.jsx)(F,{}),(0,f.jsx)(v,{}),!n.length&&(0,f.jsx)("p",{children:"There are no contacts yet"})]})]})]})};function I(){return(0,f.jsx)("div",{children:(0,f.jsx)(z,{})})}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=50.8582a411.chunk.js.map