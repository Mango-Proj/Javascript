let move=0;
document.querySelector('#circle').onclick = function(){
    console.log(1,this);
    setInterval(() => { // '=>' 함수 사용하여 this 그대로 사용..?
        console.log(2, this);  
        move+=20;
        this.style.left = move+'px'; 
    }, 250);
}