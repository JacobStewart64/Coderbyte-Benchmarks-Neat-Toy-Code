function KaprekarsConstant(num) { 
    let thisone = String(num);
    let lastone = 99999;
    let series = -1;
    while (thisone != lastone) {
        lastone = thisone;
        thisone = thisone.split("").sort();
        if (thisone.length != 4) {
            if (thisone.length === 3) thisone = ['0'].concat(thisone);
            else thisone = ['00'].concat(thisone);
        }
        let bigone = thisone.reverse();
        bigone = bigone.join("");
        thisone.reverse();
        thisone = thisone.join("");
        thisone = String(bigone - thisone);
        series++;
    }
    return series;
}

console.log("thing: ", KaprekarsConstant(9831));