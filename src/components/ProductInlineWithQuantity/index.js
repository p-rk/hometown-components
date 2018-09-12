import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import ImageShimmer from 'components/ImageShimmer';
import Theme from 'components/Theme';

const Wrapper = styled(Div)`
  background: #FFF;
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

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
    <Wrapper mr="0" ml="0" mb="1.375rem">
      {itemData && <Row display="block" mr="0" ml="0">
        <Link to={getProductUrl(name)}>
          <Div col="3">
            <ImageShimmer src={image} height="80px">
              {imageURL => (<Img
                src={imageURL}
                alt={name}
                width="100%"
              />)}
            </ImageShimmer>
          </Div>
          <Div col="9" pl="0.9375rem">
            <Heading
              mb="0"
              mt="0"
              color={Theme.colors.text}
              fontFamily="regular"
              fontSize="1rem"
              lh="1.5"
            >{name}</Heading>
            <Div mb="0.25rem">
              <Text mt="0" mb="0" lh="1.4">
                <Span
                  mr="0.625rem"
                  fontSize="0.875rem"
                  color={Theme.colors.textDark}
                  fontFamily="medium"
                >Rs. {specialPrice}</Span>
                <Span mr="0.625rem" fontSize="0.9rem">Rs. {unitPrice}</Span>
              </Text>
              <Text mt="0" mb="0" lh="1.4">
                <Span
                  fontSize="0.75rem"
                >Saving Rs. {calculateSavings(unitPrice, specialPrice) }({discount}%)</Span>
              </Text>
              <Text mt="0" mb="0" lh="1.4">
                <Span
                  fontSize="0.75rem"
                >Quantity {itemData.qty}</Span>
              </Text>
              <Text mt="0" mb="0" lh="1.4">
                <Span fontSize="0.875rem">{shippingTime}</Span>
              </Text>
            </Div>
          </Div>
        </Link>
      </Row>}
    </Wrapper>
  );
};

ProductInlineWithQuantity.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductInlineWithQuantity;
