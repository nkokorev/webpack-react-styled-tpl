import React, {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';
import { preferMediaDarkQuery, resolveInitTheme } from 'src/theme/theme.tools';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(resolveInitTheme());

  useEffect(() => {
    preferMediaDarkQuery.addEventListener('change', () => setCurrentTheme(resolveInitTheme()));
  }, []);

  return <ThemeProviderStyledComponents theme={currentTheme}>{children}</ThemeProviderStyledComponents>;
};
