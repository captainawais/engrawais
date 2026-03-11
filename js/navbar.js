document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const navbar = document.getElementById("navbar-main")

/* =========================
MOBILE MENU TOGGLE
========================= */

if(menuBtn && mobileMenu){

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("hidden")

})

}

/* =========================
NAVBAR SCROLL EFFECT
========================= */

if(navbar){

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("nav-scrolled")

}else{

navbar.classList.remove("nav-scrolled")

}

})

}

})
