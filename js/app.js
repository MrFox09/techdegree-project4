/*jshint esversion: 6 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click',() =>{

game = new Game();
game.startGame();



});

const keyButtons = document.querySelectorAll('.key');

keyButtons.forEach(button => {

  button.addEventListener('click', (event) => {

  game.handleInteraction(event.target.innerText);



  });



});


document.addEventListener('keydown', (event) =>{

game.handleInteraction(event.key);



});
