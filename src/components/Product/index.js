import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Span from 'components/Span';
import WishlistBtn from 'components/WishlistBtn';
import ProgressiveImageSchemer from 'components/ProgressiveImageShimmer';
import Theme from 'components/Theme';

const ProductImg = styled.img`
  position: absolute;
  max-width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: auto;
`;

const Product = ({
  name, image, price, cutprice, saving, sku, rating, onClick, isWishList
}) => (
  <Div display="block" mr="0" ml="0" mb="30px">
    <WishlistBtn onClick={onClick(sku)} isWishList={isWishList} />
    <Link href="test">
      <ProgressiveImageSchemer src={image} minHeight="320px">
        {imageURL => (<ProductImg
          alt={name}
          src={imageURL}
          width="100%"
        />)}
      </ProgressiveImageSchemer>
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
  </Div>
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
  isWishList: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Product;
