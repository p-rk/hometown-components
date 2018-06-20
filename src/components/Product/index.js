import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Span from 'components/Span';
import Button from 'components/Buttons';
import WishlistBtn from 'components/WishlistBtn';
import AddCart from 'components/Icons/AddCart';
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
  width: 100%;
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
  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ProductInner = styled.div`
  height: 125px;
  svg {
    vertical-align: middle;
  }
`;

const ImgWrapper = styled.div`
  background: #FFF;
  position: relative;
  box-sizing: border-box;
  position: relative;
`;

const Rating = styled.span`
  margin-right: 0.3125rem;
  background: #fa1b36;
  color: #FFF;
  font-size: 11px;
  padding: 2px 5px;
  vertical-align: text-bottom;
`;

const QuickViewBtn = styled.button`
  border-radius: 2px;
  box-shadow: 2px 2px 1px 0 rgba(214, 214, 214, 0.5);
  background-color: #ffffff;
  border: solid 1px #dadada;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
  width: 130px;
  left: calc(50% - 65px);
  height: 40px;
  top: 170px;
  @media (mxa-width: ${props => props.theme.breakpoints('sm')}) {
    display: none !important;
  }
`;

const Product = ({
  name, image, price, cutprice, saving, sku, rating, reviewsCount, savingAmount,
  onClick, isWishList, col, onOpenQuickViewModal
}) => (
  <ProductWrapper col={col} display="block" mr="0" ml="0" mb="30px" pl="0.5rem" pr="0.5rem">
    <WishlistBtn onClick={onClick(sku)} isWishList={isWishList} />
    <Link href="test">
      <ImgWrapper>
        <ProgressiveImageSchemer src={image} minHeight="360px">
          {imageURL => (<ProductImg
            alt={name}
            src={imageURL}
            width="100%"
          />)}
        </ProgressiveImageSchemer>
      </ImgWrapper>
      <Div p="0.25rem 0.75rem 0.5rem">
        <ProductInner>
          <Heading
            mb="0.4375rem"
            color={Theme.colors.text}
            fontWeight="600"
            fontSize="0.9375em"
          >{name}</Heading>
          <Div mb="0.25rem">
            <Span mr="0.625rem" color={Theme.colors.textDark} fontSize="0.875em" fontWeight="600">{price}</Span>
            <Span mr="0.625rem" fontSize="0.75em" fontWeight="600"><s>{cutprice}</s></Span>
            { saving &&
            <Span fontSize="0.75rem" fontWeight="600">
              Savings Rs. {savingAmount}
              <Span mr="0.625rem" fontSize="0.75rem" border="none"> ({saving.replace('-', '')} OFF)</Span>
            </Span> }
          </Div>
          {rating > 0 && (
            <Div>
              <Rating>★ {rating}</Rating>
              <Span mr="0.625rem" fontSize="0.875rem" color={Theme.colors.textExtraLight}>({reviewsCount})</Span>
              <Span fontSize="0.75rem" color={Theme.colors.textExtraLight}>To be Delivered by 17th Jan</Span>
            </Div>
          )}
          <Div mt="0.3125rem">
            <Button p="0" btnType="link" color="#ae8873">
              <AddCart fill="#ae8873" />
              <Span ml="0.625rem" fontSize="0.857rem" fontWeight="600" color="#ae8873">ADD TO CART</Span>
            </Button>
          </Div>
        </ProductInner>
      </Div>
    </Link>
    <QuickViewBtn onClick={onOpenQuickViewModal}>QUICK VIEW</QuickViewBtn>
  </ProductWrapper>
);
Product.defaultProps = {
  isWishList: false,
  col: 12,
  onOpenQuickViewModal: () => {}
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
  onOpenQuickViewModal: PropTypes.func,
  col: PropTypes.string
};

export default Product;
