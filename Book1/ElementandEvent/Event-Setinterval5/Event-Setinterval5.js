let interval;
let flag=false;
let move=0;

document.querySelector('#circle').onclick = function(){
    if(flag == false) {
        flag = true;
        interval = setInterval(() => { // '=>' 함수 사용하여 this 그대로 사용..?
            move+=20;
            this.style.left = move+'px'; 
        }, 250);
    }
    else{
        flag = false;
        clearInterval(interval);
    }
}