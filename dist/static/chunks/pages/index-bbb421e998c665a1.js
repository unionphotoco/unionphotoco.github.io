(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,o){"use strict";var n=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(2648).Z,r=o(7273).Z,l=a(o(7294)),u=o(4957),i=o(7995),c=o(647),s=o(1992),f=o(639),d=o(4019),p=o(227),h={};function v(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;h[t+"%"+o+(a?"%"+a:"")]=!0}}var x=l.default.forwardRef((function(e,t){var o,a=e.href,x=e.as,y=e.children,g=e.prefetch,m=e.passHref,b=e.replace,C=e.shallow,j=e.scroll,_=e.locale,L=e.onClick,R=e.onMouseEnter,w=e.onTouchStart,E=e.legacyBehavior,P=void 0===E?!0!==Boolean(!1):E,M=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,!P||"string"!==typeof o&&"number"!==typeof o||(o=l.default.createElement("a",null,o));var k=!1!==g,T=l.default.useContext(c.RouterContext),B=l.default.useContext(s.AppRouterContext);B&&(T=B);var S,O=l.default.useMemo((function(){var e=u.resolveHref(T,a,!0),t=n(e,2),o=t[0],r=t[1];return{href:o,as:x?u.resolveHref(T,x):r||o}}),[T,a,x]),N=O.href,U=O.as,K=l.default.useRef(N),A=l.default.useRef(U);P&&(S=l.default.Children.only(o));var H=P?S&&"object"===typeof S&&S.ref:t,D=f.useIntersection({rootMargin:"200px"}),Z=n(D,3),z=Z[0],I=Z[1],W=Z[2],X=l.default.useCallback((function(e){A.current===U&&K.current===N||(W(),A.current=U,K.current=N),z(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[U,H,N,W,z]);l.default.useEffect((function(){var e=I&&k&&u.isLocalURL(N),t="undefined"!==typeof _?_:T&&T.locale,o=h[N+"%"+U+(t?"%"+t:"")];e&&!o&&v(T,N,U,{locale:t})}),[U,N,I,_,k,T]);var G={ref:X,onClick:function(e){P||"function"!==typeof L||L(e),P&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,o,n,a,r,i,c,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(o)){e.preventDefault();var d=function(){"beforePopState"in t?t[a?"replace":"push"](o,n,{shallow:r,locale:c,scroll:i}):t[a?"replace":"push"](o,{forceOptimisticNavigation:!f})};s?l.default.startTransition(d):d()}}(e,T,N,U,b,C,j,_,Boolean(B),k)},onMouseEnter:function(e){P||"function"!==typeof R||R(e),P&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),!k&&B||u.isLocalURL(N)&&v(T,N,U,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof w||w(e),P&&S.props&&"function"===typeof S.props.onTouchStart&&S.props.onTouchStart(e),!k&&B||u.isLocalURL(N)&&v(T,N,U,{priority:!0})}};if(!P||m||"a"===S.type&&!("href"in S.props)){var q="undefined"!==typeof _?_:T&&T.locale,F=T&&T.isLocaleDomain&&d.getDomainLocale(U,q,T.locales,T.domainLocales);G.href=F||p.addBasePath(i.addLocale(U,q,T&&T.defaultLocale))}return P?l.default.cloneElement(S,G):l.default.createElement("a",Object.assign({},M,G),o)}));t.default=x,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),a=n.default.createContext(null);t.AppRouterContext=a;var r=n.default.createContext(null);t.LayoutRouterContext=r;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},2119:function(e,t,o){"use strict";o.r(t);o(7294);var n=o(2962),a=o(1664),r=o.n(a),l=o(2067),u=o(9413),i=o(1469),c=o(8395),s=o(7741),f=o(4094),d=o(5893),p=function(){var e=(0,i.Sx)({base:"100%",sm:"auto"});return(0,d.jsx)(u.xu,{pos:"relative",overflow:"hidden",w:"full",height:"100vh",textAlign:"center",bg:(0,c.ff)("#EBE7DE","gray.700"),bgImage:"/images/glamphotobooth.jpg",bgSize:"cover",bgPosition:"bottom",children:(0,d.jsx)(u.xu,{marginTop:["33vh","50vh"],marginLeft:"auto",marginRight:"auto",children:(0,d.jsx)(u.Kq,{direction:"row",spacing:4,children:(0,d.jsxs)(u.W2,{maxW:"container.sm",bgImage:"/images/whitebg.svg",p:"2rem",children:[(0,d.jsx)(u.X6,{mx:"auto",as:"h1",textAlign:"center","data-aos":"fade-up",maxW:"container.lg",mb:"4",children:"Photo Booth Rentals"}),(0,d.jsx)(u.xv,{mb:"4",children:"Union Photo Co. is a photo booth rental company serving Snohomish County and King County."}),(0,d.jsxs)(s.hE,{variant:"outline",spacing:"6",width:e,children:[(0,d.jsx)(r(),{href:"/photo-booth-rentals",passHref:!0,children:(0,d.jsx)(s.zx,{colorScheme:"white",variant:"solid",as:"a",border:"0",borderRadius:"0",children:"Learn More"})}),(0,d.jsx)(r(),{href:f.Z.bookNow,passHref:!0,children:(0,d.jsx)(s.zx,{colorScheme:"black",variant:"solid",as:"a",borderRadius:"0",children:"Book Now"})})]})]})})})})};t.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.PB,{title:"Bellevue Photo Booth Rentals",description:"Union Photo Co. is a photo booth rental company serving Snohomish County and King County. Book now 833.360.3679."}),(0,d.jsx)(l.m$.main,{children:(0,d.jsx)(u.gC,{align:"stretch",spacing:20,children:(0,d.jsx)(p,{})})})]})}},8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(2119)}])},1664:function(e,t,o){e.exports=o(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);