export default function luhnAlgorithm(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    let cardNum = parseInt(digits[i], 10);

    if ((digits.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return sum % 10 === 0;
}

const mc = document.querySelector('.mc');
const visa = document.querySelector('.visa');
const dc = document.querySelector('.dc');
const disc = document.querySelector('.disc');
const world = document.querySelector('.world');
const ae = document.querySelector('.ae');
const jcb = document.querySelector('.jcb');
const maestro = document.querySelector('.maestro');

const cards = [mc, visa, dc, disc, world, ae, jcb, maestro];

const err = document.querySelector('.error');
const input = document.querySelector('.input');

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  //   err.style.display = 'none';
  if (err.classList.contains('block')) {
    err.classList.remove('block');
    err.classList.add('none');
  }

  cards.forEach((element) => {
    // element.firstChild.style.opacity = 0.9;
    if (element.firstChild.classList.contains('no_op')) {
      element.firstChild.classList.remove('no_op');
      element.firstChild.classList.add('op_09');
    }
  });
  const luhnCheck = luhnAlgorithm(input.value);
  if (luhnCheck) {
    if (input.value.startsWith('37')
      || input.value.startsWith('34')) {
    //   ae.firstChild.style.opacity = 0;
      ae.firstChild.classList.remove('op_09');
      ae.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('31')
      || input.value.startsWith('35')) {
    //   jcb.firstChild.style.opacity = 0;
      jcb.firstChild.classList.remove('op_09');
      jcb.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('30')
      || input.value.startsWith('36')
      || input.value.startsWith('38')) {
    //   dc.firstChild.style.opacity = 0;
      dc.firstChild.classList.remove('op_09');
      dc.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('2')) {
    //   world.firstChild.style.opacity = 0;
      world.firstChild.classList.remove('op_09');
      world.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('4')) {
    //   visa.firstChild.style.opacity = 0;
      visa.firstChild.classList.remove('op_09');
      visa.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('50')
      || input.value.startsWith('56')
      || input.value.startsWith('57')
      || input.value.startsWith('58')
      || input.value.startsWith('63')
      || input.value.startsWith('67')) {
    //   maestro.firstChild.style.opacity = 0;
      maestro.firstChild.classList.remove('op_09');
      maestro.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('51')
      || input.value.startsWith('52')
      || input.value.startsWith('53')
      || input.value.startsWith('54')
      || input.value.startsWith('55')) {
    //   mc.firstChild.style.opacity = 0;
      mc.firstChild.classList.remove('op_09');
      mc.firstChild.classList.add('no_op');
    } else if (input.value.startsWith('60')) {
    //   disc.firstChild.style.opacity = 0;
      disc.firstChild.classList.remove('op_09');
      disc.firstChild.classList.add('no_op');
    } else {
    //   err.style.display = 'block';
      err.classList.remove('none');
      err.classList.add('block');
    }
  } else {
    // err.style.display = 'block';
    err.classList.remove('none');
    err.classList.add('block');
  }
});
