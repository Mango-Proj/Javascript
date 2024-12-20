let move=0;
document.querySelector('#circle').onclick = function(){
    console.log(this);
    setInterval(() => {
       move+=20;
       document.querySelector('#circle').style.left = move+'px'; 
    }, 250);
}