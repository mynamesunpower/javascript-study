function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum = signs[i]? sum + absolutes[i] : sum - absolutes[i];
    }
    return sum
}

const absolutes = [1, 3, 5];
const signs = [true, true, false];
const result = solution(absolutes, signs);
console.log(result);