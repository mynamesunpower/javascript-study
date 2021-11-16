/*

 */

let promise = new Promise(function(resolve, reject) {
    // executor :: 실행자
    // 실행자 내부에서는 결과를 즉시 얻든, 늦게 얻는 콜백 중 하나를 반드시 호출해야 함.
    setTimeout(() => resolve('done'), 1000);
})

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script = {
            ...script,
            src,
            onload: () => resolve(script),
            onerror: () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
        };
        document.head.append(script);
    })
}

let promise2 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise2.then(
    script => alert(`${script.src}을 불러왔습니다!`),
    error => alert(`Error: ${error.message}`)
);

promise2.then(script => alert('또다른 핸들러...'));