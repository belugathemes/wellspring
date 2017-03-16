// theme settings

export const color = {
  primary: '#077dc9',
  contrast: '#ea4429',
  primaryDark: '#066eb0',  // darken(primary, 5%)
  contrastDark: '#e33316', // darken(contrast, 5%)
  white: '#f8fbfd',        // mix(#fff, primary, 97%)
  black: '#20292f',        // mix(#222, primary, 92%)
  blackPrimary: '#1d3240', // mix(#222, primary, 82%)
  blackLight: '#3f494f',   // mix(#444, primary, 92%)
  gray: '#bcc6cc',         // mix(#ccc, primary, 92%)
  grayDark: '#61707a',     // lighten(blackLight, 15%)
  grayLight: '#e1e6e9'     // mix(#eaeaea, primary, 96%)
};

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

export const radius = '3px';
