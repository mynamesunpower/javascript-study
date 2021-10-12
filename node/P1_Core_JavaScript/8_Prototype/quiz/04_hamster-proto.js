/*
왜 햄스터 두 마리의 배는 꽉 찰까요?
중요도: 5
두 마리의 햄스터가 있습니다. 일반적인 hamster 객체로부터 상속받은 speedy 와 lazy 입니다.

둘 중 한 마리에게 먹이를 줬을 때, 다른 한 마리도 배가 꽉 찹니다. 왜 그럴까요? 어떻게 하면 이런 이상한 일이 일어나지 않게 할 수 있을까요?
 */
let hamster = {
    stomach: [],

    eat(food) {
        // this.stomach.push(food);
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};
let lazy = {
    __proto__: hamster
};

// 햄스터 한 마리가 음식을 찾았습니다.
speedy.eat('apple');
console.log(speedy.stomach); // apple

// 이 햄스터도 같은 음식을 가지고 있습니다. 왜 그럴까요? 고쳐주세요.
console.log(lazy.stomach);

// this.stomach 가 hamster 에 없다면 각각의 프로퍼티일 것이지만, 프로토타입에 stomach가 존재하기 때문에 그것을 따르기에.
// 고치기 위해서는 hamster 의 stomach 를 삭제함. (x) 틀림
// 방법 1. this.stomach = 를 이용해 데이터를 할당하면 된다. 그러면 각 햄스터에게 프로퍼티가 생성됨.
// -> 이게 조금 의문점임.
// 방법 2. speedy 와 lazy 에게 stomach 프로퍼티를 추가함.