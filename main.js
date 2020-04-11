var pos = 0;
var slider = document.querySelector('.projectslider');
var projects = document.querySelector('.projects');
var projectWidth = document.querySelector('.project').offsetWidth;
var projectsWidth = document.querySelector('.projects').offsetWidth;
var project = document.querySelectorAll('.project');
var dot = document.querySelectorAll('.dot');
var projectCount = project.length;


function setTransform(){
    projects.style.transform = 'translate(' + (0.5*projectsWidth - (pos*projectWidth)) + 'px)';
    dot[pos].classList.add('active');
}

function next(){
    dot[pos].classList.remove('active');
    pos = Math.min(pos + 1, projectCount - 1);
    setTransform();
}

function back(){
    dot[pos].classList.remove('active');
    pos = Math.max(pos - 1, 0);
    setTransform();
}

setTransform();


var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

slider.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

slider.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
        next();
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
        back();
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
}


window.addEventListener('resize', setTransform);