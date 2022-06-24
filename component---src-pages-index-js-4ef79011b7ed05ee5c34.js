"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,i=0;i<e.length;i++){var n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return q},_:function(){return c},a:function(){return s},b:function(){return l},g:function(){return d},h:function(){return o}});var r=a(7294),i=(a(4811),a(5697)),n=a.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function d(e,t,a,r,i,n,c,o){var l={};n&&(l.backgroundColor=n,"fixed"===a?(l.width=r,l.height=i,l.backgroundColor=n,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),o&&(l.objectPosition=o);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}var u,p=["children"],m=function(e){var t=e.layout,a=e.width,i=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=c(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,i=e.loading,n=e.alt,o=void 0===n?"":n,l=e.shouldLoad,d=c(e,f);return r.createElement("img",s({},d,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:o}))},v=function(e){var t=e.fallback,a=e.sources,i=void 0===a?[]:a,n=e.shouldLoad,o=void 0===n||n,l=c(e,h),d=l.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,s({},l,t,{sizes:d,shouldLoad:o}));return i.length?r.createElement("picture",null,i.map((function(e){var t=e.media,a=e.srcSet,i=e.type;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:d})})),u):u};y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=c(e,b);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,S=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:n().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],T=new Set,_=function(e){var t=e.as,i=void 0===t?"div":t,n=e.image,l=e.style,d=e.backgroundColor,u=e.className,p=e.class,m=e.onStartLoad,g=e.onLoad,f=e.onError,h=c(e,j),y=n.width,v=n.height,b=n.layout,w=function(e,t,a){var r={},i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),E=w.style,S=w.className,k=c(w,x),_=(0,r.useRef)(),N=(0,r.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);p&&(u=p);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=_.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(N)):L&&T.has(N)?void 0:(C.then((function(a){var r=a.renderImageToString,i=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=r(s({isLoading:!0,isLoaded:T.has(N),image:n},h)),T.has(N)||(e=requestAnimationFrame((function(){_.current&&(t=i(_.current,N,T,l,m,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[n]),(0,r.useLayoutEffect)((function(){T.has(N)&&L&&(_.current.innerHTML=L(s({isLoading:T.has(N),isLoaded:T.has(N),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(i,s({},k,{style:s({},E,l,{backgroundColor:d}),className:S+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},N=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));N.propTypes=k,N.displayName="GatsbyImage";var I,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:S,width:z,height:z,sizes:n().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(I=N,function(e){var t=e.src,a=e.__imageData,i=e.__error,n=c(e,O);return i&&console.warn(i),a?r.createElement(I,s({image:a},n)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=W},6558:function(e,t,a){a.r(t);var r=a(7294),i=a(1597),n=a(7059),s=a(5641),c=a(262);t.default=function(){return r.createElement(s.Z,null,r.createElement(c.Z,{title:"Gil Wanders - Portfolio"}),r.createElement("div",{id:"main-content",className:"content-container"},r.createElement(i.Link,{to:"music"},r.createElement("div",{style:{display:"grid"}},r.createElement(n.S,{style:{gridArea:"1/1",height:"100vh",width:"50vw"},layout:"fullWidth",alt:"",src:"../images/jam.jpeg",formats:["auto","webp","avif"],__imageData:a(4063)}),r.createElement("div",{className:"content-card",style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid"}},r.createElement("span",{className:"card-header"},"Music")))),r.createElement(i.Link,{to:"photography"},r.createElement("div",{style:{display:"grid"}},r.createElement(n.S,{style:{gridArea:"1/1",height:"100vh",width:"50vw"},layout:"fullWidth",alt:"",src:"../images/camera.jpeg",formats:["auto","webp","avif"],__imageData:a(7641)}),r.createElement("div",{className:"content-card",style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid"}},r.createElement("span",{className:"card-header"},"Photography"))))))}},4063:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#587878","images":{"fallback":{"src":"/static/f6b13bce519197861b913268c16725c0/68d35/jam.jpg","srcSet":"/static/f6b13bce519197861b913268c16725c0/4423a/jam.jpg 750w,\\n/static/f6b13bce519197861b913268c16725c0/68d35/jam.jpg 1080w","sizes":"100vw"},"sources":[{"srcSet":"/static/f6b13bce519197861b913268c16725c0/c6694/jam.avif 750w,\\n/static/f6b13bce519197861b913268c16725c0/4aade/jam.avif 1080w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/f6b13bce519197861b913268c16725c0/3131c/jam.webp 750w,\\n/static/f6b13bce519197861b913268c16725c0/017df/jam.webp 1080w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.25}')},7641:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e9f70a1ecd8533fbda95dc6e0344d109/c3cbe/camera.jpg","srcSet":"/static/e9f70a1ecd8533fbda95dc6e0344d109/1ab19/camera.jpg 750w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/a0f81/camera.jpg 1080w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/54705/camera.jpg 1366w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/c3cbe/camera.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/e9f70a1ecd8533fbda95dc6e0344d109/33ade/camera.avif 750w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/8bd5b/camera.avif 1080w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/1fc7e/camera.avif 1366w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/ab8e1/camera.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/e9f70a1ecd8533fbda95dc6e0344d109/7736a/camera.webp 750w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/31ef4/camera.webp 1080w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/28f03/camera.webp 1366w,\\n/static/e9f70a1ecd8533fbda95dc6e0344d109/8c2ac/camera.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.3322916666666667}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4ef79011b7ed05ee5c34.js.map