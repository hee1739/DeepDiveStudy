function foo(...rest) {  // rest 파라미터는 반드시 마지막에 있어야하며 단 하나만 선언 가능  
    console.log(rest);
}

foo(1,2,3,4,5);

function Roo(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

Roo(1,2,3,4,5); 


