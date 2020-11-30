
const URL_API = "https://rickandmortyapi.com/api/character/";
var numberOfCard;
var numOfmoves;
var Cards = [];
let CompletedCards = [];
let SelectedCard = [];
let SelectedCard2 = [];
var moves = document.querySelector('.moves');
let imageContainers = document.getElementsByClassName("image-container");
let bandera = true;
let time = 1000;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("modal-result");
    const tachita = document.querySelector('.close');

    tachita.onclick = function() {
        
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }
});
init();

async function init() {
    Barajear();
}
async function Barajear() {
    Cards = [];
    numberOfCard = 0;
    numOfmoves = 0;
    completedContainers = [];
    CompletedCards = [];
    SelectedCard = [];
    SelectedCard2 = [];
    bandera = true;
    const response = await fetch(`${URL_API}`);
    setNumberOfMoves();

    for (let x = 0; x < 16; x++) {
        numberOfCard++;
        Cards[x] = "https://rickandmortyapi.com/api/character/avatar/" + numberOfCard + ".jpeg";
        if (numberOfCard == 8) {
            numberOfCard = 0;
        }
    }
    Cards.sort(() => Math.random() - 0.5);
}

function restart() {
    location.reload();
}

async function cardSelection(number) {
    if (!bandera) return;

    if (GameOver()) return;

    //Verificar si la carta ya hizo match
    for (let index = 0; index < CompletedCards.length; index++) {
        const element = CompletedCards[index];
        if (element.dataset.key == imageContainers[number].dataset.key) {
            return;
        }
    }

    //Agregar carta
    if (SelectedCard.length == 0) {
        
        SelectedCard.push(imageContainers[number]);
        SelectedCard[0].innerHTML = `<img src="${Cards[number]}" >`
        SelectedCard2[0] = Cards[number];
        return;
    }

    //Verifica que no se seleccione la misma carta
    if (SelectedCard[0].dataset.key === imageContainers[number].dataset.key) {
        console.log(`Escogiste la misma`);
        return;
    }
    bandera = false;
    SelectedCard.push(imageContainers[number]);
    SelectedCard[1].innerHTML = `<img src="${Cards[number]}" >`
    SelectedCard2[1] = Cards[number];
    doMatch();
    if (GameOver()) return;


}
async function doMatch(){
    numOfmoves++;
    setNumberOfMoves();
    if(SelectedCard2[0] == SelectedCard2[1]){
        CompletedCards.push(SelectedCard.pop());
        CompletedCards.push(SelectedCard.pop());
        bandera = true;
        return true;
    }
    await sleep(time);
    SelectedCard.pop().innerHTML = ``;
    SelectedCard.pop().innerHTML = ``;
    bandera = true;
    return false;
}

function setNumberOfMoves() {
    moves.innerHTML = `Moves: ${numOfmoves}`;
}
function GameOver() {

    if (CompletedCards.length == 16) {
        showModal();
        return true
    }
    return false;
}
function showModal() {

	 // Mostrar ganador.
     console.log('Alguien ganó');

     const modal = document.getElementById('modal-result');
     modal.style.display = "block";

     const winnerTextResult = document.querySelector('#winner-text-result');
     winnerTextResult.innerHTML = `Moves: ${numOfmoves}`;
}

