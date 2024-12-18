
function helloWorld(){
    alert('hello world!');
}

helloWorld();

document.querySelector('.btn-primary').onclick = function(){ 
    helloWorld();
}
document.querySelector('.btn-danger').onclick = helloWorld;
