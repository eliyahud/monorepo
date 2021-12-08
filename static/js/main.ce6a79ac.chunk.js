(this["webpackJsonp@monorepo/frontend"]=this["webpackJsonp@monorepo/frontend"]||[]).push([[0],{311:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),c=n(27),s=n(19),o=n(2),i=n(312),u=(n(202),n(69)),l=(n(450),n(456),n(213)),b=n(342),d=(n(691),n(167)),f=n.n(d),j=n(31);i.a.isMetaMaskInstalled;t.a=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(""),d=Object(s.a)(i,2),p=d[0],m=d[1],h=Object(o.useState)(""),x=Object(s.a)(h,2),O=x[0],g=x[1],v=Object(o.useState)(""),k=Object(s.a)(v,2),N=k[0],y=k[1],w=Object(o.useState)(""),I=Object(s.a)(w,2),T=I[0],P=I[1],C=Object(o.useState)(!1),F=Object(s.a)(C,2),S=F[0],E=F[1],L=Object(b.a)(),A=Object(o.useState)(),q=Object(s.a)(A,2),M=q[0],B=q[1],D=Object(l.d)(M),J=Object(o.useState)(),K=Object(s.a)(J,2),R=K[0],z=K[1],U=Object(l.c)(D.signer,L,42);Object(o.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.ethers.providers.Web3Provider(window.ethereum),e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:n=e.sent,z(n[0]),B(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(e){y(e),setTimeout((function(){y("")}),3500)},_=function(e){P(e),setTimeout((function(){P("")}),3500)},G=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("createPIN"),""!==n&&""!==p&&""!==O){e.next=6;break}return _("Error: null data"),e.abrupt("return");case 6:if(f.a.isAlpha(n)&&f.a.isAlpha(p)){e.next=11;break}return _("Error: invalid name or surname"),e.abrupt("return");case 11:if(f.a.isEmail(O)){e.next=14;break}return _("Error: invalid email"),e.abrupt("return");case 14:return E(!0),e.prev=15,console.log("Minting..."),e.next=19,U.PersonalIdentityToken.create(n,p,O);case 19:console.log("...OK"),U.PersonalIdentityToken.on("IdentityTokenAssigned",(function(e){console.log(e),W("Token created for user "+e)})),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(15),console.log("...FAIL"),console.error(e.t0),_("Error occurred");case 28:r(""),m(""),g(""),E(!1);case 32:case"end":return e.stop()}}),e,null,[[15,23]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,U.PersonalIdentityToken.get(R);case 4:return t=e.sent,e.next=7,U.PersonalIdentityToken.tokenURI(t);case 7:return n=e.sent,e.next=10,fetch("https://ipfs.io/ipfs/".concat(n));case 10:return r=e.sent,e.next=13,r.json();case 13:return c=e.sent,e.next=16,fetch("https://legalattorney.xyz/get/"+c.data);case 16:return s=e.sent,e.next=19,s.json();case 19:o=e.sent,W("Token was read and contains data regarding: "+o.entityName),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(1),console.log("...FAIL"),console.error(e.t0),_("Error occurred");case 28:E(!1);case 29:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,console.log("Deleting..."),e.next=5,U.PersonalIdentityToken.remove();case 5:console.log("...OK"),W("Token was deleted"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("...FAIL"),console.error(e.t0),_("Error!");case 14:E(!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("span",{className:"form-signin",children:[Object(j.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Personal Identity Token"}),N.length>0&&Object(j.jsx)("div",{className:"alert alert-primary",role:"alert",children:N}),T.length>0&&Object(j.jsx)("div",{className:"alert alert-danger",role:"alert",children:T}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"firstName",onChange:function(e){return r(e.target.value)},required:!0})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"lastName",onChange:function(e){return m(e.target.value)},required:!0})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"email",onChange:function(e){return g(e.target.value)},required:!0})}),S&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("button",{className:"btn btn-lg btn-primary btn-block",children:[Object(j.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"false"}),"\xa0Loading..."]}),Object(j.jsxs)("button",{className:"btn btn-lg btn-success btn-block",children:[Object(j.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"false"}),"\xa0Loading..."]}),Object(j.jsxs)("button",{className:"btn btn-lg btn-danger btn-block",children:[Object(j.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"false"}),"\xa0Loading..."]})]}),!S&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(){return G()},children:"Create Personal Identity NFT"}),Object(j.jsx)("button",{className:"btn btn-lg btn-success btn-block",onClick:function(){return H()},children:"Read Personal Identity NFT"}),Object(j.jsx)("button",{className:"btn btn-lg btn-danger btn-block",onClick:function(){return Q()},children:"Delete Personal Identity NFT"})]}),Object(j.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"Personal Identity Token - made for ChainLink fall hack"})]})})}}).call(this,n(21).Buffer)},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),c=n(27),s=n(19),o=n(2),i=n.e(4).then(n.t.bind(null,786,3)),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,i;case 3:if(e.t1=t=e.sent.default,e.t0=null!==e.t1,!e.t0){e.next=7;break}e.t0=void 0!==t;case 7:if(!e.t0){e.next=11;break}e.t2=t,e.next=12;break;case 11:e.t2={};case 12:return n.deployedContracts=e.t2,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}},354:function(e,t,n){},367:function(e,t){},369:function(e,t){},381:function(e,t){},382:function(e,t){},403:function(e,t){},409:function(e,t){},412:function(e,t){},414:function(e,t){},427:function(e,t){},429:function(e,t){},441:function(e,t){},448:function(e,t){},451:function(e,t){},508:function(e,t){},669:function(e,t){},691:function(e,t,n){"use strict";n(0),n(20),n(27),n(347),n(319),n(69).ethers},778:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(82),s=n.n(c),o=(n(354),n(311)),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,787)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},u=n(31);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{})}),document.getElementById("root")),i()}},[[778,1,2]]]);
//# sourceMappingURL=main.ce6a79ac.chunk.js.map