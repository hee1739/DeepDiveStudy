class Base {}

class Dev extends Base {
    constructor(a){
        super();
        this.a = 1;
        //super(); 여디가 두면 에러뜸
    }
}

const dev = new Dev(1);
console.log(dev);