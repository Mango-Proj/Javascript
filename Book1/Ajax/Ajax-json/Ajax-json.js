document.querySelector('.btn-primary').onclick = function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','Ajax-json.json');
    xhr.send();

    xhr.onload = function(){
        if(this.status == 200){
            const doc = JSON.parse(this.responseText);
            const lists = doc.lists;

            console.log(doc);
            console.log(doc.lists);

            let listGroup = [];
            lists.forEach(function(item,index){
                listGroup.push('<li class="list-group-item">'+item.list+'</li>')
            });
          
            let newUI = '<ul class="list-group">'+listGroup.join('')+'</ul>';
            document.querySelector('#pocket').innerHTML = newUI;
        }
    }
}