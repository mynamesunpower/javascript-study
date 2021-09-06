/*
    단일 연결 리스트 출력하기
    중요도: 5
    재귀와 스택에서 설명한 바 있는, 단일 연결 리스트(single-linked list)가 있다고 가정해 봅시다.
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
    리스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.
    반복문과 재귀를 사용한 답안을 각각 만들어봅시다
    그리고 재귀를 사용한 것과 재귀를 사용하지 않은 것 중 어떤 게 더 좋은 코드인지 생각해봅시다.
 */

// 반복문 기반
function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

// 재귀 기반
function printListRecursive(list) {
    console.log(list.value);
    if (list.next) printListRecursive(list.next);
}

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
printList(list);
printListRecursive(list);