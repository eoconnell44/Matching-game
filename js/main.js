// const game = new startGame(cardArray);
// console.log(game);
let cardOne = document.querySelector('div');
let cardArray = document.querySelectorAll('div');
		cardArray.forEach(function(el){
		for(var i =0; i <cardArray.length; i++){
			console.log(cardArray[i])
		}
	})
let cards = ['vv', 'vv',3,3,5,5,7,7];
let cardsInPlay = [];
let isMatch = document.querySelectorAll('div .active');
let currentCard = document.querySelector('.active');
// let btn = document.querySelector('button');

// button.addEventListener('click', () => {
//   startGame();
// });
	
class startGame {
		constructor() {
		this.cardArray = null;
		// this.createBoard();
		this.cardsInPlay= null;
		this.selectedCards = null;
		console.log('startGame');
		// this.checkForMatch = null;
		// this.checkforWin = null;
		this.btn = document.querySelector('button').addEventListener('click', this.createBoard)
			// this.createBoard();

	}
		createBoard() {
			console.log('board created');
				for(let i = 0; i < cards.length; i++){
		let createCard = document.createElement('div');
			createCard.setAttribute('class', 'cards');
			createCard.setAttribute('id', i);
			
		document.querySelector('.gameBoard').appendChild(createCard);
		createCard.addEventListener('click', this.flipCard);
			console.log(createCard);
			console.log(cards);

	}
		}
		checkForMatch() {
			if(this.cardsInPlay[0] === this.cardsInPlay[1]) {
			console.log('match!');
		}

	//Insert all card randomization here
	// createBoard() {

	}
 flipCard(card){
 	let cardIdtag = this.getAttribute('id');
 	this.className = 'active';
 	cardsInPlay.push(cards[cardIdtag]);
	console.log(this.card);

		if(cardsInPlay.length === 2) {
		this.checkForMatch();
		// removeEL();
		// debugger;
	} 
	return

}

	// checkForMatch() {


	// }

	checkforWin() {
		console.log('you win!');

	}

}

// checkForMatch();
// checkforWin();

window.onload = function() {
  game = new startGame();
};
// class Card {

// }

// document.querySelector('button').addEventListener('click', startGame)
// cardArray.addEventListener('click', )

// 	let boxArray = document.querySelectorAll('td');
// Array.from(boxArray).forEach(function(el) {
// 	for(var i =0; i <boxArray.length; i++) {
// 	let topRow = boxArray[i];