// theme settings

// color palette
export const color = {
  primary: '#077dc9',
  contrast: '#ea4429',
  primaryDark: '#066eb0',  // darken(primary, 5%) ... primary mouse over
  contrastDark: '#e33316', // darken(contrast, 5%) ... contrast mouse over
  white: '#f8fbfd',        // mix(#fff, primary, 97%) ... content bg
  black: '#20292f',        // mix(#222, primary, 92%) ... headings
  blackPrimary: '#1d3240', // mix(#222, primary, 82%) ... app shell
  blackLight: '#3f494f',   // mix(#444, primary, 92%) ... text
  gray: '#bcc6cc',         // mix(#ccc, primary, 92%) ... excerpt border
  grayPrimary: '#244b65',  // mix(#333, primary, 67%) ... off-canvas bg
  grayDark: '#61707a',     // lighten(blackLight, 15%) ... quote text
  grayLight: '#e1e6e9'     // mix(#eaeaea, primary, 96%) ... pre, code bg
};

// font and text parameters
export const font = {
  family: {
    base: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    light: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    mono: '"Liberation Mono", Courier, monospace',
  },
  weight: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  lineHeight: 1.5,
};

// media queries
export const media = {
  small: '@media (min-width: 34.0625em)',  // 545px
  medium: '@media (min-width: 42.8125em)', // 685px
  large: '@media (min-width: 52.3125em)',  // 837px
};

// navigation
export const nav = {
  offcanvasWidth: '14rem',  // 224px
  offcanvasBorder: '1px solid rgba(255, 255, 255, 0.15)',
  topbarHeight: '3.125rem', // 50px
  topbarBorder: '1px solid rgba(255, 255, 255, 0.2)',
  transitionTime: '0.35s',
};

// global radius
export const radius = '3px';
