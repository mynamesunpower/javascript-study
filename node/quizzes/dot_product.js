function solution(a, b) {
    return a.reduce((acc, cur, index) => {
        return acc + a[index] * b[index];
    }, 0);
}

console.log(solution([-1, 0, 1], [1, 0, -1]))
