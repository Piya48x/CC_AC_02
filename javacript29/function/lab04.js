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

// ตัวอย่างการใช้ฟังก์ชัน
const numToCheck = 5;
if (isPrime(numToCheck)) {
    console.log(numToCheck + " เป็นจำนวนเฉพาะ");
} else {
    console.log(numToCheck + " ไม่เป็นจำนวนเฉพาะ");
}
