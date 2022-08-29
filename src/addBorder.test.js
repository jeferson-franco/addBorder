const solution = require('./addBorder.js');

test('test 1', () => {
    expect(solution(['abc', 'ded'])).toEqual(['*****', '*abc*', '*ded*', '*****']);
});

test('test 2', () => {
    expect(solution(['a'])).toEqual(['***', '*a*', '***']);
});

test('test 3', () => {
    expect(solution(['aa', '**', 'zz'])).toEqual(['****', '*aa*', '****', '*zz*', '****']);
});

test('test 4', () => {
    expect(solution(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy'])).toEqual(['*******', '*abcde*', '*fghij*', '*klmno*', '*pqrst*', '*uvwxy*', '*******']);
});

test('test 5', () => {
    expect(solution(['wzy**'])).toEqual(['*******', '*wzy***', '*******']);
});
