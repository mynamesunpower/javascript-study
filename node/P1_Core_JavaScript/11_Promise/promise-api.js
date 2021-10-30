import fetch from "node-fetch";
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // 모든 응답이 성공적으로 이행되었습니다.
        for(let response of responses) {
            console.log(`${response.url}: ${response.status}`); // 모든 url의 응답코드가 200입니다.
        }

        return responses;
    })
    // 응답 메시지가 담긴 배열을 response.json()로 매핑해, 내용을 읽습니다.
    .then(responses => Promise.all(responses.map(r => r.json())))
    // JSON 형태의 응답 메시지는 파싱 되어 배열 'users'에 저장됩니다.
    .then(users => users.forEach(user => console.log(user.name)));