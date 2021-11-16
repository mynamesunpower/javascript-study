/*
배열 요소 무작위로 섞기
중요도: 3
배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.

shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.
 */

let arr = [1, 2, 3];

// 피셔 예이츠 셔플 (Fisher-Yates Shuffle) 알고리즘: 더 알아보기
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        console.log(`i: ${i} / j : ${j} / arr[i]: ${arr[i]} / arr[j]: ${arr[j]}`)
        // [arr[i], arr[j]] = [arr[j], arr[i]];
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

shuffle(arr);
console.log(arr);