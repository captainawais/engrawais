function loadSection(id,file){

fetch(file)
.then(res => res.text())
.then(data => {

document.getElementById(id).innerHTML = data

})

}


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
