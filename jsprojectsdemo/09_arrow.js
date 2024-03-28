//this keyword(tells about current context)
const user={
    user_name:"Smruti",
    user_address:"Bhubaneswar",

    login_user_message:function()
    {
        console.log(`${this.user_name}, hey you have logged in`)

        //console.log(this)

    }
}
// user.login_user_message()
// user.user_name="Rekha"
// user.login_user_message()
//this this will return empty as there is no global declaration
//console.log(this)

function anyone()
{   
    let username="SmrutiDash"
    //this will retutn undefained ,as this is not working inside this function
    console.log(this.user_name);
}
anyone()

const anytwo=function anytwo()
{   
    let username="SmrutiDash"
    //this will also retutn undefained ,though here it is declare as object
    console.log(this.user_name);
}
anytwo()

//arrow function
const anythree=() =>
{   
    let username="SmrutiDash"
    //this will also retutn undefained ,though here it is used as arrow function
    console.log(this.user_name);
}
anythree()
//explict return that is insdie the scope {}
const addtwonum=(num1,num2)=>{
    return num1+num2

}
console.log(addtwonum(5,3))

//Implict delaration ther is no scope that is no {}
const addnums=(num1,num2)=> num1+num2


console.log(addnums(3,3))
//or
const addnums1=(num1,num2)=> (num1+num2)

console.log(addnums1(3,9))

//we can also return an object
const show_username=()=> ({username:"Smruti"})

console.log(show_username())
//we can also used arrow function in an Array
const myArray=[3,4,5,8,9]
myArray.forEach(function(){})
myArray.forEach(()=>{})
myArray.forEach(()=>({}))