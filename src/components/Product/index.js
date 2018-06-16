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
  box-shadow: 0 3px 6px 0 rgba(8, 8, 8, 0.12);
  background: #FFF;
  // border: 1px solid #e6e6e6;
`;

const ImgWrapper = styled.div`
  background: #FFF;
  position: relative;
  box-sizing: border-box;
`;

const Rating = styled.span`
  margin-right: 0.3125rem;
  background: #fa1b36;
  color: #FFF;
  font-size: 11px;
  padding: 2px 5px;
  vertical-align: text-bottom;
`;

const Product = ({
  name, image, price, cutprice, saving, sku, rating, reviewsCount, savingAmount,
  onClick, isWishList, col, onOpenQuickViewModal
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
      <Div p="0.25rem 0.75rem 0.5rem">
        <Heading
          mb="0.4375rem"
          color={Theme.colors.text}
          fontWeight="400"
          fontSize="0.875em"
        >{name}</Heading>
        <Div mb="0.25rem">
          <Span mr="0.625rem" color={Theme.colors.textDark} fontSize="0.875em" fontWeight="600">{price}</Span>
          <Span mr="0.625rem" fontSize="0.75em"><s>{cutprice}</s></Span>
          { saving &&
            <Span fontSize="0.75rem" fontWeight="600">
              Savings Rs. {savingAmount}
              <Span mr="0.625rem"> ({saving.replace('-', '')} OFF)</Span>
            </Span> }
        </Div>
        {rating > 0 && (
          <Div>
            <Rating>★ {rating}</Rating>
            <Span color={Theme.colors.textExtraLight}>({reviewsCount})</Span>
          </Div>
        )}
      </Div>
    </Link>
    <button onClick={onOpenQuickViewModal}>Quick</button>
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
  onOpenQuickViewModal: PropTypes.func.isRequired,
  col: PropTypes.string
};

export default Product;
