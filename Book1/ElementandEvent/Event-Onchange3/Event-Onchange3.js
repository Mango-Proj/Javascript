const radios = document.querySelectorAll('[name="subject"]');

for(let radio of radios){
    radio.onchange = function(){
        console.log(radio);
        console.log(radio.value);
    }
}

let holidays = [];
const checkboxs = document.querySelectorAll('[name="holiday"]');

for(let checkbox of checkboxs){
    checkbox.onchange = () => {
        console.log(checkbox.checked, checkbox.value);

        if(checkbox.checked){
            holidays.push(checkbox.value);
        }
        else{
            let index = holidays.indexOf(checkbox.value);
            if(index != -1){
                holidays.splice(index,1);
            }
        }

        console.log(holidays);
    }
}