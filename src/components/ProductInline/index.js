import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Text from 'components/Text';
import Theme from 'components/Theme';

const ProductInline = ({
  name, image, netPrice, shipping, qty, productURL
}) => (

  <Div mr="0" ml="0" mb="0.3125rem">
    <Row display="block" mr="0" ml="0">
      <Link to={productURL}>
        <Div col="4">
          <Img
            alt={name}
            src={image}
            width="100%"
          />
        </Div>
        <Div col="8" pl="0.9375rem">
          <Heading
            mb="0"
            mt="0"
            color={Theme.colors.text}
            fontFamily={Theme.fontFamily.medium}
            fontSize="0.875rem"
            lh="1.5"
            ellipsis={false}
          >{name}
          </Heading>
        </Div>
      </Link>
      <Div mb="0.25rem">
        <Text mt="0" mb="0">
          <Span
            mr="0.625rem"
            fontSize="0.875rem"
            color={Theme.colors.textDark}
            fontFamily={Theme.fontFamily.medium}
          >Rs. {netPrice}</Span>
        </Text>
        {qty > 0 &&
        <Text mt="0" mb="0">
          <Span fontSize="0.75rem">Quantity: {qty}</Span>
        </Text>
        }
        <Text mt="0" mb="0">
          <Span fontSize="0.75rem">{shipping}</Span>
        </Text>
      </Div>
    </Row>
  </Div>
);

ProductInline.defaultProps = {
  image: '',
  name: '',
  netPrice: '',
  shipping: '',
  qty: 0,
  productURL: ''
};

ProductInline.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  netPrice: PropTypes.string,
  shipping: PropTypes.string,
  qty: PropTypes.number,
  productURL: PropTypes.string,
};

export default ProductInline;
