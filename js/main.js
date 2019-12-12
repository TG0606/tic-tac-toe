
let currentPlayer = 'X';

let boxesfilled = 0;

//Congratulate the winner

function congratulateWinner() {

  const green = document.querySelector('.firstColor');

  const black = document.querySelector('.secondColor');

  const white = document.querySelector('.thirdColor');

  setTimeout(function() {
    green.innerHTML = `Congratulations! `
    black.innerHTML = `${currentPlayer} `
    white.innerHTML = `won!`
    clearBoard();
    boxesfilled = 0;
  }, 1000);
  setTimeout(function() {
  green.innerHTML = ` `;
  black.innerHTML = ` `;
  white.innerHTML = ` `;
  },2300);
}

// Get all td tags from the DOM and save as a variable 'boxes'
const boxes = document.querySelectorAll('td');

// Loop over every DOM node in the boxes array
for(let i = 0; i < boxes.length; i++ ) {

// Add an event listen function to each of them
  boxes[i].addEventListener('click', function(){

// Check if box is empty before trying to write in it

    if (this.innerHTML !== ""){
      return; //exit function if the tile is not empty
    }else{
      this.innerHTML = currentPlayer;
    }

    const b0 = boxes[0].innerHTML, b1 = boxes[1].innerHTML, b2 = boxes[2].innerHTML, b3 = boxes[3].innerHTML, b4 = boxes[4].innerHTML,b5 = boxes[5].innerHTML,b6 = boxes[6].innerHTML, b7 = boxes[7].innerHTML, b8 = boxes[8].innerHTML;

    // Check who wins the game
    if(
      ( b0 === b1 && b1 === b2 && b0 === currentPlayer ) ||
      ( b3 === b4 && b4 === b5 && b3 === currentPlayer ) ||
      ( b6 === b7 && b7 === b8 && b8 === currentPlayer ) ||
      ( b0 === b3 && b3 === b6 && b0 === currentPlayer ) ||
      ( b1 === b4 && b4 === b7 && b1 === currentPlayer ) ||
      ( b2 === b5 && b5 === b8 && b2 === currentPlayer ) ||
      ( b0 === b4 && b4 === b8 && b0 === currentPlayer ) ||
      ( b2 === b4 && b4 === b6 && b2 === currentPlayer )

    ){
      congratulateWinner(currentPlayer);
      return;
    }

//Check for the draw
    boxesfilled++;
    if (boxesfilled === 9) {
      const green = document.querySelectorAll('.firstColor')[1];
      const black = document.querySelectorAll('.secondColor')[1];
      const white = document.querySelectorAll('.thirdColor')[1];
      setTimeout(function() {
        green.innerHTML = `It's `
        black.innerHTML = `a `
        white.innerHTML = `draw`
        clearBoard();
        boxesfilled = 0;
      }, 1000);
      setTimeout(function() {
      green.innerHTML = ` `;
      black.innerHTML = ` `;
      white.innerHTML = ` `;
    },2300);
      return;
    }

    // Change the player from one to the other
    if( currentPlayer === 'X' ){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X'; // It was 'O', so change to 'X'
    }

  });

} // end of for loop

const restart = document.querySelector('#playAgain');

//clear the board
const clearBoard = function(){

  for ( let i = 0; i < boxes.length; i ++ ) {

    boxes[i].innerHTML = '';

  }
};

restart.addEventListener('click', function(){

clearBoard();

});
