const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
const searchChar = 'a';
const result = [];

// ใช้ลูปเพื่อหาตำแหน่งทุกตำแหน่งของ 'a' ใน array
for (let i = 0; i < alphabets.length; i++) {
  const index = alphabets.indexOf(searchChar, i);
  if (index !== -1) {
    result.push(index);
    i = index; // อัพเดทค่า i เพื่อทำให้ indexOf ค้นหาต่อจากตำแหน่งที่พบเจอล่าสุด
  } else {
    break; // ถ้าไม่พบ 'a' ในตำแหน่งใด ๆ ต่อไปให้หยุดลูป
  }
}

console.log(result);
// expected result: [0, 2, 4]
