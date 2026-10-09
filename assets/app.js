var R=document.documentElement,T=document.getElementById('tg'),N=document.getElementById('nav'),M=document.getElementById('mb');
function set(m){R.setAttribute('data-theme',m);T.textContent=m=='dark'?'\u2600':'\u263e';try{localStorage.setItem('ja-theme',m)}catch(e){}}
try{var sv=localStorage.getItem('ja-theme');if(sv)set(sv)}catch(e){}
T.onclick=function(){set(R.getAttribute('data-theme')=='dark'?'light':'dark')};
M.onclick=function(){var o=N.classList.toggle('open');M.setAttribute('aria-expanded',o)};
N.addEventListener('click',function(e){if(e.target.tagName=='A'){N.classList.remove('open');M.setAttribute('aria-expanded',false)}});
var L=[].slice.call(document.querySelectorAll('.toc a')),S=L.map(function(a){return document.querySelector(a.getAttribute('href'))});
if(L.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){L.forEach(function(a){a.classList.remove('on')});var i=S.indexOf(e.target);if(i>-1)L[i].classList.add('on')}})},{rootMargin:'-20% 0px -70% 0px'});S.forEach(function(s){s&&io.observe(s)})}
