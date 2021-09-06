/*
    중첩 구조 분해
    객체나 배열이 다른 객체나 배열을 포함하는 경우, 좀 더 복잡한 패턴을 사용하면 중첩 배열이나 객체 정보를 추출 가능!
 */
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ['Cake', 'Donut'],
    extra: true
}

// 이런 객체를 구조 분해 할 때는, 코드를 여러 줄에 걸쳐 작성하여 의도하는 바를 명확히 드러내야 함
let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = 'Menu', // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;
console.log(width, height, item1, item2, title);