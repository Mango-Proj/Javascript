var slider = document.querySelector('input[name="range"]');
var output = document.querySelector('input[name="rangeValue"]');
var img = document.querySelector('img');

output.value = slider.value;

slider.oninput = function(){
    output.value = this.value;
    img.style.transform = "rotate("+this.value+"deg)";
    // img.style.transform = 'rotate(${this.value}deg); // 기능 작동 안 함 -> 나중에 문제 원인 찾을 것..!!!
}