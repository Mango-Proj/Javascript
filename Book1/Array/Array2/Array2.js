//배열에 초기화되는 Data들은 서로 다른 type이어도 됨, 심지어 함수가 들어가도 됨
const myArray = [
    '문자열',
    25,
    function(){
        alert('함수');
    },
    function(){
        return '함수';
    },
    setTimeout(function(){
        alert('setTimeOut');
    },1000)
];

console.log(typeof myArray);
console.log('myArray[0]',myArray[0]);
console.log('myArray[1]',myArray[1]);
console.log('myArray[2]',myArray[2]());
console.log('myArray[3]',myArray[3]());
console.log('myArray[4]',myArray[4]);