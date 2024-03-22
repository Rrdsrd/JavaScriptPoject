//Javascript has 2 memories 1.stack 2.heap
//In Stack primitive types store(copy vale)
//In Heap nonprimitive type store(origunalvalue/reference value)
const name="smruti"
const age=40
console.log(`hello my name is ${name} and age is ${age}`);
const myname=new String("SmrutiRekhaDash")
console.log(myname)
console.log(myname.__proto__)
console.log(myname.length)
console.log(myname.toUpperCase())
console.log(myname.charAt(7))
console.log(myname.indexOf('r'))
const newstring=myname.substring(0,6)
console.log(newstring)
const anotherstring = myname.slice(-9,-5)
console.log(anotherstring);