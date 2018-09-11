import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Rating = styled.span`
  margin-right: 0.3125rem;
  color: #FFF;
  font-size: 11px;
  padding: 2px 5px 3px;
  vertical-align: middle;
  background: ${props => props.color};
  position: relative;
  top: -2px;
`;

const RatingContainer = ({ rating, color }) => (
  <Rating color={color}>★ {rating}</Rating>
);

RatingContainer.defaultProps = {
  rating: '',
  color: '#fa1b36',
};

RatingContainer.propTypes = {
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default RatingContainer;
