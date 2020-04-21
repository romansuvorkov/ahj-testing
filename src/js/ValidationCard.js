import changeVisability from './changeVisability';
import cardValidation from './cardValidation';
import luhnAlgorithm from './luhnAlgorithm';

export default class ValidationCard {
  constructor() {
    this.cards = [];
    this.error = null;
    this.input = null;
    this.button = null;
  }

  init() {
    const mc = document.querySelector('.mc');
    this.cards.push(mc);
    const visa = document.querySelector('.visa');
    this.cards.push(visa);
    const dc = document.querySelector('.dc');
    this.cards.push(dc);
    const disc = document.querySelector('.disc');
    this.cards.push(disc);
    const world = document.querySelector('.world');
    this.cards.push(world);
    const ae = document.querySelector('.ae');
    this.cards.push(ae);
    const jcb = document.querySelector('.jcb');
    this.cards.push(jcb);
    const maestro = document.querySelector('.maestro');
    this.cards.push(maestro);
    const err = document.querySelector('.error');
    const input = document.querySelector('.input');
    const button = document.querySelector('.button');
    this.error = err;
    this.input = input;
    this.button = button;
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.hideError();
      this.cards.forEach((element) => {
        if (element.firstChild.classList.contains('no_op')) {
          changeVisability(element.firstChild, 'no_op', 'op_09');
        }
      });
      this.checkValidity();
    });
  }

  hideError() {
    if (this.error.classList.contains('block')) {
      changeVisability(this.error, 'block', 'none');
    }
  }

  showError() {
    changeVisability(this.error, 'none', 'block');
  }

  checkValidity() {
    const luhnCheck = luhnAlgorithm(this.input.value);

    if (luhnCheck) {
      const paySystem = cardValidation(this.input.value);
      if (paySystem === 'error') {
        this.showError();
      } else {
        for (const item of this.cards) {
          if (item.classList.contains(paySystem)) {
            changeVisability(item.firstChild, 'op_09', 'no_op');
          }
        }
      }
    } else {
      this.showError();
    }
  }
}
