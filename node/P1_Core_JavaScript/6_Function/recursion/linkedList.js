/*
    연결 리스트
    객체를 정렬하여 어딘가에 저장하고 싶다면 보통 배열을 먼저 떠올린다.
    let arr = [obj1, obj2, obj3];
    그러나 배열은 요소 '삭제'와 요소 '삽입'에 들어가는 비용이 많이 든다.
    arr.unshift(obj)를 수행하려면 새로운 obj를 위한 공간을 만들기 위해 모든 요소의 번호를 다시 매겨야 함.
    arr.shift()도 마찬가지.
    앞 쪽 요소에 무언가를 할때 배열은 꽤 느리다.
    빠르게 삽입, 삭제를 해야 할 때는 연결 리스트 구조를 사용할 수 있음.

    연결 리스트의 요소는 객체와 아래 프로퍼티들을 조합해 정의한다.
    - value
    - next : 다음 연결 리스트 요소를 참조하는 프로퍼티. 다음 요소가 없을 땐 null
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
}
// 아래처럼 작성해도 동일
let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = { value: 4 };
list2.next.next.next.next = null;