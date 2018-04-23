import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Button from 'components/Buttons';
import { Label } from 'components/Label';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import Theme from 'components/Theme';

const ProductInlineWithQuantity = ({
  itemData
}) => (
  <Div mr="0" ml="0" mb="1.25rem">
    <Row display="block" mr="0" ml="0">
      <Link href={itemData.url}>
        <Div col="4">
          <Img
            alt={itemData.title}
            src={itemData.img}
            width="100%"
          />
        </Div>
        <Div col="8" pl="0.9375rem">
          <Heading
            mb="0.4375rem"
            mt="0"
            color={Theme.colors.text}
            fontFamily="SFPDSemiBold"
            fontSize="1.1rem"
            lh="1.3"
          >{itemData.title}</Heading>
          <Div mb="0.25rem">
            <Text mt="0" mb="0.1875rem">
              <Span
                mr="0.625rem"
                fontSize="0.9rem"
                color={Theme.colors.textDark}
                fontFamily="SFPDSemiBold"
              >Rs. {itemData.disc_price}</Span>
              <Span mr="0.625rem" fontSize="0.9rem">Rs. {itemData.price}</Span>
            </Text>
            <Text mt="0" mb="0.1875rem">
              <Span fontSize="0.9rem">Saving Rs. {itemData.saving} ({itemData.percentage})</Span>
            </Text>
            <Text mt="0" mb="0">
              <Span fontSize="0.9rem">Delivers by 12th January</Span>
            </Text>
          </Div>
        </Div>
      </Link>
    </Row>
    <Row display="block" mr="0" ml="0" mt="0.625rem">
      <Div col="6">
        <Img src="http://via.placeholder.com/24x24" alt="" float="left" />
        <Span fontSize="0.8em" ml="0.625rem">Remove from cart</Span>
      </Div>
      <Div col="6" ta="right">
        <Button
          type="custom"
          color={Theme.colors.textDark}
          border="none"
          bg={Theme.colors.white}
          bc="transparent"
          pt="0"
          pb="0"
        >
          <Img src="http://via.placeholder.com/24x24" alt="" float="left" />
        </Button>
        <Label color={Theme.colors.textDark} mb="0" mt="0">Test</Label>
        <Button
          type="custom"
          color={Theme.colors.textDark}
          border="none"
          bg={Theme.colors.white}
          bc="transparent"
          pt="0"
          pb="0"
        >
          <Img src="http://via.placeholder.com/24x24" alt="" float="left" />
        </Button>
      </Div>
    </Row>
  </Div>
);

ProductInlineWithQuantity.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductInlineWithQuantity;
