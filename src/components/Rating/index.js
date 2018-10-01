import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Rating = styled.span`
  margin-right: 0.3125rem;
  margin-left: ${props => props.ml};
  color: #FFF;
  font-size: 11px;
  padding: 2px 5px 3px;
  vertical-align: middle;
  background: ${props => props.color};
  position: relative;
  top: -2px;
`;

const RatingContainer = ({ rating, color, ml }) => (
  <Rating color={color} ml={ml}>★ {rating}</Rating>
);

RatingContainer.defaultProps = {
  rating: '',
  color: '#fa1b36',
  ml: '0',
};

RatingContainer.propTypes = {
  rating: PropTypes.string,
  color: PropTypes.string,
  ml: PropTypes.string,
};

export default RatingContainer;
