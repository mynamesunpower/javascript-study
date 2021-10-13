function solution (numbers, hand) {
    let result = '';
    let left = 19;
    let right = 21;

    for (let number of numbers) {
        if ([1, 4, 7].includes(number)) {
            console.log(`${number} is Only to Left`);
            result += 'L';
            left = number;
        }
        if ([3, 6, 9].includes(number)) {
            console.log(`${number} is Only to Right`);
            result += 'R';
            right = number;
        }
        if ([2, 5, 8, 0].includes(number)) {

            if (number === 0) number = 20;

            let numberMinusLeft = number - left;
            let numberMinusRight = number - right;

            if (Math.abs(number - left) === 3) numberMinusLeft = 1;
            if (Math.abs(number - right) === 3) numberMinusRight = 1;

            console.log(`number-left: ${numberMinusLeft} / number-right: ${numberMinusRight}`)
            let isCloseToLeft = Math.abs(numberMinusLeft) < Math.abs(numberMinusRight);
            let isCloseToRight = Math.abs(numberMinusLeft) > Math.abs(numberMinusRight);
            if (isCloseToLeft) {
                console.log(`${number} is Close to Left`);
                result += 'L'
                left = number;
            } else if (isCloseToRight) {
                console.log(`${number} is Close to Right`);
                result += 'R'
                right = number
            } else {
                console.log(`두 손가락의 거리가 동일`);
                if (hand === 'left') {
                    console.log(`왼손잡이이므로 ${number}`);
                    result += 'L'
                    left = number;
                } else {
                    console.log(`오른손잡이이므로 ${number}`);
                    result += 'R'
                    right = number;
                }

            }
        }
    }
    console.log(result);
}

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = 'left';
solution(numbers, hand);