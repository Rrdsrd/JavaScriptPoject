const random_no=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const lastResult1=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const resultParas=document.querySelector(".resultParas")

const p=document.createElement('p')

let prevGuess=[]
let no_of_guess=1
let play_game=true

if(play_game)
{
   submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
   })
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(no_of_guess===11)
        {
            displayGuess(guess)
            displayMessages(`Game Over,random numbser was ${random_no}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
   
    
}

function checkGuess(guess)
{
    if(guess===random_no )
    {
        displayMessages(`Game Over,random numbser was ${random_no}`)
        endGame()
    }
    else if (guess < random_no ){
        displayMessages(`No is Too Low`)

    }
    else if (guess > random_no ){
        displayMessages(`No is Too High`)

    }
}
function displayGuess(guess)
{
    userInput.value=""
    guessSlot.innerHTML +=`${guess}`
    no_of_guess++;
    lastResult1.innerHTML='${11-no_of_guess}'

}


function displayMessages(message)
{
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
    userInput.value=""
    userInput.setAttribute('Ddisabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    play_game= false;
    newGame();
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      random_no= parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      no_of_guess=1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      resultParas.removeChild(p);
  
      play_game = true;
    });
}
