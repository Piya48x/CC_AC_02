const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const result1 = array1.filter(item => item.charAt(0).toUpperCase() === 'E');
console.log(result1);
// expected result: ['Elephant', 'Eagle']

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const result2 = array2.filter(item => item === item.toUpperCase());
console.log(result2);
// expected result: ['APPLE', 'PEACH']

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
const result3 = array3.filter(item => item.toLowerCase().includes('buri'));
console.log(result3);
// expected result: ['Chonburi', 'Buriram', 'Saraburi']
