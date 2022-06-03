let userScore = 0;
let computerScore = 0;
let leaderboard = document.getElementsByClassName('left');
let rules = document.getElementsByClassName('right');
let score = document.getElementById('scoreboard');
let uScore = document.getElementsByClassName('u-score');
let cScore = document.getElementsByClassName('c-score');
let result = document.getElementsByClassName('result');

let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

document.addEventListener("DOMContentLoaded", game());

function game(){
 let buttons = document.getElementsByTagName('button');
 let userChoice;
 let computer;
 for(let button of buttons){
     button.addEventListener('click', function(){
         if(this.getAttribute('data-type') === "rock"){
             userChoice = this.getAttribute('data-type');
             computer = computerChoice();
         }
               else if(this.getAttribute('data-type') === "paper"){
                    userChoice = this.getAttribute('data-type');
                    computer = computerChoice();
        }
                else if(this.getAttribute('data-type') === "scissor"){
                        userChoice = this.getAttribute('data-type');
                        computer = computerChoice();
                }
                    else if(this.getAttribute('data-type') === "lizard"){
                            userChoice = this.getAttribute('data-type');
                            computer = computerChoice();
                        }
                           else if(this.getAttribute('data-type') === "spock"){
                                userChoice = this.getAttribute('data-type');
                                computer = computerChoice();
                            }
              console.log(userChoice);
              console.log(computer);
                     
              function computerChoice(){
    let choice = ['rock','scissor', 'paper', 'lizard', 'spock'];
    let randomChoice = Math.floor(Math.random() * 5);
    return choice[randomChoice]};
        }
 )};

function click(){
rock.addEventListener('click', function(){
    game('rock');
})
paper.addEventListener('click', function(){
    game('paper')
})
scissor.addEventListener('click', function(){
    game('scissor')
})
lizard.addEventListener('click', function(){
    game('lizard')
})
spock.addEventListener('click', function(){
    game('spock')
})
}} ;   


  
/*
function game(user){ }
  function checkWinner(){
   
        if(user === 'rock' && computerChoice() === 'scissor'){
console.log(' user win');

    } if(user === 'rock'  && computerChoice === 'lizard'  ){
        console.log('user win');
    } if(user === 'rock'  && computerChoice === 'paper'  )
        console.log('computer win');}
     if(user === 'rock'  && computerChoice === 'spock'  ){
            console.log('computer win');}
        
  if(user === 'scissor' && computerChoice() === 'paper' || 'lizard'){
        console.log('user win')
    } else if (computerChoice() === 'spock' || 'rock'){
        console.log( 'user lost');
    }
           
        
    

    if (user === 'paper'){
        if(computerChoice() === 'rock' || 'spock'){
            console.log('user win')
        }
    } */
