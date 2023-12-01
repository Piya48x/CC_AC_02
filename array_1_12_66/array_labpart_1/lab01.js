let sum = 0;

const array = [29, 17, 13, 47, 23, 31];

const myFunction = (item) => {
    sum += item;
};

array.forEach(myFunction);

console.log(sum);
