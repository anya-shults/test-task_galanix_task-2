
export const getDeletedImagesFromStorage = (): string[] => {
  const deltedImagesStorage = localStorage.getItem('deletedImages');
  const images: string[] = deltedImagesStorage
    ? JSON.parse(deltedImagesStorage)
    : [];

  return [...images];
};
