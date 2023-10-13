import React from 'react';
import './BigImg.css';

type Props = {
  imgUrl: string,
  onClose: () => void
};

export const BigImg: React.FC<Props> = ({ imgUrl, onClose }) => {
  return (
    <aside className='big-image'>
      <div className='big-image__background'></div>
      <img className='big-image__current-image' src={imgUrl} alt="big" />
      <button
        className='big-image__close'
        onClick={onClose}
      >
        ✕
      </button>
    </aside>
  );
};
