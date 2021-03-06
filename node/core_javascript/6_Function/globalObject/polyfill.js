/*
    전역 객체를 이용하여, 사용 중인 브라우저가 최신 JS 기능을 지원하는지 여부 확인 가능.
    명세에 있는 기능이지만 기능을 지원하지 않는 오래된 브라우저를 사용한다면,
    직접 함수를 만들어 전역 객체에 추가하는 방식으로 만들 수 있음!
 */
if (!window.Promise) {
    console.log('구식 브라우저');
    // window.Promise = .... // 모던 자바스크립트에서 지원하는 기능을 직접 구현함.
}