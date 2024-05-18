'use server';

import { collectTablePrices } from '~/models';
import { CalculatorSchema } from '../hooks';
import { arithmetic, sum } from '../utils';
import { inputFormatValidator } from '../validations';

export const calculateAction = async ({ input }: CalculatorSchema) => {
  if (!inputFormatValidator(input)) {
    return {
      error: { code: 'VALIDATION_ERROR', message: 'Invalid format' }
    };
  }

  let total = 0;

  if (input.length === 1) {
    total = sum(collectTablePrices(input));
  }

  if (input.length === 3) {
    const [x, operator, y] = input.split('');

    const sumX = sum(collectTablePrices(x));
    const sumY = sum(collectTablePrices(y));

    total = arithmetic(operator)(sumX, sumY);
  }

  return { data: { total } };
};
