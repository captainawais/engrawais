const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("hidden")

})
const navbar = document.getElementById("navbar-main")

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.classList.add("bg-[#050816]")

}else{

navbar.classList.remove("bg-[#050816]")

}

})
