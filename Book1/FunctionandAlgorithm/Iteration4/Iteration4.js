let actors = '홍길동일지매임꺽정';
let Name = '';

for(let x of actors){
    console.log('x=',x);
    Name += x;
    if(Name.length == 3){
        console.log('name=',Name);
        Name='';
    }
}