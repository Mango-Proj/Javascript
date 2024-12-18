const radios = document.querySelectorAll('[name="subject"]');

for(let radio of radios){
    radio.onchange = function(){
        console.log(radio);
        console.log(radio.value);
    }
}

const checkboxs = document.querySelectorAll('[name="holiday"]');

for(let checkbox of checkboxs){
    checkbox.onchange = function(){
        console.log(checkbox);
        console.log(checkbox.checked, checkbox.value);
    }
}