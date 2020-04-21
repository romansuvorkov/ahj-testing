export default function cardValidation(input) {
  if (input.startsWith('37')
          || input.startsWith('34')) {
    return 'ae';
  } if (input.startsWith('31')
          || input.startsWith('35')) {
    return 'jcb';
  } if (input.startsWith('30')
          || input.startsWith('36')
          || input.startsWith('38')) {
    return 'dc';
  } if (input.startsWith('2')) {
    return 'world';
  } if (input.startsWith('4')) {
    return 'visa';
  } if (input.startsWith('50')
          || input.startsWith('56')
          || input.startsWith('57')
          || input.startsWith('58')
          || input.startsWith('63')
          || input.startsWith('67')) {
    return 'maestro';
  } if (input.startsWith('51')
          || input.startsWith('52')
          || input.startsWith('53')
          || input.startsWith('54')
          || input.startsWith('55')) {
    return 'mc';
  } if (input.startsWith('60')) {
    return 'disc';
  }
  return 'error';
}
