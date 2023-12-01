function filterOutOdds(...numbers) {
    // ใช้ filter เพื่อกรองเลขที่เป็นเลขคู่
    const evens = numbers.filter(number => number % 2 === 0);
    
    return evens;
}

// เรียกใช้ฟังก์ชัน
const result = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
