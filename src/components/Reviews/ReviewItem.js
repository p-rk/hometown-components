import React from 'react';
import PropTypes from 'prop-types';
// import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Text from 'components/Text';
// import Rating from 'components/Rating';
import Span from 'components/Span';
import ReactStars from 'react-stars';

// const judgeColor = rating => {
//   if (!rating) {
//     return '';
//   }
//   rating = parseInt(rating, 10);
//   if (rating < 2) {
//     return 'red';
//   }
//   if (rating >= 2 && rating < 3) {
//     return 'yellow';
//   }
//   if (rating >= 3) {
//     return 'green';
//   }
// };

const ReviewsItems = ({ review, col, pr }) =>
  // const color = judgeColor(review.options[0].option_value);
  (
    <Div col={col} display="block" m="0" mb="0.9375rem" pr={pr}>
      <Heading fontSize="0.875rem" color="secondary" mb="0" pb="5px" mt="0" fontFamily="medium">
        {review.nickname || review.customer_name || null}
      </Heading>
      <Div>
        <ReactStars
          count={5}
          className="ratings"
          size={18}
          value={String(review.options[0].option_value || null)}
          half
          edit={false}
          color2="#ffd700"
        />
        <Span
          className="ratingsCount"
          fontSize="0.875rem"
          color="rgba(0, 0, 0, 0.6)"
          va="super"
        >({review.options[0].option_value || null})</Span>
      </Div>
      <Div>
        <Text
          wb="break-word"
          mt="0"
          color="rgba(0, 0, 0, 0.7)"
          fontSize="0.75rem"
        >{review.detail || null}</Text>
      </Div>
    </Div>
  );
ReviewsItems.defaultProps = {
  col: '12'
};

ReviewsItems.propTypes = {
  review: PropTypes.array.isRequired,
  col: PropTypes.string,
  pr: PropTypes.string.isRequired,
};

export default ReviewsItems;
