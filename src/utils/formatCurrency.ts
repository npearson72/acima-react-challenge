export const formatCurrency = (value?: string | number) => {
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  });
};
