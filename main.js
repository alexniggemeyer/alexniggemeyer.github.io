var pos = 0;
var projects = document.querySelector('.projects');
var projectWidth = document.querySelector('.project').offsetWidth;
var projectsWidth = document.querySelector('.projects').offsetWidth;
var project = document.querySelectorAll('.project');

projectCount = project.length;

console.log(projectWidth);
console.log('translate(' + (-2* projectsWidth) + 'px)');

function setTransform(){
    projects.style.transform = 'translate(' + (0.5*projectsWidth - (pos*projectWidth)) + 'px)';
}

function next(){
    pos = pos + 1;
    setTransform();
    console.log(pos);
}

function back(){
    pos = pos - 1;
    setTransform();
    console.log(pos);
}

setTransform();

window.addEventListener('resize', setTransform);