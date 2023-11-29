function max() {
    if (arguments.length === 0) {
        return undefined; // กรณีไม่มีอาร์กิวเมนต์
    }

    let maxVal = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > maxVal) {
            maxVal = arguments[i];
        }
    }

    return maxVal;
}

console.log(max());          // undefined
console.log(max(2));         // 2
console.log(max(3, 1));      // 3
console.log(max(7, 3, 9, 2)); // 9
