// object 생성자 함수 / 왜 밑의 방법을 쓰는지 페이지 237에 상세히 나옴 
//const person = {};
const person = new Object;
person.name = 'lee';
person.sayHello = function () {
    console.log('Hi my name is ' + this.name);
};
console.log(person);
person.sayHello();

console.log("-------------객체 뭐라뜨나 보기-------------");

const obj = {x:1};
console.log(obj);
