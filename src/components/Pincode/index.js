import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const Pincode = ({ type, height }) => (
  <Input type={type} height={height} />
);

Pincode.propTypes = {
  type: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Pincode;
