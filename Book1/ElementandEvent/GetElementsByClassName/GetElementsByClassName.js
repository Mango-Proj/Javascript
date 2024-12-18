const lists = document.getElementsByClassName('list-group-item');
const active = document.getElementsByClassName('list-group-item active');

let i=0;

if(lists.length > 0){
    while(i<lists.length){
        lists[i].innerText = i+'번째';
        i++;
    }
}

active[active.length -1].innerHTML = '<em>선택한 목록</em>'