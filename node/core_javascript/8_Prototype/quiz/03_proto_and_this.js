/*
    어디에서 쓸까요?
    중요도: 5
    animal에서 상속받은 rabbit이 있습니다.

    rabbit.eat()을 호출했을 때, animal과 rabbit 중 어떤 객체가 full 프로퍼티를 받을까요?
 */
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};

rabbit.eat();
// rabbit 객체가 받는다.
// rabbit.eat() 의 this 는 rabbit 이기 때문.