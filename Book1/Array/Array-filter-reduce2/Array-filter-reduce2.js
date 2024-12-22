const users = [
    {id: 1, name: '홍길동', address: '서울'},
    {id: 2, name: '일지매', address: '부산'},
    {id: 3, name: '임꺽정', address: '대구'},
    {id: 4, name: '전우치', address: '광주'},
    {id: 5, name: '장길산', address: '제주'}
];

const remains = users.filter((value,index) => (index%2)==0);

const lists = remains.map((value) => {
    return '<li class="list-group-item">'+value.name+'</li>';
});

const target1 = document.querySelector('.col:nth-of-type(1)');
target1.innerHTML = '<ul class="list-group">'+lists.join('')+'</ul>';

const addr = users.reduce((total, value) => total+value.address,'');
document.querySelector('.col:nth-of-type(2)').innerText = addr;