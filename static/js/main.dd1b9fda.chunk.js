(this["webpackJsonp@kyc-app/frontend"]=this["webpackJsonp@kyc-app/frontend"]||[]).push([[0],{290:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),c=n(25),s=n(22),o=n(2),i=n(291),u=n(194),f=n(67),l=(n(431),n(293)),p=n(205),d=n(323),h=n(299),b=n(53);i.a.isMetaMaskInstalled;t.a=function(){var t=Object(o.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1],x=Object(d.a)(),m=Object(o.useState)(),g=Object(s.a)(m,2),v=g[0],O=g[1],j=Object(p.d)(v),k=Object(p.c)(j.signer,x,4),w=Object(h.a)(j.signer);Object(o.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.ethers.providers.Web3Provider(window.ethereum),e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:e.sent,O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=function(e){i(e),setTimeout((function(){i("")}),3500)},N=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:return n=e.sent,e.next=5,window.ethereum.request({method:"eth_getEncryptionPublicKey",params:[n[0]]});case 5:return r=e.sent,c=I(Object(u.encrypt)(r,{data:t},"x25519-xsalsa20-poly1305")),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:return n=e.sent,e.next=5,window.ethereum.request({method:"eth_decrypt",params:[t,n[0]]});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(t){return f.ethers.utils.hexlify(e.from(JSON.stringify(t)))},S=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({data:t,version:"v1"}),r=Object(l.create)(new URL("https://ipfs.infura.io:5001/api/v0")),e.next=4,r.add(n);case 4:return c=e.sent,console.log("[uploadToIPFS] cid",c.path),e.abrupt("return",c.path);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("createPIN"),""!==(t=prompt("KYC Provider\nINPUT DATA\nPlease enter your full name","John Doe"))){e.next=5;break}return i("Error: null data"),e.abrupt("return");case 5:return e.prev=5,console.log("Encrypting..."),e.next=9,N(t);case 9:return n=e.sent,console.log("Uploading..."),e.next=13,S(n);case 13:return r=e.sent,console.log("Minting..."),e.next=17,w(k.NFTManager.create(r));case 17:console.log("...OK"),y("Token created with data:"+t),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(5),console.log("...FAIL"),console.error(e.t0),y("Error occurred");case 26:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.NFTManager.get();case 3:return t=e.sent,e.next=6,k.NFTManager.tokenURI(t);case 6:return n=e.sent,e.next=9,fetch("https://ipfs.io/ipfs/".concat(n));case 9:return r=e.sent,e.next=12,r.json();case 12:return c=e.sent,e.next=15,T(c.data);case 15:s=e.sent,y("Token was read and contains data: "+s),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("...FAIL"),console.error(e.t0),y("Error occurred");case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Deleting..."),e.next=4,w(k.NFTManager.remove());case 4:console.log("...OK"),y("Token was deleted"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("...FAIL"),console.error(e.t0),y("Error!");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("span",{className:"form-signin",children:[Object(b.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"KYC Token"}),r.length>0&&Object(b.jsx)("div",{className:"alert alert-primary",role:"alert",children:r}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(){return P()},children:"Create Personal Identity NFT"}),Object(b.jsx)("button",{className:"btn btn-lg btn-success btn-block",onClick:function(){return F()},children:"Read Personal Identity NFT"}),Object(b.jsx)("button",{className:"btn btn-lg btn-danger btn-block",onClick:function(){return J()},children:"Delete Personal Identity NFT"}),Object(b.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"Personal Identity Token"})]})})}}).call(this,n(19).Buffer)},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),c=n(18),s=n(25),o=n(328),i=n(300),u=n(67).ethers,f={},l=function(e,t,n){if("undefined"!==typeof e)return function(){var r=Object(s.a)(a.a.mark((function r(l,p){var d,h,b,x,m,g,v,O,j,k,w,y,N,T;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!0!==u.Signer.isSigner(e)){r.next=11;break}if(b=e.provider,d=e,r.t0=e.provider,!r.t0){r.next=8;break}return r.next=7,e.provider.getNetwork();case 7:r.t0=r.sent;case 8:h=r.t0,r.next=17;break;case 11:if(!e._isProvider){r.next=17;break}return b=e,d=e.getSigner(),r.next=16,e.getNetwork();case 16:h=r.sent;case 17:if(console.log("network",h),null,m=null,x={dappId:"0b58206a-f3c0-4701-a62f-73c7243e8c77",system:"ethereum",networkId:h.chainId,transactionHandler:function(e){var t=f[e.transaction.hash];"function"===typeof t&&t(e.transaction)}},m=Object(i.a)(x),g="",h.name&&h.chainId>1&&(g=h.name+"."),v="https://"+g+"etherscan.io/tx/",100===h.chainId&&(v="https://blockscout.com/poa/xdai/tx/"),r.prev=26,!(l instanceof Promise)){r.next=34;break}return r.next=31,l;case 31:O=r.sent,r.next=40;break;case 34:return l.gasPrice||(l.gasPrice=t||u.utils.parseUnits("4.1","gwei")),l.gasLimit||(l.gasLimit=u.utils.hexlify(12e4)),r.next=39,d.sendTransaction(l);case 39:O=r.sent;case 40:if(p&&(f[O.hash]=p),!(m&&[1,3,4,5,42,100].indexOf(h.chainId)>=0)){r.next=47;break}j=m.hash(O.hash),j.emitter.on("all",(function(e){return{onclick:function(){return window.open((n||v)+e.hash)}}})),r.next=53;break;case 47:if(o.a.info({message:"Local Transaction Sent",description:O.hash,placement:"bottomRight"}),!p){r.next=53;break}return r.next=51,l;case 51:k=r.sent,w=setInterval(Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CHECK IN ON THE TX",k,b),e.next=3,b.getTransactionReceipt(k.hash);case 3:(t=e.sent)&&t.confirmations&&(p(Object(c.a)(Object(c.a)({},k),t)),clearInterval(w));case 5:case"end":return e.stop()}}),e)}))),500);case 53:if("function"!==typeof O.wait){r.next=56;break}return r.next=56,O.wait();case 56:return r.abrupt("return",O);case 59:r.prev=59,r.t1=r.catch(26),y=r.t1.data&&r.t1.data.message?r.t1.data.message:r.t1.error&&JSON.parse(JSON.stringify(r.t1.error)).body?JSON.parse(JSON.parse(JSON.stringify(r.t1.error)).body).error.message:r.t1.data?r.t1.data:JSON.stringify(r.t1),!r.t1.error&&r.t1.message&&(y=r.t1.message),console.log("Attempt to clean up:",y);try{(N=JSON.parse(y))&&N.body&&(T=JSON.parse(N.body))&&T.error&&T.error.message&&(y=T.error.message)}catch(I){}o.a.error({message:"Transaction Error",description:y}),p&&"function"===typeof p&&p(r.t1);case 68:case"end":return r.stop()}}),r,null,[[26,59]])})));return function(e,t){return r.apply(this,arguments)}}()}},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r),c=n(25),s=n(22),o=n(2),i=n.e(4).then(n.t.bind(null,685,3)),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,i;case 3:if(e.t1=t=e.sent.default,e.t0=null!==e.t1,!e.t0){e.next=7;break}e.t0=void 0!==t;case 7:if(!e.t0){e.next=11;break}e.t2=t,e.next=12;break;case 11:e.t2={};case 12:return n.deployedContracts=e.t2,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}},335:function(e,t,n){},348:function(e,t){},350:function(e,t){},362:function(e,t){},363:function(e,t){},384:function(e,t){},390:function(e,t){},393:function(e,t){},395:function(e,t){},408:function(e,t){},410:function(e,t){},422:function(e,t){},429:function(e,t){},432:function(e,t){},488:function(e,t){},649:function(e,t){},677:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(80),s=n.n(c),o=(n(335),n(290)),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,686)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},u=n(53);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{})}),document.getElementById("root")),i()}},[[677,1,2]]]);
//# sourceMappingURL=main.dd1b9fda.chunk.js.map