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
window.addEventListener('resize', setTransform);


var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;


slider.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    
}, false);

slider.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();

}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        next();
    }
    if (touchendX > touchstartX) {
        back();
    }
}

let menuButton = document.querySelector('.menuButton')
let menu = document.querySelector('.menu');

menuButton.addEventListener('click', function(){
    menu.style.display = "block";
});

document.addEventListener('click', function(evt){
    let tartgetElement = evt.target;
    
    if (tartgetElement != menu && tartgetElement != menuButton && menu.style.display === "block"){
            menu.style.display = "none";        
    }

});

// address bar jumping-fix

var els = document.querySelector('section')

els.onload = function() {
    this.style.minHeight = this.clientHeight + 'px';
  }



