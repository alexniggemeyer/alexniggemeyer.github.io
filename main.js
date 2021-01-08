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
    });

}

//setMinHeight();

//show intro of project

// is mobile?

var mobile = false;

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){

            mobile = true;
        }


var wrapper = document.querySelectorAll('.project');

wrapper.forEach((element, index) => {

    var img = element.querySelector('.projectLogo');
    var text = element.querySelector('p');
    var heading = element.querySelector('h3');

    

    var displayMode = window.getComputedStyle(img).display;

    if(mobile === true){
        element.addEventListener('click', function(){
            if(displayMode === 'block'){
                text.style.display = 'block';
                img.style.display = 'none';
                displayMode = window.getComputedStyle(img).display;
                
            }else{
                text.style.display = 'none';
                img.style.display = 'block';
                displayMode = window.getComputedStyle(img).display;
            }
   
        });

    }else{
        element.addEventListener('mouseover', function(){
            text.style.display = 'block';
            heading.style.display = 'block';
            img.style.display = 'none';

            console.log(heading.style.diplay);

        });
        element.addEventListener('mouseout', function(){
            text.style.display = 'none';
            heading.style.display = 'none';
            img.style.display = 'block';
        });
    }
});


var moreButton = document.querySelector('.moreButton');

//header parallax


window.addEventListener('scroll', ()=>{
    var scroll = window.pageYOffset;
    document.querySelector('.move').style.top = scroll /-2.5 + 'px';
})



//titel

/*let words =['reseach', 'prototype', 'experiment', 'explore'];

let wordSpace = document.querySelector('.subheading span');
let index = 0;

window.setInterval(function(){
    
    wordSpace.innerHTML = words[index];
    index ++;
    if(index > 3){
        index =0;
    }
}, 1000);*/


    


