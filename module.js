const readline = require('readline-sync')
let sum=0
let fig = []
const a=readline.question('How much angle do you want in this figure?')
for(let i=a;i>0;i--){
    let x1 = readline.question('Enter x')
    let y1 = readline.question('Enter y')
    let spis = {x: x1,y: y1}
    fig.push(spis)
}
console.log(fig)
for (let i=0;i<a-1;i++){
    sum+=(((Number(fig[i].x)-Number(fig[i+1].x))**2+((Number(fig[i].y)-Number(fig[i+1].y))**2))**(1/2))
}
sum+=(((Number(fig[a-1].x)-Number(fig[0].x))**2+((Number(fig[a-1].y)-Number(fig[0].y))**2))**(1/2))
console.log(sum.toFixed(2))