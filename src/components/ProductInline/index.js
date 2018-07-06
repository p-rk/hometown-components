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
      data, images, netprice, saving
    }
  } = itemData;
  return (
    <Div mr="0" ml="0" mb="0.625rem">
      <Row display="block" mr="0" ml="0">
        <Div col="4">
          <Img
            alt={data.name}
            src={images[0].path}
            width="100%"
          />
        </Div>
        <Div col="8" pl="0.9375rem">
          <Heading
            mb="0.4375rem"
            mt="0"
            color={Theme.colors.text}
            fontWeight="700"
            fontSize="1.1rem"
            lh="1.3"
          >{data.name}</Heading>
          <Div mb="0.25rem">
            <Text mt="0" mb="0.3125rem">
              <Span
                mr="0.625rem"
                fontSize="0.9rem"
                color={Theme.colors.textDark}
                fontWeight="700"
              >{netprice}</Span>
            </Text>
            {saving && <Text mt="0" mb="0.3125rem">
              <Span
                fontSize="0.9rem"
              >Saving
                  ({saving})
              </Span>
            </Text>}
            <Text mt="0" mb="0">
              <Span fontSize="0.9rem">{data.delivery_details.length &&
                              data.delivery_details[0].value}</Span>
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
