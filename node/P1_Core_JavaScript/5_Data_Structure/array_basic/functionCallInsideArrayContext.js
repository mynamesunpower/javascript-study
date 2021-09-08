/*
배열 컨텍스트에서 함수 호출하기
중요도: 5
아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
 */
let arr = ['a', 'b'];

arr.push(function() {
    console.log(this);
});

arr[2]();
// 배열에 익명 함수가 추가되면, this는 배열 자기 자신임.