export type ThemeType = typeof light;

/**
 * Эти констранты используются как ключи в query-параметрах,
 * так, возможно и для получения данных по ключу из localStorage
 */
export enum ThemeName {
  Light = 'light',
  Dark = 'dark',
}

/**
 * ThemeName values, use as Theme key as string: "light" | "dark"
 */
export type ThemeNameKey = keyof Record<ThemeName, string>;

export const light = {
  name: ThemeName.Light,
  isDark: false,
  colors: {
    background: {
      primary: '#fff',
      secondary: '#e7e7e7',
      // --background-blur-alert
      blurAlert: 'rgba(34, 34, 34, 0.90)',
    },
    text: {
      primary: '#222',
      secondary: '#525252',
      accent: '#3a83f1',
      link: '#5594F1',
      error: '#f5443a',
      staticBlack: '#222',
      button: '#fff',

      // Remove this!!
      // --text-background-primary
      backgroundPrimary: '#fff',
      // line-height: 1.5;
      lineHeight: '1.5',
    },
    elements: {
      // --light-elements-special
      borderColor: '#d5d5d5',
      // --provider-color-yandex: #fc3f1d;
      providerColorYandex: '#fc3f1d',
      providerColorVK: '#07f',
    },
    form: {
      // --light-background-solid-basic: #fff; -- input bkg
      inputBackground: '#fff',
    },
    icons: {
      a: '#2abbbb',
      fill: '#222222',

    },
  },
  gap: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    // --gap-body-login
    bodyLogin: '40px',
    // --gap-body-update-profile: 24px;
    bodyUpdateProfile: '24px',
    // --gap-header: 8px;
    header: '8px',
    // --gap-main: 32px;
    main: '32px',
    // --gap-form: 24px;
    form: '24px',
  },
  paddings: {
    container: '15px',
    pageTop: '30px',
  },
  margins: {
    pageTop: '30px',
  },
  layouts: {
    formMaxWidth: '375px',
  },
};
export const dark: ThemeType = {
  name: ThemeName.Dark,
  isDark: true,
  colors: {
    background: {
      primary: '#222',
      secondary: '#e7e7e7',
      // --background-blur-alert
      blurAlert: 'rgba(34, 34, 34, 0.90)',
    },
    text: {
      primary: '#222',
      secondary: '#525252',
      accent: '#3a83f1',
      link: '#5594F1',
      error: '#f5443a',
      staticBlack: '#222',
      button: '#fff',

      // Remove this!!
      // --text-background-primary
      backgroundPrimary: '#fff',
      // line-height: 1.5;
      lineHeight: '1.5',
    },
    elements: {
      // --light-elements-special
      borderColor: '#d5d5d5',
      // --provider-color-yandex: #fc3f1d;
      providerColorYandex: '#fc3f1d',
      providerColorVK: '#07f',
    },
    form: {
      // --light-background-solid-basic: #fff; -- input bkg
      inputBackground: '#fff',
    },
    icons: {
      a: '#af1616',
      fill: '#E5E5E5',
    },
  },
  gap: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    // --gap-body-login
    bodyLogin: '40px',
    // --gap-body-update-profile: 24px;
    bodyUpdateProfile: '24px',
    // --gap-header: 8px;
    header: '8px',
    // --gap-main: 32px;
    main: '32px',
    // --gap-form: 24px;
    form: '24px',
  },
  paddings: {
    container: '15px',
    pageTop: '30px',
  },
  margins: {
    pageTop: '30px',
  },
  layouts: {
    formMaxWidth: '375px',
  },
};

export const theme = light;
