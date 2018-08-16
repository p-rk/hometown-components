import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Row from 'components/Row';
// import Img from 'components/Img';
import Text from 'components/Text';

// const visaIcon = require('../../static/visa.png');

const PaymentMethod = ({ gateway, cardtype, info }) => (
  <Section mb="1.5rem" p="0">
    <Container type="container" pr="0" pl="0">
      <Row display="block" mr="0" ml="0" mb="0.3125rem">
        <Heading fontSize="1.125rem" color="textDark" mb="0px" mt="0px" fontFamily="light">
          Payment Method
        </Heading>
      </Row>
      <Row display="block" mr="0" ml="0" >
        {gateway === 'CreditCard' || 'DebitCard' ?
          <Text mb="0" mt="0.3125rem">
            {cardtype} ending in {info.cardNumber}
          </Text>
          : null}
        {gateway === 'NetBanking' ?
          <Text mb="0" mt="0.3125rem">
            {info}
          </Text>
          : null}
      </Row>
    </Container>
  </Section>
);

export default PaymentMethod;
PaymentMethod.defaultProps = {
  cardtype: '',
};
PaymentMethod.propTypes = {
  gateway: PropTypes.string.isRequired,
  cardtype: PropTypes.string,
  info: PropTypes.string.isRequired,
};
