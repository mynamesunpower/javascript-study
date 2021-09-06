/*
    Map : 키가 있는 데이터를 저장하는 점에서 객체와 유사, 다만 Map 은 Key 에 다양한 자료형을 허용한다.
    new Map() : 맵 만들기
    map.set(key, value) : key 를 이용해 value 를 저장
    map.get(key) : key 에 해당하는 value 반환, key 가 없다면 undefined 반환
    map.has(key) : key 가 존재하면 true, 존재하지 않으면 false 반환
    map.delete(key) : key 에 해당하는 value 삭제
    map.clear() : Map 의 모든 요소 제거
    map.size : 요소의 개수를 반환
 */

let map = new Map();
map.set('1', 'str1');   // 문자 키
map.set('1', 'str2');   // 같은 키라면 값을 overwrite 한다.
map.set(1, 'num1');     // 숫자 키
map.set(true, 'bool1'); // 불린 키

// 객체는 키를 문자형으로 변환하지만 맵은 그대로 유지함. Key 는 자료형 제약이 없다.
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);

// map[key] 는 Map 을 사용하는 올바른 방법이 아님 : 사용할 수는 있지만, map 을 일반 객체처럼 취급하게 되므로 제약이 생긴다. 전용 메소드를 사용하자.
let john = {name: 'John'};

// 고객의 가게 방문 횟수를 세어 본다면
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);          // 객체를 Key 로 사용 가능함.
console.log(visitsCountMap.get(john));

/*
    객체형 키를 객체에 사용한다면?
    객체는 모든 키를 문자형으로 변환한다. 그러므로 객체를 문자형으로 변환하므로 키는 '[object Object]'  가 된다.
 */

// Map 이 Key 를 비교하는 방식 -> SameValueZero 라 불리는 알고리즘을 사용해 값의 등가 여부를 확인한다.
// 이는 일치 연산자 === 와 유사하나, NaN을 NaN과 같다고 취급하는 것에서 차이가 있음. 따라서, 맵에서는 NaN 조차도 키로 사용 가능

// Chaining : map.set()은 호출할 때마다 맵 자신을 반환하기에, 체이닝 가능
map.set('3', 'str3')
    .set(3, 'num3')
    .set(false, 'bool3');

// Map 의 각 요소에 반복 작업하기
let recipeMap = new Map([['cucumber', 500], ['tomatoes', 350], ['onion', 50]]);
// 1. map.keys() - 각 요소의 키를 모은 Iterable 객체를 반환
for (let vegetable of recipeMap.keys()) console.log(vegetable);
// 2. map.values() - 각 요소의 값을 모은 Iterable 객체를 반환
for (let amount of recipeMap.values()) console.log(amount);
// 3. map.entries() - 각 요소의 [키, 값]을 한 쌍으로 하는 Iterable 객체를 반환.
for (let entry of recipeMap) console.log(entry);

// ** Map 은 값이 삽입된 순서대로 순회를 실행함. 객체가 프로퍼티 순서를 기억하지 못하는 것과 다르다!
// (index가 존재함)

// 배열과 유사하게 forEach 도 지원함.
recipeMap.forEach(((value, key, map) => {
    console.log(`${key}: ${value}`);
}))

/*
    Object.entries : 객체를 Map 으로 바꾸기.
    평범한 객체를 가지고 Map 을 만들고 싶다면 사용. 객체의 키-값 쌍을 요소 [key, value]로 가지는 배열을 반환함.
 */
let obj = {
    name: 'John',
    age: 30
};
let mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);


/*
    Object.fromEntries : Map 을 객체로 바꾸기
    각 요소가 [key, value] 쌍인 배열을 객체로 바꿔준다.
 */
let prices = Object.fromEntries([['banana', 1], ['orange', 2], ['meat', 4]]);
console.log(prices); // 자료가 Map 에 저장되어 있는데, 3rd-party 코드에서 자료를 객체 형태로 넘겨받길 원할 때 사용하면 된다.

