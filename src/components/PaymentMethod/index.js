import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Text from 'components/Text';

const PaymentMethod = ({ gateway }) => (
  <Section mb="1.5rem" p="0">
    <Container type="container" pr="0" pl="0">
      <Row display="block" mr="0" ml="0" mb="0.3125rem">
        <Heading fontSize="1.125rem" color="textDark" mb="0px" mt="0px" fontFamily="light">
          Payment Method
        </Heading>
      </Row>
      <Row display="block" mr="0" ml="0" >
        <Text mb="0" mt="0.3125rem">
          {gateway}
        </Text>
      </Row>
    </Container>
  </Section>
);

PaymentMethod.defaultProps = {
  gateway: '',
};
PaymentMethod.propTypes = {
  gateway: PropTypes.string,
};

export default PaymentMethod;
