export interface ThemeInterface {
  primary: string,
  primaryLight: string,
  primaryDark: string,
  secondary: string,
  secondaryLight: string,
  secondaryDark: string,
  white: string,
  black: string,
  twitterBootstrap: {
    primary: string,
    secondary: string,
    success: string,
    danger: string,
    warning: string,
    info: string
  },
  custom: Object
}

export const Theme: ThemeInterface = {
  primary: '#d32f2f',
  primaryLight: '#ff6659',
  primaryDark: '#9a0007',
  secondary: '#e0e0e0',
  secondaryLight: '#ffffff',
  secondaryDark: '#aeaeae',
  white: '#ffffff',
  black: '#000000',
  twitterBootstrap: {
    primary: '#017BFF',
    secondary: '#7F878E',
    success: '#29A745',
    danger: '#DC3645',
    warning: '#FFC20E',
    info: '#17A2B8'
  },
  custom: {}
}
