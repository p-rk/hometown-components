import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Text from 'components/Text';
import Rating from 'components/Rating';

const ReviewsItems = ({ review, col }) => (
  <Div col={col} display="block" m="0" mb="0.9375rem" pd="2rem">
    <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontWeight="700">
      {review.name}
      <Label va="middle" mt="0" ml="0.625rem"><Rating rating={review.rating}>★ {review.rating}</Rating></Label>
    </Heading>
    <Text color="rgba(0, 0, 0, 0.7)">{review.message}</Text>
  </Div>
);

ReviewsItems.defaultProps = {
  col: '12'
};

ReviewsItems.propTypes = {
  review: PropTypes.array.isRequired,
  col: PropTypes.string
};

export default ReviewsItems;
