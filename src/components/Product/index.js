import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Span from 'components/Span';
import WishlistBtn from 'components/WishlistBtn';
import Rating from 'components/Rating';
import ImageShimmer from 'components/ImageShimmer';
import Theme from 'components/Theme';
import colorIcon from '../../static/pantone.jpg';

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
  margin-bottom: 0;
  margin-left: 0;
  display: initial;
  box-sizing: border-box;
  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ProductInner = styled.div`
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
  top: calc((270px - 40px)/2);
  font-size: 0.875rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    display: none !important;
  }
`;

const Colors = styled.span`
  position: absolute;
  right: 10px;
  bottom: 15px;
  font-size: 14px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.75);
  font-family: medium;
  img {
    width: 70px;
    margin-right: 5px;
    vertical-align: baseline;
  }
`;

const handleClick = (dispatcher, position = 0) => () => {
  dispatcher(position + 1);
};
const judgeColor = rating => {
  if (!rating) {
    return '';
  }
  rating = parseInt(rating, 10);
  if (rating < 2) {
    return 'red';
  }
  if (rating >= 2 && rating < 3) {
    return 'yellow';
  }
  if (rating >= 3) {
    return 'green';
  }
};
const Product = props => {
  const {
    name, image, price, cutprice, saving, sku, rating, reviewsCount, savingAmount,
    onClick, isWishList, col, skuLoading, onOpenQuickViewModal, deliveredBy, colors, imgHeight,
    position, setProductPosition, productURL
  } = props;
  const color = judgeColor(rating);
  return (
    <ProductWrapper col={col}>
      <WishlistBtn
        onClick={onClick(sku)}
        isWishList={isWishList}
        wishlistLoading={skuLoading}
      />

      <Link onClick={handleClick(setProductPosition, position)} to={productURL}>
        <ImgWrapper>
          <ImageShimmer src={image} height={imgHeight}>
            {imageURL => (<ProductImg
              alt={name}
              src={imageURL}
              width="100%"
            />)}
          </ImageShimmer>
          { colors &&
          <Colors>
            <img src={colorIcon} alt="" />
            {colors}
          </Colors>
          }
        </ImgWrapper>
        <Div p="0.25rem 0 0.25rem">
          <ProductInner>
            <Heading
              pb="5px"
              mb="0"
              color={Theme.colors.text}
              fontSize="0.9375rem"
            >{name}</Heading>
            <Div mb="0px">
              <Span mr="0.625rem" color={Theme.colors.text} fontSize="0.875rem" fontFamily="medium">{price}</Span>
              <Span mr="0" fontSize="0.75rem" fontFamily="medium"><s>{cutprice}</s></Span>
              {rating > 0 && (
                <Span ml="0.625rem">
                  <Rating color={color} rating={rating}>★ {rating}</Rating>
                  <Span
                    mr="0.625rem"
                    fontSize="0.875rem"
                    lh="1.7"
                    va="bottom"
                    color={Theme.colors.textExtraLight}
                  >({reviewsCount})</Span>
                </Span>
              )}
            </Div>
            <Div mb="0px">
              { saving &&
              <Span fontSize="0.75rem" fontFamily="medium">
                Savings Rs. {savingAmount} ({saving.replace('-', '')} OFF)
              </Span> }
            </Div>
            {deliveredBy && <Div>
              <Span
                fontSize={deliveredBy.indexOf('Sorry') === 0 ? '0.65rem' : '0.75rem'}
                lh="0.1"
                color={Theme.colors.textExtraLight}
              >{deliveredBy}</Span>
            </Div>}
          </ProductInner>
        </Div>
      </Link>
      <QuickViewBtn onClick={onOpenQuickViewModal}>QUICK VIEW</QuickViewBtn>
    </ProductWrapper>
  );
};
Product.defaultProps = {
  isWishList: false,
  col: 12,
  skuLoading: false,
  onOpenQuickViewModal: () => {},
  colors: '',
  imgHeight: '270px',
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
  col: PropTypes.string,
  skuLoading: PropTypes.bool,
  deliveredBy: PropTypes.string.isRequired,
  colors: PropTypes.string,
  imgHeight: PropTypes.string,
  position: PropTypes.string.isRequired,
  setProductPosition: PropTypes.func.isRequired,
  productURL: PropTypes.string.isRequired,
};

export default Product;
