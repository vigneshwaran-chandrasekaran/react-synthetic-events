(window["webpackJsonpreact-synthetic-events"]=window["webpackJsonpreact-synthetic-events"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(5),r=n.n(l),c=(n(11),n(12),n(2)),s=n.n(c),i=n(3),u=n(1);function p(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),p=c[0],m=c[1],E=function(){var e=Object(i.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("type =>",t.type),m(!0),setTimeout(function(){m(!1)},3e3),navigator.clipboard.readText().then(function(e){console.log("copied text =>",e),l(e)}).catch(function(e){console.log("Something went wrong",e)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-warning p-2"},o.a.createElement("strong",null,"onCopy")," Event"),o.a.createElement("h4",{onCopy:E},"Copy part or full of this string and see copied text below"),p?o.a.createElement("p",null,"Copied Text -> ",o.a.createElement("span",{style:{color:"red"}},n)):null)}function m(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),p=c[0],m=c[1],E=function(){var e=Object(i.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("type =>",t.type),console.log("type =>",t.clipboardData),console.log("type =>",t),m(!0),setTimeout(function(){m(!1)},5e3),navigator.clipboard.readText().then(function(e){console.log("copied text =>",e),l(e)}).catch(function(e){console.log("Something went wrong",e)});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-warning p-2"},o.a.createElement("strong",null,"OnCut")," Event"),o.a.createElement("input",{onCut:E,type:"text",style:{width:"100%"},defaultValue:"Cut part or full of this string and see copied text below"}),p?o.a.createElement("p",null,"Cutted Text -> ",o.a.createElement("span",{style:{color:"red"}},n)):null)}function E(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),p=c[0],m=c[1],E=function(){var e=Object(i.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("type =>",t.type),console.log("type =>",t.clipboardData),console.log("type =>",t),m(!0),setTimeout(function(){m(!1)},5e3),navigator.clipboard.readText().then(function(e){console.log("copied text =>",e),l(e)}).catch(function(e){console.log("Something went wrong",e)});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-warning p-2"},o.a.createElement("strong",null,"OnPaste")," Event"),o.a.createElement("input",{onPaste:E,type:"text",style:{width:"100%"},defaultValue:"Paste part or full of this string and see copied text below"}),p?o.a.createElement("p",null,"Pasted Text -> ",o.a.createElement("span",{style:{color:"red"}},n)):null)}function g(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],i=c[1],p=Object(a.useState)(!1),m=Object(u.a)(p,2),E=m[0],g=m[1],v=function(e){e.persist(),console.log({e:e}),i(e.type),console.log("type =>",e.type),console.log("type =>",e.clipboardData),console.log("type =>",e),g(!0),setTimeout(function(){g(!1)},5e3),navigator.clipboard.readText().then(function(e){console.log("copied text =>",e),l(e)}).catch(function(e){console.log("Something went wrong",e)})};return o.a.createElement("div",{style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-warning p-2"},o.a.createElement("strong",null,"OnCopy, OnCut, OnPaste")," Events"),o.a.createElement("textarea",{onCopy:v,onCut:v,onPaste:v,cols:100,rows:5,style:{width:"100%"},defaultValue:"Paste part or full of this string and see copied text below"}),E?o.a.createElement("p",null,o.a.createElement("span",{className:"font-weight-bold"},s)," Event fired -> ",o.a.createElement("span",{style:{color:"red"}},n)):null)}function v(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],l=t[1],r=function(e){console.log({e:e}),e.persist(),l(e)};return o.a.createElement("div",null,o.a.createElement("p",{className:"bg-success p-2 mt-5"},o.a.createElement("strong",null,"onPointer")," Event"),o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:"https://www.w3.org/TR/pointerevents/pointer.png",alt:"pointer-event"})),o.a.createElement("p",{className:"my-3 text-success"},"Click/touch below text to trigger pointer events"),o.a.createElement("div",{onPointerDown:r,onPointerMove:r,onPointerUp:r,onPointerCancel:r,onGotPointerCapture:r,onLostPointerCapture:r,onPointerEnter:r,onPointerLeave:r,onPointerOver:r,onPointerOut:r},o.a.createElement("p",null,"The Pointer Events API is an HTML5 specification that combines touch, mouse, pen and other inputs into a single unified API."),o.a.createElement("p",null,"The simple idea behind it, is that mouse and touch and stylus input events are unified into a single event API."),o.a.createElement("p",{className:"font-weight-bold"},"List of available pointer events"),o.a.createElement("p",null,"onPointerDownonPointerMove, onPointerUp, onPointerCancel, onGotPointerCapture, onLostPointerCapture, onPointerEnter, onPointerLeave, onPointerOver, onPointerOut")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://mobiforge.com/design-development/html5-pointer-events-api-combining-touch-mouse-and-pen",target:"_blank",rel:"noopener noreferrer"},"for more details about pointer events click here")),o.a.createElement("table",{className:"table table-bordered table-hover table-condensed table-striped my-3"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Property"),o.a.createElement("th",null,"Value")),Object.keys(n).map(function(e){return"object"!==typeof n[e]&&"function"!==typeof n[e]?o.a.createElement("tr",{key:e},o.a.createElement("td",null,e),o.a.createElement("td",null,String(n[e])),console.log(e,n[e])):null}))))}function d(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],l=t[1],r=function(e){console.log({e:e}),e.persist(),l(e)};return o.a.createElement("div",null,o.a.createElement("p",{className:"bg-success p-2 mt-5"},o.a.createElement("strong",null,"onMouse")," Event"),o.a.createElement("div",null,o.a.createElement("p",{className:"font-weight-bold"},"List of available mouse events"),o.a.createElement("p",null,"onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp")),o.a.createElement("p",{className:"my-3 text-success"},"Click/touch below text to trigger mouse events"),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col"},o.a.createElement("p",{onClick:r},"onClick event"),o.a.createElement("p",{onContextMenu:r},"onContextMenu event"),o.a.createElement("p",{onDoubleClick:r},"onDoubleClick event"),o.a.createElement("p",{onDrag:r},"onDrag event"),o.a.createElement("p",{onDragEnd:r},"onDragEnd event"),o.a.createElement("p",{onDragEnter:r},"onDragEnter event"),o.a.createElement("p",{onDragExit:r},"onDragExit event"),o.a.createElement("p",{onDragLeave:r},"onDragLeave event"),o.a.createElement("p",{onDragOver:r},"onDragOver event"),o.a.createElement("p",{onDragStart:r},"onDragStart event"),o.a.createElement("p",{onDrop:r},"onDrop event"),o.a.createElement("p",{onMouseDown:r},"onMouseDown event"),o.a.createElement("p",{onMouseEnter:r},"onMouseEnter event"),o.a.createElement("p",{onMouseLeave:r},"onMouseLeave event"),o.a.createElement("p",{onMouseMove:r},"onMouseMove event"),o.a.createElement("p",{onMouseOut:r},"onMouseOut event"),o.a.createElement("p",{onMouseOver:r},"onMouseOver event"),o.a.createElement("p",{onMouseUp:r},"onMouseUp event")),o.a.createElement("div",{class:"col"},o.a.createElement("table",{className:"table table-bordered table-hover table-condensed table-striped my-3"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Property"),o.a.createElement("th",null,"Value")),Object.keys(n).map(function(e){return"object"!==typeof n[e]&&"function"!==typeof n[e]?o.a.createElement("tr",{key:e},o.a.createElement("td",null,e),o.a.createElement("td",null,String(n[e])),console.log(e,n[e])):null}))))))}function b(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),s=c[0],i=c[1],p=function(e){e.persist(),console.log({e:e}),l(e.type),console.log("type =>",e.type),console.log("type =>",e.clipboardData),console.log("type =>",e),i(!0),setTimeout(function(){i(!1)},5e3)};return o.a.createElement("div",{style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-warning p-2"},o.a.createElement("strong",null,"Keyboard Events")),o.a.createElement("p",null,"onKeyDown, onKeyPress, onKeyUp"),o.a.createElement("input",{onKeyDown:p,type:"text",style:{width:"100%"},defaultValue:"onKeyDown events"}),o.a.createElement("input",{onKeyPress:p,onKeyUp:p,type:"text",style:{width:"100%"},defaultValue:"onKeyPress onKeyUp events"}),s?o.a.createElement("p",null,o.a.createElement("span",{className:"font-weight-bold"},n)," Event fired"):null)}function y(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),s=c[0],i=c[1],p=function(e){e.persist(),console.log({e:e}),l(e.type),console.log("type =>",e.type),console.log("type =>",e.clipboardData),console.log("type =>",e),i(!0),setTimeout(function(){i(!1)},5e3)};return o.a.createElement("div",{className:"my-5",style:{minHeight:"150px"}},o.a.createElement("p",{className:"bg-primary p-2"},o.a.createElement("strong",null,"Focus Events")),o.a.createElement("p",null,"onFocus, onBlur"),o.a.createElement("input",{onFocus:p,onBlur:p,type:"text",style:{width:"100%"},defaultValue:"onFocus onBlur events"}),s?o.a.createElement("p",null,o.a.createElement("span",{className:"font-weight-bold"},n)," Event fired"):null)}var f=function(){return o.a.createElement("div",{className:"container mb-5"},o.a.createElement("h3",{className:"text-center my-3"},"React Synthetic Events"),o.a.createElement(p,null),o.a.createElement(m,null),o.a.createElement(E,null),o.a.createElement(g,null),o.a.createElement(v,null),o.a.createElement(d,null),o.a.createElement(b,null),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.200c5400.chunk.js.map