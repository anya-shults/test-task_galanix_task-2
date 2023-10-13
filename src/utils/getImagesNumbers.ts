export const getImagesNumbers = (start: number, end: number): string[] => {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i.toString());
  }

  localStorage.setItem('images', JSON.stringify(numbers))

  return [...numbers];
};