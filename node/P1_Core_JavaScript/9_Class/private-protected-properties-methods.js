// 프로퍼티 보호하기
class CoffeeMachine {
    waterAmount = 0; // 물통에 차 있는 물의 양

    constructor(power) {
        this.power = power;
        console.log(`전력량이 ${power}인 커피 머신을 만듭니다.`);
    }
}

// 커피머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;
// 현재 waterAmount 와 power 는 public 이므로 쉽게 전력량과 물을 변경하기 쉬움. (물이나 전력량에 음수를 넣는다면...?)

// 1. waterAmount 를 protected 로 변경하기
class CoffeeMachine_A {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error('물의 양은 음수가 될 수 없습니다.');
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }
}
let coffeeMachine_A = new CoffeeMachine_A(100);
// coffeeMachine_A.waterAmount = -10; // 예외 발생


// 2. 읽기 전용 프로퍼티 만들기 (power 프로퍼티를 읽기만 가능하도록)
class CoffeeMachine_B {
    constructor(power) {
        this._power = power;
    }

    // getter 만 만든다면 읽기 전용.
    get power() {
        return this._power;
    }

}
let coffeeMachine_B = new CoffeeMachine_B(100);
console.log(`전력량이 ${coffeeMachine_B.power}인 커피머신을 만듭니다.`);
// coffeeMachine_B.power = 25; // Error

/*
    대부분 getAddress / setAddress 형식을 선호함
    다소 길어보이나, 이렇게 하면 다수의 인자를 받을 수 있음.
    기본 get, set 은 인자를 하나밖에 사용할 수 없음..
    어떤 걸 사용해야 한다라는 규칙은 없음!
 */




/*
    private 프로퍼티
    현재 proposal 에 등재되어 있는 상태.
    private 프로퍼티와 메서드는 # 으로 시작한다. # 이 붙으면 클래스 내부에서만 접근 가능.
 */
class CoffeeMachine_C {
    #waterLimit = 200;

    #checkWater(value) {
        if (value < 0) throw new Error('물의 양은 음수가 될 수 없습니다.');
        if (value > this.#checkWater) throw new Error('물이 용량을 초과합니다.');
    }
}
let coffeeMachine_c = new CoffeeMachine_C();
// coffeeMachine_c.#waterLimit = 1000; // Error

// private 필드와 public 필드는 상충하지 않음. #waterAmount 와 waterAmount 를 동시에 가질 수 있음.
class CoffeeMachine_D {
    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }
    set waterAmount(value) {
        if (value < 0) throw new Error('물의 양은 음수가 될 수 없음.');
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine_D();
console.log(machine.waterAmount);
machine.waterAmount = 100;
// machine.#waterAmount // error
console.log(machine.waterAmount);
