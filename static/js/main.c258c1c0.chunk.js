(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),u=n(4),o=n.n(u),l=(n(14),n(5)),h=n(6),s=n(2),b=n(8),r=n(7),d=(n(15),function(e){Object(b.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={value:"",recoms:[]},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(){fetch("./movie.json").then((function(e){console.log(e.Inception),alert(e.Inception.name)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name:",Object(a.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(a.jsx)("input",{type:"submit",value:"Submit",onClick:this.handleSubmit.bind(this)})]})}}]),n}(c.a.Component)),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),i(e),c(e),u(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.c258c1c0.chunk.js.map