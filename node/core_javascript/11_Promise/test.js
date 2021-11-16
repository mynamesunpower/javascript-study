import util from 'util';
import fs from 'fs';

const stat = util.promisify(fs.stat);

async function callStat() {
    const stats = await stat('../..');
    console.log(stats)
    console.log(`이 디렉토리는 ${stats.uid}의 소유입니다.`);
}

callStat();


function sumNumbers() {
    let sum = 0;
    for (let i = 1; i < 999999999; i++) {
        sum += i;
    }

   return sum;
}

// console.log(sumNumbers());
const b = util.promisify(sumNumbers);
async function c() {
    const d = await b();
    console.log(`아니 왜 실행이 안되는거임?` + d);
}

c();