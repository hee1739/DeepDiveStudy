let ava = 80;
let mma = ava; // 같은 80이여도 별개의 메모리 공간에 저장됨 

console.log(mma); // 80 

ava = 120;  

console.log(ava); //120
console.log(mma); // 80 별개의 메모리 공간에 저장된 80이라서 ava의 값이 변해도 mma는 여전히 80이 나옴