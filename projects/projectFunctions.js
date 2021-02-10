
//Remaping Inputs to new Range

function remap(input,min,max,newMin,newMax){

    output = newMin + ((input-min)/(max-min))*(newMax-newMin);

    if(output > newMax){
        output = newMax;
    };

    return output;
}

function headerSizing(){

    let headingWidth = (window.innerWidth/16)*9;

    if(window.innerWidth >= 600){
        document.querySelector("#intro").setAttribute("style", "height:" + headingWidth + "px;");
        

        let input = window.innerWidth
        document.querySelector(".heading").setAttribute("style", "transform:  scale(" + remap(input,600,1920,1,2) + ");");
        
    };
};

headerSizing();

window.addEventListener('resize', headerSizing);

// Popuphandler for AU Screenshot

let grid = document.querySelector(".grid");
let gridItem = document.querySelectorAll('.gridItem');
let popup = document.querySelector('.popup');
let Arrow = document.createElement("style");
document.head.appendChild(Arrow);



gridItem.forEach(element => {
    
    element.addEventListener('mouseover', (e)=>{

        if(element.className == "gridItem prototype"){
            popup.textContent = "Import the prototype!"
        }
        if(element.className == "gridItem userSettings"){
            popup.textContent = " Adjust the properties of the user to your needs."
        }
        if(element.className == "gridItem preview"){
            popup.textContent = "The Preview shows the predejtions based on the usersettings."
        }
        if(element.className == "gridItem log"){
            popup.textContent = "The Log Window outputs interactions of the artificial User with the prototype, to give detailed feedback."
        }

        if(window.innerWidth > 600){

            //for desktop

            let popupWidth = popup.offsetWidth;

            if(element.offsetLeft < 330){
                Arrow.innerHTML = ".popup:before{ content: ''; position: absolute; border-width: 1rem; top: 1rem; margin-left: -3rem; border-style: solid; border-color:  transparent #39B4CF transparent transparent;}";
                popup.setAttribute("style", `display: inline;max-width: 10rem; transform: translate(${element.offsetLeft+element.offsetWidth+16}px, ${element.offsetTop + (element.offsetHeight/4)}px)`);
                
            }else{
                Arrow.innerHTML = ".popup:after{ content: ''; position: absolute; border-width: 1rem; top: 1rem; margin-left: 50%; left: 50%;border-style: solid; border-color:  transparent transparent transparent  #39B4CF;}";
                popup.setAttribute("style", `display: inline;max-width: 10rem; transform: translate(${element.offsetLeft -popupWidth -16}px, ${element.offsetTop + (element.offsetHeight/4)}px)`);
            };
        }else{

            //for mobile

            popupWidth = grid.offsetWidth;
            popup.setAttribute("style", `display: inline;width:${popupWidth-32}px;  transform: translate(${grid.offsetLeft-16}px, ${grid.offsetHeight+16}px)`);
            
            if(element.className == "gridItem userSettings" || "gridItem prototype"){
                Arrow.innerHTML = ".popup:after{ content: ''; position: absolute; border-width: 1rem; top:-1.95rem; left: 10%;border-style: solid; border-color:  transparent transparent #39B4CF transparent;}";
            }
            if(element.className == "gridItem preview"){
                Arrow.innerHTML = ".popup:after{ content: ''; position: absolute; border-width: 1rem; top:-1.95rem; left: 50%;border-style: solid; border-color:  transparent transparent #39B4CF transparent;}";
            }
            if(element.className == "gridItem log"){
                Arrow.innerHTML = ".popup:after{ content: ''; position: absolute; border-width: 1rem; top:-1.95rem; left: 85%;border-style: solid; border-color:  transparent transparent #39B4CF transparent;}";
            }
        
        }




    });
});


//IK Challange Animations


let counterText = document.querySelector(".counter");
counterText.textContent = 0;

var counterTest = {
    value: 0,
};

let pathLeft = document.querySelectorAll(".left path");
let circleLeft = document.querySelectorAll(".left circle");
let pathRight = document.querySelectorAll(".right path");
let circleRight = document.querySelectorAll(".right circle");
let circleTop = document.querySelectorAll(".top circle");
let pathTop = document.querySelectorAll(".top path");



