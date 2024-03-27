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
//how to declare object as singleton or through constructor
//singleton object:
const username=new Object()
username.id="cn00004"
username.name="Smruti"
username.isloggedin=true
console.log(username)
//non_singleton object:
const username1={}
//acess objects through objects
//non_singleton object:
const username2={
    email:"cahrmy1232gmail.com",
    fullname:{
        user_fullname:{
            first_name:"Smruti",
            middle_name:"Rekha",
            last_name:"Dash",
        }
        
    }
}
console.log(username2.email)
console.log(username2.fullname)
console.log(username2.fullname.user_fullname)
console.log(username2.fullname.user_fullname.middle_name)
//how to combine objects
const obj1={name1:"Smruti",age1:18,School1:"RDT"}
const obj2={name2:"Rekha",age2:19,School2:"SDB"}
const obj3={name3:"Dash",age3:20,School3:"NDX"}
//not the right way
const obj4={obj1,obj2,obj3}
console.log(obj4)
//right way
const obj5=Object.assign({},obj1,obj2,obj3)
console.log(obj5)
//right way
const obj6={...obj1,...obj2,...obj3}
console.log(obj6)
//Database values coming as arrys og objects
const login_info=[
    {
        id:"0001",
        name:"Smruti",
        city:"Hydrabad"
    },
    {
        id:"0002",
        name:"Rekha",
        city:"Bangalore"
    },
    {
        id:"0003",
        name:"Dash",
        city:"Pune"
    }
]
//how to acess these values
console.log(login_info[1].id)
//acess objects through keys and values
//it's returntype is always array
console.log(Object.keys(username2))
console.log(Object.values(username2))
//here in entries the reurntype is array within array
console.log(Object.entries(username2))
console.log(typeof(Object.entries(username2)))
//when going through loop we need ti check whether an element exist on not
console.log(username.hasOwnProperty("isloggedin"))

