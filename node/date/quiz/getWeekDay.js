/*
    요일 보여주기
    중요도: 5
    날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.

    예시:

    let date = new Date(2012, 0, 3);  // 2012년 1월 3일
    alert( getWeekDay(date) );        // "TU"가 출력되어야 합니다.
 */
function getWeekDay(date) {
    return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()];
}

let date = new Date(2021, 8, 6);
console.log(getWeekDay(date));