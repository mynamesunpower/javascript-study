/*
    몇 초나 남았을까요?
    중요도: 5
    오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()를 만들어보세요.

    현재 시각이 23:00이라면 아래와 같은 결과가 나와야 합니다.

    getSecondsToTomorrow() == 3600
    주의: 어떤 날이든 함수를 호출했을 때, 원하는 결과가 반환되어야 합니다. '오늘’을 나타내는 값을 하드 코딩하지 마세요.
 */
function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return Math.round((tomorrow - date) / 1000);
}
console.log(getSecondsToTomorrow());
