

//화살표 함수 예시...
// const myFunc1 = (x,y) => x+y;
// const myFunc2 = (x,y) => {
//     return x+y;
// };


window.onload = function(){
    console.log(1, this.toString());
}

document.querySelector('.btn-primary').onclick = function(){ 
    console.log(2, this.toString());
}
document.querySelector('.btn-danger').onclick = () => {
    console.log(3, this.toString());
};
