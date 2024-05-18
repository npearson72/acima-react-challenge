export const inputFormatValidator = (value?: string) => {
  if (value?.match(/^([ab][\+\-\*\/][ab])$|^[ab]$/)) {
    return true;
  }

  return false;
};
