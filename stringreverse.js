const { performance } = require('perf_hooks');

function FirstReverse(str) { 
    str = str.split("");
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        const temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }  
    return str.join();           
}

function HisFirstReverse(str) { 
    var arr = str.split('');
    arr.reverse();
    return arr.join('');         
}

performance.mark('A');
for (let i = 0; i < 100; i++) {
    HisFirstReverse("wtf^^^^ ^^///[[is ]]]goin on?");
}
performance.mark('B');
performance.measure('A to B', 'A', 'B');
const measure = performance.getEntriesByName('A to B')[0];
console.log(measure.duration);

/*
performance.mark('A');
for (let i = 0; i < 100; i++) {
    FirstReverse("wtf^^^^ ^^///[[is ]]]goin on?");
}
performance.mark('B');
performance.measure('A to B', 'A', 'B');
const measure = performance.getEntriesByName('A to B')[0];
console.log(measure.duration);
*/

//Node Benchmark
//His average = 0.850ms
//My average =  0.725ms
//Mine per his = 1.1724
//Worst case happened more frequently and was more severe for him