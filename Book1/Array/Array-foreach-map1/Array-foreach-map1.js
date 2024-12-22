const numbers = [1,3,5,7];

numbers.forEach(function(value,index,numbers){
    console.log(value,index,numbers);
});

numbers.forEach(loopNumber1);

function loopNumber1(item,index){
    console.log(item,index);
}

console.log("====================");

let newArray1 = numbers.map(function(value,index,numbers){
    return 10+value;
})
console.log(newArray1);

let newArray2 = numbers.map(loopNumber2);
function loopNumber2(item,index){
    return 10*item;
}
console.log(newArray2);