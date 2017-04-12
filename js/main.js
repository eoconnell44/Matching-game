console.log('JS is working');

let cardOne = document.querySelector('div');
	

function flipCard(){
	this.setAttribute('class', 'active');
	console.log(this);
}



	cardOne.addEventListener('click', flipCard)