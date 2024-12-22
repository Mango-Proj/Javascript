//splice(): 배열의 기존 요소 삭제 또는 교체하거나 새로운 항목을 추가하는데 사용
//slice(): 지정한 시작과 끝 인덱스에 대하여 값을 복사하여 새로운 배열로 반환.
const pets = ['개','고양이','곰','말'];

console.log('[pets]',pets);
pets.splice(2);
console.log('[splice()]',pets);
pets.splice(0,1);
console.log('[splice()]',pets);
pets.splice(0,0,'햄스터')
console.log('[splice()]',pets);
pets.splice(1,1,'거북이','앵무새')
console.log('[splice()]',pets);


const weeks = ['월','화','수','목','금','토','일'];

console.log('[slice()]',weeks.slice());
console.log('[slice()]',weeks.slice(2));
console.log('[slice()]',weeks.slice(2,4));
console.log('[slice()]',weeks.slice(-2));
console.log('[slice()]',weeks.slice(1,-2));
console.log('[weeks]',weeks);