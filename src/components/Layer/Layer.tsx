import React, { FC, useState } from 'react';

export const layer: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);

  const handleClick = () => {
    console.debug('u are increment');
    setCount(count + 1);
  };

  return (
    <div>
      <p>
        num:
        {' '}
        {count}
      </p>
      <button type="button" onClick={handleClick}>click me!</button>
    </div>
  );
};
