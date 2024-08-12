import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c="45375111-d1e8183fd09326f55157dfb1e",l="https://pixabay.com/api/";function u(s){const t=`${l}?key=${c}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>(console.error("Error fetching images:",r),[]))}function f(s){const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=s.map(n=>`
      <div class="gallery-item">
        <a href="${n.largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${n.likes}</p>
          <p><b>Views:</b> ${n.views}</p>
          <p><b>Comments:</b> ${n.comments}</p>
          <p><b>Downloads:</b> ${n.downloads}</p>
        </div>
      </div>
    `).join("");t.insertAdjacentHTML("beforeend",r)}const d=document.querySelector("#search-form");d.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(t===""){iziToast.warning({title:"Warning",message:"Please enter a search query!"});return}u(t).then(r=>{f(r)}).catch(r=>{console.error("Error handling images:",r),iziToast.error({title:"Error",message:"Something went wrong. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
