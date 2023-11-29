function squareNum(num) {
    const result = num * num;
    return result
}

console.log(squareNum(2))
/* ให้ผลลัพธ์เป็น undefined เพราะฟังก์ชัน squareNum นี้ไม่คืนค่าใด ๆ ในกรณีที่มี return statement ที่ระบุว่าคืนค่ากลับมา เมื่อคุณเรียก console.log(squareNum(2)) จะได้ผลลัพธ์เป็น undefined เนื่องจากฟังก์ชันไม่ได้คืนค่าใด ๆ.*/