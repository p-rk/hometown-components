import React from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Img from 'components/Img';
import Text from 'components/Text';

const visaIcon = require('../../static/visa.png');

const PaymentMethod = () => (
  <Section mb="1.5rem" p="0">
    <Container type="container" pr="0" pl="0">
      <Row display="block" mr="0" ml="0" mb="0.3125rem">
        <Heading fontSize="1.25rem" color="textDark" mb="0px" mt="0px" fontFamily="SFPDLight">
          Payment Method
        </Heading>
      </Row>
      <Row display="block" mr="0" ml="0" >
        <Text mb="0" mt="0.3125rem">
          <Img src={visaIcon} alt="" float="left" mr="0.625rem" /> ending in 9358
        </Text>
      </Row>
    </Container>
  </Section>
);

export default PaymentMethod;
