window.addEventListener('scroll', ()=>{
    var scroll = window.pageYOffset;
    document.querySelector('.move').style.top = scroll /-2.5 + 'px';
})

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


window.addEventListener('resize', headerSizing);

headerSizing();

