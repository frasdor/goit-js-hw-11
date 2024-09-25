import{i,S as a}from"./vendor-5ObWk2rO.js";const l="46136265-8c05b511bcb8d1129c580e4d3",c=document.getElementById("searchForm"),s=document.getElementById("gallery"),n=document.querySelector(".loader");let o;function m(t){const r=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>e.json()).then(e=>e.hits).catch(e=>{i.error({title:"Error",message:"Something went wrong while fetching images. Please try again later."})})}function p(t){if(s.innerHTML="",t.length===0){i.error({title:"No Results",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=t.map(e=>`
      <a href="${e.largeImageURL}" class="image-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
      <div class="info">
        <div class="info-item">
          <p>Likes</p>
          <p>${e.likes}</p>
        </div>
        <div class="info-item">
          <p>Views</p>
          <p>${e.views}</p>
        </div>
        <div class="info-item">
          <p>Comments</p>
          <p>${e.comments}</p>
        </div>
        <div class="info-item">
          <p>Downloads</p>
          <p>${e.downloads}</p>
        </div>
      </div>
    </a>`).join("");s.innerHTML=r,o?o.refresh():o=new a(".image-item",{})}c.addEventListener("submit",t=>{t.preventDefault();const r=document.getElementById("searchQuery").value.trim();if(!r){i.warning({title:"Warning",position:"topRight",message:"Please enter a search term."});return}n.style.display="block",s.innerHTML="",m(r).then(e=>{n.style.display="none",e&&p(e)}).catch(e=>{n.style.display="none",i.error({title:"Error",message:"An error occurred while fetching images. Please try again."})})});
//# sourceMappingURL=search-D-q-RUBn.js.map
