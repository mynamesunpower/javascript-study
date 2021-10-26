class Rang {
    constructor() {
        console.log('constructor!');
    }

    method1() {
        console.log('method1!');
    }
}

let rang = new Rang();
rang.method1();

/*
    Class Rang {...} 의 문법 구조가 하는 일
    1. Rang 이라는 이름을 가진 함수를 만듦. 함수 본문은 생성자 메서드 constructor 에서 가져옴.
    2. 클래스 내에서 정의한 메서드를 Rang.prototype 에 저장함.
 */

// JavaScript 에서 클래스는 함수의 한 종류임!
console.log(typeof Rang);

// 정확히는 생성자 메서드와 동일함.
console.log(Rang === Rang.prototype.constructor);

// 클래스 내부 정의 메서드는 prototype 에 저장된다.
console.log(Rang.prototype.method1);
// 프로토타입에는 메서드가 두 개.
console.log(Object.getOwnPropertyNames(Rang.prototype));

/*
    클래스는 단순한 문법적 설탕이 아님.
 */
// class Rang 과 동일한 기능을 하는 순수 함수 만들기
function Ran() {
    console.log('Rang function');
}
// 모든 함수의 프로토타입은 constructor 를 가지고 있으므로 명시적으로 만들 필요 없음!

Ran.prototype.method1 = function() {
    console.log('method1');
}

let ran = new Ran();
ran.method1();

// 두 방법의 결과는 거의 같음.
// but, class 로 만든 함수에는 특수 내부 프로퍼티인 [[FunctionKind]]: 'classConstructor' 가 따라붙는다.
// JS 는 검증 과정이 있기 때문에, 클래스 생성자를 new 와 함께 호출하지 않으면 에러.
// 또, 클래스 메서드는 열거 불가능. 클래스의 프로퍼티에 추가된 메서드 전체의 enumerable 은 false 임.
// 클래스는 항상 use strict 모드임.


// 클래스도 결국 함수이기 때문에, 다른 표현식 내부에서 정의, 전달, 반환, 할당할 수 있음.
let User = class {
    sayHi() {
        console.log('hello!');
    }
}


// 기명 함수 표현식과 유사하게 클래스 표현식에도 이름이 붙을 수 있다.
let sunny = class Sunny {
    sayHi() {
        console.log(Sunny)  // 이 이름은 오직 클래스 내부에서만 사용 가능하다.
    }
}
new sunny().sayHi();

// 필요에 따라 클래스를 동적으로 생성하는 것도 가능.
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}
let cls = makeClass('hello');
new cls().sayHi();


// 리터럴을 사용해 만든 객체처럼, getter, setter, 계산된 프로퍼티를 포함 가능.
class Coffee {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('이름이 너무 짧습니다.');
            return;
        }
        this._name = value;
    }
}
let coffee = new Coffee('americano');
console.log(coffee.name);
let mocha = new Coffee('mo');
console.log(mocha.name);

// 계산된 메서드 이름.
class Juice {
    ['say' + 'Hi']() {
        console.log('hello');
    };
}
new Juice().sayHi();



/*
    클래스 필드
    :: 구식 브라우저에서는 폴리필 필요할 수 있음!
    클래스를 정의할 때, 프로퍼티명 = 값 을 쓰면 클래스 필드 생성.
    Cat.prototype 이 아닌 개별 객체에만 필드가 설정됨!
 */
class Cat {
    name = 'rang';
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
let cat = new Cat();
console.log(cat.name);
console.log(Cat.prototype.name);

/*
    클래스 필드로 바인딩된 메서드 만들기
    - JS의 함수는 동적인 this 를 가짐!
    :: 따라서 객체 메서드를 여기저기 전달에 전혀 다른 문맥에서 호출하면 this 는 원래 객체를 참조하지 않음!
 */
class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }

    sayHi = () => {
        console.log(this.value);
    }
}
let button = new Button('hello');
button.click(); // 호출하면 button 객체에 value 필드가 있으므로.
console.log(button.value);
setTimeout(button.click, 1000); // undefined

// 위 setTimeout 을 가능케 하려면
setTimeout(() => button.click(), 1000);

setTimeout(button.sayHi, 1000);
// 클래스 필드 () => {...} 는 각 Button 객체마다 "독립적"인 함수를 만들고 함수의 this 를 해당 객체에 바인딩함.