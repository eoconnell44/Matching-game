$(document).ready(function(){
	console.log('jQ ready');

console.log('card.js is connected')

class Card {
		constructor(title, src, ref) {
			this.title = title;
			this.src = src;
			this.ref = ref;
		}
}
let gandalf = new Card('gandalf','./assets/gandalf.jpg', 'lotr');
let lotr = new Card('lotr','./assets/lotr.jpg', 'lotr');
let neo = new Card('neo','./assets/neo.jpg', 'matrix');
let matrix = new Card('matrix','./assets/matrix.jpg', 'matrix');
let macgruber = new Card('macgruber','./assets/macgruber.jpg', 'macgruber');
let macgrubmov = new Card('macgruberv2','./assets/macgruberv2.jpg', 'macgruber');
let hansolo = new Card('hansolo','./assets/hansolo.jpg', 'starwars');
let starwars = new Card('starwars','./assets/starwars.jpg', 'starwars');
let denzel = new Card('denzel', './assets/denzel.jpg', 'remtitans');
let remtitans = new Card('remtitans', './assets/remtitans.jpg', 'remtitans');
// let marty = new Card('marty', './assets/martymcfly.jpg', 'backtofuture');
// let btfuture = new Card('backtofuture', './assets/btfuture.jpg', 'backtofuture');
let btfuture = new Card('btfuture', "assets/btfuture.jpg", 'backtofuture');
let martymcfly = new Card('martymcfly', 'assets/martymcfly.jpg', 'backtofuture');
//objects
let vince = new Card ('vvaughn', './assets/vvaughn.jpg', 'wedcrash');
let wcrashers = new Card ('wedcrashers', './assets/wedcrashers.jpg', 'wedcrash');
let shrek = new Card('shrek', './assets/shrek.jpg', 'donkey');
let shrekmov = new Card('shrekmov', './assets/shrekmov.jpg', 'donkey');
let zoolander = new Card('bstillerzlander', './assets/bstillerzlander.jpg', 'zoolander');
let zlandermov = new Card('zoolander', './assets/zoolander.jpg', 'zoolander');
let oldschool = new Card('oldschool', './assets/oldschool.jpg', 'oldschool');
let frankthetank = new Card('frankthetank', './assets/frankthetank.jpg', 'oldschool');

//arrays
let cards = [vince, wcrashers, shrek, shrekmov, zoolander, zlandermov, oldschool, frankthetank];
//Leave empty array to push selected cards into
let cardsInPlay = [];
let createCard;
//Needed for the rando function
let j = 0;
let temp = null;
let boardCheck = document.querySelector('.gameBoard').childElementCount > 1;
let moves = 0;
let moveCount = document.querySelector('.moves');
let matches = 0;
let matchCount = document.querySelector('.matchCount');
let diffBtns = $('.difficulty').hide();
let resetBtn = $('.reset').hide();
let difficulty = {
	easy: [1,1,3,3,5,5,7,7],
	medium: [1,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15],
	hard: [1,1,3,3,5,5,7,7,9,9,11,11,13,13,15,15,17,17,19,19,20,20,21,21]
};
const backSide = 'assets/qmark.jpg';
const loserAlerts = ['Nice try!', 'So close!!', 'Better luck next time!', 'Sorry, try again', 'HAH, You lost!!'];

function startGame() {
//Limit only 1 board created at a time
	let btn = document.querySelector('.newGame');
		btn.addEventListener('click', difficultyLevel);
		$('.newGame').on('click', function(){
			$('.difficulty').show();
		})
}

function difficultyLevel(e) {
	// let easy = document.querySelector('#easy').addEventListener('click', createBoard);
			$('#easy').on('click', green);
	// let medium = document.querySelector('#medium').addEventListener('click', orange);
			$('#medium').on('click', orange);
	// let hard = document.querySelector('#hard').addEventListener('click', createBoard);
		$('#hard').on('click', red);
		document.querySelector('.newGame').removeEventListener('click', createBoard);
		$('.instructions').html('');
}
//The savior to my difficulty/create board challenge...Also could be used in future for making catergories??
function green(){
	$('.diffColor').css('background-color', 'green');
	// $('div').css('border', 'solid green');
	cards.push(lotr);
	cards.push(gandalf);
	createBoard();
}
function orange() {
	$('.diffColor').css('background-color', 'orange');
	// $('.diffColor').css('background-color', 'orange');
	cards.push(lotr);
	cards.push(gandalf);
	cards.push(neo);
	cards.push(matrix);
	cards.push(starwars);
	cards.push(hansolo);
	// cards.push(btfuture);
	// cards.push(martymcfly);
	console.log(cards)
	createBoard();
}
function red() {
	$('.diffColor').css('background-color', 'red');
	// $('.diffColor').css('background-color', 'red');
	cards.push(lotr);
	cards.push(gandalf);
	cards.push(neo);
	cards.push(matrix);
	cards.push(starwars);
	cards.push(hansolo);
	cards.push(macgruber);
	cards.push(macgrubmov);
	cards.push(denzel);
	cards.push(remtitans);
	cards.push(btfuture);
	cards.push(martymcfly);

	console.log(cards)
	createBoard();
}
//Do we need to create 3 different board functions?? -- Nope!! Solved with a few pushes...but maybe there is an easier way...
function createBoard() {
	//Keep the header options clean
	diffBtns.hide();
	$('.newGame').hide();
	resetBtn.show();
	$(resetBtn).on('click', resetGame)
	randoArray();
	// countDown();
	//Prevents creating mulitple game boards
	document.querySelector('#easy').removeEventListener('click', createBoard);
	document.querySelector('.newGame').removeEventListener('click', createBoard);

	for(let i = 0; i < cards.length; i++){
		let cardImg = document.createElement('img');
		cardImg.setAttribute('class', 'cardImgs');
		//Use of the id will be called upon when putting together image path
		cardImg.setAttribute('id', cards[i].title);
		cardImg.setAttribute('src', "assets/qmark.jpg");
		//Data ID is needed to check for match and comparisons later on
		cardImg.setAttribute('data-id', cards[i].ref)
		cardImg.addEventListener('click', flipCard);
		document.querySelector('.gameBoard').appendChild(cardImg);
		// document.querySelector(createCard).appendChild(cardImg);
	}
	countDown();
	
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
	//Need to grab the cards specific id, which will use in locating the image source
let cId = this.getAttribute('id');
//YESSSSSSSSSSSSS
let source = 'assets/' + cId + '.jpg';
cardsInPlay.push(this);
// cardsInPlay.push(cards[cId]);
console.log(cardsInPlay);
console.log(this);
	$(this).attr('src', source);
	moves++;
	moveCount.innerHTML = moves;
	$(this).toggleClass('active');
	if(cardsInPlay.length === 2) { 
		//Correcting the move count problem
		if(cardsInPlay[0] === cardsInPlay[1]){
		$(cardsInPlay[0]).on('click', flipCard);
		matches--;
		moves--;
		moveCount.innerHTML = moves;
		flipBack();
	}   ///	
		checkForMatch();
		// flipBack()		
	} 
	return			
}
//Switch back to the source of the qmark image
function flipBack() {
	for(let i =0; i< cardsInPlay.length; i++){
	$(cardsInPlay[i]).attr('src', backSide)
	console.log('flip?')
	// cardsInPlay = [];	
	}
}

function checkForMatch() {	
	console.log('checkin match')
let isActive = document.querySelectorAll('.active');
	if(cardsInPlay[0].getAttribute('data-id') === cardsInPlay[1].getAttribute('data-id')) {
		for(let i =0; i< cardsInPlay.length; i++){
			cardsInPlay[i].removeEventListener('click', flipCard);
						$(cardsInPlay).toggleClass('isMatch');
			// $(cardsInPlay).off('click', flipCard);	
				cardsInPlay = [];
				matches++;
				matchCount.innerHTML = matches 
		}
	}		else {
		flipBack();	
		cardsInPlay = [];
	}
	if (matches === cards.length / 2) {
		playerWin();	
	}	
}

function playerWin(){
	if(matches === cards.length / 2){
		$('.newGame').html('Restart Game');
			console.log('You win!');
	}
}

//Need to flip cards back into place if no match
function resetGame() {
	//clears cards showing
	cardsInPlay = [];
	moves = 0;
	matches = 0;
	//Removes all pieces on game board
	location.reload();
}
let startTime = 60;
let timeCounter = document.querySelector('.timer');
//Display initial number 
timeCounter.innerHTML = startTime;
let totalmoves = moves.innerHTML

function countDown() {
	//Needed to have ability to clear later on
	let time = setInterval(function(){
timeCounter.innerHTML = startTime;
		startTime -= 1;

		if(startTime < 0){
			clearInterval(time);
			//Would like to randomly select a lost alert, for now will stick with just one
			// for(let i= loserAlerts.length - 1; i > 0; i -= 1){
			// 	j = Math.floor(Math.random() * (i + 1));
			// 	loser = loserAlerts[i];
			// 	loserAlerts[i] = loserAlerts[j];
			// 	loserAlerts[j] = loser;
			// 	alert(loser[0]);
			alert('You lost!')
		}
			else if(matches === cards.length / 2) {
				alert('You won in only ' + moves + ' moves and ' + (startTime + 1) + ' seconds left!!')
				
			// alert('You finished in only ' + totalmoves)
			clearInterval(time);
			}

		}, 1000);
}

startGame();


}); //For jQuery


 








