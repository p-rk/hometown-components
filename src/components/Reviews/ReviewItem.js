import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Text from 'components/Text';
import Rating from 'components/Rating';

const judgeColor = rating => {
  if (!rating) {
    return '';
  }
  rating = parseInt(rating, 10);
  if (rating < 2) {
    return 'red';
  }
  if (rating >= 2 && rating < 3) {
    return 'yellow';
  }
  if (rating >= 3) {
    return 'green';
  }
};

const ReviewsItems = ({ review, col, pr }) => {
  const color = judgeColor(review.options[0].option_value);
  return (
    <Div col={col} display="block" m="0" mb="0.9375rem" pr={pr}>
      <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontFamily="medium">
        {review.nickname || review.customer_name || null}
      </Heading>
      <Div>
        <Label va="middle" mt="0" ml="0">
          <Rating color={color} rating={review.options[0].option_value || null} />
        </Label>
      </Div>
      <Text wb="break-word" color="rgba(0, 0, 0, 0.7)" fontSize="0.75rem">{review.detail || null}</Text>
    </Div>
  );
};

ReviewsItems.defaultProps = {
  col: '12'
};

ReviewsItems.propTypes = {
  review: PropTypes.array.isRequired,
  col: PropTypes.string,
  pr: PropTypes.string.isRequired,
};

export default ReviewsItems;
