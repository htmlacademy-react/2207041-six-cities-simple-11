export const setUpperFirstLetter = (item: string) => {
  const result = item ? item.charAt(0).toUpperCase() + item.slice(1) : '';
  return result;
};
