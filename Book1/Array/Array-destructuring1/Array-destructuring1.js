const casts = ['홍길동','일지매','임꺽정'];

//배열 값을 이용한 값 할당 -> 예전 방법
const cast01 = casts[0];
const cast02 = casts[1];
const cast03 = casts[2];

//구조 분해 할당
const [cast11, cast12, cast13] = casts;

console.log('old way', cast01, cast02, cast03);
console.log('destructuring', cast11, cast12, cast13);