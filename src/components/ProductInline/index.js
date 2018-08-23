import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import Theme from 'components/Theme';

const ProductInline = ({
  itemData
}) => {
  const {
    product_info: {
      name, image, net_price: netprice, shipping_time_text: shippingTime, saving
    }
  } = itemData;
  return (
    <Div mr="0" ml="0" mb="0">
      <Row display="block" mr="0" ml="0">
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
            fontFamily={Theme.fontFamily.medium}
            fontSize="1rem"
            lh="1.3"
          >{name}</Heading>
          <Div mb="0.25rem">
            <Text mt="0" mb="0">
              <Span
                mr="0.625rem"
                fontSize="0.9rem"
                color={Theme.colors.textDark}
                fontFamily={Theme.fontFamily.medium}
              >{netprice}</Span>
            </Text>
            {saving && <Text mt="0" mb="0">
              <Span
                fontSize="0.75rem"
              >Saving
                  ({saving})
              </Span>
            </Text>}
            <Text mt="0" mb="0">
              <Span fontSize="0.75rem">{shippingTime}</Span>
            </Text>
          </Div>
        </Div>
      </Row>
    </Div>
  );
};

ProductInline.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductInline;
