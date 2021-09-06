// 피셔예이츠 셔플 - 로또번호 뽑기.
let numbers = [...Array(45)].map((v, i) => i + 1);
let res = [];
for (let i = 0; i < 6; i++) {
    res.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
}
res.sort((a, b) => a - b);
console.log(res);