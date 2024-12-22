const things = ['car','dog','cat','mountain','sea'];

for(let img of document.images){
    img.onclick = function(){
        let index = Math.floor(Math.random()*things.length);
        let url = 'https://loremflickr.com/320/240/'+things[index];

        img.setAttribute('src',url);
        //img.src = url; //위 함수 사용 방법과 동일한 기능

        console.log(url);
    }
}