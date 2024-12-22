document.querySelector('.btn').onclick = function(){
    let num = document.querySelector('input[name="num"]').value;
    num = parseInt(num)-1;

    let hyperlinks = document.links;

    [...hyperlinks].forEach(function(item, index){
        if(num == index)item.click();
    });
}