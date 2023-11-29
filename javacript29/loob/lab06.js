let n = 8; // จำนวนบรรทัดที่ต้องการ

for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}
