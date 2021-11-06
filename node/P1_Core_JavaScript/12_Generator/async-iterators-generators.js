/*
    Asynchronous iterator
    :: 비동기적으로 들어오는 데이터를 필요에 따라 처리!

 */

// Async 이터레이터
let range = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }
};

// (async () => {
//     for await (let value of range) {
//         console.log(value);
//     }
// })();

// async generator
async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {

        // 비동기 처리
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }
}

(async () => {
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log(value);
    }
})();