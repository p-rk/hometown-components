import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Container from 'components/Container';
import Section from 'components/Section';
import ReviewItem from 'components/Reviews/ReviewItem';

const Reviews = ({ reviewItems, col }) => (
  <Section mb="0.3125rem" p="0" pt="0.9375rem" display="inline-block" mt="1rem">
    <Container type="container">
      <Heading
        fontSize="1.25rem"
        mb="0.9375rem"
        mt="0px"
        color="primary"
        fontWeight="300"
      >
      Reviews
      </Heading>
      <Row display="block" m="0" mb="0.9375rem">
        {reviewItems.map((review, index) => (
          <ReviewItem col={col} review={review} key={String(index)} />
        ))}
      </Row>
    </Container>
  </Section>
);

Reviews.defaultProps = {
  col: '12'
};

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired,
  col: PropTypes.string
};

export default Reviews;
