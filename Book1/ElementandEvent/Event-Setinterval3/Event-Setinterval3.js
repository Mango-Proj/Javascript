let move=0;
document.querySelector('#circle').onclick = function(){
    const that = this; // this(document.querySelector('#circle'))를 그대로 사용 - 코드 중복 방지 
    setInterval(function(){
        console.log(this);  // Console로 출력되는 두 this 객체가 동일한지 확인!!!
        move+=20;
        that.style.left = move+'px'; 
    }, 250);
}