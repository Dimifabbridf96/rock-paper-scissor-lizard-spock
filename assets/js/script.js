let movesLeft = 10;
let time = 3;
let tim = document.querySelector('.timer');
let center = document.getElementById('center');
let rules = document.getElementById('right');
let moves = document.getElementById('moves');
let img1 = document.getElementById('imgrules');
let uScore = parseInt(document.getElementById('u-score').innerHTML);
let cScore = parseInt(document.getElementById('c-score').innerHTML);
let result = document.querySelector('.result ');
let userName = document.querySelector('#label-left');
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let form = document.getElementById('form');
let fname = document.getElementById('fname');
let game1 = document.getElementById('game');
let over = document.getElementById('gameover');
let join = document.getElementById('join');
let finish = document.querySelector('#finish');
let interval = null


document.addEventListener("DOMContentLoaded", game());



game1.style.display = 'none';


join.addEventListener('click', function (event) {
    event.preventDefault();
    game1.style.display = 'block';
    form.style.display = 'none';
    var x = fname.value;
    userName.innerHTML = x;
    if (x === "") {
        userName.innerHTML = 'User';
    }
});


rules.onmouseover = function () {
    img1.style.display = 'block';
};


rules.onmouseout = function () {
    img1.style.display = 'none';
};

/**  Main function where is defined the players choices and the possibility to play a round having a random choice from the computer every time the user play a round showing in the bottom boxes both choices.
 * Defined also, taking the score value on the scoreboard, the winner.  */

