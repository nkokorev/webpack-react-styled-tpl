import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { LeftArrowIcon } from '../assets';
import Search from '../assets/icons/svg/Search.svg';

const SearchStyledIcon = styled(Search)`
    &, & path {
      //fill: blue;
      fill: ${(props) => props.theme.colors.icons.a};;
      // background-color: ${(props) => props.theme.colors.background.primary};
    },
  /*&, & path {
    stroke: rebeccapurple;
  }*/
`;

export const MainLayout = styled.main`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.primary};
  //gap: var(--gap-main);
  gap: ${(props) => props.theme.gap.sm};
`;

export const App: FC = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    console.debug('u are increment');
    setNum((prevState) => prevState + 1);
  };

  return (
    <MainLayout>
      <LeftArrowIcon />
      <SearchStyledIcon />
      <Search />
      <p>
        App theme:
        num:
        {' '}
        {num}
      </p>
      <button type="button" onClick={handleClick}>click me!</button>
    </MainLayout>

  );
};
