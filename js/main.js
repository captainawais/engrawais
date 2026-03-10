/* =========================
SECTION LOADER
========================= */

function loadSection(id, file){

fetch(file)
.then(res => res.text())
.then(data => {

document.getElementById(id).innerHTML = data

/* HERO LOAD HO TO PARTICLES + TYPING START */

if(id === "hero"){

setTimeout(()=>{
startParticles()
startTyping()
},100)

}

})

}


/* =========================
LOAD ALL SECTIONS
========================= */

loadSection("navbar","./sections/navbar.html")
loadSection("hero","./sections/hero.html")
loadSection("about","./sections/about.html")
loadSection("skills","./sections/skills.html")
loadSection("projects","./sections/projects.html")
loadSection("achievements","./sections/achievements.html")
loadSection("certifications","./sections/certifications.html")
loadSection("education","./sections/education.html")
loadSection("blog","./sections/blog.html")
loadSection("contact","./sections/contact.html")
loadSection("footer","./sections/footer.html")



/* =========================
NAVBAR MOBILE MENU
========================= */

document.addEventListener("click",function(e){

if(e.target.closest("#menu-btn")){

document
.getElementById("mobile-menu")
.classList.toggle("hidden")

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
NAVBAR ACTIVE GLOW BAR
========================= */

const indicator = document.querySelector(".nav-indicator")

document.querySelectorAll("#navbar-main ul li a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

const rect = link.getBoundingClientRect()
const parent = link.closest("ul").getBoundingClientRect()

indicator.style.width = rect.width + "px"
indicator.style.left = (rect.left - parent.left) + "px"

})

})

/* =========================
PARTICLES START
========================= */

function startParticles(){

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

particles:{
number:{value:70,density:{enable:true,value_area:900}},
color:{value:"#3b82f6"},
shape:{type:"circle"},
opacity:{value:0.5,random:true},
size:{value:3,random:true},
line_linked:{
enable:true,
distance:160,
color:"#3b82f6",
opacity:0.35,
width:1.2
},
move:{
enable:true,
speed:1.2
}
},

interactivity:{
events:{
onhover:{enable:true,mode:"repulse"},
onclick:{enable:true,mode:"push"}
},
modes:{
repulse:{distance:120},
push:{particles_nb:4}
}
},

retina_detect:true

})

}

}



/* =========================
TYPING ANIMATION
========================= */

function startTyping(){

const typingElement = document.getElementById("typing")

if(!typingElement) return

const text = [
"Full Stack Software Engineer",
"Building Scalable Web Platforms",
"Creating Modern Web Experiences",
"Developing Real-World Software Systems"
]

let index = 0
let char = 0
let deleting = false

function type(){

let current = text[index]

if(!deleting){
char++
}else{
char--
}

typingElement.textContent =
current.substring(0,char)

let speed = deleting ? 40 : 70

if(!deleting && char === current.length){

speed = 2000
deleting = true

}
else if(deleting && char === 0){

deleting = false
index++

if(index >= text.length){
index = 0
}

}

setTimeout(type,speed)

}

type()

}
