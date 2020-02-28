/*jshint esversion: 6 */
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();


  }

  /* crates a newDiv and a ul, iterates through all of the characters from the
    Phrase object and creates a li for every letter or space  */


  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');


    for (let i = 0; i < this.phrase.length; i++) {

      if (this.phrase.charAt(i) === ' ') {
        const newSpaceLi = document.createElement('li');
        newSpaceLi.setAttribute('class', 'space');
        newSpaceLi.textContent = ' ';
        phraseDiv.appendChild(newSpaceLi);

      } else {

        const newLetterLi = document.createElement('li');
        newLetterLi.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);
        newLetterLi.textContent = `${this.phrase.charAt(i)}`;
        phraseDiv.appendChild(newLetterLi);

      }
    }

  }

// check if the guesed letter is in the phrase, return true if it is, false if not

  checkLetter(guess) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i) === guess) {
        return true;
      } else {
        return false;
      }
    }
  }

// iterate through the phrase li and reveals every matched letter

  showMatchedLetter(letter){

    const phrases = document.querySelector('#phrase ul').children;



    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].textContent === letter) {
        const match = phrases[i];
        match.setAttribute('class', `show letter ${letter}`);

      }
    }
  }




}
