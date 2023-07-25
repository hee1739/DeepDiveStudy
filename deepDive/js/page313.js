function foo () {
    x = 10; // let x = 10; 이런식으로 키워드 달아줘야함 
}
foo();
console.log(x); // 암묵적 전역으로 인해 10이 뜨긴 하지만 var let const 키워드를 달아줘야함 