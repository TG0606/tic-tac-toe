
let currentPlayer = 'X';


//1. Make event listeners for 1-9 and button

//2. if statements

// 1, 2, 3 ==> win,  4, 5, 6 ==> win, 7, 8, 9 ==> win
// 1, 4, 7 ==> win, 2, 5, 8 ==> win, 3, 6, 9 ==> win
// 1, 5, 9 ==> win, 3, 5, 7 ==> win


// write a on.('click') function that logs what square has been fixed

// const handleClick = function(){
//    console.log('hello!');
// };
// document.querySelector('button').addEventListener('click', handleClick);

//Congratulate the winner
function congratulateWinner(player) {
  setTimeout(function() {
    alert("Congratulation! You won!");
  }, 200);
}

// Get every TD tag from the page as an array of DOM nodes,
// and save into the variable 'boxes'
const boxes = document.querySelectorAll('td');


// Loop over every DOM node in the boxes array,
// and add an event listen function to each of them
for(let i = 0; i < boxes.length; i++ ) {
  // console.log( boxes[i] );

  boxes[i].addEventListener('click', function( event ){
    // This code runs whenever any of the boxes is clicked.
    // We can make use of the 'event' argument passed in to
    // our handler function by the browser, to find out
    // which box actually just got clicked (.target)

    const clickedBox = event.target;

    console.log('clicked!', clickedBox.id );

    // Set the box contents to show the player's symbol
    clickedBox.innerText = currentPlayer;

    // Has someone won the game

    if( boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }

    else if( boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }

    else if( boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[8].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }
    else if( boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }
    else if( boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[1].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }
    else if( boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }
    else if( boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }
    else if( boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML === currentPlayer ) {
      congratulateWinner(currentPlayer);
    }



    // Swap the player from one to the other
    if( currentPlayer === 'X' ){
      currentPlayer = 'O';
    } else {
      // It was 'O', so switch to 'X'
      currentPlayer = 'X';
    }



  });

} // end of for loop



//
// //
//
const poem ={

  book1: {
          author: "Robert Frost",
          datePublished: 1916,
          name: "The Road Not Taken",
          famousLine: "Two road diverged in a yellow wood"
        },

  book2: {
          author: "Will Frost",
          datePublished: 1936,
          name: "King",
          famousLine: "Wonderful Wonderful"
          }

};
//
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
