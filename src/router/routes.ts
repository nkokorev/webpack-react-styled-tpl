export const ROOT_ROUTE = 'ROOT_ROUTE';
export const PHONE_NUMBER_CHANGE = 'PHONE_NUMBER_CHANGE';
export const VERIFICATION_PHONE = 'VERIFICATION_PHONE';
export const VERIFICATION_MAIL = 'VERIFICATION_MAIL';
export const CHANGE_MAIL = 'CHANGE_MAIL';
export const NO_NETWORK = 'NO_NETWORK';

export const ROUTES = {
  [ROOT_ROUTE]: '/ui/profile/',

  [PHONE_NUMBER_CHANGE]: '/phone-number-change',
  [VERIFICATION_PHONE]: '/verification-phone',

  [VERIFICATION_MAIL]: '/verification-mail',
  [CHANGE_MAIL]: '/change-mail',
  [NO_NETWORK]: '/no-internet-connection',
} as const;
