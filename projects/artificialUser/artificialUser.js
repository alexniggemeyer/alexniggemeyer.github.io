window.addEventListener('scroll', ()=>{
    var scroll = window.pageYOffset;
    document.querySelector('.move').style.top = scroll /-2.5 + 'px';
})


let headingWidth = (window.innerWidth/16)*9;


if(window.innerWidth >= 600){
    document.querySelector("#intro").setAttribute("style", "height:" + headingWidth + "px;");
    console.log("HIH");
};


