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
  prime: '#ae8873',
  primary: '#f98d29',
  oldMont: '#a19a92',
  primaryLight: 'rgba(249, 141, 41, 0.8)',
  lightGray: 'rgba(0,0,0,0.05)',
  textExtraLight: 'rgba(0, 0, 0, 0.5)',
  textLight: 'rgba(0, 0, 0, 0.6)',
  secondary: 'rgba(0, 0, 0, 0.7)',
  text: 'rgba(51, 51, 51, 0.85)',
  textDark: 'rgba(0, 0, 0, 0.8)',
  textExtraDark: 'rgba(0, 0, 0, 0.9)',
  text515151: '#515151',
  prodText: '#7f7f7f',
  block10: 'rgba(0, 0, 0, 0.10)',
  bg: '#f5f5f5',
  blockefefef: '#e1ded9',
  yellowDark: '#f5a623',
  border: '#979797',
  success: '#28a745',
  error: '#dc3545',
  info: '#17a2b8',
  note: '#6c757d',
  sectionBG: '#FAFAFA',
  sectionBgDark: '#f7f7f7',
  offerRibbon: 'rgba(241, 241, 241, 0.45)',
  footerTop: 'rgba(51, 51, 51, 1)',
  footerBottom: 'rgb(51, 51, 51)',
  footerText: '#e5e5e5',
  footerHeading: '#fffbfb',
  hashTags: 'rgba(51, 51, 51, 1)',
  bgPDP: '#f6f6f6',
  color676767: '#676767',
  color79716c: '#79716c',
  colora39994: '#a39994',
  mkPrimary: '#dc4c3a',
  filterTitle: '#515151',
  uspTitle: '#7c7c7c',
  microBg: '#f2f2f2',
  mkFormHeading: '#5e5e5e',
  linkBlue: '#3cc0dc',
  reloadRibbion: '#009f8c',
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
  medium: 'medium'
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

const col = {
  13: '20%',
  12: '100%',
  11: '91.65%',
  10: '83.33%',
  9: '75%',
  8: '66.65%',
  7: '58.33%',
  6: '50%',
  5: '41.65%',
  4: '33.33%',
  3: '25%',
  2: '16.65%',
  1: '8.33%',
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
