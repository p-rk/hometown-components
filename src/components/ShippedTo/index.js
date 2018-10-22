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
  name, address, city, pincode, state, edit, mt, mb
}) => (
  <ShippedToWrapper mb="0" p="0">
    <Row display="block" mr="0" ml="0" mb="0.3125rem">
      <Div col="12" bg="#969696">
        <Heading
          fontSize="1rem"
          ls="1px"
          mb={mb}
          mt={mt}
          color="white"
          p="10px 20px"
          pb="10px"
          fontFamily="light"
        >
          Shipping Address
          {edit &&
          <Link to="/checkout/delivery-address">
            <Label float="right" fontSize="0.875rem" fontFamily="light" color="white" p="0" mt="2px" mb="0">
                edit
            </Label>
          </Link>
          }
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

ShippedTo.defaultProps = {
  edit: true,
  mt: '0.3125rem',
  mb: '0.3125rem'
};

ShippedTo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pincode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

export default ShippedTo;
