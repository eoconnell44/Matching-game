console.log('card.js is connected')

class Card {
		constructor(title, src, ref) {
			this.title = title;
			this.src = src;
			this.ref = ref;
		}
}
//objects
let vince = new Card ('vince', './assets/vvaughn.jpg', 'wedcrash');
let wcrashers = new Card ('wedcrashers', './assets/wedcrashers.jpg', 'wedcrash');
let shrek = new Card('shrek', './assets/shrek.png', 'donkey');
let shrekmov = new Card('shrekmov', './assets/shrekmov.jpg', 'donkey');
let zoolander = new Card('zoolander', './assets/bluesteel.jpg', 'zoolander');
let zlandermov = new Card('zlandermov', './assets/zoolander.jpg', 'zoolander');
let oldschool = new Card('oldschool', './assets/oldschool.jpg', 'oldschool');
let frankthetank = new Card('frankthetank', './assets/frankthetank.jpg', 'oldschool');

//arrays
let cards = [vince, wcrashers, shrek, shrekmov, zoolander, zlandermov, oldschool, frankthetank];

// var createImage = function(src, title, ref){
// 	var img = new Image();
// 		img.src = src;
// 		img.title = title;
// 		img.ref = ref;
// 		// return img;
// };
// let cards = [];
// cards.push(createImage(('./assets/vvaughn.jpg', 'wedcrashers', 'wedcrash'));
// cards.push('./assets/wedcrashers.jpg', 'wedcrashers', 'wedcrash');
// cards.push('./assets/shrek.png', 'shrek', 'donkey');

// cards.push('../assets/shrekmov.jpg', 'shrek', 'donkey');
// cards.push('./assets/zoolander.jpg', 'zoolander', 'zoolander');
// cards.push('./assets/bstillerzlander.jpg', 'zoolander', 'zoolander');
// cards.push('./assets/oldschool.jpg', 'oldschool', 'oldschool');
// cards.push('./assets/frankthetank.jpg', 'oldschool', 'oldschool');

// for(let i=0; i < cards.length; i++){
// 	console.log(cards[0].img.src);
// }

let cardsArray = [];
//Leave empty array to push selected cards into
let cardsInPlay = [];

let createCard;
// let board = document.querySelectorAll('.cards');
let board;
let card;
//Needed for the rando function
let j = 0;
let temp = null;
let moves = 0;
let moveCount = document.querySelector('.moves');
let matches = 0;
let matchCount = document.querySelector('.matchCount');
let difficulty = {
	easy: [1,1,3,3,5,5,7,7],
	medium: [1,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15],
	hard: [1,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15,17,17,19,19,20,20,21,21]
};
let levels = document.querySelectorAll('.difficulty');

//Add a difficulty setting to the game
// let difficulty = {
// 		easy: cards(8),
// 		medium: cards(12),
// 		hard: cards(20)
// };
function startGame() {
//Limit only 1 board created at a time
	let btn = document.querySelector('.newGame');
		btn.addEventListener('click', difficultyLevel);
// levels.style.display = 'inline';
}

function difficultyLevel(e) {
// levels.setAttribute('display', 'inline');
	let easy = document.querySelector('#easy').addEventListener('click', createBoard);
	let medium = document.querySelector('#medium').addEventListener('click', createBoard);
	let hard = document.querySelector('#hard').addEventListener('click', createBoard);
			// this.addEventListener('click', createBoard);
}
//Do we need to create 3 different board functions??
function createBoard() {

	//Prevents creating mulitple game boards
	document.querySelector('.newGame').removeEventListener('click', createBoard);
	for(let i = 0; i < cards.length; i++){
		let createCard = document.createElement('div');
			createCard.setAttribute('class', 'cards');
			createCard.setAttribute('id', i);
			createCard.addEventListener('click', flipCard);
		let cardImg = document.createElement('img');
				cardImg.setAttribute('class', 'cardImgs');
				cardImg.setAttribute('id', cards[i].ref);
				cardImg.setAttribute('src', cards[i].src);
				// cardImg.style.display = 'none';

		document.querySelector('.gameBoard').appendChild(createCard);
		createCard.appendChild(cardImg);
	}
	countDown();
	randoArray();
};
//Thank you Frank Mitchell
function randoArray() {
	for (let i = cards.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
	}
}		


function flipCard(e) {
	board = document.querySelectorAll('.cards');	
	//Need to grab the cards specific id
	let card = e.target;
	console.log(e.target)
	let cardIdtag = e.target.getAttribute('id');
	// this.innerHTML = '<img src="assets/vvaughn.jpg">';
	//Changing BGC without toggleClass....possibly do an add/remove w/ multy lines of code
	this.className = 'active';
	// this.childNodes.style.display = 'block';
	console.log(this.childNodes);
	console.log(this.img)
	cardsInPlay.push(cards[cardIdtag]);
	console.log(cardsInPlay);
		moves++;
		moveCount.innerHTML = moves;
		// card.removeEventListener('click', flipCard);

	if(cardsInPlay.length === 2) {
		checkForMatch();
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
	if(cardsInPlay[0].ref === cardsInPlay[1].ref) {
		let isActive = document.querySelectorAll('.active');
				for(let i =0; i < isActive.length; i++){
					console.log(isActive[0]);
					isActive[i].className = 'isMatch';
					isActive[i].removeEventListener('click', flipCard);
					cardsInPlay = [];
					matches++;
					matchCount.innerHTML = matches / 2;
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

	// let clock = startTime;
	// let timeValue = document.querySelector('.timer');
	// 		timeValue.innerHTML = clock;
	// 		clock.appendChild(timeValue);
	// 		console.log(clock);
	// 		console.log(timeValue);

}

//Need to flip cards back into place if no match
function resetGame() {
	//clears cards showing
	cardsInPlay = [];
	moves = 0;
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

		if(startTime <= 0){
			clearInterval(time);
		}
		else if(matches === 4)
			clearInterval(time);
		}, 1000);
	}

startGame();


 








