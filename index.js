let mobile_nav=document.querySelector(".mobile-navbar-btn");
let headerEl=document.querySelector(".header")

mobile_nav.addEventListener("click",()=>{
    headerEl.classList.toggle("active")
})

