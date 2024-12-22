document.querySelector('.btn-danger').onclick = function(){
    location.reload();
}

const ul = document.querySelector('.list-group');

document.querySelector('.btn-warning').onclick = function(){
    const target = document.querySelectorAll('li')[2];
    ul.removeChild(target);
}

document.querySelector('.btn-success').onclick = function(){
    console.log(ul.children);
    
    if(ul.children.length){
        ul.removeChild(ul.children[0]);
    }
}