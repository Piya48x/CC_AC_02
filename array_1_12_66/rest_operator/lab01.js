function total(...args){
    //reduce คือ ฟังก์ชัน js ที่มีให้เพื่อคุณทุกตัวเลข
    let all = args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    console.log('แสดงผล : ',all)
}

total(5, 5)