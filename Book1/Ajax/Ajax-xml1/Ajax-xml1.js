document.querySelector('.btn-primary').onclick = function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','Ajax-xml.xml');
    xhr.send();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const doc = this.responseXML;
            const lists = doc.querySelectorAll('list');

            let listGroup = '';

            for(let list of lists){
                console.log(list);
                console.log(list.childNodes);
                console.log(typeof list.childNodes[0], list.childNodes[0]);
                console.log(typeof list.childNodes[0].nodeValue, list.childNodes[0].nodeValue);
                let title = list.childNodes[0].nodeValue;
                listGroup += '<li class="list-group-item">'+title+'</li>';
            }
          
            document.querySelector('#pocket').innerHTML = '<ul class="list-group">'+listGroup+'</ul>';
        }
    }
}