// let ran_num = Math.random();
// 函数表达式
const hongbao = (total,num) => {
const arr =[];//待分配金额的数组
// 定义计算量
let restAmout = total,
restNum = num;
for(let i = 0; i < num - 1; i++){
    //前n-1发随机

    let amount = Math.random()*((restAmout/restNum)*2-0)
    .toFixed(2);
    restAmout -= amount
    arr.push(amount);
}
arr.push(restAmout.toFixed(2));
return arr;
}

hongbao(20,47);