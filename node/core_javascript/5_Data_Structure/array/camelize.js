'use strict';

/*
border-left-width를 borderLeftWidth로 변경하기
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
 */

const camelize = (str) => {
    return str.split('-').map((value, index) => {
        // value.substr(1, length) 대신 value.slice(1) 도 가능.
        return index === 0 ? value : value[0].toUpperCase() + value.substr(1, value.length);
    }).join('')
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
