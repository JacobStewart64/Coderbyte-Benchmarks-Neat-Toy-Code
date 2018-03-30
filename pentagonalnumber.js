function PentagonalNumber(num) { 
    let totaldots = 1;
    while (num > 0)
        totaldots += --num*5;
    return totaldots;
}

console.log(PentagonalNumber(5));