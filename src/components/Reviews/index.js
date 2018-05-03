import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Container from 'components/Container';
import ReviewItem from 'components/Review/ReviewItem';

const Reviews = ({ reviewItems }) => (
  <Container type="container" pr="0.5rem" pl="0.5rem">
    <Heading fontSize="1.5rem" color="textDark" mb="0.9375rem" mt="0px" fontFamily="SFPDLight">
      Product Reviews
    </Heading>
    <Div display="block">
      {reviewItems.map(review => (
        <ReviewItem review={review} />
      ))}
    </Div>
  </Container>
);

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired
};

export default Reviews;
