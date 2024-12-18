

function plusOperation1(a,b){
    return a+b;
}

let sum1 = plusOperation1(3,4);
let sum1Text = '계산 결과는'+sum1+'입니다.';

document.querySelector('input[name="sum1"]').value = sum1Text;


let plusOperation2 = function(x,y){
    return x+y;
}

let sum2 = plusOperation2(5,6);
let sum2Text = '계산 결과는'+sum2+'입니다.';

document.querySelector('input[name="sum2"]').value = sum2Text;


