"use strict";

let user = {
  yourName: '홍길동',
  greeting: function() {
    console.log(`반갑습니다, ${this.yourName}님!`);
  }
};

// 콜백 호출 문제
// setTimeout(user.greeting, 1000); // 반갑습니다, undefined님!

// 해결방법 #1
// setTimeout(function() { user.greeting() }, 1000); // 반갑습니다, 홍길동님!
// setTimeout(() => { user.greeting() }, 1000); // 반갑습니다, 홍길동님!

// 해결방법 #2 (메서드 바인딩)
let hello = user.greeting.bind(user);
setTimeout(hello, 1000); // 반갑습니다, 홍길동님!