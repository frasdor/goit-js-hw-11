import{i as n,S as i}from"./vendor-5ObWk2rO.js";const l="46136265-8c05b511bcb8d1129c580e4d3",c=document.getElementById("searchForm"),a=document.getElementById("gallery"),o=document.querySelector(".loader");let s;function m(t){const r=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>e.json()).then(e=>e.hits).catch(e=>{n.error({title:"Error",message:"Something went wrong while fetching images. Please try again later."})})}function h(t){if(a.innerHTML="",t.length===0){n.error({title:"No Results",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=t.map(e=>`
      <a href="${e.largeImageURL}" class="image-item">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>`).join("");a.innerHTML=r,s?s.refresh():s=new i(".image-item",{})}c.addEventListener("submit",t=>{t.preventDefault();const r=document.getElementById("searchQuery").value.trim();if(!r){n.warning({title:"Warning",position:"topRight",message:"Please enter a search term."});return}o.style.display="block",a.innerHTML="",m(r).then(e=>{o.style.display="none",e&&h(e)}).catch(e=>{o.style.display="none",n.error({title:"Error",message:"An error occurred while fetching images. Please try again."})})});
//# sourceMappingURL=search-1yYX6qJ7.js.map
