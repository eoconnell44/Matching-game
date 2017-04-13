// const game = new startGame(cardArray);
// console.log(game);
let cardOne = document.querySelector('div');
let cardArray = document.querySelectorAll('div');
		cardArray.forEach(function(el){
		for(var i =0; i <cardArray.length; i++){
			console.log(cardArray[i])
		}
	})

let button = document.querySelector('button');

button.addEventListener('click', () => {
  startGame();
});
	
class startGame {
	constructor(cardArray) {
		this.cardArray = [];
		this.flipCard(cardArray);
		this.selectedCards = [];
		console.log(startGame);

	}
	//Insert all card randomization here
	// createBoard() {

	// }
 flipCard(card){
 	this.selectedCards.push(card);
	this.card.setAttribute('class', 'active');
	console.log(card);
	console.log(selectedCards);

}

	checkForMatch() {
		// for(var i = 0; i < selectedCards.length; i++) {
			if(selectedCards[0] === selectedCards[1]) {
				console.log('Cards match!');
		} else {
				console.log('Not a match!');
		}
	}

	checkforWin() {

	}

}
let newG = new startGame();
Card();
// class Card {

// }

// document.querySelector('button').addEventListener('click', startGame)
// cardArray.addEventListener('click', )

// 	let boxArray = document.querySelectorAll('td');
// Array.from(boxArray).forEach(function(el) {
// 	for(var i =0; i <boxArray.length; i++) {
// 	let topRow = boxArray[i];