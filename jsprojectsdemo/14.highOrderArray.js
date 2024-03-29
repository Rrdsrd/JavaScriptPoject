["","",""]
[{},{},{}]

const Array_one=[,2,3,4,5,6,7]
//syntax (const iterator of objects)
//for of loop
for (const num of Array_one){
    console.log(num)

}

const string_name="Smruti Rekha Dash"
//for of loop
for (const anystring of string_name){
    console.log(anystring)
}
//Map object which hold key value pair
//these have unique values and order entries
const map=new Map()
map.set("001","smruti")
map.set("002","rashmi")
map.set("003","priya")
map.set("004","ashish")
console.log(map)
//for of loop this will print arrays
for (const key of map){
    console.log(key)
}
// this will print indivisual (array destructring)
for (const [key,value] of map){
    console.log(key,value)
}
//for of loop in object
const myobj={
    name:"Smruti",
    age:"23",
    passing_year:"2006"
}
//not possible in forof loop 
// for (const [key,value] of myobj){
//     console.log(key,value)
// }
//here we have to use for in loop
//syntax (const iterator in objects)
for (const key in myobj){
    console.log(`${key} values are ${myobj[key]}`)
}
//can we use for in loop in Aarray
const information=["name","age","passing_year"]
for (const key in information)
{
    console.log(key)
    console.log(information[key])
}
//as map are not itrative so we can't use for in loop here