let name1 = "John";
function sayHi() {
    console.log('Hi, '+ name1)
}
name1 = "Pete";
sayHi(); //*
/* บรรทัดที่ถูกเรียก sayHi(); จะแสดง Hi, Pete ใน alert. นี้เกิดจากว่าฟังก์ชัน sayHi ได้เข้าถึงตัวแปร name ภายนอกฟังก์ชันได้ (lexical scoping).

เมื่อเรียก sayHi() ในบรรทัดล่าง, มันจะค้นหาตัวแปร name ในขอบเขต (scope) ของตัวเองก่อน แต่ถ้าไม่พบจะไปค้นหาในขอบเขตที่กลายเป็น Lexical Environment ของฟังก์ชัน sayHi ที่ถูกสร้างขึ้นเมื่อโปรแกรมเริ่มทำงาน. ในที่นี้, name ถูกประกาศด้วย let นอกฟังก์ชัน sayHi และถูกให้ค่าเป็น 'Pete' ก่อนที่ sayHi จะถูกเรียก.*/