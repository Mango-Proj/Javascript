function myFunction(){
    console.log(2);
}

window.onload = function(){
    console.log(3);
}

window.addEventListener('onload', function(){
    console.log(4);
})

console.log(5);