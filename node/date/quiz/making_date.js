/*
날짜 생성하기
중요도: 5
2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).

그리고 alert 함수를 이용해 생성한 객체를 출력하세요.
 */
let date = new Date('2021-02-20T03:12');
let date2 = new Date(2021, 1, 20, 3, 12);
console.log(date2);
console.log(date2.toString());