
function evenOrOdd(number) {
    if (typeof number !== 'number') {
        throw new TypeError("Input must be a number");
    }
    return number % 2 === 0 ? 'even' : 'odd';
}