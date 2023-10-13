import { getDeletedImagesFromStorage } from './getDeletedImagesFromStorage';

export const setDeletedImagesNameToStorage = (name: string) => {
  const deletedImages = getDeletedImagesFromStorage();

  localStorage.setItem('deletedImages', JSON.stringify([...deletedImages, name]));
};
