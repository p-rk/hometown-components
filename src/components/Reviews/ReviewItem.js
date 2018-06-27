import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Text from 'components/Text';

const ReviewsItems = ({ review, col }) => (
  <Div col={col} display="block" m="0" mb="0.9375rem" pd="2rem">
    <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontWeight="600">
      {review.nickname || review.customer_name || null}
    </Heading>
    <Div>
      <Label>{review.options[0].option_value || null}/5</Label>
    </Div>
    <Text>{review.detail || null}</Text>
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
