//~~~~~~~~~~~~~~~~Tic Tac Toe~~~~~~~~~~~~~~

$(document).ready(function() { // get DOM ready
    // create players history so we can get players' wins to display in the browser
    let playerXHistory;
    let playerOHistory;
    // create a function getScore to have players wins history saved in localStorage
    function getScore (){
        if (playerXHistory == null || playerXHistory == "")
        {
            playerXHistory = 0;
        
            localStorage.setItem("XHistory",playerXHistory);
        };
        
        if (playerOHistory == null || playerOHistory == "")
        {
            playerOHistory = 0;
        
            localStorage.setItem("OHistory",playerOHistory);
            
        }
    } // getScore fucntion
    getScore();
    // create the winning possibilities
    const winningGame = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // initial status of the game
    let frequency = 0; // this is to set up for players to take turn when playing the same
    let playerXIndex = [];
    let playerOIndex = [];
    let playGame = true; //this is set up to make sure when a winner is declared, no clicking is allowed

    // create a funciton called startGame, start from playerX/blue
    const startGame = function () { 
        
        $(".cell").on('click', function(){
            
            if (frequency % 2 == 0 && playGame) { // when frequency is an even number, playerX plays
                $(this).css("background-color","red") 
                frequency++;
                playerXIndex.push($(this).index());
                $(this).off('click');
                
                            
            } else if (playGame) {
                $(this).css("background-color","blue")
                frequency++;
                playerOIndex.push($(this).index());
                $(this).off('click'); //prevent clicked cells to be clickable again
                
            };
            for (let i = 0; i < winningGame.length; i++) {
                let playerXWon = (winningGame[i].every(val => playerXIndex.includes(val)));
                let playerOWon = (winningGame[i].every(val => playerOIndex.includes(val))); // check whether the any winning condition is met by any player. arrray.every will check everyone elment within the array, the arrow returns a function to be true if all elements are included in the second array
                
                if (frequency >= 5 && frequency <= 9) {
                    if (playerXWon) {
                        $(".game-status").html('playerX won!');
                        
                        playerXHistory++; //once a win is recorded, the player history will increment by one
                        
                        localStorage.setItem("XHistory",playerXHistory);
                        //save the updated history to the locacalStorage, and define it as newHistory
                        let newXHistory = localStorage.getItem("XHistory");
                        
                        
                        alert(newXHistory);
                        //save new history to html so the browser will display the update
                        $(".x").html(localStorage.getItem("XHistory"));
        
                        playGame = false;  
                    }
                    if (playerOWon) {
                        $(".game-status").html('playerO won!');
                        
                        playerOHistory++;
                        localStorage.setItem("OHistory",playerOHistory);
                        let newOHistory = localStorage.getItem("OHistory");
                        alert(newOHistory);
                        $(".o").html(localStorage.getItem("OHistory"));
                        playGame = false;  
                    }
                }   // check win
                else if (frequency === 9 && !playerXWon && !playerOWon) {
                    $(".game-status").html("It's a draw.");
                    playGame = false;  
                }  // check draw, when frequecy is 9, and no one met the winning condition, it is a drwa
            } // for loop through winning conditions 
        }); // end of .on 
    }; // end of start game 

    startGame() // run startGame to make sure the game can play when we open browser

    const restartGame = function () { // create a restartGame function to make sure the game can be reset to the initial status for another play
        $('.cell').css('background-color', '#c7c5bf')
        frequency = 0;
        playerXIndex = [];
        playerOIndex = [];
        playGame = true;
        $(".game-status").html("");
        startGame();        
    };
    $(".game-restart").on('click', restartGame)// add the click event to the restart button
}); // the end
