import{i as s,S as i}from"./vendor-5ObWk2rO.js";const l="46136265-8c05b511bcb8d1129c580e4d3",c=document.getElementById("searchForm"),a=document.getElementById("gallery"),o=document.querySelector(".loader");let r;async function m(t){const n=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(n)).json()).hits}catch{s.error({title:"Error",message:"Something went wrong while fetching images. Please try again later."})}}function p(t){if(a.innerHTML="",t.length===0){s.error({title:"No Results",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=t.map(e=>`
      <a href="${e.largeImageURL}" class="image-item">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>`).join("");a.innerHTML=n,r?r.refresh():r=new i(".image-item",{})}c.addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("searchQuery").value.trim();if(!n){s.warning({title:"Warning",position:"topRight",message:"Please enter a search term."});return}o.style.display="block",a.innerHTML="";const e=await m(n);o.style.display="none",e&&p(e)});
//# sourceMappingURL=search-BF4vrxOD.js.map
