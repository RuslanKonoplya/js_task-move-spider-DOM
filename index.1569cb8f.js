document.addEventListener("click",function(t){var e=document.querySelector(".spider"),c=document.querySelector(".wall");if(t.target.closest(".wall")){var n=c.getBoundingClientRect(),i=e.offsetWidth,l=e.offsetHeight,a=t.clientX-n.left-i/2,o=t.clientY-n.top-l/2;a=Math.max(0,Math.min(a,n.width-i)),o=Math.max(0,Math.min(o,n.height-l)),e.style.left="".concat(a,"px"),e.style.top="".concat(o,"px")}});
//# sourceMappingURL=index.1569cb8f.js.map
