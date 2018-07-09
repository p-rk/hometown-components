import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Container from 'components/Container';
import Section from 'components/Section';
import ReviewItem from 'components/Reviews/ReviewItem';

const Reviews = ({ reviewItems, col, pr }) => (
  <Section
    mb="0.3125rem"
    p="0"
    pt="0.9375rem"
    display="block"
    mt="1rem"
  >
    <Container type="container">
      <Heading
        mb="0.9375rem"
        mt="0px"
        color="textLight"
        fontSize="1em"
        fontWeight="600"
      >
      Reviews
      </Heading>
      <Row display="block" m="0" mb="0">
        {reviewItems.map((review, index) => (
          <ReviewItem col={col} review={review} key={String(index)} pr={pr} />
        ))}
      </Row>
    </Container>
  </Section>
);

Reviews.defaultProps = {
  col: '12',
  pr: '0',
};

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired,
  col: PropTypes.string,
  pr: PropTypes.string
};

export default Reviews;
