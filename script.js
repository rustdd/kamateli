'use strict';
document.querySelector(".game").classList.add('hidden');
const player0El=document.querySelector(".player--0");
const player1El=document.querySelector(".player--1");
const score0El=document.getElementById("score--0");
const score1El=document.getElementById("score--1");
const current0El=document.getElementById("current--0");
const current1El=document.getElementById("current--1");
let currentScore;
let playing=true;
const btnRoll=document.querySelector(".btn--roll");
const btnNew=document.querySelector(".btn--new");
const btnHold=document.querySelector(".btn--hold");
const diceEl=document.querySelector(".dice");
const btnStart=document.querySelector(".start");
var activePlayer;
let winningScore;
let scores;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };
  init ();
btnStart.addEventListener ('click', function (){
    document.querySelector(".intro").classList.add('hidden');
    document.querySelector(".game").classList.remove("hidden"); 
     winningScore=document.getElementById("myNumber").value;
}
);
console.log(btnRoll);
diceEl.classList.add('hidden');
const switchPlayer= function () {
    document.getElementById('current--'+activePlayer).textContent=0;
        if (activePlayer===0) activePlayer=1;
        else activePlayer=0;
        currentScore=0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
};
btnRoll.addEventListener('click', function(){
    if (playing==true){
    const dice=Math.trunc(Math.random()*6+1);
    diceEl.classList.remove('hidden');
    diceEl.src="dice-"+dice+".png";
    if (dice!==1){
    currentScore+=dice;
    document.getElementById('current--'+activePlayer).textContent=currentScore;
    }
    else {
        document.getElementById('current--'+activePlayer).textContent=0;
        if (activePlayer===0) activePlayer=1;
        else activePlayer=0;
        currentScore=0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
}
});
btnHold.addEventListener ('click', function (){
    if (playing==true){
    scores[activePlayer]+=currentScore;
    document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
    if (scores[activePlayer]>=winningScore){
    playing=false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    else
    switchPlayer();
}
}
);
btnNew.addEventListener ('click', function (){
    init ();
    document.querySelector(".intro").classList.remove('hidden');
    document.querySelector(".game").classList.add("hidden"); 
});

