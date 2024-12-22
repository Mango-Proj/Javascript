const listArray = [];
const lists = document.querySelectorAll('.list-group-item');
for(let list of lists){
    listArray.push(list.innerText);
}

document.querySelector('.btn-success').addEventListener('click',function(){
    listArray.sort();
    setListGroup();
})

document.querySelector('.btn-primary').addEventListener('click',function(){
    location.reload();
})

document.querySelector('.btn-danger').addEventListener('click',function(){
    listArray.reverse();
    setListGroup();
})

function setListGroup(){
    let tempArray = [];
    for(let list of listArray){
        tempArray.push('<li class="list-group-item">'+list+'</li>')
    }
    document.querySelector('.list-group').innerHTML = tempArray.join('');
}