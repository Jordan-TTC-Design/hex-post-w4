(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f96dae"],{"0da8":function(t,e,a){"use strict";a("f423")},"1ff3":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={class:"container"},o={class:"row"},s={class:"col-8"},r=Object(c["createStaticVNode"])('<div class="personBox mb-3" data-v-01e2bba2><div class="personImgBox" data-v-01e2bba2><img class="personImgBox__img" src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt="用戶照片" data-v-01e2bba2></div><div class="flex-grow-1 d-flex justify-content-between align-items-center p-3" data-v-01e2bba2><div data-v-01e2bba2><p class="text--title" data-v-01e2bba2>阿爾敏</p><p class="text--subTxt" data-v-01e2bba2>9898人追蹤</p></div><button type="button" class="btn btn-primary" data-v-01e2bba2>追蹤</button></div></div><div class="d-flex gap-3 mb-4" data-v-01e2bba2><select class="selectTool form-select" data-v-01e2bba2><option selected value="最新" data-v-01e2bba2>最新貼文</option></select><div class="input-group inputToolContainer flex-grow-1" data-v-01e2bba2><input type="text" class="form-control inputTool" placeholder="搜尋貼文" aria-label="Username" aria-describedby="basic-addon1" data-v-01e2bba2><button class="btn btn-primary" type="button" data-v-01e2bba2><i class="bi bi-search text-white" data-v-01e2bba2></i></button></div></div>',2),l={class:"d-flex flex-column gap-4"},i={class:"col-4"};function b(t,e,a,b,u,p){var d=Object(c["resolveComponent"])("PostCard"),f=Object(c["resolveComponent"])("DynamicWall");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",s,[r,Object(c["createElementVNode"])("div",l,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(b.postList,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:t._id,"post-item":t},null,8,["post-item"])})),128))])]),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(f)])])])}var u=a("8c2b"),p=a("be2a"),d={components:{PostCard:u["a"],DynamicWall:p["a"]},setup:function(){var t=Object(c["ref"])([{_id:"123",userName:"邊緣小傑",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>搶到想要的 NFT 啦！ya~~</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:"https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80"},{_id:"456",userName:"波吉",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>我一定要成為很棒棒的國王</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:""},{_id:"456",userName:"阿爾敏",userImgUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",creatAt:"2022/1/10 12:00",postContent:"<p>各位我有一個計畫</p><p>搶到想要的 NFT 啦！ya~~</p>",postImgUrl:""}]);return{postList:t}}},f=(a("fcbd"),a("6b0d")),m=a.n(f);const x=m()(d,[["render",b],["__scopeId","data-v-01e2bba2"]]);e["default"]=x},3690:function(t,e,a){"use strict";var c=a("be92"),n=Object(c["b"])({id:"statusStore",state:function(){return{isLoading:!1,newPostModel:!1}},getters:{},actions:{}});e["a"]=n},"4e54":function(t,e,a){},"62f2":function(t,e,a){},"8c2b":function(t,e,a){"use strict";a("b0c0");var c=a("7a23"),n={class:"postBox gap-3"},o={class:"userBox gap-3"},s=["src","alt"],r={class:"userBox__title"},l={class:"userBox__subTxt"},i={class:"postBox__content gap-3"},b=["innerHTML"],u=["src","alt"];function p(t,e,a,p,d,f){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("img",{class:"userBox__pic",src:p.userData.user.photo,alt:"".concat(p.userData.user.name,"照片")},null,8,s),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("p",r,Object(c["toDisplayString"])(p.userData.user.name),1),Object(c["createElementVNode"])("p",l,Object(c["toDisplayString"])(t.postItem.creatAt),1)])]),Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",{class:"postBox__content__text",innerHTML:t.postItem.postContent},null,8,b),""!==t.postItem.postImgUrl?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,class:"postBox__content__img",src:t.postItem.postImgUrl,alt:"".concat(t.postItem._id,"貼文")},null,8,u)):Object(c["createCommentVNode"])("",!0)])])}var d=a("f606"),f={props:["post-item"],setup:function(){var t=Object(d["a"])();return{userData:t}}},m=(a("0da8"),a("6b0d")),x=a.n(m);const j=x()(f,[["render",p],["__scopeId","data-v-0139bd96"]]);e["a"]=j},ae0c:function(t,e,a){"use strict";a("4e54")},b0c0:function(t,e,a){var c=a("83ab"),n=a("5e77").EXISTS,o=a("e330"),s=a("9bf2").f,r=Function.prototype,l=o(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=o(i.exec),u="name";c&&!n&&s(r,u,{configurable:!0,get:function(){try{return b(i,l(this))[1]}catch(t){return""}}})},be2a:function(t,e,a){"use strict";a("b0c0");var c=a("7a23"),n=function(t){return Object(c["pushScopeId"])("data-v-42ee2534"),t=t(),Object(c["popScopeId"])(),t},o={class:"dynamic-wall rounded d-flex flex-column gap-2 px-3 py-3"},s=n((function(){return Object(c["createElementVNode"])("p",{class:"text-white"},"張貼動態",-1)})),r=[s],l=["src","alt"],i=n((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-bell"},null,-1)})),b=n((function(){return Object(c["createElementVNode"])("p",null,"追蹤名單",-1)})),u=n((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-hand-thumbs-up"},null,-1)})),p=n((function(){return Object(c["createElementVNode"])("p",null,"我按讚的文章",-1)}));function d(t,e,a,n,s,d){var f=Object(c["resolveComponent"])("RouterLink");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("button",{type:"button",onClick:e[0]||(e[0]=function(t){return n.statusData.newPostModel=!0}),class:"btn--post btn d-flex align-items-center justify-content-center"},r),Object(c["createVNode"])(f,{to:"/my-page",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("img",{class:"userPhoto",src:n.user.photo,alt:n.user.name},null,8,l),Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(n.user.name),1)]})),_:1}),Object(c["createVNode"])(f,{to:"/follow",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[i,b]})),_:1}),Object(c["createVNode"])(f,{to:"/thumb-up",class:"d-flex align-items-center gap-2 py-2"},{default:Object(c["withCtx"])((function(){return[u,p]})),_:1})])}var f=a("f606"),m=a("3690"),x={setup:function(){var t=Object(f["a"])(),e=t.user,a=Object(m["a"])();return{user:e,statusData:a}}},j=(a("ae0c"),a("6b0d")),v=a.n(j);const O=v()(x,[["render",d],["__scopeId","data-v-42ee2534"]]);e["a"]=O},f423:function(t,e,a){},f606:function(t,e,a){"use strict";var c=a("be92"),n=Object(c["b"])({id:"userStore",state:function(){return{user:{name:"Jordan",photo:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}},getters:{},actions:{}});e["a"]=n},fcbd:function(t,e,a){"use strict";a("62f2")}}]);
//# sourceMappingURL=chunk-19f96dae.d99ad1a5.js.map