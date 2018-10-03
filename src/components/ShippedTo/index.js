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

const ShippedToWrapper = styled(Section)`
  border: 1px solid #ededed;
  min-height: 220px;
`;

const ShippedTo = ({
  name, address, city, pincode, state
}) => (
  <ShippedToWrapper mb="0" p="0">
    <Row display="block" mr="0" ml="0" mb="0.3125rem">
      <Div col="12" bg="#f5f5f5">
        <Heading fontSize="1rem" ls="1px" mb="0.625rem" color="text" p="10px 20px" pb="10px">
          Shipping Address
          <Link to="/checkout/delivery-address">
            <Label float="right" fontSize="0.875rem" fontFamily="light" color="linkBlue" p="0" mt="5px" mb="0">
                edit
            </Label>
          </Link>
        </Heading>
      </Div>
    </Row>
    <Row display="block" mr="0" ml="0" p="5px 20px 15px">
      <Text mb="0" mt="0.3125rem">{name}</Text>
      <Text mb="0" mt="0.3125rem">{address},</Text>
      <Text mb="0" mt="0.3125rem">{city}, {pincode}</Text>
      <Text mb="0" mt="0.3125rem">{state}</Text>
    </Row>
  </ShippedToWrapper>
);

ShippedTo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pincode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default ShippedTo;
