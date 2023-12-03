let user = {
    name: 'John',
    years: 27
  };
  
  let { name, years: age, isAdmin = false } = user;
  
  console.log(name);     // 'John'
  console.log(age);      // 27
  console.log(isAdmin);  // false (ถ้าไม่มี property isAdmin ใน Object user จะใช้ค่า default เป็น false)
/** name จะมีค่าเป็น 'John' ซึ่งมาจาก property name ใน Object user.
age จะมีค่าเป็น 27 ซึ่งมาจาก property years ใน Object user (เนื่องจากเรากำหนดชื่อตัวแปรให้เป็น age แทน years โดยใช้ years: age).
isAdmin จะมีค่าเป็น false ซึ่งเป็นค่า default ที่เรากำหนดไว้ (ถ้า property isAdmin ไม่มีใน Object user).*/  