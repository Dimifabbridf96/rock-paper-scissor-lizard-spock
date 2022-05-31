let userScore = 0;
let computerScore = 0;
let leaderboard = document.getElementsByClassName('left');
let rules = document.getElementsByClassName('right');
let score = document.getElementById('scoreboard');
let uScore = document.getElementsByClassName('u-score');
let cScore = document.getElementsByClassName('c-score');
let result = document.getElementsByClassName('result');
let buttons = document.querySelectorAll('.choice');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');


function game(user){
    function computerChoice(){
    let choice = ['rock','scissor', 'paper', 'lizard', 'spock'];
    let randomChoice = Math.floor(Math.random() * 5);
    return choice[randomChoice];

    }

    if(user === 'rock' && computerChoice() === 'scissor' || 'lizard'){
console.log(' user win');

    } if(user === 'rock'  && computerChoice() === 'paper'|| 'spock'  ){
        console.log('user lost');
    }

 if(user === 'scissor' && computerChoice() === 'paper' || 'lizard'){
        console.log('user win')
    } else if (computerChoice() === 'spock' || 'rock'){
        console.log( 'user lost');
           
        
    }

    if (user === 'paper'){
        if(computerChoice() === 'rock' || 'spock'){
            console.log('user win')
        }
    } 
console.log(user);
console.log(computerChoice());
}
 game();


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
}
click();
 
    

