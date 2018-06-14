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

const ProductInline = ({
  itemData
}) => (
  <Div mr="0" ml="0" mb="0.625rem">
    <Row display="block" mr="0" ml="0">
      <Link href={itemData.url}>
        <Div col="4">
          <Img
            alt={itemData.name}
            src={itemData.image}
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
          >{itemData.name}</Heading>
          <Div mb="0.25rem">
            <Text mt="0" mb="0.3125rem">
              <Span
                mr="0.625rem"
                fontSize="0.9rem"
                color={Theme.colors.textDark}
                fontWeight="700"
              >Rs. {itemData.disc_price}</Span>
              <Span mr="0.625rem" fontSize="0.9rem">Rs. {itemData.price}</Span>
            </Text>
            <Text mt="0" mb="0.3125rem">
              <Span fontSize="0.9rem">Saving Rs. {itemData.saving} ({itemData.percentage})</Span>
            </Text>
            <Text mt="0" mb="0">
              <Span fontSize="0.9rem">Delivers by 12th January</Span>
            </Text>
          </Div>
        </Div>
      </Link>
    </Row>
  </Div>
);

ProductInline.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductInline;
