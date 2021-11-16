/*
    누구나 에러를 만든다
    1. 실수
    2. 예상치 못한 input
    3. 잘못된 서버 응답 등...
    Error 발생 -> 중단
    try..catch 를 사용하면 죽는 걸 방지, 에러를 잡아(catch) 다른 무언가를 할 수 있음
 */
try {
    // ..code
} catch (err) {
    // ..error handling
}
// try 블록의 코드 실행 -> (에러가 없다면) catch 건너뜀
//                    -> (에러가 있다면) try 블록 실행이 중단되고, catch 블록으로 제어 흐름이 넘어감.

/*
    *** try / catch 는 오직 런타임 에러에만 동작
    * try / catch 는 유효한 코드에서 발생하는 에러만 처리 가능. (런타임 에러 또는 예외라고 부름)
 */

/*
    **** try / catch 는 동기적으로 동작.
    * setTimeout 처럼 스케쥴된 코드에서 발생한 예외는 try..catch 에서 잡을 수 없다
    * 스케쥴 함수 내부의 예외를 잡기 위해서는, try..catch 를 함수 내부에 구현해야 함.
    setTimeout(function() {
        try {} catch (err) { console.error(err); }
    }, 1000);
 */

// 에러 객체
try {
    lalala;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

    // 에러 전체를 보고 싶다면,
    console.log(err);
}

/*
    선택적 catch 바인딩
    에러에 대한 정보가 필요하지 않다면, 인자가 필요 없음.
 */
try {
    // ..
} catch {
    // ...
}

/*
    finally
    항상 실행함
 */
function rang() {
    try {
        return 1;
    } catch (e) {

    } finally {
        console.log('cheetah')
    }
}

console.log(rang()); // cheetah -> 1


/*
    전역 catch
    :: 코어 자바스크립트가 아님.

    Node.js 에서는 process.on('uncaughtException') 이 있음.
    브라우저에서는 window.onerror = function(message, url, line, col, error) {...}
 */