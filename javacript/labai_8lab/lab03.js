let a = undefined;
let b = ' '
let c = !b;

let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

console.log('d: '+d)
console.log('e: ' +e)
console.log('f: ' +f)
/*ผลลัพธ์ของ d (Boolean(a)):

a มีค่าเป็น undefined, และการแปลง undefined เป็น boolean จะได้ค่า false.
ผลลัพธ์ของ e (Boolean(b)):

b มีค่าเป็น String ว่าง (' '), และ String ที่มีความยาว 1 หรือมากกว่าจะถูกแปลงเป็น true.
ผลลัพธ์ของ f (Boolean(c)):

c ได้จากการใช้ ! (NOT) กับ b, ซึ่ง ! จะกลายเป็น false ถ้า b เป็นค่าเป็นค่าจริง (truthy), ซึ่งในที่นี้ b เป็น String ว่างที่ถือเป็นค่าจริง. ดังนั้น, c จะได้ค่า false.
สรุป: ผลลัพธ์ที่ได้คือ false สำหรับ d, true สำหรับ e, และ false สำหรับ f. */
