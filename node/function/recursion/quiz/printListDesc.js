/*
    단일 연결 리스트를 역순으로 출력하기
    중요도: 5
    위 문제(단일 연결 리스트 출력하기)에 있는 단일 연결 리스트의 항목을 역순으로 출력해주는 함수를 만들어봅시다.

    반복문과 재귀를 사용한 답안을 각각 만들어보세요.
 */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListDesc(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value)
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function printListDescRecursive(list) {
    if (list.next) {
        printListDescRecursive(list.next)
    }
    console.log(list.value);
}

printListDesc(list);
printListDescRecursive(list);