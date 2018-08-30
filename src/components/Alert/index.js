import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AlertContent from 'components/Alert/AlertContent';

const AlertWrapper = styled.div`
  width: 100%;
  padding: 0;
  position: fixed;
  border-radius: 0;
  left: 0;
  right: 0;
  bottom: -70px;
  text-align: center;
  opacity: 0;
  display: none;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all  0.4s ease-in-out;
  z-index: 1001;
  ${props => props.show && {
    display: 'block',
    boxSizing: 'border-box',
    opacity: 1,
    bottom: '20px'
  }}

  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

const Alert = ({ show, type, msg }) => (
  <AlertWrapper show={show}>
    <AlertContent type={type} msg={msg} />
  </AlertWrapper>
);

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
};

export default Alert;
