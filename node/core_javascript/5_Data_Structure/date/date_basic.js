/*
    날짜를 저장할 수 있고, 날짜와 관련된 메소드를 제공하는 내장 객체 Date
 */

// new Date() : 인수 없이 호출하면 현재 날짜 및 시간이 출력됨
let now = new Date();
console.log(now);

// new Date(milliseconds)
// UTC+0 기준 1970-01-01 00:00:00 에서 milliseconds (1/1000초) 후의 시간이 저장된 Date 객체 반환
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);
// 24시간 이후는 1월 2일임
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// 1970년의 첫 날을 기준으로 흘러간 밀리초를 나타내는 정수를 타임스탬프(timestamp)라고 부름.
// 1970년 1월 1일 이전 날짜에 해당하는 타임스탬프 값은 음수이다.
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// new Date(datestring)
// 인수가 하나인데 문자열이라면 자동 parsing 됨. 구문 분석에 적용되는 알고리즘은 Date.parse 에서 사용하는 알고리즘과 동일
let date = new Date('2017-01-26');
// 인수에 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고, 코드가 실행되는 시간에(timezone)에 따라 출력 문자열이 바뀐다.
console.log(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
// 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체 반환(지역 시간대 기준, year, month 필수)
// year: 반드시 4자리 숫자
// month : 0 ~ 11 사이의 숫자
// date : 일을 나타내는데, 값이 없다면 1일로 처리
// hours/minutes/seconds/ms : 값이 없다면 0 처리
console.log(new Date(2011, 0, 1, 0, 0, 0, 0));
console.log(new Date(2011, 0, 1));

// 최소 정밀도는 1ms (1/1000s)
console.log(new Date(2011, 0, 1, 2, 3, 4, 567));

/*
    날짜 구성요소 얻기
    getFullYear() : 연도 반환 (4자리), getYear() 사용 금지
    getMonth() : 월 반환 (0~11)
    getDate() : 일 반환 (1~31)
    getHours(), getMinutes(), getSeconds(), getMilliseconds(): 각각 반환
    getDay() : 요일 반환 (0~6)
    get 뒤에 UTC를 붙여주면 UTC+0 기준으로 요소 반환함
    ex) getUTCFullYear(), ...
    getTime() : 주어진 일시와 1970-01-01 00:00:00 사이의 간격 (ms 단위)인 타임스탬프 반환
    getTimezoneOffset(): 현지 시간과 표준 시간의 차이(분) 반환함
 */
console.log(new Date().getTimezoneOffset()); // -540 (UTC+9)


/*
    자동 고침 (autocorrection)
    범위를 벗어나는 값을 설정하려고 하면 자동 고침 기능이 활성화되며 값이 자동으로 수정됨.
 */
let date2 = new Date(2013, 0, 32); // 2013년 1월 32일은 없다
console.log(date2)

/*
    Date 객체를 숫자형으로 변경해 시간차 측정하기
    Date 객체는 숫자형으로 변경하면 타임스탬프가 된다.
 */
let date3 = new Date();
console.log(+date3);

function stopWatch() {
    // let start = new Date();
    let start = Date.now();
    // 원하는 작업 수행
    for (let i = 0; i < 100000; i++) {
        let doSomething = i * i * i;
    }

    // let end = new Date();
    let end = Date.now();
    console.log(`반복문을 모두 도는데 ${(end - start) * 0.001}초가 걸렸습니다.`);
}

// stopWatch();

/*
    Date.now()
    현재 타임스탬프를 반환하는 메소드
    new Date().getTime()과 의미론적으로 동일하나, 중간에 Date() 객체를 만들지 않는다는 것이 다르다.
    그러므로 new DateA().getTime()보다 빠르고, GC의 작업을 덜어준다는 장점이 있다.
 */

/*
    Date.parse 와 문자열
    Date.parse(str) 를 사용하면 문자열에서 날짜를 읽어올 수 있음
    문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ 처럼 생겨야 함
    YYYY-MM-DD : 연월일
    T : 구분 기호로 쓰임
    HH:mm:ss.sss : 시:분:초.밀리초
    'Z' : (옵션) +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우 UTC+0을 나타냄
 */
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms);
console.log(new Date(ms));