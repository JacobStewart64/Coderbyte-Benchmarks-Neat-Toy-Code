const possiblemoves = [];
const indexesofqmark = [];
let gstr;
let go = true;
let strarr;
const set = 'rdlu';
function genMoveAndTestRec(prefix, k) {
    if (k == 0) {
        const grid = [ ['0', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x'] ];
        let currenti = 0;
        let currentj = 0;
        strarr = gstr.split("");
        for (let j = 0; j < indexesofqmark.length; j++)
            strarr[indexesofqmark[j]] = prefix[j];
        for (let j = 0; j < strarr.length; j++) {
            if (strarr[j] == 'r') currenti++;
            else if (strarr[j] == 'l') currenti--;
            else if (strarr[j] == 'd') currentj++;
            else currentj--;
            if (currenti < 0 || currenti > 4 || currentj < 0 || currentj > 4) break;
            if (grid[currenti][currentj] === '0') break;
            else grid[currenti][currentj] = '0';
        }
        if (currenti === 4 && currentj === 4) go = false;       
        return;
    }
    for (let i = 0; i < 4; ++i) {
        let newPrefix = prefix + set[i];
        if (go) {
            genMoveAndTestRec(newPrefix, k - 1);
        }         
    }
}
function CorrectPath(str) {
    gstr = str;
    for (let i = 0; i < gstr.length; i++)
        if (gstr[i] === '?') indexesofqmark.push(i);
    genMoveAndTestRec('', indexesofqmark.length);
    return strarr.join("");
}

console.log(CorrectPath("drdr??rrddd?"));