/*
    인스턴스 생성 오류
    아래 코드에서 Rabbit 은 Animal 을 상속받습니다.

그런데 Rabbit 객체를 만들 수가 없습니다. 무엇이 잘못된 것일까요? 코드를 수정해보세요.
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); // -------> 자식의 생성자를 구현했으나 super()를 호출하지 않음.
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit);