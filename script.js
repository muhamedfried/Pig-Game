// slecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // same as querySlector
const diceEL = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



let scores, CurrntScore, activePlayer, playing;

const init = function(){
    scores = [0, 0]
    CurrntScore = 0; //
    activePlayer = 0; //
    playing = true

    score0El.textContent = 0 ;
    score1El.textContent = 0 ;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEL.classList.add('hidden')
    player0El.classList.remove ('player--winner');
    player1El.classList.remove ('player--winner');
    player0El.classList.add ('player--active');
    player1El.classList.remove ('player--active');
    
}
init();

const swicthPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    CurrntScore = 0;
   player0El.classList.toggle('player--active'); // add the class if it isnot there if it si there will remove it
   player1El.classList.toggle('player--active'); 
}


// Rolling dice
btnRoll.addEventListener('click', function(){
    if (playing){
        
    
    //Genirating a num
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`; // u changed the number of the pic

    //cheak if 
    if (dice !== 1){
        CurrntScore += dice // CurrntScore = CurrntScore + dice
        // current0El.textContent = CurrntScore;
        document.getElementById(`current--${activePlayer}`).textContent = CurrntScore

    }else{
        swicthPlayer();
    //     document.getElementById(`current--${activePlayer}`).textContent = 0;
    //     activePlayer = activePlayer === 0 ? 1 : 0;
    //     CurrntScore = 0;
    //    player0El.classList.toggle('player--active'); // add the class if it isnot there if it si there will remove it
    //    player1El.classList.toggle('player--active'); 
    }
}
})

btnHold.addEventListener('click', function () {
    if (playing) {
    // scores[1] = scores[1] + CurrntScore
    scores[activePlayer] += CurrntScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 100) {
        playing = false
        diceEL.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        
    }  else {
       swicthPlayer(); 
     }  
    }
})

btnNew.addEventListener('click', init)
