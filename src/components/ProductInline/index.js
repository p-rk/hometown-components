import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import { Label } from 'components/Label';
import Theme from 'components/Theme';

const ProductInline = ({
  name, image, specialPrice, unitPrice, qty, productURL, formatAmount
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
            fontSize="0.75rem"
            lh="1.5"
            ellipsis={false}
          >{name}
          </Heading>
          <Div mb="0.25rem">
            <Div mt="0.3125rem">
              {unitPrice !== specialPrice && specialPrice !== 0 && (
                <Label color="black" fontSize="0.875rem" mt="0">
                  <s>Rs. {formatAmount(Number(unitPrice) * Number(qty))}</s>
                </Label>
              )}
              <br />
              <Label color="primary" fontSize="1.25rem" mt="0">
                Rs.{' '}
                {specialPrice === 0
                  ? formatAmount(Number(unitPrice) * Number(qty))
                  : formatAmount(Number(specialPrice) * Number(qty))}
              </Label>
            </Div>
          </Div>
        </Div>
      </Link>
    </Row>
  </Div>
);

ProductInline.defaultProps = {
  image: '',
  name: '',
  specialPrice: '',
  unitPrice: '',
  qty: 0,
  productURL: '',
  formatAmount: () => {},
};

ProductInline.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  specialPrice: PropTypes.string,
  unitPrice: PropTypes.string,
  qty: PropTypes.number,
  productURL: PropTypes.string,
  formatAmount: PropTypes.func,
};

export default ProductInline;
