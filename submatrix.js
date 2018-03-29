function MaximalSquare(strArr) {  
    let sizetocheck = strArr.length < strArr[0].length ? strArr.length : strArr[0].length;
    let starti = 0;
    let startj = 0;
    while (sizetocheck > 0) {
        let good = true;
        owningloop:
        for (let i = starti; i < (sizetocheck + starti); i++) {
            for (let j = startj; j < (sizetocheck + startj); j++) {
                if (strArr[i][j] === '0') { good = false; break owningloop; } 
            }
        }
        if (good) return sizetocheck * sizetocheck;
        if ((sizetocheck + starti) < strArr.length) starti++;
        else if ((sizetocheck + startj) < strArr[0].length) { startj++; starti = 0; }
        else { sizetocheck--; starti = 0; startj = 0; }
    }
    return 0;
}

console.log(MaximalSquare(["10100", "10111", "11111", "10010"]));