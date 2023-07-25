var x = 'hi';

function foo(){
    console.log(x); // undefined
    var x = 'hello';
}
foo();
 console.log(x); // hi 