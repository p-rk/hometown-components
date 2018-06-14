import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Text from 'components/Text';

const ShippedTo = ({
  name, address, city, pincode, state
}) => (
  <Section mb="1.25rem" p="0">
    <Container type="container" pr="0" pl="0">
      <Row display="block" mr="0" ml="0" mb="0.3125rem">
        <Heading fontSize="1.25rem" color="textDark" mb="0px" mt="0px" fontWeight="300">
          Shipped to
        </Heading>
      </Row>
      <Row display="block" mr="0" ml="0" >
        <Text mb="0" mt="0.3125rem">{name}</Text>
        <Text mb="0" mt="0.3125rem">{address},</Text>
        <Text mb="0" mt="0.3125rem">{city}, {pincode}</Text>
        <Text mb="0" mt="0.3125rem">{state}</Text>
      </Row>
    </Container>
  </Section>
);

ShippedTo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pincode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default ShippedTo;
