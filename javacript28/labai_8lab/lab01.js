//Lab01 
let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = String(b);
let f = String(c);

console.log("d:", d); // ผลลัพธ์: "undefined"
console.log("e:", e); // ผลลัพธ์: "2"
console.log("f:", f); // ผลลัพธ์: "NaN"

//ผลลัพธ์ของ d (String(a)):a มีค่าเป็น undefined, จึงทำให้ String(a) ได้ค่าเป็น "undefined".
//ผลลัพธ์ของ e (String(b)):b มีค่าเป็น 2, จึงทำให้ String(b) ได้ค่าเป็น "2".
//ผลลัพธ์ของ f (String(c)):ค่าของ c ได้จาก a++, ซึ่ง a มีค่าเป็น undefined และ c จะได้ค่า NaN เนื่องจากการเพิ่ม undefined ไม่สามารถทำได้ ณ จุดนี้ a กลายเป็น NaN. ดังนั้น, String(c) ได้ค่าเป็น "NaN".
//สรุป: ผลลัพธ์ที่ได้คือ "undefined" สำหรับ d, "2" สำหรับ e, และ "NaN" สำหรับ f.



