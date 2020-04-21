// import cardValidation from '../../cardValidation';
const cardValidation = require('../../cardValidation')

test.each([
  ['AmericanExpress', '371449635398431', 'ae'],
  ['Diners Club', '30569309025904', 'dc'],
  ['Discover', '6011111111111117', 'disc'],
  ['JCB', '3530111333300000', 'jcb'],
  ['MasterCard', '5555555555554444', 'mc'],
  ['Visa', '4111111111111111', 'visa'],
  ['World', '2202200223948454', 'world'],
  ['Maestro', '639002309079858005', 'maestro'],
  ['Error', '123545944512258556', 'error'],
])('%s', (_, received, expected) => {
  expect(cardValidation.cardValidation(received)).toEqual(expected);
});
