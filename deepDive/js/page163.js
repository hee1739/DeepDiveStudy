let add = function sum(x, y){
   return  x + y; //이때 return 생략해도 값 나옴 
};
// console.log(sum(2,10)); 이건 에러뜸 
//  왜냐하면 함수는 함수 이름으로 호출이 아니고 함수 객체를 가르키는 식별자로 호출 
console.log(add(2,10));