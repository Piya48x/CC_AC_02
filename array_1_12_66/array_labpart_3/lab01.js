let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
};

let sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);

console.log(sum);  // ผลลัพธ์: 390
