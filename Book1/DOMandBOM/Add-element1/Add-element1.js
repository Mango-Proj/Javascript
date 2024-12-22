const lists = document.querySelectorAll('li');

for(let list of lists){
    list.onclick = function(){
        const newList = document.createElement('li');

        const newAttr = document.createAttribute('class');
        newAttr.value = 'list-group-item active';
        newList.setAttributeNode(newAttr);

        const newText = list.innerText+'[추가]';
        const newTextNode = document.createTextNode(newText);
        newList.appendChild(newTextNode);

        console.log(list.parentElement);
        list.parentElement.appendChild(newList);
    }
}