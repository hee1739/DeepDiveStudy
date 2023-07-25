let person = {
    'last-name' : 'lee' , 
    1: 10
};
// person.1; 이거 안됨 
// person.'1'; 이것도 안됨  얘네가 안되는건 객체에서 키값은 스트링밖에 받지 못해서임
person[1];
person['1'];
let star2 = 'hello'; // 유사 배열 객체 

//console.log(person.1)
//console.log(person.'1')
console.log(person[1])
console.log(person['1'])
console.log(star2.length);
console.log(star2[0]);