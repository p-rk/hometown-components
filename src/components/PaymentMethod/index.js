import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import { Label } from 'components/Label';
import Heading from 'components/Heading';
import Div from 'components/Div';
import Row from 'components/Row';
import Text from 'components/Text';

const PaymentMethodWrapper = styled(Section)`
  border: 1px solid #ededed;
  min-height: 220px;
`;

const PaymentMethod = ({ gateway }) => (
  <PaymentMethodWrapper mb="0" p="0">
    <Row display="block" mr="0" ml="0" mb="0.3125rem">
      <Div col="12" bg="#f5f5f5">
        <Heading fontSize="1rem" ls="1px" mb="0.625rem" color="text" p="10px 20px" pb="10px">
          Payment Method
          <Link to="/checkout/cart">
            <Label float="right" fontSize="0.875rem" fontFamily="light" color="linkBlue" p="0" mt="5px" mb="0">
              edit
            </Label>
          </Link>
        </Heading>
      </Div>
    </Row>
    <Row display="block" mr="0" ml="0" p="5px 20px 15px">
      <Text mb="0" mt="0.3125rem">
        {gateway}
      </Text>
    </Row>
  </PaymentMethodWrapper>
);

PaymentMethod.defaultProps = {
  gateway: '',
};
PaymentMethod.propTypes = {
  gateway: PropTypes.string,
};

export default PaymentMethod;
