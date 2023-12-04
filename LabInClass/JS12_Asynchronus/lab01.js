let currentCharCode = 'a'.charCodeAt(0);

function printAlphabet() {
  console.log(String.fromCharCode(currentCharCode));
  currentCharCode++;

  if (currentCharCode <= 'z'.charCodeAt(0)) {
    setTimeout(printAlphabet, 1000);
  }
}

setTimeout(printAlphabet, 1000); // เรียกใช้ฟังก์ชันเริ่มต้นด้วย setTimeout
