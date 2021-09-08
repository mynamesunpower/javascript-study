/*
    JavaScript 엔진은 도달 가능한 (reachable) , 그리고 추후 사용될 가능성이 있는 값을 메모리에 유지함.
 */
let john = { name: 'John' };
// 위 객체는 john 이라는 참조를 통해 접근할 수 있다.
john = null;
// 그러나 참조를 null 로 덮어쓰면 위 객체에 더 이상 도달이 불가능하게 되어 객체가 메모리에서 삭제됨.

let mary = { name: 'Mary' };
let array = [ mary ];
mary = null;

// mary 를 나타내는 객체를 배열의 요소이므로 GC의 대상이 되지 않는다. 해당 객체를 얻는 것도 가능함.
console.log(JSON.stringify(array[0]));

// Map 에서 객체를 Key 로 사용한 경우도 마찬가지로, Map 이 메모리에 있는 한 객체도 남아 있음. GC의 대상이 되지 않는다!
let peter = { name: 'Peter' };
let map = new Map();
map.set(peter, '...');
peter = null;

// peter 를 나타내는 객체는 map 안에 저장되어 있으므로, map.keys()를 이용해 해당 객체를 얻는 것도 가능함.
for (let object of map.keys()) console.log(JSON.stringify(object));
console.log(map.size);

/*
    이런 관점에서, WeakMap 은 일반적인 Map 과는 다른 양상임. 키로 쓰인 객체가 GC의 대상이 된다.
    Map VS. WeakMap
    Diff 1: WeakMap 의 Key 는 반드시 객체여야 함. 원시값은 키가 될 수 없다.
    Diff 2: WeakMap 의 Key 로 사용된 객체를 참조하는 것이 아무것도 없다면 해당 객체는 메모리와 위크맵에서 자동 삭제
    Diff 3: WeakMap 은 반복 작업과 keys(), values(), entries() 메서드 지원 X - 따라서 키나 값 전체를 얻는 것이 불가능하다.
    
 */
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'ok'); // 정상 동작
// weakMap.set('test', 'ok'); // 문자열은 키로 사용 불가

let sally = { name: 'Sally' };
weakMap.set(sally, '...');
sally = null;
console.log(weakMap.get(sally)); // undefined
