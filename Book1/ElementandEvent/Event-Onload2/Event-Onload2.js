const videos = document.querySelector('iframe');

videos[0].onload = function(){
    console.log(1);
}

videos[1].onload = function(){
    console.log(2);
}

videos[2].addEventListener('load',function(){
    console.log(3);
});

// function onYouTubeIframeAPIReady(){
//     let player = new YT.Player('player',{
//         events:{
//             'onReady': onPlayerReady
//         }
//     });
// }

// function onPlayerReady(evt){
//     evt.target.setVolume(0);
//     evt.target.playVideo();
// }