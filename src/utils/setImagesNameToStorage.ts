import { getImagesFromStorage } from './getImagesFromStorage';

export const setImagesNameToStorage = (names: string[]) => {
  const images = getImagesFromStorage();

  localStorage.setItem('images', JSON.stringify([...images, ...names]))
};
