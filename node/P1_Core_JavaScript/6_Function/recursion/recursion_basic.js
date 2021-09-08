/*
    재귀는 큰 목표 작업 하나를 동일하면서 간단한 작업 여러 개로 나눌 수 있을 때 유용한 프로그래밍 패텀임.
    함수가 자기 자신을 호출하는 것을 재귀라 부름.
 */

// x 를 n 제곱해주는 함수 pow(x, n) 만들기
// 1. 반복 사고를 통한 방법: for 루프
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(2, 3));

// 2. 재귀 사고를 통한 방법: 작업을 단순화하고 자기 자신을 호출
function pow2(x, n) {
    if (n === 1) return x;
    else {
        return x * pow2(x, n - 1);
    }
}
console.log(pow2(2, 3));
// 1. n === 1 일 때, 결과값을 즉시 도출하므로 이를 재귀의 베이스(base)라고 함. pow(x, 1) = 1
// 2. n !== 일 때, pow(x, n) 은 x * pow(x, n-1)로 표현 가능. 수학식으로는 x^n = x * x^(n-1) 이를 재귀 단계(recursive step)이라고 부름.
// 작업은 n 이 1이 될 때까지 계속 이어진다.

// 이렇게도 표현 가능
function pow3(x, n) {
    return n === 1 ? x : x * pow3(x, n - 1);
}
// 가장 처음 하는 호출을 포함한 중첩 호출의 최대 개수를 재귀 깊이(recursive depth)라고 함. 여기서의 재귀 깊이는 n
// 자바스크립트 엔진은 최대 재귀 깊이를 제한함. 10,000개 정도까지는 확실히 허용, 엔진에 따라 더 깊게 허용하는 경우도 있음.