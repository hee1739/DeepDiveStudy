// var나 let과 다르게 const는 재할당이 안됨

let zoo = 1;
console.log(zoo);
zoo = 2;
console.log(zoo);

const foo = 2;
console.log(foo); //
//foo = 3;  이러면 에러 뜸 
//console.log(foo); // 에러뜸