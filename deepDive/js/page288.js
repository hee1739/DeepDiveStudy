// 프로퍼티 섀도잉
const Person = ( function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        console.log(`Hi My name is ${this.name}`);
    };
    return Person;
}());

const me = new Person('Lee');
// 인스턴스 매서드 -> 이거에 의해 위에 프로토타입 메서드 sayHello가 가려짐 
me.sayHello = function () {
    console.log(`Hey My name is ${this.name}`);
};
me.sayHello();