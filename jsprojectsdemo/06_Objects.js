//Declare Object:literals ,constructor
// when we declare object by constructor (singleton)
// Object.create
// object literals

const JsLitreals = {
    name: "Smruti",
    location: "Odisha",
    email: "smruti12@gmail.com",
    "lastname":"dash"
}
console.log(JsLitreals["email"])
console.log(JsLitreals["lastname"])
//how to declare symbol as object
const loginId = Symbol("loginId")
const JsLitreals1 = {
    [loginId]: "cn00001",
}
console.log(JsLitreals1[loginId])
console.log(typeof(loginId))
//how to change any object's value
JsLitreals.email="changedmail@gmail.com"
console.log(JsLitreals["email"])
//how to add functions in objects
JsLitreals.add=function()
{
    console.log("add two numbers")
}
console.log(JsLitreals.add())
//how to access js objects in function
JsLitreals.acessObject=function()
{
    console.log(`get your name,${this.name}`)
}
console.log(JsLitreals.acessObject())
//how to freeze object
Object.freeze(JsLitreals)
JsLitreals.email="changedagainmail@gmail.com"
console.log(JsLitreals["email"])
