//콜백을 이용한 
function isPo(num, resolve, reject) {
    setTimeout(()=>{ 
    if(typeof num === 'number'){
        resolve(num >=0? "양수" : "음수")

    }else{
        reject("주어진 값이 숫자형 값이 아닙니다.")
    }
    },2000)
}

// isPo(10,(res)=> {
//     console.log("성공적으로 수행됨 : ", res);
// }, 
// (err) => {
//     console.log("실패하였음 : ", err);
// }
// );
// promuse를 이용한 
function promi(num){
 const executor = (resolve, reject) => {
    setTimeout(() => {
  if(typeof num === 'number'){
        console.log(num);
    resolve(num >=0? "양수" : "음수")

    }else{
        reject("주어진 값이 숫자형 값이 아닙니다.")
    }
    }, 2000)
 };

 const asyncTask = new Promise(executor);
 return asyncTask;
}
const res = promi(101);
res.then((res)=>{console.log("작업 성공 : ", res);}).catch((err)=>{
    console.log("작업 실패 : ", err);
});