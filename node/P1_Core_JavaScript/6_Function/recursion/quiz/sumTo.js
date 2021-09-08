/*
    주어진 숫자까지의 모든 숫자 더하기
    중요도: 5
    숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

    예시:
    sumTo(1) = 1
    sumTo(2) = 2 + 1 = 3
    sumTo(3) = 3 + 2 + 1 = 6
    sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
    아래 방법을 사용해 세 가지 답안을 만들어보세요.

    1. for 반복문 사용하기
    2. 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
    3. 등차수열 공식 사용하기
    예시:
    function sumTo(n) {  }
    alert( sumTo(100) ); // 5050
    더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시해주세요.
    공식 > for loop > 재귀
    공식 계산법은 O(1)
    for loop와 재귀는 O(n)이지만 재귀는 함수 스택에 쌓이는 시간이 필요하지 않을까 싶어서
    더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?
    X, 컨텍스트 할당량 초과
 */

// 1. for 반복문
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log('1. for loop: ' + sumTo(100));

// 2. 재귀
function sumTo2(n) {
    return n === 1 ? n : n + sumTo2(n - 1)
}
console.log('2. recursive: ' + sumTo2(100));

// 3. 등차수열 공식 사용하기
function sumTo3(n) {
    return (n * (n + 1)) / 2;
}
console.log('3. 공식: ' + sumTo3(100));