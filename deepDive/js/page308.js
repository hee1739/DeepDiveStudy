const person = {
    name : 'Lee',
    age : 10
}

for ( const array in person) {
    // console.log(person);
    // console.log('별개');
    console.log(array + ' : ' +person[array]);
    // console.log(person[array]); // Lee  10 이렇게 나옴
} 
//  결과물이 이렇게 두번 나오는 이유는  
//          { name: 'Lee', age: 10 }
//          { name: 'Lee', age: 10 }
//          2개의 프로퍼티가 있으므로 객체를 2번 순회한 것 
