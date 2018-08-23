import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
// import Button from 'components/Buttons';
// import { Label } from 'components/Label';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import Theme from 'components/Theme';

const calculateSavings = (cp, sp) => cp - sp;
const getProductUrl = name => name.split(' ').join('-').split('%').join('');
const ProductInlineWithQuantity = ({
  itemData
}) => {
  const {
    product_info: {
      name, image, special_price: specialPrice, unit_price: unitPrice, discount,
      shipping_time_text: shippingTime
    }
  } = itemData;
  return (
    <Div mr="0" ml="0" mb="1.375rem">
      {itemData && <Row display="block" mr="0" ml="0">
        <Link to={getProductUrl(name)}>
          <Div col="4">
            <Img
              alt={name}
              src={image}
              width="100%"
            />
          </Div>
          <Div col="8" pl="0.9375rem">
            <Heading
              mb="0.4375rem"
              mt="0"
              color={Theme.colors.text}
              fontFamily="medium"
              fontSize="1.1rem"
              lh="1.3"
            >{name}</Heading>
            <Div mb="0.25rem">
              <Text mt="0" mb="0.3125rem">
                <Span
                  mr="0.625rem"
                  fontSize="0.9rem"
                  color={Theme.colors.textDark}
                  fontFamily="medium"
                >Rs. {specialPrice}</Span>
                <Span mr="0.625rem" fontSize="0.9rem">Rs. {unitPrice}</Span>
              </Text>
              <Text mt="0" mb="0.3125rem">
                <Span
                  fontSize="0.9rem"
                >Saving Rs. {calculateSavings(unitPrice, specialPrice) }({discount}%)</Span>
              </Text>
              <Text mt="0" mb="0.3125rem">
                <Span
                  fontSize="0.9rem"
                >Quantity {itemData.qty}</Span>
              </Text>
              <Text mt="0" mb="0">
                <Span fontSize="0.9rem">{shippingTime}</Span>
              </Text>
            </Div>
          </Div>
        </Link>
      </Row>}
    </Div>
  );
};

ProductInlineWithQuantity.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductInlineWithQuantity;
