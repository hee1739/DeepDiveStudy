class Base {
    constructor(a){
        this.a = a;
    }
}

class Sub extends Base {
    constructor(a,b){ // 기존에 있던 a를 받고 새롭게 받을 b를 추가해줌 
        super(a);
        //this.a = 1;
        //super();
        this.b = b;
        console.log(this.a);
    }
}

const sub = new Sub('main','mama');
console.log(sub);

