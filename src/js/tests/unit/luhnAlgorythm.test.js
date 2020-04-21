import luhnAlgorithm from '../../luhnAlgorithm';

test.each([
  ['AmericanExpress', '371449635398431', true],
  ['Diners Club', '30569309025904', true],
  ['Discover', '6011111111111117', true],
  ['JCB', '3530111333300000', true],
  ['MasterCard', '5555555555554444', true],
  ['Visa', '4111111111111111', true],
  ['World', '2202200223948454', true],
  ['Maestro', '639002309079858005', true],
  ['Error', '123545944512258556', false],
])('%s', (_, received, expected) => {
  expect(luhnAlgorithm(received)).toEqual(expected);
});
