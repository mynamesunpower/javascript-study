/*
    상대 날짜 출력하기
    중요도: 4
    date를 아래와 같은 형식으로 변경해주는 함수 formatDate(date)를 만들어보세요.

    date가 지금으로부터 1초 미만 전의 날짜를 나타내면 "현재"를 반환해야 합니다.
    그렇지 않고, date가 지금으로부터 1분 이하 전의 날짜를 나타내면 "n초 전"을 반환해야 합니다.
    그렇지 않고, date가 지금으로부터 1시간 미만 전의 날짜를 나타내면 "n분 전"을 반환해야 합니다.
    이 외의 경우는 전체 날짜를 "DD.MM.YY HH:mm"형식("일.월.연 시:분")으로 반환해야 합니다(예시: 31.12.16 10:00).
    예시:

    alert( formatDate(new Date(new Date - 1)) ); // "현재"
    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30초 전"
    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5분 전"

    // 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
    alert( formatDate(new Date(new Date - 86400 * 1000)) );
 */
// function formatDate(date) {
//     let now = new Date();
//     console.log(now - date);
//     let diff = now - date;
//     if (diff <= 1) {
//         return '현재';
//     } else if (diff <= 30 * 1000) {
//         return `${diff / 1000}초 전`;
//     } else if (diff <= 5 * 60 * 1000) {
//         return `${diff / (1000 * 60)}분 전`;
//     } else {
//         return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().substr(2)} ${date.getHours()}:${date.getMinutes()}`
//     }
// }
//
// console.log(new Date().toLocaleString());
// console.log(new Date(new Date - 1).toLocaleString());
// console.log(new Date(new Date - 30 * 1000).toLocaleString());
// console.log(new Date(new Date - 5 * 60 * 1000).toLocaleString());

function formatDate(date) {
    let diff = new Date() - date; // ms

    if (diff < 1000) {
        return '현재';
    }

    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + '초 전';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + '분 전';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    console.log(d);

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}


console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));