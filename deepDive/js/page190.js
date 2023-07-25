// 스코프에 대한 공부 
//var는 중복이 허용돼서 이런 결과가 나오지만 let, const는 이렇게 안됨 페이지 192에 나옴 

var x = 'hello';

function foo() {
    var x= 'change';
    console.log(x);
}
foo();

console.log(x);
