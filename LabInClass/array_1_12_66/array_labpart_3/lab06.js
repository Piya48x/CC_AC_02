let str = '31 45 12 67 34 86 23 37 19 41';

// แปลง string เป็น array ของตัวเลข
let numbers = str.split(' ').map(Number);

// กรองเลขที่มีค่าน้อยกว่าหรือเท่ากับ 40 และคำนวณผลรวม
let sum = numbers.filter(num => num <= 40).reduce((total, num) => total + num, 0);

console.log(sum);
// ผลลัพธ์: 226
