function one(){
    const collegename="Virtusa"
    function two()
    {
        const studentname ="smruti"
        console.log(collegename)
    }
    //console.log(studentname)
    two()
}
one()


if(true)
{
 const username="smruti rekha dash"
    if (username==="smruti rekha dash")
       {
        const mycollegename="SDRT"
        console.log(username+mycollegename);
        }
        //console.log(mycollegename);
}
//console.log(username);
//************************************
//declare function through general
console.log(anyno(5))
function anyno(num1){
    return num1+1
}
//console.log(anyno(5))
//declare function through expression(hoisting)
console.log(anyno1(6))
const anyno1=function(num2){
    return num2+2
}
//console.log(anyno1(6))