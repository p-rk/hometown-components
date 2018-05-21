import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AlertContent from 'components/Alert/AlertContent';

const AlertWrapper = styled.div`
  width: calc(90% - 16px);
  color: #FFF;
  background: #222222;
  padding: 10px;
  position: absolute;
  bottom: 24px;
  padding: 11px 15px 6px;
  border-radius: 3px;
  left: calc(5% + 8px);
  text-align: center;
  opacity: 0;
  display: none;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all  0.4s ease-in-out;
  transform: 'translateY(1000%)';

  ${props => props.show && {
    display: 'block',
    boxSizing: 'border-box',
    transform: 'translateY(0)',
    opacity: 1
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
