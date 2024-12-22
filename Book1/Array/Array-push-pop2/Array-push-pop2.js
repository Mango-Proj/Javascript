let lists = [];
const checkboxes = document.querySelectorAll('[name="city"]');

for(let checkbox of checkboxes){
    checkbox.onchange = setListGroup;
}

function setListGroup(){
    resetListGroup();

    for(let checkbox of checkboxes){
        if(checkbox.checked){
            lists.push('<li class="list-group-item">'+checkbox.value+'</li>');
        }
    }

    const target =document.querySelector('.col:nth-of-type(2)');
    target.innerHTML = '<ul class="list-group">'+lists.join('')+'</ul>';
}
function resetListGroup(){
    if(lists.length){
        console.log('[전]',lists.toString());
        while(lists.length){
            lists.pop();
            console.log('[후]',lists.toString());
        }
    }
}