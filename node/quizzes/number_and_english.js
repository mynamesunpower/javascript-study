function solution(s) {
    const numberInEnglish = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let result = s;

    numberInEnglish.map((item) => {
        result = result.replace(new RegExp(item, 'g'), numberInEnglish.indexOf(item));
    })

    return +result;
}

let s = 'sixsix';
console.log(solution(s));