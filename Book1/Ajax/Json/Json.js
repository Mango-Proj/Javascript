const book = '{"title":"자바스크립트 입문", "publisher":"생능출판사"}';
const obj = {title:'자바스크립트 입문', publisher:'생능출판사'};

document.querySelector('.btn-primary').onclick = function() {
  let json = JSON.parse(book);
  let txt = `${json.title} (${json.publisher})`;
  document.querySelector('#pocket').innerHTML = txt;

  console.log(typeof txt);
}

document.querySelector('.btn-success').onclick = function() {
  console.log(`${obj.title} (${obj.publisher})`);

  let json = JSON.stringify(obj);
  document.querySelector('#pocket').innerHTML = json;

  console.log(typeof json);
}