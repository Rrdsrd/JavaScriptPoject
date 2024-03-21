let score=33
let score1="333"
let score2="33abc"
let score3=null
let score4=undefined
let score5=true
let score6="smruti"
console.log(typeof(score1))
console.log(typeof(score))
// conversion to Number
let valuconvrtnumber=Number(score1)
let valuconvrtnumber1=Number(score2)
let valuconvrtnumber2=Number(score3)
let valuconvrtnumber3=Number(score4)
let valuconvrtnumber4=Number(score5)
let valuconvrtnumber5=Number(score6)
console.log(typeof(score1))
console.log(valuconvrtnumber1)
console.log(typeof(valuconvrtnumber1))
console.log(valuconvrtnumber2)
console.log(typeof(valuconvrtnumber2))
console.log(valuconvrtnumber3)
console.log(typeof(valuconvrtnumber3))
console.log(valuconvrtnumber4)
console.log(typeof(valuconvrtnumber4))
console.log(valuconvrtnumber5)
console.log(typeof(valuconvrtnumber5))
// "33"=>Number
// "33abc"=>NaN
// "smruti"=>NaN
// true=>1
// false=>0
let isvalid=1
let isvalid1=""
let isvalid2="smruti"
let booleanisvalid=Boolean(isvalid)
console.log(booleanisvalid)
let booleanisvalid1=Boolean(isvalid1)
console.log(booleanisvalid1)
let booleanisvalid2=Boolean(isvalid2)
console.log(booleanisvalid2)
// 1=>true,0=>false,""=>false,"smruti"=>true
let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof(stringNumber))