const text = [
"Full Stack Software Engineer", 
"Building Scalable Web Platforms",
"Software Engineer building scalable systems",
"Creating modern websites",
"Developing real-world software solutions"
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

document.getElementById("typing").textContent =
current.substring(0,char)

let speed = deleting ? 40 : 70

if(!deleting && char === current.length){

speed = 2000
deleting = true

}

else if(deleting && char === 0){

deleting = false
index++

if(index === text.length){
index = 0
}

}

setTimeout(type,speed)

}

type()
