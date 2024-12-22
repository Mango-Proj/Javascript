document.querySelector('.btn').onclick = function(){
    let num = document.querySelector('input[name="num"]').value;

    switch(parseInt(num)){
        case 1:
            document.forms[0].user.focus();
            break;
        case 2:
            document.forms['myForm'].user.focus();
            break;
        case 3:
            document.yourForm.user.focus();
            break;
    }
}