document.querySelector('.btn-primary').onclick = function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','Ajax-basic-response.html');
    xhr.send();

    xhr.onload = function(){
        document.querySelector('#pocket').innerHTML = this.responseText;
    }
}