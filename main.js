var pos = 0;
var slider = document.querySelector('.projectslider');
var projects = document.querySelector('.projects');
var projectWidth = document.querySelector('.project').offsetWidth;
var projectsWidth = document.querySelector('.projects').offsetWidth;
var project = document.querySelectorAll('.project');
var dot = document.querySelectorAll('.dot');
var projectCount = project.length;


function setTransform(){

    project.forEach(element => {
        element.style.transform = 'translate(' + ( -pos*projectWidth) + 'px)';
    });
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

// set the min-Height of each setion to the viewport height

var section = document.querySelectorAll('section');

function setMinHeight() {
    section.forEach(element => {
        element.style.minHeight = window.screen.availHeight + 'px';
        console.log(window.screen.availHeight);        
    });

}

setMinHeight();

//show intro of project

var wrapper = document.querySelectorAll('.imgWrap')
var img = document.querySelectorAll('.imgWrap img');
var text = document.querySelectorAll('.imgWrap p');


img.forEach((element, index) => {
    element.addEventListener('click', function(){
        text[index].style.display = 'block';
        element.style.display = 'none';
    });
})

text.forEach((element, index) => {
    element.addEventListener('click', function(){
        element.style.display = 'none';
        img[index].style.display = '';
    });
});

var moreButton = document.querySelector('.moreButton');




