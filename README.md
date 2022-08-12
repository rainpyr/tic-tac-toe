# **TIC-TAC-TOE GAME**
GA-SEI55-Project0 [link of the game](https://rainpyr.github.io/tic-tac-toe/)

## **Overview**
This is a project developed by JavaScript (with the jQuery library), HTML and CSS. It is designed to play between two players (playerX and playerO) on a 3*3 grid game board, two players take turns to play, playerX will mark a cell on the game board in red, and playerO will make a cell on the game board in blue. When one player makes a line with three cells (horizontal, vertical or diagonal), the winner will be declared, and game needs to restart.

## **Development Process**
1. Create the game board by html data cells, each cell has an index (0-8).
2. Set up an inital status so the game can be restarted.
3. playerX starts to play by clicking one of the cells on the game board, once the cell is clicked, the background colour will change to red. Then playerO to play, the background colour of the cell clicked by playerO will change to blue.
4. Once a cell is clicked, the index of the cell will be saved to an array for each player, the array will be compared with the winning conditions to declare who is the winner. If no one wins at the ninth move, it is a draw.
5. The wining score will be displayed fot the winner in the tally board.
6. Once a game is finished, the game can be restarted by clicking the restart button.

## **Brief View of the Game Browser**
![This is the view of the browser before any move](image/Screen%20Shot%202022-08-11%20at%202.49.31%20pm.png)

![This is the view when a winner is declared](image/Screen%20Shot%202022-08-11%20at%202.49.53%20pm.png)

## **Known Bugs**
1. The frequency of play sometimes get messed, therefore the take turns doesn't work at some stage.

## **Future Improvement**
1. Create nicer symbol for each player
2. Fix the known bug
3. Develop the game to be played between computer and a player

