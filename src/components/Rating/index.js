import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Rating = styled.span`
  margin-right: 0.3125rem;
  color: #FFF;
  font-size: 11px;
  padding: 2px 5px;
  vertical-align: text-bottom;
  background: #fa1b36;
`;

const RatingContainer = ({ rating }) => (
  <Rating>★ {rating}</Rating>
);

RatingContainer.defaultProps = {
  rating: ''
};

RatingContainer.propTypes = {
  rating: PropTypes.string
};

export default RatingContainer;
