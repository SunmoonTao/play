!function(){"use strict";function r(e){return e+"_dismissed"}function s(e){return e.getAttribute("data-component-id")}function u(){var e,t,n,i;t=s(e=l),i=parseInt(l.getAttribute("data-component-expirydays")||"30",10),n=i&&!isNaN(i)?i:30,setTimeout(function(){e&&e.parentNode&&e.parentNode.removeChild(e)},1),o(t,n)}var a="c-site-messages",c="."+a,d=function(t){var e=document.cookie.split("; ").map(function(e){return e.split("=")}).filter(function(e){return e[0]===t});return e.length?e.pop()[1]:null},i=function(e,t,n,i){var o=3<arguments.length&&void 0!==i?i:"/";document.cookie=e+"="+t+";expires="+n.toUTCString()+";path="+o},o=function(e,t){var n=new Date(Date.now());n.setTime(n.getTime()+24*t*60*60*1e3),i(r(e),"true",n)},l=null,m=25;window.Component=window.Component||{},window.Component.siteMessages={init:function(){var t,n,i,e,o=(t=function(){var e=document.documentElement.scrollHeight,t=Math.round(m/100*e);window.pageYOffset>t&&(l.classList.add(a+"--is-visible"),window.removeEventListener("scroll",o,!1),window.removeEventListener("resize",o,!1))},n=250,i=Date.now(),function(){var e=Date.now();i+n-e<0&&(t(),i=e)});(l=function(){for(var e=document.querySelectorAll(c),t=0;e[t];++t){var n=s(e[t]);if(!Boolean(d(r(n))))return e[t]}return null}())&&(m=l.getAttribute("data-component-trigger-scroll-percentage"),l.classList.remove("hide","u-hide"),e=l.querySelectorAll(c+"__close"),Array.prototype.slice.call(e,0).forEach(function(e){e.addEventListener("click",u,!1)}),function(e){var t=e.querySelector("form");if(t){var n=t.querySelector('[type="submit"]');t.addEventListener("submit",function(){n.setAttribute("disabled","disabled"),window.setTimeout(function(){n.removeAttribute("disabled")},1e3)})}}(l),window.addEventListener("scroll",o,!1),window.addEventListener("resize",o,!1))}},Component.siteMessages.init()}();