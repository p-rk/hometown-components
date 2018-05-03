import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Container from 'components/Container';
import Text from 'components/Text';

const Reviews = ({ reviewItems }) => (
  <Container type="container" pr="0.5rem" pl="0.5rem">
    <Heading fontSize="1.5rem" color="textDark" mb="0.9375rem" mt="0px" fontFamily="SFPDLight">
      Product Reviews
    </Heading>
    <Div display="block">
      {reviewItems.map(review => (
        <Row display="block" m="0" mb="0.9375rem">
          <Heading fontSize="0.875rem" color="secondary" mb="0.3125rem" mt="0px" fontFamily="SFPDMedium">
            {review.name}
          </Heading>
          <Div>
            <Label>{review.rating}/5</Label>
          </Div>
          <Text>{review.message}</Text>
        </Row>
      ))}
    </Div>
  </Container>
);

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired
};

export default Reviews;
