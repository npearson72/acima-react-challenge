type Arithmetic = (operator: string) => (x: number, y: number) => number;

export const arithmetic: Arithmetic = operator => (x, y) => {
  if (operator === '+') return x + y;
  if (operator === '-') return x - y;
  if (operator === '*') return x * y;
  if (operator === '/') return x / y;

  throw new Error(`ArgumentError: '${operator}' is an unknown operator`);
};
