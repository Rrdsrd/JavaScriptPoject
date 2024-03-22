const score=400
console.log(score)
const balance=new Number(200)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const otherNo=5000.00004
//toPrecision will return string type
console.log(otherNo.toPrecision(4))
const otherNo1=50000
//toLocaleString returns stringtype
console.log(otherNo1.toLocaleString('en-IN'));
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(3,4,2,6,7,9))
console.log(Math.max(3,4,2,6,7,9))
//values all come between 0 and 1
console.log(Math.random())
//values all come between 1 and 10
console.log(Math.random()*10+1)
//when value needed min and max value
const min=20
const max=30
console.log(Math.floor(Math.random()*(max-min+1)+min))