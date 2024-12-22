const casts = ['홍길동','일지매','임꺽정','전우치'];

const [cast11, , ,cast14] = casts;
console.log(cast11,cast14);

const [cast21, ...rest] = casts;
console.log(cast21,rest);

const [a,b,c] = '장길산';
console.log(a,b,c);

const {name1,age} = {name:'전우치', age: 25};
console.log(name1, age);