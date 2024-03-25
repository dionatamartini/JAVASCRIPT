function rest(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(rest(1 , 2, 5))