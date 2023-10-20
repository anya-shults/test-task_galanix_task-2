import React, { useCallback, useEffect, useState } from 'react';
import './Photos.css';
import { BigImg } from '../BigImg/BigImg';
import { getImagesFromStorage } from '../../utils/getImagesFromStorage';
import { setDeletedImagesNameToStorage } from '../../utils/setDeletedImagesNameToStorage';
import { getDeletedImagesFromStorage } from '../../utils/getDeletedImagesFromStorage';
import { deleteImagesNameFromStorage } from '../../utils/deleteImagesNameFromStorage';
import { setImagesNameToStorage } from '../../utils/setImagesNameToStorage';

const totalImageCount = 12;

export const Photos: React.FC = () => {
  const [imagesName, setImagesName] = useState(getImagesFromStorage());
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());  
  
  const showCurrentDate = () => {
    setDate(new Date())
  }

  const handleClick = (imgNum: string) => setCurrentImage(imgNum);

  const handleDeleteButton = (name: string) => {
    const filteredImgNames = imagesName.filter(currentName => currentName !== name);

    setDeletedImagesNameToStorage(name);
    deleteImagesNameFromStorage(name);
    setImagesName(filteredImgNames);
  }

  const closeCurrentImage = useCallback(() => {
    setCurrentImage(null);
  }, []);

  const handleClickResetButton = () => {
    const deletedImages = getDeletedImagesFromStorage();

    localStorage.removeItem('deletedImages');
  
    setImagesNameToStorage(deletedImages);
    setImagesName(currentImages => [...currentImages, ...deletedImages]);
  };

  useEffect(() => {
    const interval = setInterval(() => showCurrentDate(), 15000);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <div className='photos'>
        <div className="photos__info">
          {
            `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
            ${date.toTimeString().slice(0, 5)}`
          }
          {` Кількість картинок на сторінці: ${imagesName.length}`}
        </div>
        <div className="photos__container">
          {imagesName.map((name, index) => (
            <div className="photos__photo-container" key={index}>
              <img
                src={`img/${name}.jpg`}
                alt={`#${name}`}
                className='photos__photo'
                onClick={() => handleClick(name)}
              />
              <button
                className='photos__button'
                onClick={() => handleDeleteButton(name)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        {currentImage
          ? (
          <BigImg imgUrl={`img/${currentImage}.jpg`} onClose={closeCurrentImage} />
          ) : null
        }
      </div>
      <div className="reset">
        {imagesName.length < totalImageCount
          ? (
            <button
              className='reset__button'
              onClick={() => handleClickResetButton()}
            >
              Відновити
            </button>
          ) : null
        }
        <div className="container__background">
          <div className="container__background-blue"></div>
          <div className="container__background-orange"></div>
        </div>
      </div>
    </>
  );
};
