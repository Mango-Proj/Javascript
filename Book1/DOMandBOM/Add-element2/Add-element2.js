const lists = document.querySelectorAll('li');

for(let list of lists){
    list.onclick = function(){
        makeElement(this);
    }
}

function makeElement(list){
    const newList = document.createElement('li');

    const newAttr = document.createAttribute('class');
    newAttr.value = 'list-group-item active';
    newList.setAttributeNode(newAttr);

    const newText = list.innerText+'[추가]';
    const newTextNode = document.createTextNode(newText);
    newList.appendChild(newTextNode);

    newList.onclick = () => makeElement(newList); //새로 만든 노드에 이벤트 추가

    console.log(list.parentElement);
    list.parentElement.appendChild(newList);
}