let userScore = 0;
let computerScore = 0;
let leaderboard = document.getElementsByClassName('left');
let rules = document.getElementById('right');
let img = document.getElementById('imgrules');
let score = document.getElementById('scoreboard');
let uScore = parseInt(document.getElementById('u-score').innerHTML);
let cScore = parseInt(document.getElementById('c-score').innerHTML);
let result = document.querySelector('.result ');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let form = document.getElementById('form');
let tr = document.getElementById('buttons');
let inputs = document.getElementsByTagName('input');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');

localStorage.setItem('fname', 'fname.value');
localStorage.setItem('lname', 'lname.value');

document.addEventListener("DOMContentLoaded", game());

scissor.disabled = true;
setTimeout(() => {
    scissor.disabled = false;
    console.log('scissor works')},3000);
    

/*function pre(){
score.style.display = 'none';
result.style.display = 'none';
tr.style.display = 'none'; 

}
for(let input of inputs){
    input.addEventListener('click', function(){
        if(this.getAttribute('type') === 'submit'){
score.style.display = 'block';
result.style.display = 'block';
tr.style.display = 'block'; 
form.style.display = 'none';
       }

    }
     ) }*/
    
 

                                                            
   rules.onmouseover = function(){
         img.style.display = 'block';}
                                                        
                                                            
         rules.onmouseout = function(){
             img.style.display = 'none';}
                                                        
