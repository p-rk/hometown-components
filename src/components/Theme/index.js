// theme.js

// breakpoint values

const breakpoints = val => {
  const breakpointsVal = {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em'
  };

  return breakpointsVal[val];
};

// Colors
const colors = {
  white: '#fff',
  black: '#000',
  primary: '#ae8873',
  secondary: 'rgba(0, 0, 0, 0.7)',
  text: 'rgba(0, 0, 0, 0.75)',
  textDark: 'rgba(0, 0, 0, 0.8)',
  textLight: 'rgba(0, 0, 0, 0.6)',
  textExtraLight: 'rgba(0, 0, 0, 0.5)',
  border: '#979797',
  gray: [
    '#f8f9fa',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d',
    '#495057',
    '#343a40',
    '#212529'
  ]
};

// sizes is used for margin and padding scales
const sizes = {
  0: '0',
  5: '0.3125em',
  10: '0.625em',
  15: '0.9375em',
  16: '1em',
  20: '1.25em',
  25: '1.5625em',
  30: '1.875em',
  32: '2em'
};

// typographic scale
const fontSizes = {
  12: '0.75em',
  14: '0.875em',
  16: '1em',
  20: '1.25em',
  22: '1.375em',
  24: '1.5em',
  30: '1.875em',
  32: '2em',
};

const lineHeights = [
  1, 1.125, 1.25, 1.5
];

// Font Family
const fontFamily = {
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold'
};

const letterSpacings = {
  normal: 'normal',
  1: '1px',
  caps: '0.25em'
};

// border-radius
const radius = [
  '0px',
  '.25rem',
  '.3rem',
  '.35rem',
  '.40rem',
  '.45rem',
  '.50rem'
];

const borderWidths = [
  '0px',
  '1px',
  '2px',
  '3px'
];

const shadows = [
  `0 1px 2px 0 ${colors.white}`,
  `0 1px 4px 0 ${colors.white}`
];

const grid = size => {
  const colStyle = {
    maxWidth: size,
    flex: `0 0 ${size}`,
    display: 'block',
    width: '100%'
  };

  return colStyle;
};

const col = {
  12: grid('100%'),
  11: grid('91.666667%'),
  10: grid('83.333333%'),
  9: grid('75%'),
  8: grid('66.666667%'),
  7: grid('58.333333%'),
  6: grid('50%'),
  5: grid('41.666667%'),
  4: grid('33.333333%'),
  3: grid('25%'),
  2: grid('16.666667%'),
  1: grid('8.333333%'),
};

const theme = {
  breakpoints,
  colors,
  sizes,
  fontSizes,
  lineHeights,
  fontFamily,
  letterSpacings,
  radius,
  borderWidths,
  shadows,
  col
};

export default theme;
