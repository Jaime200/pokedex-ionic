"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(y,a,i)=>{i.r(a),i.d(a,{ion_input_password_toggle:()=>s});var r=i(9672),l=i(4929),u=i(333),d=i(3992),p=i(3664);const s=class{constructor(n){(0,r.r)(this,n),this.togglePasswordVisibility=()=>{const{inputElRef:e}=this;e&&(e.type="text"===e.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(n){"text"===n||"password"===n||(0,l.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${n}" is not compatible.`,this.el)}connectedCallback(){const{el:n}=this,e=this.inputElRef=n.closest("ion-input");e?this.type=e.type:(0,l.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",n)}disconnectedCallback(){this.inputElRef=null}render(){var n,e;const{color:c,type:E}=this,f=(0,p.b)(this),P=null!==(n=this.showIcon)&&void 0!==n?n:d.x,I=null!==(e=this.hideIcon)&&void 0!==e?e:d.y,g="text"===E;return(0,r.h)(r.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(c,{[f]:!0})},(0,r.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:f,color:c,fill:"clear",shape:"round","aria-checked":g?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:g?I:P})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};s.style={ios:"",md:""}},333:(y,a,i)=>{i.d(a,{c:()=>u,g:()=>p,h:()=>l,o:()=>_});var r=i(467);const l=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(o).forEach(s=>t[s]=!0),t},h=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,r.A)(function*(t,s,n,e){if(null!=t&&"#"!==t[0]&&!h.test(t)){const c=document.querySelector("ion-router");if(c)return null!=s&&s.preventDefault(),c.push(t,n,e)}return!1});return function(s,n,e,c){return o.apply(this,arguments)}}()}}]);