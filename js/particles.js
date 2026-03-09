particlesJS("particles-js", {

particles: {

number: {
value: 70,
density: {
enable: true,
value_area: 900
}
},

color: {
value: "#3b82f6"
},

shape: {
type: "circle"
},

opacity: {
value: 0.5,
random: true,
anim: {
enable: true,
speed: 0.5,
opacity_min: 0.2,
sync: false
}
},

size: {
value: 3,
random: true,
anim: {
enable: false
}
},

line_linked: {
enable: true,
distance: 160,
color: "#3b82f6",
opacity: 0.35,
width: 1.3
},

move: {
enable: true,
speed: 1.3,
direction: "none",
random: false,
straight: false,
out_mode: "out",
bounce: false
}

},

interactivity: {

detect_on: "canvas",

events: {

onhover: {
enable: true,
mode: "repulse"
},

onclick: {
enable: true,
mode: "push"
},

resize: true

},

modes: {

repulse: {
distance: 120,
duration: 0.4
},

push: {
particles_nb: 4
}

}

},

retina_detect: true

});
