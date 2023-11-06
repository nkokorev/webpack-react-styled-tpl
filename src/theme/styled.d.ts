import 'styled-components';

import { ThemeType } from './theme.config';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
