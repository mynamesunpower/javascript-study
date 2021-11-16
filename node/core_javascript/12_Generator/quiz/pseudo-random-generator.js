function* pseudoRandom(seed) {
    let b = seed * 16807 % 2147483647;
    for (let i = b; ; i = i * 16807 % 2147483647) yield i;
}

let generator = pseudoRandom(1);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);