/* =========================
SECTION LOADER
========================= */

function loadSection(id, file){

fetch(file)

.then(res => res.text())

.then(data => {

document.getElementById(id).innerHTML = data

})

}


/* =========================
LOAD ALL SECTIONS
========================= */

loadSection("navbar","sections/navbar.html")

loadSection("hero","sections/hero.html")

loadSection("about","sections/about.html")

loadSection("skills","sections/skills.html")

loadSection("projects","sections/projects.html")

loadSection("achievements","sections/achievements.html")

loadSection("certifications","sections/certifications.html")

loadSection("education","sections/education.html")

loadSection("blog","sections/blog.html")

loadSection("contact","sections/contact.html")

loadSection("footer","sections/footer.html")



/* =========================
NAVBAR MOBILE MENU
========================= */

document.addEventListener("click",function(e){

if(e.target.closest("#menu-btn")){

document
.getElementById("mobile-menu")
.classList.toggle("active")

}

})



/* =========================
NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll",function(){

const nav = document.getElementById("navbar-main")

if(nav){

if(window.scrollY > 60){

nav.classList.add("scrolled")

}else{

nav.classList.remove("scrolled")

}

}

})



/* =========================
START PARTICLES
========================= */

window.addEventListener("load",function(){

if(typeof particlesJS !== "undefined"){

particlesJS.load(
"particles-js",
"js/particles-config.json"
)

}

})
