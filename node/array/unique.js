/*
중복 없는 요소 찾아내기
중요도: 4
arr은 배열입니다.

배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.
 */
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unique = (arr) => {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
};

console.log(unique(strings));