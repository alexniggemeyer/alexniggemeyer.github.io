var pos = 0;
var projects = document.querySelector('.projects');
var projectWidth = document.querySelector('.project').offsetWidth;
var projectsWidth = document.querySelector('.projects').offsetWidth;
var project = document.querySelectorAll('.project');
var dot = document.querySelectorAll('.dot');

let projectCount = project.length;
let projectMargins = parseFloat(window.getComputedStyle(project[0]).marginLeft) + parseFloat(window.getComputedStyle(project[0]).marginRight);
console.log(projectMargins);

function setTransform(){
    projects.style.transform = 'translate(' + (0.5*projectsWidth - (pos*projectWidth)) + 'px)';
    dot[pos].classList.add('active');
}

function next(){
    dot[pos].classList.remove('active');
    pos = pos + 1;
    setTransform();
    console.log(pos);
}

function back(){
    dot[pos].classList.remove('active');
    pos = pos - 1;
    setTransform();
    console.log(pos);
}

setTransform();



window.addEventListener('resize', setTransform);