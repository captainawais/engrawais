const text = [
"Full Stack Software Engineer",
"Building Scalable Web Platforms",
"Designing Real World Digital Systems"
]

let index = 0
let char = 0

function type(){

if(char < text[index].length){

document.getElementById("typing").innerHTML += text[index].charAt(char)

char++

setTimeout(type,40)

}else{

setTimeout(erase,2000)

}

}

function erase(){

if(char > 0){

document.getElementById("typing").innerHTML = text[index].substring(0,char-1)

char--

setTimeout(erase,30)

}else{

index++

if(index >= text.length){
index = 0
}

setTimeout(type,500)

}

}

type()
