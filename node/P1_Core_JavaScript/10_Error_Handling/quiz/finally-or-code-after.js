/*
finally 아니면 코드만?
중요도: 5
두 코드 조각을 비교해보세요.

첫 번째 코드 조각은 try..catch 이후에 코드를 실행하기 위해 finally를 사용하였습니다.
try {
  작업
} catch (e) {
  에러 핸들링
} finally {
  작업 내역 삭제
}
두 번째 코드 조각에선 try..catch 바로 아래에 작업 내역을 삭제하는 코드를 놓았습니다.
try {
  작업
} catch (e) {
  에러 핸들링
}
작업 내역 삭제

현재 상황은 에러의 유무와 상관없이, 작업 후 초기화를 해야합니다.
finally를 사용하면 이점이 있을까요? 아니면 두 코드 조각은 동일하게 동작할까요? 만약 이점이 있다면, 이점이 드러나는 예시를 제시해 주세요.
 */

// 이해가 안 됨.
// 위 예시에서는 결국 똑같은거 아닌가..? 다시 봐야할 듯