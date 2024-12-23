document.querySelector('.btn-primary').onclick = function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','Ajax-basic-response.html');
    xhr.send();

    xhr.onprogress = function(event){
        console.log(event);
        if(event.lengthComputable){
            console.log('Received '+event.loaded+' of '+ event.total+'bytes');
            //console.log('Received ${event.loaded} of ${event.total} bytes'); // 해당 코드는 제대로 실행되지 않을 수 있어서 우선 다른 확실한 방법으로 코드 수정 -> 문제 원인은 차후 발견하여 적용할 것
        }
        else{
            console.log('Received '+event.loaded+'bytes');
            //console.log('Received ${event.loaded} bytes'); // 해당 코드는 제대로 실행되지 않을 수 있어서 우선 다른 확실한 방법으로 코드 수정 -> 문제 원인은 차후 발견하여 적용할 것
        }
    }

    xhr.onload = function(){
        console.log(this);
        if(this.status != 200){
            console.log('Error '+this.status+' : '+ this.statusText);
            //console.log('Error ${this.status} : ${this.statusText}'); // 해당 코드는 제대로 실행되지 않을 수 있어서 우선 다른 확실한 방법으로 코드 수정 -> 문제 원인은 차후 발견하여 적용할 것
        }
        else{
            document.querySelector('#pocket').innerHTML = this.responseText;
        }
    }

    xhr.onerror = function(){
        alert('ajax 오류 발생');
    }
}