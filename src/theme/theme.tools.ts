import {
  dark, light, ThemeName, ThemeNameKey, ThemeType,
} from './theme.config';
import { PREFER_DARK_QUERY, THEME_QUERY_PARAMETER } from './theme.constants';

export const preferMediaDarkQuery = window.matchMedia(PREFER_DARK_QUERY);
export const isPreferThemeDark = () => window.matchMedia && window.matchMedia(PREFER_DARK_QUERY).matches;
export const getThemeKeyName = (): ThemeNameKey | null => {
  const themeFromQuery = new URLSearchParams(window.location.search).get(THEME_QUERY_PARAMETER)?.toLowerCase();
  if (!themeFromQuery) return null;

  const themeName = (Object.values(ThemeName) as Array<ThemeNameKey>).find((key) => key === themeFromQuery);

  return themeName ?? null;
};
export const resolveThemeFromOs = (): ThemeType => (isPreferThemeDark() ? dark : light);
export const resolveThemeFromQuery = (): ThemeType | null => {
  const newThemeKey: ThemeNameKey | null = getThemeKeyName();
  if (!newThemeKey) return null;

  return newThemeKey === ThemeName.Dark ? dark : light;
};
export const resolveInitTheme = (): ThemeType => resolveThemeFromQuery() ?? resolveThemeFromOs();
