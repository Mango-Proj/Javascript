const box = document.querySelector('#box');

box.onmousedown = function(event){
    console.log(event);
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.backgroundColor = 'lightgreen';
}

box.onmouseup = (evt) => {
    console.log(evt);
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = 'lightcoral';
}