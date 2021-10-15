function solution(lottos, win_nums) {
    const resultMap = new Map([[6, 1], [5, 2], [4, 3], [3, 4], [2, 5], [1, 6], [0, 6]]);

    let matchCount = 0;
    let zeroInLottoCount = 0;

    for (let number of lottos) {
        if (number === 0) zeroInLottoCount++;
        if (win_nums.includes(number)) {
            matchCount++;
        }
    }

    return [resultMap.get(matchCount + zeroInLottoCount), resultMap.get(matchCount)];
}

const lottos = [45, 4, 35, 20, 3, 9]
const win_nums = [20, 9, 3, 45, 4, 35]

console.log(solution(lottos, win_nums));
// Map을 사용하지 않고 그냥 arr[i] 형태로 사용하는 것이 나을듯.
// 배열에 반복문을 사용하는 것 -> 배열 내장 메서드를 활용하는 걸 생각해보자.
// 배열의 반복문에서의 if 분기는 filter 를 사용하자.