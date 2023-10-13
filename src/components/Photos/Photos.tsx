import React, { useEffect, useRef, useState } from 'react';
import './Photos.css';
import { getNumbers } from '../../utils/getNumbers';


export const Photos: React.FC = () => {
  const [imgCount, setImgCount] = useState(getNumbers(1, 12));
  const [date, setDate] = useState(new Date());
  let timerId = useRef(window.setInterval(() => showCurrentDate(), 10000));

  const showCurrentDate = () => {
    setDate(new Date())
  }

  // timerId.current = window.setInterval(() => showCurrentDate(), 1000);

  useEffect(() => {
    return window.clearInterval(timerId.current);
  }, [])

  return (
    <div className='photos'>
      {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
        ${date.toString().slice(-55, -49)}`}
      <div className="photos__container">
        {imgCount.map(num => (
          <img
            src={`img/${num}.jpg`}
            alt={`#${num}`}
            key={num}
            className='photos__photo'
          />
        ))}
      </div>
    </div>
  );
};
