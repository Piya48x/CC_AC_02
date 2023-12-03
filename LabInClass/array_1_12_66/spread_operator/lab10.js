function cloneObject(inputObject) {
    // ใช้ spread operator เพื่อคัดลอก key-value ของ Object
    const clonedObject = { ...inputObject };

    return clonedObject;
}

// ตัวอย่างการเรียกใช้ฟังก์ชัน
const originalObject = { name: 'Dung', age: 23, city: 'กาฬสินธ์ุ' };
const clonedObject = cloneObject(originalObject);

console.log(clonedObject);
