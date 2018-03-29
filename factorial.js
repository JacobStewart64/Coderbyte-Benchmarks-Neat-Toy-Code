function FirstFactorial(num) {
    let power = num;
    while (power > 1)
        num *= --power;
    return num;
}

console.log(FirstFactorial(4));