
let player = document.querySelectorAll('.videoplayer');


player.forEach(elemtent => setUpPlayer(elemtent));

function setUpPlayer(el){
    //looks for the tags
    let video = el.querySelector('video');
    let button = el.querySelector('.playbutton');

    //adds onclick to the HTML-Tag
    video.addEventListener("click", handlePlayButton);  
    button.addEventListener("click", handlePlayButton);

    //calls autoplay() on every scroll
    window.onscroll = autoplay;             


    async function autoplay(){
        if(video.getBoundingClientRect().top <= window.innerHeight/3){      //sets the start point
            try{
                await video.play();
                button.classList.add("paused");

            } catch(err){
                button.classList.remove('paused');
            }
            

        }
    }

    // if autplay() will not work the video can be started by the user
    function handlePlayButton(){
        if(video.paused){
            video.play();
            button.classList.add("paused");
        }else{
            video.pause();
            button.classList.remove('paused');
    }
}
}









