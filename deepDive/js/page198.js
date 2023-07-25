var x = 1;

function foo() {
    var x = 10;
    console.log(x,);
     console.log('는 뭘까');
    bar();
}
 
function bar() {
    console.log(x);
}

foo();
bar();