var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000,
    autoplay: false,
  });

tl
.add({
    targets: counterTest,
    value: 575,
    round: 1,
    easing: 'linear',
    update: function() {
        counterText.textContent = JSON.stringify(counterTest.value);
    }
})
.add({
    targets: [circleLeft,circleRight, circleTop],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 250,
    direction: 'reverse',
  })
.add({
    targets: [pathLeft, pathRight, pathTop],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 250,
    direction: 'normal',
})

// Onlineservices 

let onlineservices = document.querySelector('.onlineservices')
let onlineserviceValue = document.querySelectorAll('.onlineserviceValue');

// Share managae Verify picture


let functionStrokes = document.querySelectorAll('.function .stroke');
let feelStrokes = document.querySelectorAll('.feel .stroke');

var tlFunction = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2000,
    autoplay: false,
    round: 2
});

var tlFeel = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2000,
    autoplay: false,
    round: 2
});

tlFunction
.add({
    targets: functionStrokes[0],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'normal',

})
.add({
    targets: functionStrokes[2],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'normal',

})
.add({
    targets: functionStrokes[1],
    strokeDashoffset: [anime.setDashoffset, 380],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'reverse',

})

tlFeel
.add({
    targets: feelStrokes[0],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'normal',

})
.add({
    targets: feelStrokes[1],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'normal',

})
.add({
    targets: feelStrokes[2],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    direction: 'normal',

})

//handling animations on scroll
tlPlayed = false;
tlFunctionPlayed = false;
tlFeelPlayed = false;

window.addEventListener('scroll', (e)=>{

    if((counterText.getBoundingClientRect().top < 700 && tlPlayed == false)){
        tl.play();
        tlPlayed = true;
        
    }
    
    if(onlineservices.getBoundingClientRect().top < 700){
        anime({
            targets: onlineserviceValue,
            width: function(el,i){
                return onlineserviceValue[i].textContent;
            },
            color: 'rgba(225,255,255, 1)' 
        })
    }    

    if(document.querySelector('.function').getBoundingClientRect().top < 700 && tlFunctionPlayed == false){

        tlFunction.play();
        tlFunctionPlayed = true;
    }

    if(document.querySelector('.feel').getBoundingClientRect().top < 700 && tlFeelPlayed == false){
        tlFeel.play();
        tlFeelPlayed = true;
    }

    
});


function openCity(evt, cityName, tabcontent, tablinks) {
    // Declare all variables
    var i;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(tablinks);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// toggleButton

let toggleArea = document.querySelectorAll('.toggleButton span');
let activeArea = document.querySelector('.active');
let video = document.querySelectorAll('.sharingInteraction video');

toggleArea[0].setAttribute('style', 'color: white');
video[1].setAttribute('style','display:none');

toggleArea[0].addEventListener('click',(e)=>{
    if(activeArea.style.transform == 'translateX(100%)'){
        activeArea.setAttribute('style','transform: translateX(0%)');
    }else{
        activeArea.setAttribute('style','transform: translateX(100%)');
    }
    toggleArea[0].setAttribute('style', 'color: white');
    toggleArea[1].setAttribute('style', 'color: black');

    video[1].setAttribute('style','display:none');
    video[0].setAttribute('style','display:block');
    
})

toggleArea[1].addEventListener('click',(e)=>{
    if(activeArea.style.transform == 'translateX(100%)'){
        activeArea.setAttribute('style','transform: translateX(0%)');
    }else{
        activeArea.setAttribute('style','transform: translateX(100%)');
    }
    toggleArea[1].setAttribute('style', 'color: white');
    toggleArea[0].setAttribute('style', 'color: black');

    video[0].setAttribute('style','display:none');
    video[1].setAttribute('style','display:block');
    
})

let title = document.querySelectorAll('.titleBox h3');
let titleUnderline = document.querySelectorAll('.underline')

title.forEach((element,index) => {
    let titleWidth = element.getBoundingClientRect().width;
    titleUnderline[index].style.width = `${titleWidth + 48}px`; 
});


