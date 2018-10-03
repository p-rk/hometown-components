import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Calendar = ({ width, height, color, ml, va }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} ml={ml} va={va} width={width} height={height}>
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
  </svg>
);
/* eslint-enable */

Calendar.defaultProps = {
  width: '24',
  height: '24',
  color: '',
  ml: '0px',
  va: 'middle',
};

Calendar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  ml: PropTypes.string,
  va: PropTypes.string,
};

export default Calendar;
