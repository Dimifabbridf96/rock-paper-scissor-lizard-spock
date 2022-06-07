let userScore = 0;
let computerScore = 0;
let movesLeft = 10;
let leaderboard = document.getElementsByClassName('left');
let rules = document.getElementById('right');
let moves = document.getElementById('moves');
let img1 = document.getElementById('imgrules');
let score = document.getElementById('scoreboard');
let user = document.getElementById('u-score');
let comp = document.getElementById('c-score')
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
let choice = document.getElementsByClassName('choice');
let inputs = document.getElementsByTagName('input');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let game1 = document.getElementById('game');
let add = document.getElementById('add');
let over = document.getElementById('gameover')



document.addEventListener("DOMContentLoaded", game());



function restart() {
    window.location.reload();
}

function newUser() {
    var nam = fname.value;
    localStorage.setItem('name', nam)
    var last = lname.value;
    localStorage.setItem('last', last)
}

function loadUser() {
    fname = localStorage.getItem('nam');
    lname = localStorage.getItem('last');
    document.getElementById('user').value = nam + last;
}




rules.onmouseover = function () {
    img1.style.display = 'block';
}


rules.onmouseout = function () {
    img1.style.display = 'none';
}

function game() {
    let buttons = document.getElementsByTagName('button');
    let userChoice;
    let computer;
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === "Rock") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/rock.png") no-repeat center center; background-size : contain ;')
            } else if (this.getAttribute('data-type') === "Paper") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/paper.jpeg") no-repeat center center; background-size : contain ;')
            } else if (this.getAttribute('data-type') === "Scissor") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/scissor.jpeg") no-repeat center center; background-size : contain ;')
            } else if (this.getAttribute('data-type') === "Lizard") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/lizard.png") no-repeat center center; background-size : contain ;')
            } else if (this.getAttribute('data-type') === "Spock") {
                userChoice = this.getAttribute('data-type');
                computer = computerChoice();
                document.getElementById('showu').setAttribute('style', 'background: url("assets/image/spock.png") no-repeat center center; background-size : contain ;')
            }
            if (computer === 'Spock') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/spock.png") no-repeat center center; background-size : contain ;')
            }
            if (computer === 'Lizard') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/lizard.png") no-repeat center center; background-size : contain;')
            }
            if (computer === 'Paper') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/paper.jpeg") no-repeat center center; background-size :contain ;')
            }
            if (computer === 'Rock') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/rock.png") no-repeat center center; background-size :contain ;')
            }
            if (computer === 'Scissor') {
                document.getElementById('showc').setAttribute('style', 'background: url("assets/image/scissor.jpeg") no-repeat center center; background-size : contain ;')
            }
            moveless();
            console.log(userChoice);
            console.log(computer);
            rounds();
            checkWinner();
            checkLoser();
            checkTie();


            function moveless() {
                document.getElementById('moves').innerHTML = --movesLeft;
                if (movesLeft === 0) {
                    gameOver();
                }
            }

            function gameOver() {
                game1.style.display = 'none';
                over.style.display = 'block'


            };


            function rounds() {
                button.addEventListener('click', function () {
                    setTimeout(
                        scissor.disabled = true,
                        rock.disabled = true,
                        paper.disabled = true,
                        spock.disabled = true,
                        lizard.disabled = true,
                        console.log('scissor works'), 50)
                });

                setTimeout(() => {
                    scissor.removeAttribute('disabled'),
                        rock.removeAttribute('disabled'),
                        lizard.removeAttribute('disabled'),
                        spock.removeAttribute('disabled'),
                        paper.removeAttribute('disabled')
                }, 3000)
            }

            function computerChoice() {
                let choice = ['Rock', 'Scissor', 'Paper', 'Lizard', 'Spock'];
                let randomChoice = Math.floor(Math.random() * 5);
                return choice[randomChoice]
            };

        })
    };

    function checkWinner() {

        /* check if user use rock*/
        if (userChoice === 'Rock' && computer === 'Scissor') {
            result.innerHTML = (`${userChoice} crushes ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        } else if (userChoice === 'Rock' && computer === 'Lizard') {
            result.innerHTML = (`${userChoice} crushes ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        }

        /* if user use scissor*/
        if (userChoice === 'Scissor' && computer === 'Paper') {
            result.innerHTML = (`${userChoice} cuts ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        } else if (userChoice === 'Scissor' && computer === 'Lizard') {
            result.innerHTML = (`${userChoice} decapitates ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore

        }
        /*if user use paper*/
        if (userChoice === 'Paper' && computer === 'Rock') {
            result.innerHTML = (`${userChoice} covers ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        } else if (userChoice === 'Paper' && computer === 'Spock') {
            result.innerHTML = (`${userChoice} disproves ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        }
        /*if user use lizard */
        if (userChoice === 'Lizard' && computer === 'Spock') {
            result.innerHTML = (`${userChoice} poisons ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore

        } else if (userChoice === 'Lizard' && computer === 'Paper') {
            result.innerHTML = (`${userChoice} eats ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore
        }
        /* if user use spock */
        if (userChoice === 'Spock' && computer === 'Scissor') {
            result.innerHTML = (`${userChoice} smashes ${computer} 😁`);
            document.getElementById('u-score').innerHTML = ++uScore

        } else if (userChoice === 'Spock' && computer === 'Rock') {
            result.innerHTML = (`${userChoice} vaporizes ${computer} 😁 `);
            document.getElementById('u-score').innerHTML = ++uScore
        };
    };

    function checkLoser() {

        if (userChoice === 'Rock' && computer === 'Paper') {
            result.innerHTML = (`${computer} cover ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore;
        } else if (userChoice === 'Rock' && computer === 'Spock') {
            result.innerHTML = (`${computer} vaporizes ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        } else if (userChoice === 'Scissor' && computer === 'Spock') {
            result.innerHTML = (`${computer} smashes ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        }
        if (userChoice === 'Scissor' && computer === 'Rock') {
            result.innerHTML = (`${computer} crushes ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        } else if (userChoice === 'Paper' && computer === 'Scissor') {
            result.innerHTML = (`${computer} cuts ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        }
        if (userChoice === 'Paper' && computer === 'Lizard') {
            result.innerHTML = (`${computer} eats ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        } else if (userChoice === 'Lizard' && computer === 'Rock') {
            result.innerHTML = (`${computer} crushes ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        }
        if (userChoice === 'Lizard' && computer === 'Scissor') {
            result.innerHTML = (`${computer} decapitates ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        } else if (userChoice === 'Spock' && computer === 'Lizard') {
            result.innerHTML = (`${computer} poisones ${userChoice} 😞`);
            document.getElementById('c-score').innerHTML = ++cScore
        }
        if (userChoice === 'Spock' && computer === 'Paper') {
            result.innerHTML = (`${computer} disproves ${userChoice} 😞 `);
            document.getElementById('c-score').innerHTML = ++cScore
        }
    }

    function checkTie() {
        if (userChoice === computer) {
            result.innerHTML = (`${userChoice} and ${computer} is a tie 😅`)
        }
    }

}