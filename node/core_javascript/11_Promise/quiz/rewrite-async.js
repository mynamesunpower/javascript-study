/*
async와 await를 사용하여 코드 변경하기
프라미스 체이닝 챕터의 예시 중 하나를 .then/catch 대신 async/await를 사용해 다시 작성해봅시다.

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}
loadJson('no-such-user.json')
  .catch(alert); // Error: 404
 */
async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    }
    throw new Error(response.status);
}