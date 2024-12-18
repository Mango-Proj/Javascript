function checkAge(){
    let age = document.getElementById('age').value;
    let passFail = (age > 18)?'관람 가능':'관람 불가';
    
    sendMessage(passFail);
}
function sendMessage(msg){
    let message;
    
    if(msg == '관람 가능')
        message = '<div class="alert alert-success" role="alert">'+msg+'</div>';
    else 
        message = '<div class="alert alert-danger" role="alert">'+msg+'</div>';

    document.getElementById('msg').innerHTML = message;
}