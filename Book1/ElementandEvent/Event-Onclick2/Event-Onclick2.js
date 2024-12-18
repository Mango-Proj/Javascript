function myFunction(){
    alert('HTML 요소의 이벤트 속성에서 myFunction 호출');
}

document.querySelector('.btn-danger').onclick = function(){
    console.log('이벤트 핸들러#1');
}
document.querySelector('.btn-danger').onclick = function(){
    console.log('이벤트 핸들러#2');
}


document.querySelector('.btn-warning').addEventListener('click', function(){
    console.log('이벤트 리스너#1');
})
document.querySelector('.btn-warning').addEventListener('click', function(){
    console.log('이벤트 리스너#2');
})