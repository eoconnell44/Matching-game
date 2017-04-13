console.log('card.js is connected')

let cardsArray = [];
//Leave empty array to push selected cards into
let cardsInPlay = [];
let cards = ['vv', 'vv',3,3,5,5,7,7];
let createCard;
// let board = document.querySelectorAll('.cards');
let board;
let card;
let isMatch = document.querySelectorAll('div .active');

//Add a difficulty setting to the game
// let difficulty = {
// 		easy: cards(8),
// 		medium: cards(12),
// 		hard: cards(20)
// };
function startGame() {
//Limit only 1 board created at a time
	let btn = document.querySelector('button');
		btn.addEventListener('click', createBoard);

}
/*// parg is an object reference to a <p> element

if (parg.hasChildNodes()) {
  // So, first we check if the object is not empty, if the object has child nodes
  var children = parg.childNodes;

  for (var i = 0; i < children.length; i++) {
    // do something with each child as children[i]
    // NOTE: List is live, Adding or removing children will change the list
  }
}*/

function createBoard() {
	for(let i = 0; i < cards.length; i++){
		let createCard = document.createElement('div');
			createCard.setAttribute('class', 'cards');
			createCard.setAttribute('id', i);
			createCard.addEventListener('click', flipCard);
		document.querySelector('.gameBoard').appendChild(createCard);
	}
	countDown();
removeEL();

};
//For later use of removing event listener
//Getting a TypeError: board.removeEventListener is not a function...Need to do some research into this, not sure why..
function removeEL(){
	// board.removeEventListener('click', flipCard);
// 		if(createBoard.hasChildNodes()) {
// 	let children = createBoard.childNodes;

// 	for(var i = 0; i< children.length; i++){
// 		children[i].removeEventListener('click', createBoard);
// 	}
// }
		
}

function flipCard(e) {
	board = document.querySelectorAll('.cards');	
	//Need to grab the cards specific id
	// let card = this.getAttribute('data-id');
	let card = e.target;
	// console.log(firstCard);
	let cardIdtag = e.target.getAttribute('id');
	console.log(card);
	// this.innerHTML = '<img src="assets/vvaughn.jpg">';
	//Changing BGC without toggleClass....possibly do an add/remove w/ multy lines of code
	// this.style.backgroundColor = 'gray';
	this.className = 'active';
	cardsInPlay.push(cards[cardIdtag]);

	console.log(cardsInPlay);

	// firstCard = this.cardsInPlay;
	// console.log(firstCard);

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
		for(let i =0; i <cardsInPlay.length; i++){
			let changeClass = document.querySelectorAll('.active');
					changeClass.setAttribute('class', 'isMatch');
					console.log(changeClass)
			console.log(cardsInPlay.length);
			// cardsInPlay.setAttribute('class','.isMatch');
		}

		// isMatch.style.backgroundColor = "red";
			// isMatch.className = 'isMatch';
			cardsInPlay = [];
		// console.log(isMatch);
		// console.log(cardsInPlay);
		// cardUno = this.cardsInPlay;
		// 	console.log(cardUno);
		// this.cardsInPlay.style.backgroundColor = 'black';
		// cardsInPlay[1].style.backgroundColor = 'black';
	} else {
		cardsInPlay = [];
	}
	
}
//Need to flip cards back into place if no match
function resetGame() {
	//clears cards showing
	cardsInPlay = [];
	//Removes all pieces on game board
	location.reload();

}
let startTime = 60;
let timeCounter = document.querySelector('.timer');
//Display initial number 
timeCounter.innerHTML = startTime;

function countDown() {
	//Needed to have ability to clear later on
	let time = setInterval(function(){
timeCounter.innerHTML = startTime;
		startTime -= 1;
		if(startTime < 0){
			clearInterval(time);
		}
		}, 1000);
	}

function difficulty() {

}

startGame();


 








