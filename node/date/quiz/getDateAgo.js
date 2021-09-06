/*
    n일 전 '일' 출력하기
    중요도: 4
    date를 기준으로 days일 전 '일’을 반환하는 함수 getDateAgo(date, days)를 만들어보세요,

    오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를, getDateAgo(new Date(), 2)는 18을 반환해야 합니다.

    days가 365일 때도 제대로 동작해야 합니다.

    let date = new Date(2015, 0, 2); // 2015년 1월 2일

    alert( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
    alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
    alert( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
    주의: 함수는 date를 변경하지 않아야 합니다.
 */
function getDateAgo(date, days) {
    return new Date(date - (days * 1000 * 3600 * 24));
}

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1).toString());
console.log(getDateAgo(date, 2).toString());
console.log(getDateAgo(date, 365).toString());