function game() {
    let buttons = document.getElementsByTagName('button');
    let userChoice;
    let computer;
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === "Rock") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/rock.png") no-repeat center center; background-size : contain ;');
            } else if (this.getAttribute('data-type') === "Paper") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/paper.jpeg") no-repeat center center; background-size : contain ;');
            } else if (this.getAttribute('data-type') === "Scissor") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/scissor.jpeg") no-repeat center center; background-size : contain ;');
            } else if (this.getAttribute('data-type') === "Lizard") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/lizard.png") no-repeat center center; background-size : contain ;');
            } else if (this.getAttribute('data-type') === "Spock") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/spock.png") no-repeat center center; background-size : contain ;');
            }
            if (computer === 'Spock') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/spock.png") no-repeat center center; background-size : contain ;');
            }
            if (computer === 'Lizard') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/lizard.png") no-repeat center center; background-size : contain;');
            }
            if (computer === 'Paper') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/paper.jpeg") no-repeat center center; background-size :contain ;');
            }
            if (computer === 'Rock') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/rock.png") no-repeat center center; background-size :contain ;');
            }
            if (computer === 'Scissor') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/scissor.jpeg") no-repeat center center; background-size : contain ;');
            }
            if (uScore > cScore) {
                finish.innerHTML = ` Game Over 🎮 ${fname.value} win 🎉`;
            }
            if (cScore > uScore) {
                finish.innerHTML = ` Game Over 🎮 computer win 😱`;
            }
            if (cScore === uScore) {
                finish.innerHTML = `Game Over 🎮 is a tie 😅`;
            }
            moveless();
            rounds();
            checkWinner();
            checkLoser();
            checkTie();
            timer();



        });
    }

    /** Function that allow the computer to pick a random choice during the game */

    function computerChoice() {
        let choice = ['Rock', 'Scissor', 'Paper', 'Lizard', 'Spock'];
        let randomChoice = Math.floor(Math.random() * 5);
        return choice[randomChoice];
    }

    /** Function that check if the user win and display on result field the outcome of the present round.
     * This function update the user score adding a point every time the function run
     */

    function checkWinner() {

        /* Check if user use rock*/

        if (userChoice === 'Rock' && computer === 'Scissor') {
            result.innerHTML = (`${userChoice} crushes ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;


        } else if (userChoice === 'Rock' && computer === 'Lizard') {
            result.innerHTML = (`${userChoice} crushes ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;
        }

        /* If user use scissor*/

        if (userChoice === 'Scissor' && computer === 'Paper') {
            result.innerHTML = (`${userChoice} cuts ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;
        } else if (userChoice === 'Scissor' && computer === 'Lizard') {
            result.innerHTML = (`${userChoice} decapitates ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;

        }
        /*If user use paper*/

        if (userChoice === 'Paper' && computer === 'Rock') {
            result.innerHTML = (`${userChoice} covers ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;
        } else if (userChoice === 'Paper' && computer === 'Spock') {
            result.innerHTML = (`${userChoice} disproves ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;
        }
        /*If user use lizard */

        if (userChoice === 'Lizard' && computer === 'Spock') {
            result.innerHTML = (`${userChoice} poisons ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;

        } else if (userChoice === 'Lizard' && computer === 'Paper') {
            result.innerHTML = (`${userChoice} eats ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;
        }
        /* If user use spock */

        if (userChoice === 'Spock' && computer === 'Scissor') {
            result.innerHTML = (`${userChoice} smashes ${computer} 😁 ${fname.value} win 🎉`);
            document.getElementById('u-score').innerHTML = ++uScore;

        } else if (userChoice === 'Spock' && computer === 'Rock') {
            result.innerHTML = (`${userChoice} vaporizes ${computer} 😁 ${fname.value} win 🎉 `);
            document.getElementById('u-score').innerHTML = ++uScore;
        }
    }

    /** Function that check if the user lose and display on result field the outcome of the present round.
     * This function update the computer score adding a point every time the function run */

    function checkLoser() {

        /* Check if user use rock*/

        if (userChoice === 'Rock' && computer === 'Paper') {
            result.innerHTML = (`${computer} cover ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;
        } else if (userChoice === 'Rock' && computer === 'Spock') {
            result.innerHTML = (`${computer} vaporizes ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;

            /* If user use scissor*/

        } else if (userChoice === 'Scissor' && computer === 'Spock') {
            result.innerHTML = (`${computer} smashes ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;
        }
        if (userChoice === 'Scissor' && computer === 'Rock') {
            result.innerHTML = (`${computer} crushes ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;

            /*If user use paper*/

        } else if (userChoice === 'Paper' && computer === 'Scissor') {
            result.innerHTML = (`${computer} cuts ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;
        }
        if (userChoice === 'Paper' && computer === 'Lizard') {
            result.innerHTML = (`${computer} eats ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;

            /*If user use lizard */


        } else if (userChoice === 'Lizard' && computer === 'Rock') {
            result.innerHTML = (`${computer} crushes ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;
        }
        if (userChoice === 'Lizard' && computer === 'Scissor') {
            result.innerHTML = (`${computer} decapitates ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;

            /* If user use spock */


        } else if (userChoice === 'Spock' && computer === 'Lizard') {
            result.innerHTML = (`${computer} poisones ${userChoice} 😞 computer win 😱`);
            document.getElementById('c-score').innerHTML = ++cScore;
        }
        if (userChoice === 'Spock' && computer === 'Paper') {
            result.innerHTML = (`${computer} disproves ${userChoice} 😞 computer win 😱 `);
            document.getElementById('c-score').innerHTML = ++cScore;
        }
    }

    /** Function that run if the round is a tie  */

    function checkTie() {
        if (userChoice === computer) {
            result.innerHTML = (`${userChoice} and ${computer} is a tie 😅 `);
        }
    }

    /** Function that subtract a move every round.
     * When the moves reach -1 the gameover function run 
     */

    function moveless() {
        moves.innerHTML = --movesLeft;
        if (movesLeft === -1) {
            gameOver();
        }
    }

    /** Function that hide the main game interface, the moves left text and show the gameover interface */

    function gameOver() {
        game1.style.display = 'none';
        over.style.display = 'block';
        center.style.display = 'none';
    }

    /** Function that show a timer that start from three everytime the user made a choice */

    for (let button of buttons)
        button.addEventListener('click', function () {

            tim.style.display = 'block';
            interval = setInterval(timer, 1000);
        });

    /** Function that disable the button between the rounds for 3 seconds */

    function rounds() {
        for (let button of buttons) {
            button.addEventListener('click', function () {
                setTimeout(
                    scissor.disabled = true,
                    rock.disabled = true,
                    lizard.disabled = true,
                    spock.disabled = true,
                    paper.disabled = true,
                    3000);
            });
        }

        /** Function that remove the disabled attribute and allow the user to play the next round */

        setTimeout(() => {
            scissor.removeAttribute('disabled'),
                rock.removeAttribute('disabled'),
                lizard.removeAttribute('disabled'),
                spock.removeAttribute('disabled'),
                paper.removeAttribute('disabled');
        }, 3000);
    }

}


/** Function that work over the timer shown the countdown */

function timer() {
    tim.innerHTML = `Next move in ${time}`;
    console.log('time', time);
    if (time === 0) {
        console.log('clearInterval', time)
        clearInterval(interval);
        tim.style.display = 'none';
        time = 3;
    } else {
        time--;
    }
}


/** Function that allow the user to restart the game with the button on gameover interface */

function restart() {
    window.location.reload();
}