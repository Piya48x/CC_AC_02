let sumAll = 0;
for (let i = 1; i <= 100; i++) {
    sumAll += i;
}
console.log("ผลรวมทุกตัวเลข: " + sumAll);

let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;  // เลขคู่
    } else {
        sumOdd += i;   // เลขคี่
    }
}
console.log("ผลรวมเฉพาะเลขคู่: " + sumEven);
console.log("ผลรวมเฉพาะเลขคี่: " + sumOdd);

let sumPowerOfTwo = 0;
let sumPowerOfThree = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumPowerOfTwo += Math.pow(i, 2);
    }
    if (i % 3 === 0) {
        sumPowerOfThree += Math.pow(i, 2);
    }
}
console.log("ผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังอง: " + sumPowerOfTwo);
console.log("ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2: " + sumPowerOfThree);
