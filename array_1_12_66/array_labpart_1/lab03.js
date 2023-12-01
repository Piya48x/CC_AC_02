function squareArr(arr) {
    return arr.map(num => num ** 2);
}

// ตัวอย่างการใช้งาน
const arr = [2, 3, 5, 7, 11];
const result = squareArr(arr);
console.log(result); // ผลลัพธ์: [4, 9, 25, 49, 121]
