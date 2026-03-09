particlesJS("particles-js", {
particles: {
number: {
value: 80,
density: {
enable: true,
value_area: 800
}
},

color: { value: "#3b82f6" },

shape: { type: "circle" },

opacity: {
value: 0.5,
random: true
},

size: {
value: 3,
random: true
},

line_linked: {
enable: true,
distance: 150,
color: "#3b82f6",
opacity: 0.3,
width: 1
},

move: {
enable: true,
speed: 1.5
}
},

interactivity: {

events: {

onhover: {
enable: true,
mode: "repulse"
},

onclick: {
enable: true,
mode: "push"
}

},

modes: {

repulse: {
distance: 120
},

push: {
particles_nb: 4
}

}

},

retina_detect: true
});
