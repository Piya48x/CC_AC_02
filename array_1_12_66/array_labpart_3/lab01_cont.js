const array = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
   ];
   
   const result = array.map(fruit => fruit.name);
   
   console.log(result);
   // ผลลัพธ์: ["apple", "banana", "watermelon"]
   