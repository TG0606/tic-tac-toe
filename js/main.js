
let currentPlayer = 'X';
let boxesfilled = 0;

//Congratulate the winner

function congratulateWinner() {
  // debugger;
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

    // Check who wins the game
    if( boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }

    else if( boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }

    else if( boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[8].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }
    else if( boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }
    else if( boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }
    else if( boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }
    else if( boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
      return;
    }
    else if( boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML === currentPlayer ) {
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





//
// //
//
// const poem ={
//
//   book1: {
//           author: "Robert Frost",
//           datePublished: 1916,
//           name: "The Road Not Taken",
//           famousLine: "Two road diverged in a yellow wood"
//         },
//
//   book2: {
//           author: "Will Frost",
//           datePublished: 1936,
//           name: "King",
//           famousLine: "Wonderful Wonderful"
//           }
//
// };
// //
//
// console.log(poem.famousLine);
//
// poem.book1.author;
//
//
// poem['book1']['author'];
///
// console.log('book1', poem.book1);
// ////
// for(const key in poem.book1) {
//   console.log( key, poem.book1[key] );
// }
