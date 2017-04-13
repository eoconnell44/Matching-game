console.log('card.js is connected')

let cardsArray = [];
//Leave empty array to push selected cards into
let cardsInPlay = [];
let cards = [1,1,3,3,5,5,7,7];

//For later use of removing event listener
let board = document.querySelectorAll('.cards');

function startGame() {
	let btn = document.querySelector('button');
		btn.addEventListener('click', createBoard)
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

function removeEL(){
	board.removeEventListener('click', flipCard);
		
}

function flipCard() {
	//Need to grab the cards specific id
	let card = this.getAttribute('data-id');
	//Changing BGC without toggleClass....possibly do an add/remove w/ multy lines of code
	this.style.backgroundColor = 'gray';
	cardsInPlay.push(cards[card]);
	// cardsInPlay.push(this);
	console.log(card);
	console.log(cardsInPlay);

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
	} else {
		resetGame();
	}
	
}
//Need to flip cards back into place if no match
function resetGame() {
}

startGame();


 








