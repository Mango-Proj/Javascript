function getElement(param){
    return document.querySelector(param);
}

getElement('.btn').onclick = function(){
    const query = getElement('input[name="query"]').value;

    if(query.length > 1){
        alert(query+' 검색 중 =3=3=3');
    }
    else{
        alert('검색어는 두 글자 이상 입력해주세요.');
        getElement('input[name="query"]').focus();
    }
}

getElement('#keyword').addEventListener('keydown', function(evt){
    console.log(evt);
    console.log(evt.keyCode);

    if(evt.keyCode == 13 && this.value.length > 1){
        alert(this.value+' 검색 중 =3=3=3');
    }
})