/*
    11단원의 예시는 브라우저 메서드를 많이 사용함.
    여기는 정리만 해 두겠음.
 */
function loadScript(src) {
    // script 태그 생성 후 페이지에 추가.
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('/my/script.js'); // script.js 에는 function newFunction() {...} 가 있음!
newFunction(); // 그럼에도 함수가 존재하지 않는다 에러 발생.
// 그 이유는 스크립트를 읽어오는 시간을 충분히 확보하지 못했기 때문임.

function newLoadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}
// 콜백 함수 안에서 호출하면 원하는 대ㄹ로 외부 스크립트의 함수를 사용 가능.
newLoadScript('/my/script.js', function () {
    newFunction();
}); // 이제 제대로 동작함!