function game(){
 let buttons = document.getElementsByTagName('button');
 let userChoice;
 let computer;
 for(let button of buttons){
     button.addEventListener('click', function(){
         if(this.getAttribute('data-type') === "Rock"){
             userChoice = this.getAttribute('data-type');
             computer = computerChoice();
         }
               else if(this.getAttribute('data-type') === "Paper"){
                    userChoice = this.getAttribute('data-type');
                    computer = computerChoice();
        }
                else if(this.getAttribute('data-type') === "Scissor"){
                        userChoice = this.getAttribute('data-type');
                        computer = computerChoice();
                }
                    else if(this.getAttribute('data-type') === "Lizard"){
                            userChoice = this.getAttribute('data-type');
                            computer = computerChoice();
                        }
                           else if(this.getAttribute('data-type') === "Spock"){
                                userChoice = this.getAttribute('data-type');
                                computer = computerChoice();
                            }
                            if(button.getAttribute('data-type') === disabled){
                                this.getAttribute('id').style.opacity = 0.5;
                            }
              console.log(userChoice);
              console.log(computer);
                     
                     checkWinner();
                     checkLoser();
                     checkTie();




              function computerChoice(){
    let choice = ['Rock','Scissor', 'Paper', 'Lizard', 'Spock'];
    let randomChoice = Math.floor(Math.random() * 5);
    return choice[randomChoice]};
        }
 )};
  
function checkWinner(){ 
   
   /* check if user use rock*/
        if(userChoice === 'Rock' && computer === 'Scissor'){
result.innerHTML=(`${userChoice} crushes ${computer}`);
document.getElementById('u-score').innerHTML= ++uScore}
    else if(userChoice === 'Rock'  && computer === 'Lizard'  ){
       result.innerHTML=(`${userChoice} crushes ${computer}`);
       document.getElementById('u-score').innerHTML= ++uScore}
   
/* if user use scissor*/
            if(userChoice === 'Scissor' && computer === 'Paper'){
                result.innerHTML=(`${userChoice} cuts ${computer}`);
                document.getElementById('u-score').innerHTML= ++uScore}
                   else if(userChoice === 'Scissor'  && computer === 'Lizard'  ){
                        result.innerHTML=(`${userChoice} decapitates ${computer}`);
                        document.getElementById('u-score').innerHTML= ++uScore
                
                    }
/*if user use paper*/
                            if(userChoice === 'Paper' && computer === 'Rock'){
                               result.innerHTML=(`${userChoice} covers ${computer}`);  
                               document.getElementById('u-score').innerHTML= ++uScore  
                                    } else if(userChoice === 'Paper'  && computer === 'Spock'  ){
                                        result.innerHTML=(`${userChoice} disproves ${computer}`);
                                        document.getElementById('u-score').innerHTML= ++uScore
                                    }
/*if user use lizard */
                                            if(userChoice === 'Lizard' && computer === 'Spock'){
                                                result.innerHTML=(`${userChoice} poisons ${computer}`);
                                                document.getElementById('u-score').innerHTML= ++uScore
                                                
                                                    }else if(userChoice === 'Lizard'  && computer === 'Paper'  ){
                                                        result.innerHTML=(`${userChoice} eats ${computer}`);
                                                        document.getElementById('u-score').innerHTML= ++uScore
                                                    } 
/* if user use spock */
                                                            if(userChoice === 'Spock' && computer === 'Scissor'){
                                                                result.innerHTML=(`${userChoice} smashes ${computer}`);
                                                                document.getElementById('u-score').innerHTML= ++uScore
                                                                
                                                                    } else if(userChoice === 'Spock'  && computer === 'Rock'  ){
                                                                        result.innerHTML=(`${userChoice} vaporizes ${computer} `); 
                                                                        document.getElementById('u-score').innerHTML= ++uScore
                                                                    } ;
                                                                       
                                                                }
                        
                   
 
                       function checkLoser(){
                         
                            
                            if(userChoice === 'Rock'  && computer === 'Paper'  ){
                            result.innerHTML =(`${computer} cover ${userChoice}`);
                            document.getElementById('c-score').innerHTML= ++cScore}    
                       else if(userChoice === 'Rock'  && computer === 'Spock'  ){
                                result.innerHTML=(`${computer} vaporizes ${userChoice}`);
                                document.getElementById('c-score').innerHTML= ++cScore}   
                                else if(userChoice === 'Scissor'  && computer === 'Spock'){
                                result.innerHTML=(`${computer} smashes ${userChoice}`);
                                document.getElementById('c-score').innerHTML= ++cScore}
                             if(userChoice === 'Scissor'  && computer === 'Rock'  ){
                                    result.innerHTML=(`${computer} crushes ${userChoice}`);
                                    document.getElementById('c-score').innerHTML= ++cScore}
                                    else if(userChoice === 'Paper'  && computer === 'Scissor'){
                                    result.innerHTML=(`${computer} cuts ${userChoice}`);
                                    document.getElementById('c-score').innerHTML= ++cScore}
                                 if(userChoice === 'Paper'  && computer === 'Lizard'  ){
                                        result.innerHTML=(`${computer} eats ${userChoice}`);
                                        document.getElementById('c-score').innerHTML= ++cScore}
                                        else if(userChoice === 'Lizard'  && computer === 'Rock'){
                                                        result.innerHTML=(`${computer} crushes ${userChoice}`);
                                                        document.getElementById('c-score').innerHTML= ++cScore}
                                                     if(userChoice === 'Lizard'  && computer === 'Scissor'  ){
                                                            result.innerHTML=(`${computer} decapitates ${userChoice}`);
                                                            document.getElementById('c-score').innerHTML= ++cScore}
                                                            else if(userChoice === 'Spock'  && computer === 'Lizard'){
                                                            result.innerHTML=(`${computer} poisones ${userChoice}`);
                                                            document.getElementById('c-score').innerHTML= ++cScore}
                                                         if(userChoice === 'Spock'  && computer === 'Paper'  ){
                                                                result.innerHTML=(`${computer} disproves ${userChoice} `);
                                                                document.getElementById('c-score').innerHTML= ++cScore}}
                                                            
                                                                function checkTie(){
                                                                    if(userChoice === computer){
                                                                        result.innerHTML=(`${userChoice} and ${computer} is a tie`)
                                                                    }
                                                                }
                                                            
                                                             
                                                             };
                                                            

                                                                                                        



                     

