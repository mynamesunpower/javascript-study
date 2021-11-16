/*
    코드 변경 없이 캐싱 기능 추가
 */

function slow(x) {
    console.log(`slow(${x})를 호출함`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {         // 캐시에 해당 키가 있으면
            return cache.get(x);    // 그 값을 캐시에서 읽어옴.
        }

        let result = func(x);       // 그렇지 않으면 func(x) 호출하고,

        cache.set(x, result);       // 그 결과를 캐싱(저장)함.
        return result;
    }
}

slow = cachingDecorator(slow);
// cachingDecorator 처럼 인수로 받은 함수의 행동을 변경시켜주는 함수를 데코레이터라고 함.
// 여기서 반환하는 것은 캐싱 래퍼임. 함수에 이것을 적용하기만 하면 캐싱 가능한 함수를 원하는 만큼 구현 가능하므로 아주 유용하다!