//배열에 초기화되는 Data들은 서로 다른 type이어도 됨, 심지어 함수가 들어가도 됨
const myArray = {
    name: '홍길동',
    age: 25,
    myFunc1: function(){
        alert('함수');
    },
    myFunc2: function(){
        return '함수';
    },
    timingEvent: setTimeout(function(){
        alert('setTimeOut');
    },1000)
};

console.log(typeof myArray);

console.log("myArray['name']",myArray['name']);
console.log("myArray['age']",myArray['age']);
console.log("myArray['myFunc1']",myArray['myFunc1']);
console.log("myArray['myFunc2']",myArray['myFunc2']);
console.log("myArray['timingEvent']",myArray['timingEvent']);

console.log("===============================================");

console.log('myArray.name',myArray.name);
console.log('myArray.age',myArray.age);
console.log('myArray.myFunc1()',myArray.myFunc1());
console.log('myArray.myFunc2()',myArray.myFunc2());
console.log('myArray.timingEvent',myArray.timingEvent);