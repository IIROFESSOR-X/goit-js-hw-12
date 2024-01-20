import{S as v,i as n,a as S}from"./assets/vendor-eacb4d5c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),g=document.querySelector(".gallery"),p=document.querySelector(".loader"),a=document.querySelector(".btn-load-more"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=40;let l=1,m="";d.addEventListener("submit",q);a.addEventListener("click",$);async function q(s){s.preventDefault(),l=1,g.innerHTML="",m=d.search.value.trim(),a.classList.add("hide");const r=await h();r.hits.length===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#3957b1"}):r.hits.length<u?n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#3957b1"}):a.classList.remove("hide"),d.reset(),f(r)}async function $(){l+=1,a.classList.add("hide");const s=await h();l>=Math.ceil(s.totalHits/u)?n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#3957b1"}):a.classList.remove("hide"),f(s),C()}async function h(){p.classList.remove("hide");try{return(await S.get("https://pixabay.com/api/",{params:{key:"41892846-853e297a2cd9e54f76867f33a",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})).data}catch(s){console.log(s.message),n.error({position:"topRight",message:"Sorry, service unavailable.",backgroundColor:"#3957b1"})}finally{p.classList.add("hide")}}function f(s){const r=s.hits.reduce((c,{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:y,comments:b,downloads:L})=>c+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${t}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${o}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${y}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${b}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${L}</span></p></li>
              </ul>
            </li>`,"");g.insertAdjacentHTML("beforeend",r),w.refresh()}function C(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
