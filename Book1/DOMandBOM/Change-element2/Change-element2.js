const lists = document.querySelectorAll('.list-group-item');

for(let list of lists){
    list.onclick = function(){
        console.log(list.className);
        if(list.className == 'list-group-item'){
            resetList();
            list.setAttribute('class','list-group-item active');
        }
    }
}

function resetList(){
    for(let list of lists){
        list.setAttribute('class','list-group-item');
    }
}