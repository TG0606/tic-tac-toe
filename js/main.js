console.log("working");

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

// debugger

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


    clickedBox.innerHTML = currentPlayer;

    // Swap the player from one to the other
    if( currentPlayer === 'X' ){
      currentPlayer = 'O';
    } else {
      // It was 'O', so switch to 'X'
      currentPlayer = 'X';
    }



  });

} // end of for loop



// document.querySelector('#td1').addEventListener('click',function(){
//   console.log('clicked 1');
// });
// document.querySelector('#td2').addEventListener('click',function(){
//   console.log('clicked 2');
// });
// document.querySelector('#td3').addEventListener('click',function(){
//     console.log('clicked 3' );
// });
// document.querySelector('#td4').addEventListener('click',function(){
//     console.log('clicked');
// });
//
// document.querySelector('#td5').addEventListener('click',function(){
//     console.log('clicked');
// });
// document.querySelector('#td6').addEventListener('click', function(){
//     console.log('clicked');
// });
// document.querySelector('#td7').addEventListener('click', function(){
//     console.log('clicked');
// });
// document.querySelector('#td8').addEventListener('click', function(){
//     console.log('clicked');
// });
// document.querySelector('#td9').addEventListener('click', function(){
//     console.log('clicked');
// });
