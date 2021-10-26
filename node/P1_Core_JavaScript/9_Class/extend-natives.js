/*
    내장 클래스 확장하기
    Array, Map 같은 내장 클래스도 확장 가능함.
 */
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // 내장 메서드는 반환 값에 명시된 클래스를 생성자로 사용.
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr);   // PowerArray 를 반환함.
console.log(filteredArr.isEmpty()); // Symbol.species 를 추가하면 Array 이므로 사용 불가.

console.log(arr.constructor === PowerArray); // true

// 특수 static getter 인 Symbol.species 를 클래스에 추가할 수 있는데, 이가 있으면 map, filter 등의 메서드를 호출할 때 만들어지는 개체의 생성자를 지정 가능.
