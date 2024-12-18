const radios = document.getElementsByName('subject');

let i=0;
for(let radio of radios){
    setTimeout(function(){
        radio.checked = true;
    },1000*i);
    i++;
}