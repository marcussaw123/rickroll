var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function h(t){p=t}const m=[],g=[],$=[],b=[],y=Promise.resolve();let k=!1;function v(t){$.push(t)}let x=!1;const _=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];h(n),C(n.$$)}for(h(null),m.length=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];_.has(n)||(_.add(n),n())}$.length=0}while(m.length);for(;b.length;)b.pop()();k=!1,x=!1,_.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;function M(t,n){-1===t.$$.dirty[0]&&(m.push(t),k||(k=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(r,s,i,l,a,f,d=[-1]){const m=p;h(r);const g=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let $=!1;if(g.ctx=i?i(r,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),$&&M(r,t)),n})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();s.intro&&((b=r.$$.fragment)&&b.i&&(E.delete(b),b.i(y))),function(t,e,r,s){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(e,r),s||v((()=>{const e=u.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(v)}(r,s.target,s.anchor,s.customElement),w()}var b,y;h(m)}function A(n){let e,o,c;return{c(){e=l("button"),e.textContent="Ok last one...",d(e,"class","svelte-1dfpha6")},m(t,r){i(t,e,r),o||(c=f(e,"click",n[9]),o=!0)},p:t,d(t){t&&u(e),o=!1,c()}}}function N(n){let e,o,c;return{c(){e=l("button"),e.textContent="Click meeee",d(e,"class","svelte-1dfpha6")},m(t,r){i(t,e,r),o||(c=f(e,"click",n[8]),o=!0)},p:t,d(t){t&&u(e),o=!1,c()}}}function j(n){let e,o,c;return{c(){e=l("button"),e.textContent="Not a troll lol click me",d(e,"class","svelte-1dfpha6")},m(t,r){i(t,e,r),o||(c=f(e,"click",n[7]),o=!0)},p:t,d(t){t&&u(e),o=!1,c()}}}function L(n){let e,o,c;return{c(){e=l("button"),e.textContent="Click Me Lol",d(e,"class","svelte-1dfpha6")},m(t,r){i(t,e,r),o||(c=f(e,"click",n[6]),o=!0)},p:t,d(t){t&&u(e),o=!1,c()}}}function B(n){let e,o,c;return{c(){e=l("button"),e.textContent="Click Me",d(e,"class","svelte-1dfpha6")},m(t,r){i(t,e,r),o||(c=f(e,"click",n[5]),o=!0)},p:t,d(t){t&&u(e),o=!1,c()}}}function Q(n){let e,o,c,r,f,p,h,m,g,$;function b(t,n){return t[0]?t[1]?t[2]?t[3]?t[4]?void 0:A:N:j:L:B}let y=b(n),k=y&&y(n);return{c(){e=l("link"),o=a(),c=l("link"),r=a(),f=l("main"),p=l("img"),m=a(),g=l("h1"),g.textContent="Made By Marcus.",$=a(),k&&k.c(),d(e,"rel","preconnect"),d(e,"href","https://fonts.gstatic.com"),d(c,"href","https://fonts.googleapis.com/css2?family=Train+One&display=swap"),d(c,"rel","stylesheet"),p.src!==(h="https://media.discordapp.net/attachments/820235631049441291/821542212256923688/image0.png")&&d(p,"src","https://media.discordapp.net/attachments/820235631049441291/821542212256923688/image0.png"),d(p,"alt","idk"),d(p,"width","80"),d(p,"height",""),d(g,"class","svelte-1dfpha6"),d(f,"class","svelte-1dfpha6")},m(t,n){i(t,e,n),i(t,o,n),i(t,c,n),i(t,r,n),i(t,f,n),s(f,p),s(f,m),s(f,g),s(f,$),k&&k.m(f,null)},p(t,[n]){y===(y=b(t))&&k?k.p(t,n):(k&&k.d(1),k=y&&y(t),k&&(k.c(),k.m(f,null)))},i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(c),t&&u(r),t&&u(f),k&&k.d()}}}function S(t,n,e){let o=!1,c=!1,r=!1,s=!1,i=!1;return[o,c,r,s,i,function(){e(0,o=!0)},function(){e(1,c=!0)},function(){e(2,r=!0)},function(){e(3,s=!0)},function(){e(4,i=!0),window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,S,Q,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
