// build time:Sun Jun 14 2020 20:19:28 GMT+0800 (China Standard Time)
(function(e){var r={};function t(a){if(r[a])return r[a].exports;var i=r[a]={exports:{},id:a,loaded:false};e[a].call(i.exports,i,i.exports,t);i.loaded=true;return i.exports}t.m=e;t.c=r;t.p="";return t(0)})([function(e,r,t){(function(r){"use strict";var a=function(){function e(e,r){var t=[];var a=true;var i=false;var n=undefined;try{for(var l=e[Symbol.iterator](),s;!(a=(s=l.next()).done);a=true){t.push(s.value);if(r&&t.length===r)break}}catch(o){i=true;n=o}finally{try{if(!a&&l["return"])l["return"]()}finally{if(i)throw n}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}();var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var n=t(1);var l=t(2);var s=p(l);var o=t(3);var c=p(o);var u=t(4);var d=p(u);var f=t(5);var v=p(f);function p(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t))r[t]=e[t]}}r.default=e;return r}}var m=(typeof window==="undefined"?"undefined":i(window))=="object"&&window.window===window?window:(typeof r==="undefined"?"undefined":i(r))=="object"&&r.global===r?r:undefined;m.mePlayer=function(e,r){if(!(e.music&&e.music.src)){console.error("必须指定音乐地址哦~");return}var t=e.music,i=v.$(e.target)||document.querySelector(".meplayer"),l=e.theme||n.THEME_DEFAULT,o=t.lrc?true:false,u=t.cover||"https://unsplash.it/78/?random",f=t.loop||false,p=e.autoplay,y=l===n.THEME_DEFAULT?"meplayer-container":"meplayer-container-mini",h=y+" "+(o?"meplayer-haslrc":"")+" meplayer-isloading",g='<div class="'+h+'">\n                             <audio src='+t.src+' preload="auto"></audio>\n                             <div class="meplayer-info">\n                             <div class="meplayer-info-cover"><img src='+u+' alt=""></div>\n                             <div class="meplayer-meta">\n                             <div class="meplayer-meta-title">'+t.title+'</div>\n                             <div class="meplayer-meta-author">'+t.author+'</div>\n                             <div class="meplayer-meta-time-tick"><span class="meplayer-meta-time-tick-text"></span></div>\n                             </div>\n                             </div>\n                             <canvas class="meplayer-spectrum"></canvas>\n                             <div class="meplayer-lyric"><div class="meplayer-lyric-area"></div></div>\n                             <div class="meplayer-control"><div class="meplayer-control-play"><i class="icon-play"></i><i class="icon-pause"></i></div></div>\n                             <div class="meplayer-volume-bg"><div class="meplayer-volume"><i class="icon-volume"></i><div class="meplayer-volume-progress"></div></div></div>\n                             <div class="meplayer-duration"><i class="icon-clock"></i><span class="meplayer-duration-text">loading</span></div>\n                             <div class="meplayer-loadingsign"><i class="icon-spin animate-spin"></i>loading</div>\n                             <div class="meplayer-timeline-bg"><div class="meplayer-timeline"><div class="meplayer-timeline-passed"></div></div></div>\n                             </div>';i.innerHTML=g;var E=i.querySelector("."+y),T=v.init(E).select(["audio",".meplayer-control-play",".meplayer-meta-time-tick-text",".meplayer-duration",".meplayer-timeline",".meplayer-timeline-passed",".meplayer-volume",".meplayer-volume-progress",".meplayer-lyric-area",".meplayer-spectrum"]),x=a(T,10),L=x[0],S=x[1],w=x[2],C=x[3],b=x[4],_=x[5],M=x[6],A=x[7],q=x[8],H=x[9],N;if(o){s.parse(t.lrc).renderTo(q)}else{d.init(H)}j();if(p){R()}m.mePlayerMethod={play:k,pause:O,toggleTheme:Y};function j(){L.addEventListener("ended",F);L.addEventListener("canplaythrough",I);L.addEventListener("durationchange",D);L.addEventListener("timeupdate",P);S.addEventListener("click",R);b.addEventListener("click",U)}function F(){if(f){L.play()}else{c.removeClass(E,"meplayer-isplaying");r()}}function I(){N=this.duration;setTimeout(function(){c.removeClass(E,"meplayer-isloading");C.querySelector(".meplayer-duration-text").innerText=c.parseSec(N.toFixed(0))},1e3)}function D(){N=this.duration}function P(){var e=L.currentTime;var r=L.currentTime.toFixed(3);var t=100*(e/N);_.style.width=t.toFixed(2)+"%";w.innerText=c.parseSec(e);if(o&&l===n.THEME_DEFAULT){var a=s.currentIndex(r);var i=q.querySelectorAll("p");var u=i[a-1];var d=i[a];var f=i[a+1];if(!d.className.includes("meplayer-lyric-current")){c.removeClass(q.querySelector(".meplayer-lyric-current"),"meplayer-lyric-current");if(q.querySelector(".meplayer-lyric-pre")){c.removeClass(q.querySelector(".meplayer-lyric-pre"),"meplayer-lyric-pre")}if(q.querySelector(".meplayer-lyric-next")){c.removeClass(q.querySelector(".meplayer-lyric-next"),"meplayer-lyric-next")}c.addClass(d,"meplayer-lyric-current");if(u){c.addClass(u,"meplayer-lyric-pre")}if(f){c.addClass(f,"meplayer-lyric-next")}q.style.webkitTransform="translateY(-"+20*a+"px)";q.style.transform="translateY(-"+20*a+"px)"}}}function R(){var e;if(L.paused){L.play();if(l===n.THEME_DEFAULT&&!o){d.draw()}E.addEventListener("mousewheel",function r(){var r=null;var t=.05;e=function a(e){if(r){clearTimeout(r)}if(!E.className.includes("meplayer-adjusting-volume")){c.addClass(E,"meplayer-adjusting-volume")}if(e.wheelDeltaY<0&&L.volume>t){L.volume-=t}if(e.wheelDeltaY>0&&L.volume<1-t){L.volume+=t}if(l===n.THEME_DEFAULT){A.style.width=L.volume*100+"%"}else{M.querySelector("i").style.opacity=L.volume}e.preventDefault();r=setTimeout(function(){c.removeClass(E,"meplayer-adjusting-volume")},1e3)};return e}())}else{L.pause();d.stop();E.removeEventListener("mousewheel",e)}c.toggleClass(E,"meplayer-isplaying")}function U(){var e=(event.pageX-c.getAbsLeft(this))/this.offsetWidth;_.style.width=e*100+"%";L.currentTime=(e*N).toFixed(0)}function k(){if(L.paused){c.addClass(E,"meplayer-isplaying");L.play()}}function O(){if(!L.paused){c.removeClass(E,"meplayer-isplaying");L.pause()}}function Y(){var e=.03;var r=0;var t=200;c.addClass(E,"meplayer-changing-theme");l=l===n.THEME_DEFAULT?n.THEME_MINI:n.THEME_DEFAULT;a();function a(){r++;E.style.opacity-=e;if(E.style.opacity<=0){e*=-1;E.style.opacity=0;c.toggleClass(E,"meplayer-container-mini");c.toggleClass(E,"meplayer-container")}if(E.style.opacity<1&&r<t){requestAnimationFrame(a)}else{setTimeout(function(){c.removeClass(E,"meplayer-changing-theme")},500)}}return l}};if(typeof e!=="undefined"&&typeof e.exports!=="undefined"){e.exports=m.mePlayer}}).call(r,function(){return this}())},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t="default";var a="mini";var i="meplayer-lyric-current";var n="meplayer-lyric-next";r.THEME_DEFAULT=t;r.THEME_MINI=a;r.LYRIC_CURRENT_CLASS=i;r.LYRIC_NEXT_CLASS=n},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.currentIndex=r.renderTo=r.parse=undefined;var a=t(1);var i;function n(e){var r=e.split("\n");var t=[];var a=r.length;var n=/\[(\d{2}):(\d{2})\.(\d{2,3})]/g;var l=/\[(\d{2}):(\d{2})\.(\d{2,3})]/;for(var s=0;s<a;s++){var o=r[s].match(n);var c=r[s].replace(n,"").replace(/^\s+|\s+$/g,"");if(!c){continue}if(o!=null){var u=o.length;for(var d=0;d<u;d++){var f=l.exec(o[d]);var v=f[1]*60+parseInt(f[2])+parseInt(f[3])/((f[3]+"").length===2?100:1e3);t.push({time:v,text:c})}}}t.sort(function(e,r){return e.time-r.time});i=t;return this}function l(e){if(!i){console.error("未指定歌词文本！");return}var r="";for(var t=0;t<i.length;t++){r+="<p>"+i[t].text+"</p>"}e.innerHTML=r;e.querySelector("p").className=a.LYRIC_CURRENT_CLASS;e.querySelector("p + p").className=a.LYRIC_NEXT_CLASS;return this}function s(e){if(e<i[0].time)return 0;for(var r=0,t=i.length;r<t;r++){if(e>=i[r].time&&(!i[r+1]||e<=i[r+1].time)){break}}return r}r.parse=n;r.renderTo=l;r.currentIndex=s},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});function t(e,r){if(e.classList){e.classList.toggle(r)}else{var t=e.className.split(" ");var a=t.indexOf(r);if(a>=0)t.splice(a,1);else t.push(r);e.className=t.join(" ")}}function a(e,r){if(e.classList)e.classList.add(r);else e.className+=" "+r}function i(e,r){if(e.classList)e.classList.remove(r);else e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")}function n(e){var r=e.offsetLeft;while(e.offsetParent){e=e.offsetParent;r+=e.offsetLeft}return r}function l(e){var r=e/60|0;var t=e%60|0;var a=r<10?"0"+r:r;var i=t<10?"0"+t:t;return a+":"+i}r.toggleClass=t;r.addClass=a;r.removeClass=i;r.getAbsLeft=n;r.parseSec=l},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t,a,i=[],n=false,l=null,s=Math.random;function o(){if(s()>.8){return s()*8+11}else{return s()*6+2}}var c=function p(e){var r=e*1.5>28?28:e*1.5,t=1,a=s()>.5?1:-1,i=e,n;return function(){n=a;i+=n;if(i>=r){a*=-1;i=r}else if(i<=t){a*=-1;i=t}if(s()>.9){a*=-1}return i}};function u(){a.clearRect(0,-t.height/2,t.width,t.height);for(var e=0;e<i.length;e++){var r=i[e];var s=r.getHeight();a.fillRect(e+i[e].xSpace,-s/2,i[e].width,s)}if(!n){l=requestAnimationFrame(u)}}function d(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:220;var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:30;var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"#D94240";t=e;t.width=r;t.height=n;a=t.getContext("2d");a.fillStyle=l;a.translate(0,n/2);for(var s=0;s<64;s++){var u=s==0?0:5*s;var d={xSpace:u,width:1,getHeight:c(o())};i.push(d)}}function f(){n=false;u()}function v(){n=true}r.init=d;r.draw=f;r.stop=v},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});var t;function a(e){t=n(e);return this}function i(e){var r;if(Array.isArray(e)){var a=[];var i=true;var l=false;var s=undefined;try{for(var o=e[Symbol.iterator](),c;!(i=(c=o.next()).done);i=true){var u=c.value;a.push(n(u,t))}}catch(d){l=true;s=d}finally{try{if(!i&&o.return){o.return()}}finally{if(l){throw s}}}r=a}else{r=n(e,t)}return r}function n(e,r){var t;r=r||document;if(typeof e==="string"){t=r.querySelector(e)}else if(e.toString().includes("HTMLDivElement")){t=e}return t}r.init=a;r.select=i;r.$=n}]);
//rebuild by neat 