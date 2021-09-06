/*
애너그램 걸러내기
중요도: 4
애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.

예시:

nap - pan
ear - are - era
cheaters - hectares - teachers
애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.

예시:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.

애너그램 그룹에서 한 단어는 남아있어야 합니다.
 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let set = new Set();
    for (let item of arr) {
        set.add(Array.from(item.toLowerCase()).sort().join(''));
    }
    return set;
}

console.log(aclean(arr));
// 아깝다. map의 key가 중복 저장되지 않는다는 걸 활용했어야 함!!!!!!