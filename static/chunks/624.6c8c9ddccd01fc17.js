(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{3887:function(e,t,o){"use strict";o.d(t,{Ee:function(){return u}});var r=o(7294),n=o(2067),a=o(4040);function l(e,t=[]){const o=Object.assign({},e);for(const r of t)r in o&&delete o[r];return o}var c=(0,n.Gp)((function(e,t){const{htmlWidth:o,htmlHeight:n,alt:a,...l}=e;return r.createElement("img",{width:o,height:n,ref:t,alt:a,...l})}));c.displayName="NativeImage";var u=(0,n.Gp)((function(e,t){const{fallbackSrc:o,fallback:u,src:f,srcSet:i,align:s,fit:d,loading:p,ignoreFallback:v,crossOrigin:y,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:h,...m}=e,b=null!=p||v||!(void 0!==o||void 0!==u),C=function(e){const{loading:t,src:o,srcSet:n,onLoad:l,onError:c,crossOrigin:u,sizes:f,ignoreFallback:i}=e,[s,d]=(0,r.useState)("pending");(0,r.useEffect)((()=>{d(o?"loading":"pending")}),[o]);const p=(0,r.useRef)(),v=(0,r.useCallback)((()=>{if(!o)return;y();const e=new Image;e.src=o,u&&(e.crossOrigin=u),n&&(e.srcset=n),f&&(e.sizes=f),t&&(e.loading=t),e.onload=e=>{y(),d("loaded"),null==l||l(e)},e.onerror=e=>{y(),d("failed"),null==c||c(e)},p.current=e}),[o,u,n,f,l,c,t]),y=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.G)((()=>{if(!i)return"loading"===s&&v(),()=>{y()}}),[s,v,i]),i?"loaded":s}({...e,ignoreFallback:b}),E=((e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t)(C,g),L={ref:t,objectFit:d,objectPosition:s,...b?m:l(m,["onError","onLoad"])};return E?u||r.createElement(n.m$.img,{as:c,className:"chakra-image__placeholder",src:o,...L}):r.createElement(n.m$.img,{as:c,src:f,srcSet:i,crossOrigin:y,loading:p,referrerPolicy:h,className:"chakra-image",...L})}));u.displayName="Image";(0,n.Gp)(((e,t)=>r.createElement(n.m$.img,{ref:t,as:c,className:"chakra-image",...e})))},4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,o){"use strict";var r=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,a=o(7273).Z,l=n(o(7294)),c=o(4957),u=o(7995),f=o(647),i=o(1992),s=o(639),d=o(4019),p=o(227),v={};function y(e,t,o,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,r)).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+o+(n?"%"+n:"")]=!0}}var g=l.default.forwardRef((function(e,t){var o,n=e.href,g=e.as,h=e.children,m=e.prefetch,b=e.passHref,C=e.replace,E=e.shallow,L=e.scroll,x=e.locale,_=e.onClick,k=e.onMouseEnter,R=e.onTouchStart,O=e.legacyBehavior,j=void 0===O?!0!==Boolean(!1):O,M=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=h,!j||"string"!==typeof o&&"number"!==typeof o||(o=l.default.createElement("a",null,o));var P=!1!==m,S=l.default.useContext(f.RouterContext),N=l.default.useContext(i.AppRouterContext);N&&(S=N);var T,w=l.default.useMemo((function(){var e=c.resolveHref(S,n,!0),t=r(e,2),o=t[0],a=t[1];return{href:o,as:g?c.resolveHref(S,g):a||o}}),[S,n,g]),G=w.href,U=w.as,B=l.default.useRef(G),H=l.default.useRef(U);j&&(T=l.default.Children.only(o));var A=j?T&&"object"===typeof T&&T.ref:t,D=s.useIntersection({rootMargin:"200px"}),F=r(D,3),I=F[0],K=F[1],Z=F[2],$=l.default.useCallback((function(e){H.current===U&&B.current===G||(Z(),H.current=U,B.current=G),I(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[U,A,G,Z,I]);l.default.useEffect((function(){var e=K&&P&&c.isLocalURL(G),t="undefined"!==typeof x?x:S&&S.locale,o=v[G+"%"+U+(t?"%"+t:"")];e&&!o&&y(S,G,U,{locale:t})}),[U,G,K,x,P,S]);var z={ref:$,onClick:function(e){j||"function"!==typeof _||_(e),j&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,a,u,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(o)){e.preventDefault();var d=function(){"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:a,locale:f,scroll:u}):t[n?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(d):d()}}(e,S,G,U,C,E,L,x,Boolean(N),P)},onMouseEnter:function(e){j||"function"!==typeof k||k(e),j&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!P&&N||c.isLocalURL(G)&&y(S,G,U,{priority:!0})},onTouchStart:function(e){j||"function"!==typeof R||R(e),j&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!P&&N||c.isLocalURL(G)&&y(S,G,U,{priority:!0})}};if(!j||b||"a"===T.type&&!("href"in T.props)){var W="undefined"!==typeof x?x:S&&S.locale,q=S&&S.isLocaleDomain&&d.getDomainLocale(U,W,S.locales,S.domainLocales);z.href=q||p.addBasePath(u.addLocale(U,W,S&&S.defaultLocale))}return j?l.default.cloneElement(T,z):l.default.createElement("a",Object.assign({},M,z),o)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(2648).Z)(o(7294)),n=r.default.createContext(null);t.AppRouterContext=n;var a=r.default.createContext(null);t.LayoutRouterContext=a;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var c=r.default.createContext(null);t.TemplateContext=c},1664:function(e,t,o){e.exports=o(7942)},1163:function(e,t,o){e.exports=o(9898)}}]);