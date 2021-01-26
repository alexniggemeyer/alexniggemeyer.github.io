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

function requestDeviceMotion(callback) {
    if (window.DeviceMotionEvent == null) {
        callback(new Error("DeviceMotion is not supported."));
    } else if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission().then(function(state) {
            if (state == "granted") {
                callback(null);
            } else callback(new Error("Permission denied by user"));
        }, function(err) {
            callback(err);
        });
    } else { // no need for permission
        callback(null);
    }
}

function firstClick() {
    requestDeviceMotion(function(err) {
        if (err == null) {
            window.removeEventListener("click", firstClick);
            window.removeEventListener("touchend", firstClick);
            window.addEventListener("devicemotion", function(e) {

                let xRotationRate = Math.abs(Math.round(e.rotationRate.alpha));
                let yRotationRate = Math.abs(Math.round(e.rotationRate.beta));
            
                if(xRotationRate >= 90){
                    xRotationRate = 90;
                }
                if(yRotationRate >= 90){
                    yRotationRate = 90;
                }
            
                background.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2}px)`;
                depth.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2 * 1.2}px)`;
                contur.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2* 1.5}px)`;
        
            });

            window.addEventListener("deviceorientation", (e) =>{
  
                let yAxis = Math.floor(e.gamma);
                let xAxis = Math.floor(e.beta);
            
                if (executed == false){
                    xOffset = xAxis;
                    yOffset = yAxis;
                    executed = true;
                }
            
                
                let xMovement =  (xAxis - xOffset) / 2;
                let yMovement = (yAxis - yOffset) / 2;
                logo.style.transform = `rotateY(${yMovement}deg) rotateX(${xMovement}deg)`;
                
            });
        

        } else {
            // failed; a JS error object is stored in `err`
            alert(":'(");
        }
    });
}

window.addEventListener("click", firstClick);
window.addEventListener("touchend", firstClick);

//animation

const container = document.querySelector(".move");
const logo = document.querySelector(".logo");
const contur = document.querySelector("#contur");
const background = document.querySelector("#background");
const shadow = document.querySelector("#shadow");
const depth = document.querySelector("#depth");



  

    container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        logo.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      });
    
    
    container.addEventListener("mouseenter", (e) => {
        background.style.transform = "translateZ(60px)";
        depth.style.transform = "translateZ(80px)";
        contur.style.transform = "translateZ(120px)";
      });
    
    container.addEventListener("mouseleave", (e) => {
        background.style.transform = "translateZ(0)";
        depth.style.transform = "translateZ(0)";
        contur.style.transform = "translateZ(0)";
        logo.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });

    var executed = false;
    let xOffset;
    let yOffset;    
    
    
    /*  window.addEventListener("deviceorientation", (e) =>{
  
        let yAxis = Math.floor(e.gamma);
        let xAxis = Math.floor(e.beta);
    
        if (executed == false){
            xOffset = xAxis;
            yOffset = yAxis;
            executed = true;
        }
    
        
        let xMovement =  (xAxis - xOffset) / 2;
        let yMovement = (yAxis - yOffset) / 2;
        logo.style.transform = `rotateY(${yMovement}deg) rotateX(${xMovement}deg)`;
        //container.innerHTML =  `x: ${xMovement} y: ${yAxis} xOffset ${xOffset} yOffset: ${yOffset}` ;
    });*/



 
  

  
  /*window.addEventListener("devicemotion", (e) =>{
  
      let xRotationRate = Math.abs(Math.round(e.rotationRate.alpha));
      let yRotationRate = Math.abs(Math.round(e.rotationRate.beta));
  
      if(xRotationRate >= 90){
          xRotationRate = 90;
      }
      if(yRotationRate >= 90){
          yRotationRate = 90;
      }
      //logo.style.transform = `rotateY(${yRotationRate / 3}deg) rotateX(${xRotationRate /3}deg)`;
  
      //container.innerHTML =  `x: ${xRotationRate} y: ${yRotationRate}` ;
  
      background.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2}px)`;
      depth.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2 * 1.2}px)`;
      contur.style.transform = `translateZ(${(xRotationRate + yRotationRate)/2* 1.5}px)`;
  
      
  });*/



  


//header parallax


window.addEventListener('scroll', ()=>{
    var scroll = window.pageYOffset;
    document.querySelector('.move').style.top = scroll /-2.5 + 'px';
})

// is mobile?

function projectSlider(){
    //check device
    

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

    //setup Click or Touch

    var wrapper = document.querySelectorAll('.project');

    wrapper.forEach((element, index) => {

        var img = element.querySelector('.projectLogo');
        var info = element.querySelector('.shortInfo');
        var displayMode = window.getComputedStyle(img).display;

        if(mobile === true){
            element.addEventListener('click', function(){
                if(displayMode === 'block'){
                    info.style.display = 'flex';
                    img.style.display = 'none';
                    displayMode = window.getComputedStyle(img).display;
                    
                }else{
                    info.style.display = 'none';
                    img.style.display = 'block';
                    displayMode = window.getComputedStyle(img).display;
                }
    
            });

        }else{
            element.addEventListener('mouseover', function(){
                info.style.display = 'flex';
                img.style.display = 'none';

            });
            element.addEventListener('mouseout', function(){
                info.style.display = 'none';
                img.style.display = 'block';
            });
        }
    });

    //only show one project

    var pos = 0;
    var slider = document.querySelector('.projectslider');
    var projectWidth = document.querySelector('.project').offsetWidth;
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

    //swipeGesture

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
};

// Menubutton handling
function menuHandler(){
    let menuButton = document.querySelector('.menuButton')
    let menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function(){
        menu.style.display = "block";
        console.log("HI");
    });

    document.addEventListener('click', function(evt){
        let tartgetElement = evt.target;
        
        if (tartgetElement != menu && tartgetElement != menuButton && menu.style.display === "block"){
                menu.style.display = "none";        
        }
    });

};

if(document.querySelector(".projectslider") != null){
    projectSlider();
}

menuHandler();