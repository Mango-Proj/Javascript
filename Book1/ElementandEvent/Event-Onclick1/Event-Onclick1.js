function myFunction(){
    alert('HTML 요소의 이벤트 속성에서 myFunction 호출');
}

document.querySelector('.btn-danger').onclick = function(){
    alert('이벤트 핸들러');
}

document.querySelector('.btn-warning').addEventListener('click', function(){
    alert('이벤트 리스너');
})