const letterindexarray = "bcdefghijklmnopqrstuvwxyza";
const uletterindexarray = letterindexarray.toUpperCase();
const vowelmap = { "a": "A", "e": "E", "i": "I", "o": "O", "u": "U" };
function LetterChanges(str) {
    const atoobindices = [];
    for (let i = 0; i < str.length; i++)
        if (str[i] === '[') atoobindices.push(i);
    const changedletters = [];
    for (let i = 0; i < str.length; i++) {
        if (vowelmap[letterindexarray[str[i].charCodeAt(0)-97]]) changedletters.push(vowelmap[letterindexarray[str[i].charCodeAt(0)-97]]);
        else if (letterindexarray[str[i].charCodeAt(0)-97])  changedletters.push(letterindexarray[str[i].charCodeAt(0)-97]);
        else if (uletterindexarray[str[i].charCodeAt(0)-68]) changedletters.push(uletterindexarray[str[i].charCodeAt(0)-68]);
        else changedletters.push(str[i]);  
    }
    for (let i = 0; i < atoobindices.length; i++)
        changedletters[atoobindices[i]] = '[';
    return changedletters.join("");
}

console.log(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"));

//dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~