import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Container from 'components/Container';
import Section from 'components/Section';
import ReviewItem from 'components/Reviews/ReviewItem';

const Reviews = ({ reviewItems, col, pr }) => {
  reviewItems = reviewItems.sort((a, b) =>
    (b.options[0] && Number(b.options[0].option_value)) - (a.options[0] && Number(a.options[0].option_value)));
  return (
    <Section
      mb="0.3125rem"
      p="0"
      pt="0"
      display="block"
      mt="1.5rem"
    >
      <Container type="container" pl="1rem" pr="1rem">
        <Heading
          mb="1rem"
          mt="0"
          color="textLight"
          fontSize="1em"
          fontFamily="light"
        >
          Reviews
        </Heading>
        <Row display="block" m="0" mb="0">
          {reviewItems && reviewItems.map((review, index) => (
            <ReviewItem col={col} review={review} key={String(index)} pr={pr} />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

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
