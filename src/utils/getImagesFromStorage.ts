import { getImagesNumbers } from './getImagesNumbers';

export const getImagesFromStorage = (): string[] => {
  const imagesStorage = localStorage.getItem('images');
  const images: string[] = imagesStorage
    ? JSON.parse(imagesStorage)
    : getImagesNumbers(1, 12);

  return [...images];
};
