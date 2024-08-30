const isPrime = require('../prime');

test('check if 9 is prime', () => {
    expect(isPrime(9)).toBe(false);
});
test('check if 25 is prime', () => {
    expect(isPrime(25)).toBe(false);
});

test('check if 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
});
test('check if 17 is prime', () => {
    expect(isPrime(17)).toBe(true);
});
