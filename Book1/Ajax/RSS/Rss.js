document.querySelector('.btn-primary').onclick = function(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','rss.xml');
  xhr.send();

  xhr.onload = function(){
    if(this.status == 200){
      const doc = this.responseXML;
      const items = doc.querySelectorAll('item');

      let listGroup = [];
      for(let item of items){
        let title = item.querySelector('title').childNodes[0].nodeValue;
        let link = item.querySelector('link').childNodes[0].nodeValue;

        listGroup.push(`<a href="${link}" class="list-group-item list-group-item-active" target="_blank">${title}</a>`);

        let newUI = `<div class="list-group">${listGroup.join('')}</div>`;

        document.querySelector('#pocket').innerHTML = newUI;
      }
    }
  };
}