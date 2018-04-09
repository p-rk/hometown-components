import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import Theme from 'components/Theme';

const ProductHorziontal = ({
  itemData
}) => (
  <Row display="block" mr="0" ml="0" mb="30px">
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
          <Text mt="0" mb="0.3125rem">
            <Span mr="0.625rem" color={Theme.colors.textDark} fontFamily="SFPDSemiBold">Rs. {itemData.disc_price}</Span>
            <Span mr="0.625rem" fontSize="1rem">Rs. {itemData.price}</Span>
          </Text>
          <Text mt="0" mb="0.3125rem">
            <Span fontSize="1rem">Saving Rs. {itemData.saving} ({itemData.percentage})</Span>
          </Text>
          <Text mt="0">
            <Span fontSize="1rem">Delivers by 12th January</Span>
          </Text>
        </Div>
      </Div>
    </Link>
  </Row>
);

ProductHorziontal.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductHorziontal;
