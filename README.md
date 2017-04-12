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
6. Get value of the cards selected
7. Check for a card match between the two cards selected
8. If cards match, remove/hide from game board
9. Otherwise, flip the cards back over to their backside
10. Continue playing until all matches are selected
11. Alert player they have won
12. Add a timer (1 min) for game to be completed
13. Keep a tally of score and wins within the game  