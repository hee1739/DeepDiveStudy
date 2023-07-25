//함수 선언문은 함수 이름을 생략 불가능
function add(x, y){
    return x+y;
}
add(4,5);
console.log(add(4,5));

//함수 표현식은 함수 이름을 생략 가능
let sum = function (a, b){
    return a+b;
}
console.log(sum(10,10));