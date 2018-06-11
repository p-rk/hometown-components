import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Container from 'components/Container';
import Section from 'components/Section';
import ReviewItem from 'components/Reviews/ReviewItem';

const Reviews = ({ reviewItems }) => (
  <Section mb="0.3125rem" p="0" pt="0.9375rem">
    <Container type="container">
      <Heading
        fontSize="1.25rem"
        color="textDark"
        mb="0.9375rem"
        mt="0px"
        fontWeight="300"
      >
      Product Reviews
      </Heading>
      <Div display="block">
        {reviewItems.map((review, index) => (
          <ReviewItem review={review} key={String(index)} />
        ))}
      </Div>
    </Container>
  </Section>
);

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired
};

export default Reviews;
