document.querySelector('.btn-primary').onclick = function() {
  fetch('Ajax-json.json')
    .then(response => response.json())
    .then(result => {
      const lists = result.lists;

      let listGroup = [];
      lists.forEach(function(item, index) {
        listGroup.push(`<li class="list-group-item">${item.list}</li>`);
      });

      let newUI = `<ul class="list-group">${listGroup.join('')}</ul>`;
      document.querySelector('#pocket').innerHTML = newUI;
    })
    .catch(error => {
      console.error('실패', error);
    });
}