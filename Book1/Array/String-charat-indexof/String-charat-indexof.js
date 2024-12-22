const str = 'korea';

for(let char of str){
    console.log(str.indexOf(char), char);
}

console.log('===================');
console.log('str[2]:',str[2]);
console.log('str[str.length -1]: ', str[str.length -1]);
console.log('str.charAt(2)',str.charAt(2));
console.log('str.indexOf("r"): ',str.indexOf('r'));