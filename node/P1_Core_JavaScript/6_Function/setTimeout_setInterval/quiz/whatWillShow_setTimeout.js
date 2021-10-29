/*
setTimeout 은 무엇을 보여줄까요?
중요도: 5
아래 코드에선 setTimeout을 이용해 호출을 스케줄링하고 있습니다. 그런데 그 아래 코드에선 실행 시간이 100ms 이상 걸리는 무거운 작업을 하고 있네요.

이런 경우 setTimeout에 넘겨준 함수는 언제 실행될까요?

반복문 실행 후
반복문 실행 전
반복문이 실행되는 시점
얼럿창엔 어떤 값이 출력될까요?
 */

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// 아래 반복문을 다 도는 데 100ms 이상의 시간이 걸린다고 가정합시다.
for(let j = 0; j < 100000000; j++) {
    i++;
}

// https://new93helloworld.tistory.com/137