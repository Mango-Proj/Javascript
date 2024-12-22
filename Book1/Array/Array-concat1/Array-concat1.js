const pets = ['개','고양이'];
const birds = ['앵무새','꾀꼬리'];
const beasts = ['사자','호랑이'];

const animals = pets.concat(birds, beasts);

console.log(animals.valueOf());
console.log(animals.join(''));
console.log(animals.toString());
console.log(animals);