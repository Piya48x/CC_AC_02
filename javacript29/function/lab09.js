function getLongText() {
    return'Lorm Ipsum is simply dummy text of the printing and typesetting industry.'

}
console.log(getLongText());
/*  
ในกรณีนี้, return ถูกแบ่งจาก 'Lorm Ipsum is simply dummy text...' ด้วย newline ทำให้ return ไม่มีค่าที่จะคืน (undefined).
function getLongText() {
    return 'Lorm Ipsum is simply dummy text of the printing and typesetting industry.';
}

console.log(getLongText());

function getLongText() {
    return \
    'Lorm Ipsum is simply dummy text of the printing and typesetting industry.';
}

console.log(getLongText());

ฟังก์ชัน getLongText นี้จะได้ผลลัพธ์ที่ไม่ถูกต้อง เนื่องจาก JavaScript จะจัดการ Automatic Semicolon Insertion (ASI) ในที่นี้ โดยจะเพิ่มเซมิโคลอน (semicolon) ต่อท้ายคำสั่ง return ทันทีที่พบ newline (บรรทัดใหม่) ที่ไม่มี statement ต่อมา */