let lists = [];
const checkboxes = document.querySelectorAll('[name="city"]');

for(let checkbox of checkboxes){
    checkbox.onchange = () => {
        if(checkbox.checked){
            lists.push(checkbox.value);
        }
        else{
            let index = lists.indexOf(checkbox.value);
            if(index != -1){
                lists.splice(index,1);
            }
        }
        setListGroup();
    }
}

function setListGroup(){
    let inlist = [];
    for(let list of lists){
        inlist.push('<li class="list-group-item">'+list+'</li>');
    }
    const target =document.querySelector('.col:nth-of-type(2)');
    target.innerHTML = '<ul class="list-group">'+lists.join('')+'</ul>';
}