function solution(picture) {
    let result = [];
    let border = '*'.repeat(picture[0].length + 2);
    result.push(border);
    for (let i = 0; i < picture.length; i++) {
        result.push('*' + picture[i] + '*');
    }
    result.push(border);
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test addBorder

// alternative solution
// function solution(picture) {
//     let width = picture[0].length + 2;
//     return ['*'.repeat(width), ...picture.map((line) => `*${line}*`), '*'.repeat(width)];
// }

// alternative solution
// solution = (p) => [(t = p[0].replace(/./g, '*') + '**'), ...p.map((v) => `*${v}*`), t];

// alternative solution
// function solution(picture) {
//     let r = '*'.repeat(picture[0].length + 2);
//     return [r, ...picture.map((x) => `*${x}*`), r];
// }
