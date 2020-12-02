var dado1 = document.getElementById("dado1");
var dado2 = document.getElementById("dado2");
var player1Ligth = document.getElementById("player1");
var player2Ligth = document.getElementById("player2");
var ScoreP1HTML = document.getElementById("totalScoreP1");
var ScoreP2HTML = document.getElementById("totalScoreP2");
var tempScoreP1HTML = document.getElementById("tempScoreP1");
var tempScoreP2HTML = document.getElementById("tempScoreP2");
var turn = 1;
var dado = "img/dados.png";
var Dados = ["img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];
var num1;
var num2;
var suma;
var scoreP1;
var scoreP2;
var tempScoreP1;
var tempScoreP2;


var time = 1000;
var winner;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("modal-result");
    const tachita = document.querySelector('.close');

    tachita.onclick = function () {

        modal.style.display = "none";
    }

    window.onclick = function (event) {

        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

init();
async function init() {
    suma = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    tempScoreP1 = 0;
    tempScoreP2 = 0;
    winner = "";
    turn = 1;
    dado1.innerHTML = `<img src="${dado}" >`;
    dado2.innerHTML = `<img src="${dado}" >`;
    player1Ligth.classList.remove("active");
    player2Ligth.classList.remove("active");
    player1Ligth.classList.add("active");
    tempScoreP1HTML.innerHTML = `${tempScoreP1}`;
    ScoreP1HTML.innerHTML = `${scoreP1}`;
    tempScoreP2HTML.innerHTML = `${tempScoreP2}`;
    ScoreP2HTML.innerHTML = `${scoreP2}`;
}



async function TirarDados() {
    
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    dado1.innerHTML = `<img src="${Dados[num1 - 1]}" >`
    dado2.innerHTML = `<img src="${Dados[num2 - 1]}" >`
    Turno(num1, num2);
}



async function Turno(num1, num2) {
    if (num1 == num2) {
        tempScoreP1 = 0;
        tempScoreP2 = 0;
        Cambio();
        return
    }
    if (turn == 1) {
        tempScoreP1 += num1 + num2;
        tempScoreP1HTML.innerHTML = `${tempScoreP1}`;
    }
    if (turn == 2) {
        tempScoreP2 += num1 + num2;
        tempScoreP2HTML.innerHTML = `${tempScoreP2}`;
    }

}
function Cambio() {
    if (turn == 1) {
        scoreP1 += tempScoreP1;
        tempScoreP1=0;
        turn = 2;
        player1Ligth.classList.remove("active");
        player2Ligth.classList.add("active");
        tempScoreP1HTML.innerHTML = `${tempScoreP1}`;
        ScoreP1HTML.innerHTML = `${scoreP1}`;
        if(GameOver()){
            return
        } 
        return turn
    }
    if (turn == 2) {
        scoreP2 += tempScoreP2;
        tempScoreP2=0;
        turn = 1;
        player1Ligth.classList.add("active");
        player2Ligth.classList.remove("active");
        tempScoreP2HTML.innerHTML = `${tempScoreP2}`;
        ScoreP2HTML.innerHTML = `${scoreP2}`;
        if(GameOver()){
            return
        } 
        return turn
    }
}


function GameOver() {
    if (scoreP1 >= 100) {
        winner = "Player1"
        showModal();
        return true;
    }
    if (scoreP2 >= 100) {
        winner = "Player2"
        showModal();
        return true;
    }
    return false
}

function showModal() {

    // Mostrar ganador.
    console.log('Alguien ganó');

    const modal = document.getElementById('modal-result');
    modal.style.display = "block";

    const winnerTextResult = document.querySelector('#winner-text-result');
    winnerTextResult.innerHTML = `Winner: ${winner}`;
}
function restart() {
    location.reload();
}