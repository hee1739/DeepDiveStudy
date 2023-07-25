const num = [1, 2, 3, 4, 5, 6];
//평균 구하기
const ever = num.reduce((a, c)=> a+c , 0) / num.length;

console.log(ever);

const str = 'Hello World';
console.log(str.indexOf('W'));