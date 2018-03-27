const letterindexarray = "abcdefghijklmnopqrstuvwxyz"
const uletterindexarray = letterindexarray.toUpperCase();
function SimpleSymbols(str) {
    let result = true;
    for (let i = 1; i < str.length-1; i++) {
        if (letterindexarray[str[i].charCodeAt(0) - 97]) {
            if (str[i-1] != '+' || str[i+1] != '+') {
                result = false;
                break;
            }
        }
        else if (uletterindexarray[str[i].charCodeAt(0) - 65]) {
            if (str[i-1] != '+' || str[i+1] != '+') {
                result = false;
                break;
            }
        }
    }
    return result;
}