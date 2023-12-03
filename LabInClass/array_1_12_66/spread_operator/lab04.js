const num1 = [1, -2, 3, 4];
const num2 = [8, 3, -8, 1];

// รวม num1 และ num2 พร้อมเพิ่ม 5 ไว้ข้างหน้า num1 และ -6, -1 ไว้ข้างหลัง num2
const newArray = [5, ...num1, ...num2, -6, -1];
console.log(newArray);

// คำนวณผลรวมของทุก element ใน newArray
const totalSum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);
