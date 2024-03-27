//Function defination(parameters):
function add_twono(a,b)
{
 console.log(`result of two numbers : ${a+b}`);
}
//function reference:
add_twono
//Function execution(arguments):
add_twono(3,4)
const result=add_twono(3,4)
console.log(`result of two numbers : ${result}`);
function add1_twono(a,b)
{   
    let sum=a+b
    return sum
}
const sum1=add1_twono(3,5)
console.log(`result of two numbers : ${sum1}`);
 function resisterUser(username)
 {
    if(!username)
    {
        console.log("please enter your username");
        return
    }
    return `${username} already registered`
 }
 console.log( resisterUser("Smruti"));
 console.log( resisterUser());

 function add_To_Cart(item1)
 {
    return item1
 }
 console.log(add_To_Cart("dress"))

//we can pass mulitiple value in a function through spread or rest operator
 function add_To_Cart1(...item2)
 {
    return item2
 }
 console.log(add_To_Cart1("dress","powder","kajol"))

//we can pass mulitiple value in a function through spread or rest operator
 function add_To_Cart2(val1,val2,...item3)
 {
    return item3
 }
 console.log(add_To_Cart2("dress","powder","kajol"))

//how to pass an object through function
 const user1={
    username:"smruti",
    userage:"16"
 }
 function user_Object(object1)
 {
    console.log(`user name is ${object1.username} and age is ${object1.userage}`)
 }
 user_Object(user1)

 user_Object(
   {
    username:"Ashish",
    userage:"26"
   } 
 )

 //how to pass an Array inside a function
 const myArrays=["dress","powder","kajol","shoes","handbags"]
 function accept_arrays(array1)
 {
    return array1[1]

 }
 console.log(`It returns 2nd element of an Array that is ${accept_arrays(myArrays)}`)