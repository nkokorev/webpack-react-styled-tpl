import React, { FC, useState } from 'react';

import Search from '../assets/icons/Search.svg';

export const App: FC = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    console.debug('u are increment');
    setNum((prevState) => prevState + 1);
  };

  return (
    <div>
      <Search />
      <p>
        App theme:
        num:
        {' '}
        {num}
      </p>
      <button type="button" onClick={handleClick}>click me!</button>
    </div>

  );
};
