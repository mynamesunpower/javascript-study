/*
    prototype 프로퍼티 사용례
 */

// Object.prototype
let obj = {};
console.log(obj); // 콘솔에는 {} 로 출력되나, alert()에는 [object Object] 로 출력됨!

// obj = new Object() 를 줄이면 obj = {} 가 됨.
// Object 는 내장 객체 생성자 함수인데, 이 생성자 함수의 프로토타입은 toString 을 비롯한 다양한 메소드가 구현되어 있는 거대한 객체를 참조함.
// 그러므로 new Object()를 호출하거나, 리터럴 {...} 로 객체를 만들 때, 새롭게 생성된 객체의 [[Prototype]]은 Object.prototype 을 참조함.
// 따라서, obj.toString() 호출하면, Object.prototype 에서 해당 메서드를 가져온다.
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true

// 그러나 Object.prototype 위의 체인에는 [[Prototype]]이 없다는 걸 주의
console.log(Object.prototype.__proto__); // null


/*
    다른 내장 프로토타입
    Array, Date, Function 을 비롯한 내장 객체들 역시, 프로토타입에 메서드를 저장해 놓음.

    배열 [1, 2, 3] 을 만들면 기본 new Array() 생성자가 내부에서 사용되므로, Array.prototype이 배열 [1,2,3] 의 프로토타입이 됨.
    명세에는, 모든 내장 프로토타입의 꼭대기엔 Object.prototype 이 있어야 한다고 규정함.
 */
let arr = [1, 2, 3];

// arr 은 Array.prototype 을 상속받았나요?
console.log(arr.__proto__ === Array.prototype);
// arr 은 Object.prototype 을 상속받았나요?
console.log(arr.__proto__.__proto__ === Object.prototype);
// 체인 맨 위에는 null 이 있습니다.
console.log(arr.__proto__.__proto__.__proto__ === null);

// 체인 상의 프로토타입에는 중복 메서드가 있을 수 있음.
// Array.prototype 엔 요소 사이에 쉼표를 넣어, 요소 전체를 join한 문자열을 반환하는 자체 메서드 toString이 있음.
console.log(arr);
// 그런데 Object.prototype 에도 toString 이 있음. 이럴 때는 체인 상 가까운 곳에 있는 메서드를 사용.

/*
    원시값
    문자열, 숫자, 불린값은 객체가 아님. 이런 원시값의 프로퍼티에 접근하려고 하면 내장 생성자 String, Number, Boolean 을 사용하는 임시 래퍼 객체가 생성됨.
    임시 래퍼 객체는 이런 메서드를 제공하고 사라진다.

    null 과 undefined 에 대응하는 래퍼 객체는 없다.
 */


// 네이티브 프로토타입 변경하기
// String.prototype 에 메서드를 추가하면 모든 문자열에서 해당 메서드 사용 가능.
String.prototype.show = function () {
    console.log(this);
}

"HELLO!".show();
// 개발하다 보면 새로운 내장 메서드를 만드는 게 좋지 않을까? 라고 생각하지만 좋지 않은 방법임.
// 라이브러리끼리 프로토타입을 조작하면 덮어쓰기에, 충돌할 가능성이 높음.

// 모던 프로그래밍에서 네이티브 프로토타입 변경을 허용하는 경우는 딱 하나.
// 폴리필을 만들 경우에만.

// repeat 메서드가 없다면
if (!String.prototype.repeat) {

    // 프로토타입에 repeat 추가
    String.prototype.repeat = function (n) {
        // String 을 n 회 반복
        return new Array(n + 1).join(this);
    }
}

console.log('Hello'.repeat(3));


/*
    프로토타입에서 빌려오기
    한 객체의 메서드를 다른 객체로 복사할 때, 이 방법을 사용함.
    개발하다 보면, 네이티브 프로토타입의 메서드를 빌릴 경우가 종종 생김.
 */
let array_like_obj = {
    0: 'hello',
    1: 'world!',
    length: 2
} // 유사 배열 객체

array_like_obj.join = Array.prototype.join;
console.log(array_like_obj.join(','));
// 내장 메서드 join 의 알고리즘은 제대로 된 인덱스가 있는지와, length 프로퍼티만을 확인하기 때문에 가능함.

// 또는, obj.__proto__ 를 Array.prototype 으로 설정해 배열 메서드 전체를 상속받을 방법도 있음. 하지만, obj 가 다른 객체를 상속받고 있는 상황에서는 불가.