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
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'phrase');
    newDiv.setAttribute('class', 'section');

    const newUl = document.createElement('ul');


    for (let i = 0; i < this.phrase.length; i++) {

      if (this.phrase.charAt(i) === ' ') {
        const newSpaceLi = document.createElement('li');
        newSpaceLi.setAttribute('class','space');
        newSpaceLi.textContent = ' ';
        newUl.appendChild(newSpaceLi);

      } else {

        const newLetterLi = document.createElement('li');
        newLetterLi.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);
        newLetterLi.innerHTML = `${this.phrase.charAt(i)}`;
        newUl.appendChild(newLetterLi);

      }
    }

    newDiv.appendChild(newUl);
    document.getElementById('btn__reset').appendChild(newDiv);

  }

  checkLetter(){



  }

}
