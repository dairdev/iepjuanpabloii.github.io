(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0X6C":function(e,t,n){"use strict";n.r(t),function(e){var a=n("YOCn"),i=n("R82R"),o=n("V2/N"),r=n("UKK7"),c=Object(i.a)((function(e){return{root:{flexGrow:1,paddingTop:56,paddingLeft:35,paddingRight:35},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));t.default=function(){var t=c(),n=(new r.a).getBooks();return console.log(n.length),e("div",{className:t.root},e(o.a,{container:!0,spacing:3},n.map((function(t){return e(o.a,{item:!0,xs:12,md:3},e(a.a,{title:t.title,picture:t.cover,url:t.url,description:t.description}))}))))}}.call(this,n("hosL").h)},"1LRU":function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("mxPc"),s=n("gbh0"),l=n("VR6K"),d=n("q3GK"),u=n("/ZiB"),f=o.forwardRef((function(e,t){var n=e.classes,s=e.className,f=e.color,g=void 0===f?"primary":f,m=e.component,p=void 0===m?"a":m,b=e.onBlur,x=e.onFocus,v=e.TypographyClasses,h=e.underline,j=void 0===h?"hover":h,w=e.variant,O=void 0===w?"inherit":w,y=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(l.a)(),C=N.isFocusVisible,W=N.onBlurVisible,B=N.ref,S=o.useState(!1),D=S[0],V=S[1],k=Object(d.a)(t,B);return o.createElement(u.a,Object(a.a)({className:Object(r.a)(n.root,n["underline".concat(Object(c.a)(j))],s,D&&n.focusVisible,"button"===p&&n.button),classes:v,color:g,component:p,onBlur:function(e){D&&(W(),V(!1)),b&&b(e)},onFocus:function(e){C(e)&&V(!0),x&&x(e)},ref:k,variant:O},y))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},Gi6g:function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=["video","audio","picture","iframe","img"],l=o.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,d=e.component,u=void 0===d?"div":d,f=e.image,g=e.src,m=e.style,p=Object(i.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==s.indexOf(u),x=!b&&f?Object(a.a)({backgroundImage:'url("'.concat(f,'")')},m):m;return o.createElement(u,Object(a.a)({className:Object(r.a)(c.root,l,b&&c.media,-1!=="picture img".indexOf(u)&&c.img),ref:t,style:x,src:b?f||g:void 0},p),n)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},"V2/N":function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var i=n("dV/x"),o=n("Fcif"),r=n("l8WD"),c=(n("W0B4"),n("PDtE")),s=n("gbh0"),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],u=r.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,m=e.container,p=void 0!==m&&m,b=e.direction,x=void 0===b?"row":b,v=e.item,h=void 0!==v&&v,j=e.justify,w=void 0===j?"flex-start":j,O=e.lg,y=void 0!==O&&O,N=e.md,C=void 0!==N&&N,W=e.sm,B=void 0!==W&&W,S=e.spacing,D=void 0===S?0:S,V=e.wrap,k=void 0===V?"wrap":V,R=e.xl,E=void 0!==R&&R,F=e.xs,M=void 0!==F&&F,z=e.zeroMinWidth,G=void 0!==z&&z,P=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(c.a)(d.root,u,p&&[d.container,0!==D&&d["spacing-xs-".concat(String(D))]],h&&d.item,G&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==k&&d["wrap-xs-".concat(String(k))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==B&&d["grid-sm-".concat(String(B))],!1!==C&&d["grid-md-".concat(String(C))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==E&&d["grid-xl-".concat(String(E))]);return r.createElement(g,Object(o.a)({className:A,ref:t},P))})),f=Object(s.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(i){var o=e.spacing(i);0!==o&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(a(o,2)),width:"calc(100% + ".concat(a(o),")"),"& > $item":{padding:a(o,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f},W6lt:function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=n("x+AB"),l=o.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,d=e.focusVisibleClassName,u=Object(i.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(s.a,Object(a.a)({className:Object(r.a)(c.root,l),focusVisibleClassName:Object(r.a)(d,c.focusVisible),ref:t},u),n,o.createElement("span",{className:c.focusHighlight}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},YOCn:function(e,t,n){"use strict";(function(e){var a=n("R82R"),i=n("shiU"),o=n("W6lt"),r=n("nB3X"),c=n("kci7"),s=n("Gi6g"),l=n("1LRU"),d=n("/ZiB"),u=Object(a.a)({root:{maxWidth:345},media:{height:360}});t.a=function(t){var n=t.title,a=t.description,f=t.picture,g=t.url,m=u();return e(i.a,{className:m.root},e(o.a,null,e(s.a,{className:m.media,image:f,title:"Contemplative Reptile"}),e(c.a,null,e(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},n),e(d.a,{variant:"body2",color:"textSecondary",component:"p"},a))),e(r.a,null,e(l.a,{href:g},"Leer")))}}).call(this,n("hosL").h)},kci7:function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(i.a)(e,["classes","className","component"]);return o.createElement(l,Object(a.a)({className:Object(r.a)(n.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},nB3X:function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=o.forwardRef((function(e,t){var n=e.disableSpacing,c=void 0!==n&&n,s=e.classes,l=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(a.a)({className:Object(r.a)(s.root,l,!c&&s.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},shiU:function(e,t,n){"use strict";var a=n("Fcif"),i=n("dV/x"),o=n("l8WD"),r=(n("W0B4"),n("PDtE")),c=n("bJWG"),s=n("gbh0"),l=o.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(i.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(a.a)({className:Object(r.a)(n.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)}}]);
//# sourceMappingURL=route-biblioteca.chunk.b14b6.js.map