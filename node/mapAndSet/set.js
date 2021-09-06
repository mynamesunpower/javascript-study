/*
    Set 은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션. 값만 저장한다.
    new Set(iterable) : 셋을 만든다. iterable 을 전달받으면 (대개 배열) 안의 값을 복사해 셋에 넣어줌.
    set.add(value) : 값을 추가하고 스스로를 반환
    set.delete(value) : 값을 제거함. 호출 시점에 제거에 성공하면 true, 실패하면 false 반환.
    set.has(value) : 존재유무 true, false
    set.clear() : Set 을 비운다.
    set.size : 몇 개의 값이 있는지.
 */

// 방문자 방명록을 만든다고 가정. 한 방문자가 여러 번 방문해도 방문자를 중복하여 기록하지 않는다고 결정함.
let set = new Set();

let john = {name: 'John'};
let mary = {name: 'Mary'};
let pete = {name: 'Pete'};

// 어떤 고객은 여러 번 방문할 수도 있음.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set.size);

for (let user of set) console.log(user.name);
// 배열을 사용하여 방문자 정보를 저장하고, 중복값 여부는 배열 메서드인 arr.find()를 사용할 수도 있지만, 요소 전체를 뒤지기에 성능이 셋보다 떨어짐.
// Set 은 값의 유일무이함을 확인하는데 최적화됨.


/*
    Set 의 값에 반복 작업하기
    for..of 나 forEach를 사용하면 Set 의 Value를 대상으로 반복 작업 수행 가능.
 */
let set2 = new Set(['oranges', 'apples', 'bananas']);
for (let value of set) console.log(value);

// forEach 도 동일하게 동작함 params (value, value, set)
set2.forEach((value) => {
    console.log(value);
})