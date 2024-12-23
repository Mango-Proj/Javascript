document.querySelector('.btn-primary').onclick = function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','Ajax-xml.xml');
    xhr.send();

    xhr.onload = function(){
        if(this.status == 200){
            const doc = this.responseXML;
            const lists = doc.querySelectorAll('list');

            let listGroup = [];

            for(let list of lists){
                let title = list.childNodes[0].nodeValue;
                listGroup.push('<li class="list-group-item">'+title+'</li>');
            }
          
            let newUI = '<ul class="list-group">'+listGroup.join('')+'</ul>';
            document.querySelector('#pocket').innerHTML = newUI;
        }
    }
}