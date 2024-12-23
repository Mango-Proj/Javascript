document.querySelector('.btn-primary').onclick = function() {
    fetch('Ajax-xml.xml')
      .then(response => response.text())
      .then(result => {
        console.log('[성공]', result);
      })
      .catch(error => {
        console.error('[실패]', error);
      });
  }