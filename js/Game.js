/*jshint esversion: 6 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
  constructor() {

    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;

  }

  startGame() {
    //hides the overlay div
    document.getElementById('overlay').style.display = 'none';

    this.activePhrase = getRandomPhrase();
    phrase.addPhraseToDisplay();

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

    buttons.forEach(button => {

      if (button.textContent === selectedLetter) {
        button.disabled = true;
      }

      if (phrase.checkLetter(selectedLetter)) {
        button.setAttribute('class', 'chosen');
        phrase.showMatchedLetter(selectedLetter);
        if (this.checkForWin()) {
          this.gameOver();

        }

      } else {
        button.setAttribute('class', 'wrong');
        this.removeLife();

      }

    });

  }

  removeLife() {
    const lives = document.getElementsByClassName(tries);

    if (this.missed < 5) {
      lives[this.missed].setAttribute('src', 'images/lostHeart.png');
      this.missed += 1;

    } else {
      this.gameOver();

    }
  }


/* counts how many classes have the show class and how many have the space class.
  If the length of the activePhrase - spaces is the same as them who have the show class
  you win and it return true */

  checkForWin() {
    const phrasesShow = document.querySelectorAll('.show');
    const phrasesSpace = document.querySelectorAll('.space');

    if (this.activePhrase.length - phrasesSpace.length === phrasesShow.length) {
      return true;

    }




  }





}
