document.querySelector('.btn-primary').onclick = function() {
  fetch('Ajax-json.json')
    .then(response => response.json())
    .then(result => {
      console.log('[성공]', result);
    })
    .catch(error => {
      console.error('[실패]', error);
    });
}