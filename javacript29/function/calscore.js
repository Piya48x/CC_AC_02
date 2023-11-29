const calscore = (win,draw,loss) => {
    const winpoint = win * 3;
    const drawpoint = draw;
    return winpoint + drawpoint;
}
const scort = calscore(10,5,5)
console.log(scort)
