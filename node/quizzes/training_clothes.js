function solution(n, lost, reserve) {
    let successCount = 0;

    for (const studentNo of lost) {
        let prevNo = studentNo - 1;
        let nextNo = studentNo + 1;

        if (reserve.includes(prevNo)) {
            reserve.splice(reserve.indexOf(prevNo), 1);
            successCount++;
            continue;
        }
        if (reserve.includes(nextNo)) {
            reserve.splice(reserve.indexOf(prevNo), 1);
            successCount++;
        }
    }

    return n - lost.length + successCount;
}

const n = 3;
const lost = [3];
const reserve = [1];
solution(n, lost, reserve);