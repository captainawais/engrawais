
fetch("sections/hero.html")
.then(res => res.text())
.then(data => {
document.getElementById("hero").innerHTML = data;
});
