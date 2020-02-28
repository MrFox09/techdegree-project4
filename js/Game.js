/*jshint esversion: 6 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
  constructor() {

    this.missed = 0;
    this.phrases = [new Phrase('I love you'), new Phrase('How I met your mother'), new Phrase('Avengers'), new Phrase('Ronaldo'), new Phrase('wheel of fortune')];
    this.activePhrase = null;

  }
  // start the game hide the overlay calls the getRandomPhrase function and set it to activePhrase and add it to the display
  startGame() {
    //hides the overlay div
    document.getElementById('overlay').style.display = 'none';

    this.activePhrase = getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

  }
  //get a random phrase from the phrase array

  getRandomPhrase() {

    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /*takes the selectedLetter(guesed) as an input , disables the button and calls the
    checkLetter function to check if it was correct or not. If it's correct then
    change the class to chosen and call the showMatchedLetter function on it.
    If not, sets the class to wrong and calls the removeLife function  */

  handleInteraction(selectedLetter) {

    const buttons = document.querySelectorAll('button');
    let selectedButton;


    buttons.forEach(button => {

      if (button.textContent === selectedLetter) {
        button.disabled = true;
        selectedButton = button;

      }
    });

    if (!this.activePhrase.checkLetter(selectedLetter)) {
      selectedButton.setAttribute('class', 'wrong');
      this.removeLife();

    }

    if (this.activePhrase.checkLetter(selectedLetter)) {
      selectedButton.setAttribute('class', 'chosen');
      this.activePhrase.showMatchedLetter(selectedLetter);
      if (this.checkForWin()) {
        this.gameOver();

      }

    }

  }

  /*changes the liveHeart Image to "lostHeart" image*/

  removeLife() {
    const lives = document.querySelectorAll("img[src='images/liveHeart.png']");
    lives[0].setAttribute('src', 'images/lostHeart.png');

    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver();


    }
  }


  /* counts how many classes have the show class and how many have the space class.
    If the length of the activePhrase - spaces is the same as them who have the show class
    you win and it return true */

  checkForWin() {
    const phrasesShow = document.querySelectorAll('.show');
    const phrasesSpace = document.querySelectorAll('.space');

    if (this.activePhrase.phrase.length - phrasesSpace.length === phrasesShow.length) {
      return true;

    }
  }

  /* show the overlay again and changes the text of h1 to win message or lose message
    and the class of the overlay*/

  gameOver() {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById("game-over-message");

    overlay.style.display = '';

    if (this.checkForWin()) {
      message.textContent = 'YOU WIN!';
      overlay.setAttribute('class', 'win');

    } else {
      message.textContent = 'YOU LOSE!';
      overlay.setAttribute('class', 'lose');
    }
  }

  resetGame() {

    const phraseDiv = document.querySelector('#phrase ul');
    const li = document.querySelectorAll('#phrase ul li');

    for (let i = 0; i < phraseDiv.length; i++) {
      phraseDiv.removeChild(li[i]);


    }

  }
}
