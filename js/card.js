console.log('card.js is connected')

let cardsArray = [];
//Leave empty array to push selected cards into
let cardsInPlay = [];
let cards = [1,1,3,3,5,5,7,7];
let createCard;
// let board = document.querySelectorAll('.cards');
let board;
let card;
//Needed for the rando function
let j = 0;
let temp = null;
let moves = 0;

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
//Thank you Frank Mitchell

function createBoard() {
	//Prevents creating mulitple game boards
	document.querySelector('button').removeEventListener('click', createBoard);
	for(let i = 0; i < cards.length; i++){
		let createCard = document.createElement('div');
			createCard.setAttribute('class', 'cards');
			createCard.setAttribute('id', i);
			createCard.addEventListener('click', flipCard);
		document.querySelector('.gameBoard').appendChild(createCard);
	}
	countDown();
	randoArray();
removeEL();

};
function randoArray() {
	for (let i = cards.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
	}
}	

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
	let card = e.target;

	let cardIdtag = e.target.getAttribute('id');
	console.log(card);
	// this.innerHTML = '<img src="assets/vvaughn.jpg">';
	//Changing BGC without toggleClass....possibly do an add/remove w/ multy lines of code
	this.className = 'active';
	cardsInPlay.push(cards[cardIdtag]);
	console.log(cardsInPlay);

	if(cardsInPlay.length === 2) {
		checkForMatch();
		// removeEL();
		// debugger;
	} 
	return			
}
//If card isn't a match, it's not properly displaying the 2nd card picked. Possilby need function --
function flipBack() {
	for(let i =0; i < cardsInPlay.length; i++){
		cardsInPlay[i].className = 'cards';
	}
}

function checkForMatch() {	
//For testing, matches are 1-2, 3-4, 5-6, 7-8
	if(cardsInPlay[0] === cardsInPlay[1]) {
		let isActive = document.querySelectorAll('.active');
				for(let i =0; i < isActive.length; i++){
					console.log(isActive[0]);
					isActive[i].className = 'isMatch';
					isActive[i].removeEventListener('click', flipCard);
					cardsInPlay = [];
					playerWin();
		}		
	}		
		if(cardsInPlay[0] !== cardsInPlay[1]){
			let isActive = document.querySelectorAll('.active');
				for(let i =0; i < isActive.length; i++){
					isActive[i].className = 'cards';	
		}
		flipBack();
		cardsInPlay = [];
	}
}

function playerWin(){
	console.log('You win!');
	let clock = document.querySelector('.timer');
	let timeValue = document.querySelector('.timer').innerHTML;
			clock.appendChild(timeValue);
			timeValue.innerHTML = timeValue;
			console.log(clock)
			console.log(timeValue)
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

// function myFunction() {
//     points.sort(function(a, b){return 0.5 - Math.random()});
//     document.getElementById("demo").innerHTML = points;
// }

function difficulty() {

}

startGame();


 








