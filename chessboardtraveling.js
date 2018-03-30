let count = 0;
let a;
let b;
function TravelAllWaysAndCount(x, y) {
    if (x == a && y == b) count++;
    if (x < a) TravelAllWaysAndCount(x + 1, y);
    if (y < b) TravelAllWaysAndCount(x, y + 1);
}
function ChessboardTraveling(str) {
    const x = Number(str[1]);
    const y = Number(str[3]);
    a = Number(str[6]);
    b = Number(str[8]);
    TravelAllWaysAndCount(x, y);
    return count;    
}

console.log(ChessboardTraveling('(2 2)(4 3)'));