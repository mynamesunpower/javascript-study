function solution(participant, completion) {
    const map = new Map();
    participant.map(people => {
        if (map.has(people)) {
            map.set(people, map.get(people) + 1)
            return;
        }
        map.set(people, 1);
    })
    completion.map(people => {
        if (map.has(people)) {
            map.set(people, map.get(people) - 1);
        }
    })

    for (const [k, v] of map) {
        if (v > 0) return k;
    }
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

// sort() 를 이용해서 단순 비교하여 다른 인덱스 걸러내는 방식도 있긴 있었음. 근데 이건 의도에 맞지 않는 방식인 듯.
// 지금 풀이를 더 단순화할 수 있으면 좋겠당.