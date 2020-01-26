
let currentPlayer = 'X';
let boxesfilled = 0;
let allowClicking = 'yes';

//Congratulate the winner
const congratulateWinner = function($boxes) {

  allowClicking = 'no';

  const $colorOne = $('.firstColor');
  const $colorTwo = $('.secondColor');
  const $colorThree = $('.thirdColor');

  setTimeout(function() {

    $colorOne.html(`Congratulations! `);
    $colorTwo.html(`${currentPlayer} `);
    $colorThree.html(`won!`);

    clearBoard($boxes);
    boxesfilled = 0;

  }, 900);

  setTimeout(function() {

  $colorOne.html(` `);
  $colorTwo.html(` `);
  $colorThree.html(` `);

  },2600);

};

// Clear the board
const clearBoard = function( $boxes ){
  // for ( let i = 0; i < boxes.length; i ++ ) {
    $boxes.html('');
  // }
  allowClicking = 'yes';
};

$(document).ready(function(){

  // Get all td tags from the DOM and save as a variable 'boxes'
  const $boxes = $('td');

  // Loop over every DOM node in the boxes array
  // for(let i = 0; i < boxes.length; i++ ) {

  // Add an event listen function to each of them
      $boxes.on('click', function() {

      let $currentBox = $( this )

  // Check if box is empty before trying to write in it
      if ( $currentBox.html() !== "" ) {
        return; //exit function if the box is not empty
      } else if(allowClicking === 'yes') {
        $currentBox.html( currentPlayer );
      } else {
        return;
      }

      const $b0 = $boxes.eq(0).html(), $b1 = $boxes.eq(1).html(), $b2 = $boxes.eq(2).html(), $b3 = $boxes.eq(3).html(), $b4 = $boxes.eq(4).html(), $b5 = $boxes.eq(5).html(), $b6 = $boxes.eq(6).html(), $b7 = $boxes.eq(7).html(), $b8 = $boxes.eq(8).html();

      // Check who wins the game
      if(
        ( $b0 === $b1 && $b1 === $b2 && $b0 === currentPlayer ) ||
        ( $b3 === $b4 && $b4 === $b5 && $b3 === currentPlayer ) ||
        ( $b6 === $b7 && $b7 === $b8 && $b8 === currentPlayer ) ||
        ( $b0 === $b3 && $b3 === $b6 && $b0 === currentPlayer ) ||
        ( $b1 === $b4 && $b4 === $b7 && $b1 === currentPlayer ) ||
        ( $b2 === $b5 && $b5 === $b8 && $b2 === currentPlayer ) ||
        ( $b0 === $b4 && $b4 === $b8 && $b0 === currentPlayer ) ||
        ( $b2 === $b4 && $b4 === $b6 && $b2 === currentPlayer )

      ) {
        congratulateWinner($boxes);
        return;
      }

      //Check for the draw
      boxesfilled++;

      if (boxesfilled === 9) {

        const $colorOne = $('.firstColor'); // Different color text
        const $colorTwo = $('.secondColor');
        const $colorThree = $('.thirdColor');

        setTimeout(function() {

          $colorOne.html(`It's `);
          $colorTwo.html(`a `);
          $colorThree.html(`draw`);

          clearBoard( $boxes );
          boxesfilled = 0;

        }, 900);

        setTimeout(function() {
          $colorOne.html(` `);
          $colorTwo.html(` `);
          $colorThree.html(` `);
        },2600);
        return;

      }  // boxesfilled === 9


      // Change the player from one to the other
      if( currentPlayer === 'X' ){
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X'; // It was 'O', so change to 'X'
      }

    }); // End of event listener

  // } // End of for loop


  $('#playAgain').on('click', function(){
    clearBoard( $boxes );
    boxesfilled = 0;
  });

});  // $(document).ready()
