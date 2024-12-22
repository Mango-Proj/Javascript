let countryArray = [];
let cityArray = [];

document.querySelector('.btn').onclick = function(){
    if(countryArray.length && cityArray.length){
        const concatArray = countryArray.concat(cityArray);
        document.querySelector('#pocket').innerText = concatArray.join('|');
    }
    else{
        alert('좌우 선택을 먼저 해주세요.');
    }
}

const country = document.querySelector('[name="country"]');

country.onchange = function(){
    countryArray = [];
    for(let option of country.options){
        if(option.selected){
            countryArray.push(option.value);
        }
        else{
            let index = countryArray.indexOf(option.value);
            if(index != -1){
                countryArray.splice(index,1);
            }
        }
    }

    console.log(countryArray);
}

const cities = document.querySelectorAll('[name="city"]');

for(let city of cities){
    city.onchange = function(){
        if(city.checked){
            cityArray.push(city.value);
        }
        else{
            let index = cityArray.indexOf(city.value);
            if(index != -1){
                cityArray.splice(index,1);
            }
        }
        console.log(cityArray);
    }
}
