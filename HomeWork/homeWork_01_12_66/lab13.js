let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *[ 10, 30, 20 ] ผลลัพธ์จะเป็น value ของตัวแปร numders เพราะไม่มีเงื่ยนไขหรือคำสั่งให้กระทำ