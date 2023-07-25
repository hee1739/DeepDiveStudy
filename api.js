async function getData () {

    let rawresponse = await fetch('https://jsonplaceholder.typicode.com/posts') //fetch는 api를 호출 할 수 있도록 도와주는 내장함수
    // fetch 함수의 반환값은 Promise 객체가 맞습니다. 그러나 await fetch의 반환값은 Promise 객체의 resolve 값 입니다.
    let jsonResponse = await rawresponse.json();
    console.log(jsonResponse);
}

getData();



