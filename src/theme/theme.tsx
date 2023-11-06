import React, {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';

import { preferMediaDarkQuery, resolveInitTheme } from './theme.tools';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(resolveInitTheme());

  useEffect(() => {
    preferMediaDarkQuery.addEventListener('change', () => setCurrentTheme(resolveInitTheme()));
  }, []);

  return <ThemeProviderStyledComponents theme={currentTheme}>{children}</ThemeProviderStyledComponents>;
};
