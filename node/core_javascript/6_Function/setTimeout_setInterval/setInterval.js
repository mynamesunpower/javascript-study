// setInterval 은 setTimeout 과 문법 동일
// setInterval(func|code, [delay], [arg1], [arg2], ...)

// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => {
    console.log('째깍');
}, 2000);

// 5초 후에 정지
setTimeout(() => {clearInterval(timerId)}, 5000);