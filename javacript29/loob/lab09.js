function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primesInRange = findPrimesInRange(1, 100);
console.log("จำนวนเฉพาะในช่วง 1 ถึง 100: " + primesInRange);

/* isPrime เป็นฟังก์ชันที่ตรวจสอบว่าเลขที่กำหนดเป็นจำนวนเฉพาะหรือไม่
findPrimesInRange เป็นฟังก์ชันที่หาจำนวนเฉพาะในช่วงที่กำหนด
สุดท้ายใช้ console.log เพื่อแสดงผลลัพธ์ใน console
โค้ดนี้จะแสดงจำนวนเฉพาะในช่วง 1 ถึง 100 ใน console. */