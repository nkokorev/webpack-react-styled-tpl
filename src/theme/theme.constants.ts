export const PREFER_DARK_QUERY2 = '(prefers-color-scheme: dark)';

export const darkModeQuery2 = window.matchMedia(PREFER_DARK_QUERY2);

/**
 * todo check:
 *  preferDarkScheme = () =>  window.matchMedia && darkModeQuery.matches
 */
export const preferDarkScheme2: boolean = darkModeQuery2.matches;
