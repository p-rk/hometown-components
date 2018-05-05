import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Text from 'components/Text';

const ShippedTo = ({ shipDetails }) => (
  <Section mb="1.25rem" p="0">
    <Container type="container" pr="0" pl="0">
      <Row display="block" mr="0" ml="0" mb="0.3125rem">
        <Heading fontSize="1.25rem" color="textDark" mb="0px" mt="0px" fontFamily="SFPDLight">
          Shipped to
        </Heading>
      </Row>
      <Row display="block" mr="0" ml="0" >
        <Text mb="0" mt="0.3125rem">{shipDetails.shipped_name}</Text>
        <Text mb="0" mt="0.3125rem">{shipDetails.address},</Text>
        <Text mb="0" mt="0.3125rem">{shipDetails.city}, {shipDetails.pincode}</Text>
        <Text mb="0" mt="0.3125rem">{shipDetails.state}</Text>
      </Row>
    </Container>
  </Section>
);

ShippedTo.propTypes = {
  shipDetails: PropTypes.array.isRequired
};

export default ShippedTo;
