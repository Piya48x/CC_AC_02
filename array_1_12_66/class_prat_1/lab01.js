class Calculator {
    constructor(initialValue = 0) {
      this.value = initialValue;
    }
  
    add(number) {
      this.value += number;
    }
  
    subtract(number) {
      this.value -= number;
    }
  
    multiply(number) {
      this.value *= number;
    }
  
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        console.error("Cannot divide by zero.");
      }
    }
  
    show() {
      console.log(`Current value: ${this.value}`);
    }
  }
  
  // ตัวอย่างการใช้งาน
  const myCalculator = new Calculator(10);
  myCalculator.add(5);
  myCalculator.subtract(3);
  myCalculator.multiply(2);
  myCalculator.divide(4);
  myCalculator.show();  // ควรแสดง alert "Current value: 3.5"
  