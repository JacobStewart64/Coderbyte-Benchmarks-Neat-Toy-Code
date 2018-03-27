const letterindexarray = "abcdefghijklmnopqrstuvwxyz"
const uletterindexarray = letterindexarray.toUpperCase();
function SimpleSymbols(str) {
    for (let i = 1; i < str.length-1; i++) {
        if (letterindexarray[str[i].charCodeAt(0) - 97] || uletterindexarray[str[i].charCodeAt(0) - 65]) if (str[i-1] != '+' || str[i+1] != '+') return false;
    }
    return true;
}