//for checking condition inside loops
const mynum=[11,13,45,67,23,47,12,34,25]
//filter use a callback function we access each value with condition
const mynum1=mynum.filter((num)=>{return num>50})
console.log(mynum1)
//without cury braces means no need to mention return
const mynum2=mynum.filter((num)=> num>50)
console.log(mynum2)
//how to use condition in foreach loop 
const newnums=[]
mynum.forEach((num)=>{ 
    if(num>30){
        newnums.push(num)
        return newnums
    }
})
console.log(newnums)
//we can use more in filters
//no of objects inside an array we get these type of datas from database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//use filter
const userBooks=books .filter((bk)=>bk.genre==='History')
console.log(userBooks)
const userBooks1=books .filter((bk)=>bk.publish>='1995' && bk.genre==='History')
console.log(userBooks1)
//use map function as math calculation
const nolist=[11,13,45,67,23,47,12,34,25]
const change_list=nolist.map((nums)=>nums+10)
console.log(change_list)
//chainning we can use map and filter at a time
const change_list1=nolist.map((nums)=>nums*10).map((num)=>num+1).filter((num)=>num>=20)
console.log(change_list1)
//reduce function
const mynums=[1,2,3,4]
const mytotal=mynums.reduce((acc,curval)=>acc+curval,0)
console.log(mytotal)
//another reduce example
const shoppingcart=[
    {
        itemName:"Dress",
        itemPrice:2000,
    },
    {
        itemName:"Dress1",
        itemPrice:2003,
    } ,
    {
        itemName:"Dress2",
        itemPrice:2004,
    }
]
const shoppingcart1=shoppingcart.reduce((acc,item)=>acc+item.itemPrice,0)
console.log(shoppingcart1)