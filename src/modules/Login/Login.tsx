import React, { FC, useState } from 'react';

export const Login: FC = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    console.debug('u are increment');
    setNum((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>
        num:
        {' '}
        {num}
      </p>
      <button type="button" onClick={handleClick}>click me!</button>
    </div>
  );
};
