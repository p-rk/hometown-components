import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';

const calculateDiscount = (price, discPrice) => ((price - discPrice) / price) * 100;

const TitlePrice = ({ name, price, discPrice }) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading fontSize="1.25em" color="textDark" mb="0.75rem" mt="0px" fontWeight="300">
          {name}
        </Heading>
        <Heading fontSize="1em" color="textDark" mb="0px" mt="0px" fontWeight="600">
            Rs. {discPrice}
          <Span
            fontSize="0.8125em"
            color="rgba(0, 0, 0, 0.4)"
            ml="1rem"
            fontWeight="600"
            type="lt"
          >Rs. {price}</Span>
          <Span
            fontSize="0.8125em"
            color="rgba(0, 0, 0, 0.4)"
            ml="1rem"
            fontWeight="600"
          >Saving Rs. {parseInt(price, 10) - parseInt(discPrice, 10) }
           ({ Math.round(calculateDiscount(parseInt(price, 10), parseInt(discPrice, 10))) }%)
          </Span>
        </Heading>
      </Row>
    </Container>
  </Section>
);

TitlePrice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  discPrice: PropTypes.string
};

TitlePrice.defaultProps = {
  name: '',
  price: '',
  discPrice: '',
};

export default TitlePrice;
