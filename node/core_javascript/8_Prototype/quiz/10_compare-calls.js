/*
호출 간의 차이점
중요도: 5
새로운 rabbit 객체를 만들어 봅시다.

let rabbit = new Rabbit("Rabbit");
아래와 같이 메서드를 호출하면 동일하게 동작할지 다르게 동작할지 예상해 보세요.

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
 */
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.name = 'cheetah';
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi(); // rabbit.name
Rabbit.prototype.sayHi(); // Rabbit.prototype.name
Object.getPrototypeOf(rabbit).sayHi(); // Rabbit.prototype.name
rabbit.__proto__.sayHi(); // Rabbit.prototype.name
