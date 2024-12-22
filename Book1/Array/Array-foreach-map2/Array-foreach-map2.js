const users = [
    {id: 1, name: '홍길동', address: '서울'},
    {id: 2, name: '일지매', address: '부산'},
    {id: 3, name: '임꺽정', address: '서울'},
    {id: 4, name: '전우치', address: '광주'},
    {id: 5, name: '장길산', address: '서울'}
];

let lists = [];
users.forEach(function(value,index){
    lists.push('<li class="list-group-item">'+value.name+'</li>')
});

const target1 = document.querySelector('.col:nth-of-type(1)');
target1.innerHTML = '<ul class="list-group">'+lists.join('')+'</ul>';

let newArray = users.map(myFunction);

function myFunction(item, index){
    if(item.address == '서울'){
        return '<li class="list-group-item">'+item.name+'</li>';
    }
}

const target2 = document.querySelector('.col:nth-of-type(2)');
target2.innerHTML = '<ul class="list-group">'+newArray.join('')+'</ul>';


