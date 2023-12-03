let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
   };
   let { numPlanets, ...discoveryYears } = planetFacts;
   console.log(discoveryYears); // *ตัวแปร discoveryYears มีค่าเป็น Object ที่มี properties เป็น { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 } ซึ่งได้มาจากการใช้ ... (rest operator) เพื่อเก็บ properties ที่เหลือไว้ใน discoveryYears หลังจากที่ numPlanets ถูกกำหนดค่าแล้วใน Object planetFacts.