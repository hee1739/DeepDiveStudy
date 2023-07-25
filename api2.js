//let responses = fetch("https://jsonplaceholder.typicode.com/posts").then( (res) => { console.log(res.json()); });

let response = fetch("https://jsonplaceholder.typicode.com/posts")

.then((res) => {

return res.json();

})

.then((jsons) => {

console.log(jsons);

});