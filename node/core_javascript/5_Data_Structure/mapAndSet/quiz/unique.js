/*
배열에서 중복 요소 제거하기
중요도: 5
arr은 배열이라 가정합시다.

arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.

예시:

function unique(arr) {
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
참고 1: 여기선 배열 안의 요소가 모두 문자열이지만 제출 답안을 작성할 땐, 배열 내 어떤 자료형이 들어와도 동작할 수 있어야 합니다.
참고 2: Set을 사용해보세요.
*/

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(values));