let numClients,numProjects,numAssist,numCoffe;!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(window,"resize",this._checkForIntersections,!0),s(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=r(i),a=this._rootContainsTarget(i),c=o.entry,l=t&&a&&this._computeTargetAndRootIntersection(i,e),d=o.entry=new n({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:l});c?t&&a?this._hasCrossedThreshold(c,d)&&this._queuedEntries.push(d):c&&c.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var o,i,s,a,l,d,h,u,m=r(e),p=c(e),g=!1;!g;){var f=null,v=1==p.nodeType?window.getComputedStyle(p):{};if("none"==v.display)return;if(p==this.root||p==t?(g=!0,f=n):p!=t.body&&p!=t.documentElement&&"visible"!=v.overflow&&(f=r(p)),f&&(o=f,i=m,void 0,void 0,void 0,void 0,void 0,void 0,s=Math.max(o.top,i.top),a=Math.min(o.bottom,i.bottom),l=Math.max(o.left,i.left),u=a-s,!(m=(h=(d=Math.min(o.right,i.right))-l)>=0&&u>=0&&{top:s,bottom:a,left:l,right:d,width:h,height:u})))break;p=c(p)}return m}},o.prototype._getRootRect=function(){var e;if(this.root)e=r(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var s=this.thresholds[i];if(s==n||s==o||s<n!=s<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},o.prototype._rootContainsTarget=function(e){return a(this.root||t,e)},o.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},o.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n,o,i,s=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(s.root&&1!=s.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){n(),i=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(s.rootMargin),this.thresholds=this._initThresholds(s.threshold),this.root=s.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function r(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=c(n)}return!1}function c(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(),window.addEventListener("load",()=>{((t,e)=>{t=new Date(t).getTime();var n=new Date-(t=new Date(t));let o=Math.floor(n/864e5*1),i=Math.floor(o/365);i>1&&(o-=365*i);let s=document.querySelector(e);s.querySelector(".Years").innerText=i,s.querySelector(".Months").innerText=Math.floor(o/30%12)})("Jan 01, 2017 12:00:00","#dynamicYearsMonths")}),document.addEventListener("DOMContentLoaded",()=>{"serviceWorker"in navigator?navigator.serviceWorker.register("./sw.js",{scope:"/"}).then(()=>console.log("Service worker registered")).catch(t=>console.log("Service worker not registered",t)):console.log("Please update or switch to modern browser to have the ultimate experience of the web!");const t=t=>`\n<div class="col-md-6 col-xl-4" data-item-ref="all ${t.category}">\n<div class="single-port position-relative">\n<picture>\n<source srcset="./img/portfolios/${t.src}.webp">\n<img class="img-fluid" src="./img/portfolios/${t.src}.png" alt="portfolio" loading="lazy" >\n</picture>\n<div class="single-port-overlay">\n<article class="item-desc d-flex flex-column justify-content-center">\n<h4>${t.heading} </h4>\n<p class="para mb-2">${t.shortDesc}</p>\n<div class="d-flex justify-content-around">\n<a href="${t.demo}" class="d-inline-flex align-items-center text-decoration-none bordered px-2 hover" target="_blank" rel="noopener">\n<span class="d-inline-flex portfolio-view-icon">\n<svg class="paper-plane-2" viewBox="0 0 24 24">\n<use href='#paper-plane-2'/>\n</svg> \n</span>\n<span class="text">Demo</span>\n</a>\n<a href="${t.sourceCode}" class="d-inline-flex align-items-center text-decoration-none bordered px-2 hover" target="_blank" rel="noopener">\n<span class="d-inline-flex portfolio-view-icon">\n<svg class="file-down" viewBox="-58 1 511 512">\n<use href='#file-down'/>\n</svg> \n</span>\n<span class="text">Source</span>\n</a>\n</div>\n</article>\n</div>\n</div>\n</div>`,e=()=>{const t=document.querySelectorAll("[data-btn-id]"),e=document.querySelectorAll("[data-item-ref]"),n=[{transform:"scale(.25)",opacity:"0"},{transform:"scale(1.05)"},{transform:"scale(1)",opacity:"1"}],o={duration:300,iterations:1},i=(t,e)=>{Array.from(t).forEach(t=>{t.getAttribute("data-item-ref").match(e)?(t.setAttribute("style","display: block;"),t.animate(n,o)):t.setAttribute("style","display: none;")})};t.forEach(n=>{const o=n.getAttribute("data-btn-id"),s=document.querySelectorAll(`[data-item-ref*="${o}"]`).length;n.querySelector(".filter-text").textContent=s,n.classList.contains("active")&&i(e,o),n.addEventListener("click",s=>{s.preventDefault(),t.forEach(t=>t.classList.remove("active")),n.classList.add("active"),i(e,o)})})};class n{constructor(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1}}n.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,o=80-100*Math.random();this.isDeleting&&(o/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,o=700):(o=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),o)};for(var o=document.getElementsByClassName("typewrite"),i=0;i<o.length;i++){var s=["Front-End Web Developer ","I design experiences ","I am Creative ","I Love to Develop"],r=o[i].getAttribute("data-period");s&&new n(o[i],s,r)}class a{constructor(t,e){const n=document.createElement("script");n.setAttribute("src",t),document.body.insertAdjacentElement("beforeend",n),n.onload=e||(()=>console.log(t,"Success!"))}}setTimeout(()=>{new a("https://www.googletagmanager.com/gtag/js?id=UA-140881194-1",()=>{function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-140881194-1")})},3e3);const c=document.querySelectorAll('#main-navigation a[href^="#"], .bottom-bar a[href^="#"], a[href="#contact"], a[href="#portfolios"], #contact a[href="#header"]');c.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),t.classList.contains("active")||(c.forEach(t=>{t.classList.remove("active")}),t.classList.add("active"),d.classList.remove("nav-open"));const n=t.getAttribute("href"),o=document.querySelector(n),i=Math.floor(o.getBoundingClientRect().top);window.scrollBy({top:i,behavior:"smooth"}),window.history.pushState("","",n)})}),function(){const n=document.querySelectorAll(".spy-sec");"IntersectionObserver"in window&&(()=>{const o={threshold:.05};n.forEach(n=>{new IntersectionObserver(n=>{n.forEach(n=>{const o=n.target;let i=document.querySelector(`#main-navigation a[href='#${o.id}']`);if(n.isIntersecting?i.classList.add("active"):i.classList.remove("active"),"about"==o.id&&n.isIntersecting&&!o.classList.contains("loaded")){o.classList.add("loaded");new a("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js",()=>{tns({container:".skills-slider-container",items:1,slideBy:"page",controls:!1,navPosition:"bottom",speed:500,autoplay:!0,autoplayTimeout:5500,autoplayHoverPause:!0,autoplayButtonOutput:!1,swipeAngle:!1}),tns({container:".reviews-slider",responsive:{320:{items:1,edgePadding:0},500:{items:3,center:!0,edgePadding:90}},slideBy:1,controls:!1,navPosition:"bottom",center:!0,speed:500,autoplay:!0,autoplayTimeout:5500,autoplayHoverPause:!0,autoplayButtonOutput:!1,swipeAngle:!1})})}var s,r,c,l,d;if("portfolios"==o.id&&n.isIntersecting&&!o.classList.contains("loaded")&&(o.classList.add("loaded"),fetch("./js/portfolios.json").then(n=>{n.json().then(n=>{const o=n.length,i=[],s=[],r=document.querySelector("#portfolio-items"),a=document.querySelector(".cur-total"),c=document.querySelector(".all-total"),l=document.querySelector("#load-more");let d=15;n.forEach(t=>{"land"===t.category&&i.push(t),"bizs"===t.category&&s.push(t)}),c.textContent=o,n.slice(0,d).forEach(e=>{r.insertAdjacentHTML("beforeend",t(e)),a.textContent=d}),e(),l.addEventListener("click",()=>{for(;r.firstElementChild;)r.removeChild(r.firstElementChild);const o=n.slice(0,d+=9);o.forEach(e=>{r.insertAdjacentHTML("beforeend",t(e)),a.textContent=o.length}),n.length===o.length&&(l.hidden=!0,l.style.display="none"),e()}),numClients=o-s.length,numProjects=o+i.length,numAssist=i.length,numCoffe=o+s.length+i.length}).catch(t=>console.log(`Response error occured! ${t}`))}).catch(t=>console.log(`dynamicIncludes fetch failed! ${t}`))),"services"==o.id&&n.isIntersecting&&!o.classList.contains("loaded")&&(o.classList.add("loaded"),window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v7.0"})},s=document,r="script",c="facebook-jssdk",d=s.getElementsByTagName(r)[0],s.getElementById(c)||((l=s.createElement(r)).id=c,l.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",d.parentNode.insertBefore(l,d))),"stat-review"==o.id&&n.isIntersecting&&!o.classList.contains("loaded")){function h(t,e,n,o){let i=null;const s=r=>{i||(i=r);const a=Math.min((r-i)/o,1);document.querySelector(t).textContent=Math.floor(a*(n-e)+e),a<1&&window.requestAnimationFrame(s)};window.requestAnimationFrame(s)}h(".count-clients",0,`${numClients}`,3500),h(".count-projects",0,`${numProjects}`,3500),h(".count-assist",0,`${numAssist}`,3500),h(".count-coffee",0,`${numCoffe}`,3500)}})},o).observe(n)})})()}(),document.querySelector("#toggle-switch").addEventListener("change",t=>{let e=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},420)},n=document.querySelector('[name="theme-color"]');t.target.checked?(e(),console.log(),document.documentElement.setAttribute("data-theme","dark"),n.setAttribute("content",getComputedStyle(document.documentElement,'html[data-theme="dark"]').getPropertyValue("--lightBtn"))):(e(),document.documentElement.setAttribute("data-theme","light"),n.setAttribute("content",getComputedStyle(document.documentElement,":root").getPropertyValue("--lightBtn")))});const l=document.getElementsByClassName("nav-trigger")[0],d=document.getElementsByTagName("body")[0],h=document.querySelector(".overlay");l.addEventListener("click",t=>{t.preventDefault(),d.classList.toggle("nav-open")}),h.addEventListener("click",()=>{d.classList.remove("nav-open")});const u=document.querySelector("#contact-mail-form"),m=document.querySelector("#form-status");function p(){u.reset(),m.textContent="Thank you for your response! ❤️",m.setAttribute("style","animation: fade-out 5.5s forwards 1s;")}function g(){m.textContent="Oops! There was a problem. Please try again.",m.setAttribute("style","animation: fade-out 5.5s forwards 1s;")}u.addEventListener("submit",(function(t){t.preventDefault();let e=new FormData(u);!function(t,e,n,o,i){var s=new XMLHttpRequest;s.open(t,e),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?o(s.response,s.responseType):i(s.status,s.response,s.responseType))},s.send(n)}(u.method,u.action,e,p,g)})),window.addEventListener("scroll",()=>{window.scrollY>document.querySelector("#header").getBoundingClientRect().bottom?window.matchMedia("min-width: 992px")&&document.querySelector(".go-to-top").classList.add("d-lg-inline-flex"):document.querySelector(".go-to-top").classList.remove("d-lg-inline-flex")}),document.querySelector("#footer-date").innerText=`${(new Date).getFullYear()}`});