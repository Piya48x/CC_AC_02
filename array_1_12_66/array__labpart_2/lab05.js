const inventory = [
    {name: 'apples', quantity: 2 },
    {name: 'bananas', quantity: 0 },
    {name: 'cherries', quantity: 5 },
];

let result = inventory.filter(item => item.name === 'cherries')[0]
console.log(result)