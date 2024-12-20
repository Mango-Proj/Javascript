let move=0;
document.querySelector('#circle').onclick = function(){
    console.log(this);
    setInterval(() => {
        console.log(this);  // Console로 출력되는 두 this 객체가 동일한지 확인!!!
        move+=20;
        document.querySelector('#circle').style.left = move+'px'; 
    }, 250);
}