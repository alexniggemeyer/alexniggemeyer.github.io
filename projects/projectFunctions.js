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

// Popuphandler

let gridItem = document.querySelectorAll('.gridItem');
let popup = document.querySelector('.popup');
let Arrow = document.createElement("style");
document.head.appendChild(Arrow);


gridItem.forEach(element => {
    
    element.addEventListener('mouseover', (e)=>{
        
        console.log(element.offsetHeight);

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

        let popupWidth = popup.offsetWidth;

        if(element.offsetLeft < 330){
            Arrow.innerHTML = ".popup:before{ content: ''; position: absolute; border-width: 1rem; top: 1rem; margin-left: -3rem; border-style: solid; border-color:  transparent #39B4CF transparent transparent;}";
            popup.setAttribute("style", `display: inline; transform: translate(${element.offsetLeft+element.offsetWidth+16}px, ${element.offsetTop + (element.offsetHeight/4)}px)`);
            
        }else{
            Arrow.innerHTML = ".popup:after{ content: ''; position: absolute; border-width: 1rem; top: 1rem; margin-left: 50%; left: 50%;border-style: solid; border-color:  transparent transparent transparent  #39B4CF;}";
            popup.setAttribute("style", `display: inline; transform: translate(${element.offsetLeft -popupWidth -16}px, ${element.offsetTop + (element.offsetHeight/4)}px)`);
        };
    });
});

