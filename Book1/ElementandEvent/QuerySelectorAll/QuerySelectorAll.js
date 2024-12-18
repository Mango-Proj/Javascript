const buttons = document.querySelectorAll('.btn');

for(let btn of buttons){
    btn.onclick() = function(){
        console.log(this.innerText);
    }
}