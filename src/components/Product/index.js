import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import Theme from 'components/Theme';

const Product = ({
  itemData, rating
}) => (
  <Row display="block" mr="0" ml="0" mb="30px">
    <Link href={itemData.url}>
      <Img
        alt={itemData.title}
        src={itemData.img}
        width="100%"
      />
      <Div>
        <Heading
          mb="0.4375rem"
          color={Theme.colors.text}
          fontFamily="SFPDSemiBold"
          fontSize="1rem"
        >{itemData.title}</Heading>
        <Div mb="0.25rem">
          <Span mr="0.625rem" color={Theme.colors.textDark} fontFamily="SFPDSemiBold">Rs. {itemData.disc_price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem">Rs. {itemData.price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem">Saving Rs. {itemData.saving} ({itemData.percentage})</Span>
        </Div>
        {rating && (
          <Div>
            <Span color={Theme.colors.primary} fontSize="1.2rem" mr="0.3125em">★</Span>
            <Span>{itemData.rating}</Span>
          </Div>
        )}
      </Div>
    </Link>
  </Row>
);

Product.propTypes = {
  itemData: PropTypes.object.isRequired,
  rating: PropTypes.bool.isRequired
};

export default Product;
