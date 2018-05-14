import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import WishlistBtn from 'components/WishlistBtn';
import Theme from 'components/Theme';

const Product = ({
  name, image, price, cutprice, saving, sku, rating, onClick, isWishList
}) => (
  <Row display="block" mr="0" ml="0" mb="30px">
    <WishlistBtn onClick={onClick(sku)} isWishList={isWishList} />
    <Link href="test">
      <Img
        alt={name}
        src={image}
        width="100%"
      />
      <Div>
        <Heading
          mb="0.4375rem"
          color={Theme.colors.text}
          fontFamily="SFPDSemiBold"
          fontSize="1rem"
        >{name}</Heading>
        <Div mb="0.25rem">
          <Span mr="0.625rem" color={Theme.colors.textDark} fontFamily="SFPDSemiBold">{price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem"><s>{cutprice}</s></Span>
          <Span mr="0.625rem" fontSize="0.9rem">({saving.replace('-', '')} OFF)</Span>
        </Div>
        {rating && (
          <Div>
            <Span color={Theme.colors.primary} fontSize="1.2rem" mr="0.3125em">★</Span>
            <Span>{rating}</Span>
          </Div>
        )}
      </Div>
    </Link>
  </Row>
);
Product.defaultProps = {
  isWishList: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cutprice: PropTypes.string.isRequired,
  saving: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  rating: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isWishList: PropTypes.bool
};

export default Product;
