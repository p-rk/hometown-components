import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Text from 'components/Text';
import Rating from 'components/Rating';

const ReviewsItems = ({ review, col }) => (
  <Div col={col} display="block" m="0" mb="0.9375rem" pr="2.5rem">
    <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontWeight="600">
      {review.nickname || review.customer_name || null}
    </Heading>
    <Div>
      <Label va="middle" mt="0" ml="0">
        <Rating rating={review.options[0].option_value || null}>★ {review.rating}</Rating>
      </Label>
    </Div>
    <Text ww="break-word" color="rgba(0, 0, 0, 0.7)" fontSize="0.75rem">{review.detail || null}</Text>
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
