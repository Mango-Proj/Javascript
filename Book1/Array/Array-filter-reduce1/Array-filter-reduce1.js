const numbers = [1,3,5,7,9];

const remains = numbers.filter(function(value,index){
    return (value%3) == 1;
});

console.log('remains',remains);

const sum = numbers.reduce(makeSum,10);

function makeSum(total, item, index){
    console.log('total, item, index',total,item,index);
    return total+item;
}

console.log('sum',sum);