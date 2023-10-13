export const getNumbers = (start, end) => {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return [...numbers];
};