# Matching-game

Object of the Game
The object of the game is to collect the all matching pairs.

The Rules
On each turn, the player will first turn one card over, then a second. If the two cards match, the player scores one point, the two cards are removed from the game. If they do not match, the cards are turned back over.

The game continues in this fashion until all the cards are played.

1. Turn over any two cards.
2. If the two cards match, keep them.
3. If they don't match, cards are turned back over.
4. Remember what was on each card and where it was.
5. Try and remember the cards and their locations
6. The game is over when all the cards have been matched.


Winning the Game
Once all the cards have been played the player will be announced the winner.

Psuedo-code

1. Create game board
2. Create a button to start game and allow cards on board to be selected
3. Create array of cards and the values
4. Add click event to each card
5. Once a card is clicked, create a function to flip it over
6. Assign data ids to each card and get value of the cards selected
7. Check for a card match between the two cards selected
8. If cards match, remove/hide from game board
9. Otherwise, flip the cards back over to their backside
10. Continue playing until all matches are selected
11. Alert player they have won
12. Add a timer (1 min) for game to be completed
13. Keep a tally of score and wins within the game  

Technologies used
The main technologies used for this project are HTML, CSS, Javascript and jQuery. I started off trying to mainly use Javascript as much as possible but after struggling a bit with simpel functions and calls I swtiched over to using jQuery as needed. I feel very comfortable using jQeury but was trying to push myself in making this primarily in JS. My HTML is relatviely bare outide of a few divs and buttons to structure the page and make it user friendly. I wanted to mainly create/append much of the structure through JS as possible and felt I did just that. CSS helped me to style the page and add certain aspects such as color coding my top div to green, orange, red based on which difficulty the user selected. These are little things I have picked up from playing video games that at subtle yet display where the user is ( in this case which difficulty). 

User Stories
I had a few family and friends test out this game to get their reaction and feedback which was overall positive. One key takeaway was making the images smaller on the page so more can be viewed without scrolling along with trying best to have each row filled out and not leaving just 1 image on its on row by itself. These are simple things that can really make the user experience more enjoyable. 

Wireframes
https://trello.com/b/zRkMBypy/project-1-memory-game

Unsolved problems
For the most part I feel I solved any of the problems I was having but I would like to add a few more functions to this project such as categories, alerting the player if they win or loss in a different fashiong than just a simple alert.
