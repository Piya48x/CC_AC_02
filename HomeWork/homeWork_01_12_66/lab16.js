function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
   }
   getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
   getUserData({ firstName: 'Melissa' }); // **
   getUserData({}); // *** 
   
   /**
    * Your name is Alejandro and you like purple   // * (ตัวแปร firstName และ favoriteColor ถูกกำหนดค่าจาก object ที่มีทั้งสอง property)
      Your name is Melissa and you like green      // ** (ตัวแปร firstName ถูกกำหนดค่าจาก object ที่มี property firstName เท่านั้น และ favoriteColor ถูกกำหนดค่าเป็น 'green' ตามค่า default)
      Your name is undefined and you like green   // *** (ไม่มี property ใน object ที่ถูกส่งเข้าฟังก์ชั่นทั้งหมด ตัวแปร firstName จึงมีค่าเป็น undefined และ favoriteColor ถูกกำหนดค่าเป็น 'green' ตามค่า default)
      
      ในกรณีที่มี property favoriteColor ใน object ที่ส่งเข้าฟังก์ชั่น, ค่า favoriteColor จะถูกใช้ตามค่าที่ถูกส่งเข้ามา.
ในกรณีที่ไม่มี property favoriteColor ใน object ที่ส่งเข้าฟังก์ชั่น, ค่า favoriteColor จะถูกกำหนดค่าเป็น 'green' ตามค่า default ที่ถูกกำหนดในฟังก์ชั่น.
ในกรณีที่ไม่มี property firstName ใน object ที่ส่งเข้าฟังก์ชั่น, ตัวแปร firstName จะมีค่าเป็น undefined.
*/