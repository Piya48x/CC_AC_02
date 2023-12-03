let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
   ];
   console.log(raindrops); // *(ตัวแปร raindrops)
   console.log(whiskers); // **(ตัวแปร whiskers)
   console.log(aFewOfMyFavoriteThings); // ***(ตัวแปร aFewOfMyFavoriteThings)
   /**raindrops มีค่าเป็น 'Raindrops on roses' ซึ่งเป็นส่วนหนึ่งของ Array ต้นฉบับ
whiskers มีค่าเป็น 'whiskers on kittens' ซึ่งเป็นส่วนหนึ่งของ Array ต้นฉบับ
aFewOfMyFavoriteThings มีค่าเป็น ['Bright copper kettles', 'warm woolen mittens'] ซึ่งเป็นส่วนที่เหลือของ Array ต้นฉบับ หลังจากที่ raindrops และ whiskers ถูกกำหนดค่าแล้ว ด้วยการใช้ ... (rest operator) ในการเก็บค่าที่เหลือไว้ใน aFewOfMyFavoriteThings */