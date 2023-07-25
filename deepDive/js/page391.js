const x = 1;
function foo() {
    const x = 10;
    bar();
}

function bar() {
    console.log(x, "라네");
}
foo(); 
bar(); // bar는 정의된곳이 foo 안쪽이 아니라 전역 변수 const x = 1 을 가져감