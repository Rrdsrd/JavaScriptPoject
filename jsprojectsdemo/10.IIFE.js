//Imidiately Invoked Function Expression(IIFE)
//to avoid global pollution
//nameD IIFE
(function add()
{
    console.log("Db Connection done");
})();
//nameD IIFE
(function addagain()
{
    console.log("Db Connection done again");
})();
//unnameD IIFE
((name)=>
{
    console.log(`${name}`);
})('smruti')