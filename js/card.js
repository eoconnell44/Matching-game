console.log('card.js is connected')

let cardsArray = [];
//Leave empty array to push selected cards into
let cardsInPlay = [];
let cards = ['vv', 'vv',3,3,5,5,7,7];
//Add a difficulty setting to the game
// let difficulty = {
// 		easy: cards(8),
// 		medium: cards(12),
// 		hard: cards(20)
// };

//For later use of removing event listener
let board = document.querySelectorAll('.cards');

function startGame() {
//Limit only 1 board created at a time

	let btn = document.querySelector('button');
		btn.addEventListener('click', createBoard);
		if(createBoard > 1) {
			btn.removeEventListener('click', createBoard);
			// cell.removeEventListener('click', playCell);
		}

}

function createBoard() {
	for(var i = 0; i < cards.length; i++){
		let createCard = document.createElement('div');
			createCard.setAttribute('class', 'cards');
			createCard.setAttribute('data-id', i);
			createCard.addEventListener('click', flipCard);
		document.querySelector('.gameBoard').appendChild(createCard);
	}
};

//Getting a TypeError: board.removeEventListener is not a function...Need to do some research into this, not sure why..
function removeEL(){
	board.removeEventListener('click', flipCard);
		
}

function flipCard() {
	//Need to grab the cards specific id
	let card = this.getAttribute('data-id');
	// this.innerHTML = '<img src="assets/vvaughn.jpg">';
	//Changing BGC without toggleClass....possibly do an add/remove w/ multy lines of code
	this.style.backgroundColor = 'gray';
	cardsInPlay.push(cards[card]);
	// cardsInPlay.push(this);
	console.log(card);
	console.log(cardsInPlay);
	console.log(cardsInPlay[0]);

	if(cardsInPlay.length === 2) {
		checkForMatch();
		// removeEL();
		// debugger;
	} 
	return			
}

function checkForMatch() {
//For testing, matches are 1-2, 3-4, 5-6, 7-8
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log('match!');
		let match = (cardsInPlay[0], cardsInPlay[1]);
		console.log(match);
	} else {
		cardsInPlay.style.backgroundColor = 'black';
		resetGame();
	}
	
}
//Need to flip cards back into place if no match
function resetGame() {
	//clears cards showing
	cardsInPlay = [];

}

function difficulty() {

}

function setTimer() {

}

startGame();


 








