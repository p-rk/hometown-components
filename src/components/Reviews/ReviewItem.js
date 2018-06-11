import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Text from 'components/Text';

const ReviewsItems = ({ review }) => (
  <Row display="block" m="0" mb="0.9375rem">
    <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontFamily="600">
      {review.name}
    </Heading>
    <Div>
      <Label>{review.rating}/5</Label>
    </Div>
    <Text>{review.message}</Text>
  </Row>
);

ReviewsItems.propTypes = {
  review: PropTypes.array.isRequired
};

export default ReviewsItems;
