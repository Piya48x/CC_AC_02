typeof 'x';
typeof x;
typeof ``;
typeof Infinity;
typeof(100 / 0);
typeof(1 + '3');
typeof(1 * 'a');
typeof null;

console.log(typeof 'x');        // ผลลัพธ์: 'string'
console.log(typeof x);          // ผลลัพธ์: 'undefined' (ตัวแปร x ไม่ได้ถูกกำหนดค่า)
console.log(typeof ``);         // ผลลัพธ์: 'string'
console.log(typeof Infinity);   // ผลลัพธ์: 'number'
console.log(typeof(100 / 0));    // ผลลัพธ์: 'number' (Infinity)
console.log(typeof(1 + '3'));    // ผลลัพธ์: 'string' (การเชื่อมต่อกับ String)
console.log(typeof(1 * 'a'));    // ผลลัพธ์: 'number' (NaN เนื่องจากการคูณกับ 'a' ที่ไม่สามารถแปลงเป็นตัวเลขได้)
console.log(typeof null);        // ผลลัพธ์: 'object' (null ถูกจัดหมวดหมู่เป็น 'object' เนื่องจากข้อผิดพลาดในการออกแบบ)
