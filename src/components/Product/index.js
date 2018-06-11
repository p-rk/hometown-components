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
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

const ProductWrapper = styled.div`
  width: ${props => props.theme.col[props.col]};
  float: left;
  position: relative;
  margin-right: 0;
  margin-bottom: 30px;
  margin-left: 0;
  display: initial;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
`;

const ImgWrapper = styled.div`
  background: #FFF;
  position: relative;
  box-sizing: border-box;
`;

const Product = ({
  name, image, price, cutprice, saving, sku, rating, reviewsCount, savingAmount, onClick, isWishList, col
}) => (
  <ProductWrapper col={col} display="block" mr="0" ml="0" mb="30px" pl="0.5rem" pr="0.5rem">
    <WishlistBtn onClick={onClick(sku)} isWishList={isWishList} />
    <Link href="test">
      <ImgWrapper>
        <ProgressiveImageSchemer src={image} minHeight="320px">
          {imageURL => (<ProductImg
            alt={name}
            src={imageURL}
            width="100%"
          />)}
        </ProgressiveImageSchemer>
      </ImgWrapper>
      <Div p="0.25rem 0.75rem">
        <Heading
          mb="0.4375rem"
          color={Theme.colors.text}
          fontWeight="700"
          fontSize="1rem"
        >{name}</Heading>
        <Div mb="0.25rem">
          <Span mr="0.625rem" color={Theme.colors.textDark} fontWeight="700">{price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem"><s>{cutprice}</s></Span>
          { saving &&
            <Span>
              Savings Rs. {savingAmount}
              <Span mr="0.625rem" fontSize="0.9rem"> ({saving.replace('-', '')} OFF)</Span>
            </Span> }
        </Div>
        {rating > 0 && (
          <Div>
            <Span color={Theme.colors.primary} fontSize="1rem" mr="0.3125em">★</Span>
            <Span>{rating} ({reviewsCount})</Span>
          </Div>
        )}
      </Div>
    </Link>
  </ProductWrapper>
);
Product.defaultProps = {
  isWishList: false,
  col: 12
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cutprice: PropTypes.string.isRequired,
  saving: PropTypes.string.isRequired,
  savingAmount: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  isWishList: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  col: PropTypes.string
};

export default Product;
