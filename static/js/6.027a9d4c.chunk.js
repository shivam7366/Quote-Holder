(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{45:function(e,t,c){e.exports={card:"Card_card__FKrug"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__2-YOt",loading:"QuoteForm_loading__dBuOU",control:"QuoteForm_control__PNL3E",actions:"QuoteForm_actions__2ShCf"}},55:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(0),r=c(37),s=c(45),a=c.n(s),u=c(1),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(o.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],d=Object(o.useRef)(),b=Object(o.useRef)();return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)(n.a,{when:s,message:function(e){return"Are you sure to want to leave? Your entered data will be lost. "}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,r=Object(n.h)();Object(o.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.027a9d4c.chunk.js.map