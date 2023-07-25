//배열에서 푸쉬 대신 스프레드
const arr = [1, 2]; 
const newArr = [...arr, 3, 4];
console.log(newArr) // [1, 2, 3]  

//배열에서 언쉬프트 대신 스프레드
const arr2 = [1, 2]; 
const newArr2 = [3, 4,...arr];
console.log(newArr2)

//concat 대신 스프레드 
const arr3 = [1, 2];
const arr4 = [10, 20];
const result = [ ...arr4, 3, 4, ...arr3];
console.log(result);
