// 문자열에서 특정 문자의 인덱스(위치) 찾는 법
let astring = 'hello wolrd';
let search = 'w';
let index;
for(let i = 0; i < astring.length; i++){
    if(astring[i] == search){
        index = i;
        break;
    }

}
console.log(index); 

console.log(astring.indexOf(search)); // 이것도 가능  