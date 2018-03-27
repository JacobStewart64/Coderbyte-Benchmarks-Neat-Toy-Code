function LongestWord(sen) { 
    sen = sen.replace(/[[.,\/#!+@|><$%\^&\*;:?{}=\-_`~()\]]/g,"").split(" ");
    for (let i = 1; i < sen.length; i++) {
        if (sen[0].length < sen[i].length) {
            sen[0] = sen[i];
        }
    }
    return sen[0];
}