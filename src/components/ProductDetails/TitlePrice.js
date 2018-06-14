import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';

const TitlePrice = ({ prodDetails }) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading fontSize="1.25em" color="textDark" mb="0.75rem" mt="0px" fontWeight="300">
          {prodDetails.name}
        </Heading>
        <Heading fontSize="1em" color="textDark" mb="0px" mt="0px" fontWeight="600">
            Rs. {prodDetails.price}
          <Span
            fontSize="0.8125em"
            color="rgba(0, 0, 0, 0.4)"
            ml="1rem"
            fontWeight="600"
          >Rs. {prodDetails.disc_price}</Span>
          <Span
            fontSize="0.8125em"
            color="rgba(0, 0, 0, 0.4)"
            ml="1rem"
            fontWeight="600"
          >Saving Rs. {prodDetails.saving} ({prodDetails.discount}%)</Span>
        </Heading>
      </Row>
    </Container>
  </Section>
);

TitlePrice.propTypes = {
  prodDetails: PropTypes.array.isRequired
};

export default TitlePrice;
