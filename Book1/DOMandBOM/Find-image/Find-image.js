document.querySelector('.btn').onclick = function(){
    let num = document.querySelector('input[name="num"]').value;
    num = parseInt(num)-1;

    let imgs = Array.from(document.images);

    imgs.forEach(function(item, index){
        if(num == index){
            item.style.display='none';
        }
        else{
            item.style.display='';
        }
    });
}