/*jshint esversion: 6 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/* creates a new game object an call the startGame function to start the game,
when the start button is pressed
 */


let game;

document.getElementById('btn__reset').addEventListener('click',() =>{

game = new Game();
game.startGame();





});


/* set a addEventListener to every keyboardbutton
 and calls the handleInteraction function with the pressed letter as an argument*/

const keyButtons = document.querySelectorAll('.key');

keyButtons.forEach(button => {

  button.addEventListener('click', (event) => {

  game.handleInteraction(event.target.innerText);



  });



});

/* set a addEventListener to the document, when a key is pressed on the keyboard
the handleInteraction function will be called with the pressed key as an argument*/
document.addEventListener('keydown', (event) =>{

game.handleInteraction(event.key);



});
