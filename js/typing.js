const text = [
"Full Stack Software Engineer", 
"Building Scalable Web Platforms",
"Software Engineer building scalable digital systems",
"Creating modern web platforms",
"Developing real-world software solutions"
]

let index = 0
let char = 0
let current = ""
let isDeleting = false

function type(){

current = text[index]

if(!isDeleting){
char++
}else{
char--
}

document.getElementById("typing").textContent = current.substring(0,char)

let speed = isDeleting ? 40 : 80

if(!isDeleting && char === current.length){
speed = 2000
isDeleting = true
}

else if(isDeleting && char === 0){
isDeleting = false
index++
if(index === text.length){
index = 0
}
}

setTimeout(type,speed)

}

type()
