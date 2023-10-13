import { getImagesFromStorage } from './getImagesFromStorage';


export const deleteImagesNameFromStorage = (name: string) => {
  const images = getImagesFromStorage();
  const filteredImage = images.filter(imageName => imageName !== name);

  localStorage.setItem('images', JSON.stringify(filteredImage));
};
