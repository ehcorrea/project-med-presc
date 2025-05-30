import pluralizeRN from 'pluralize';

pluralizeRN.addIrregularRule('Colher de sopa', 'Colheres de sopa');
pluralizeRN.addIrregularRule('Colher de chá', 'Colheres de chá');

export const pluralize = (quantity: number | string = 0, value?: string) => {
  if (!value) {
    return '';
  }
  return pluralizeRN(value, Number(quantity));
};

export const splitTimer = (timer?: string) => {
  if (!timer) {
    return '';
  }
  const [hr, min] = timer.split(':');
  if (hr.padStart(2, '0') === '00') {
    return `${min} minutos`;
  }
  if (min.padStart(2, '0') === '00') {
    return `${hr} ${pluralize(hr, 'hora')}`;
  }
  return `${hr} ${pluralize(hr, 'hora')} e ${min} minutos`;
};
