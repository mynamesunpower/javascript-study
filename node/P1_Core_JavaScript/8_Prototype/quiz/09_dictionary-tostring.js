/*
사전에 toString 추가하기
중요도: 5
key/value 쌍을 저장하기 위해 Object.create(null)로 생성된 dictionary 객체가 있습니다.

그 안에 쉼표로 구분된 키 목록을 반환하는 dictionary.toString()메서드를 추가하십시오. toString 은 객체 위의 for..in에 나타나서는 안 됩니다.
 */

let dictionary = Object.create(null, {
    toString: {
        value: Object.keys(this).join()
    }
});

// dictionary.toString 메서드를 추가하는 코드
// Object.setPrototypeOf(dictionary, {
//     toString: {
//         value: Object.keys(this).join(),
//         enumerable: false
//     }
// });

// 데이터 추가
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

// 반복문에는 apple 과 __proto__ 만 있도록
for (let key in dictionary) console.log(key);

// toString 동작하도록
console.log(dictionary);