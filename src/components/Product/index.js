import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Div from 'components/Div';
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
  text-align: center;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  display: initial;
  box-sizing: border-box;
  &:hover {
    button {
      @media (min-width: ${props => props.theme.breakpoints('md')}) {
        &:last-child {
          display: block !important;
        }
      }
    }
  }
`;

const ProductInner = styled(Div)`
  padding: 0.25rem 0 0.25rem;
  height: 90px;
  svg {
    vertical-align: middle;
  }
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    padding: 0.25rem 0.25rem 0.25rem;
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
  width: 130px;
  left: calc(50% - 65px);
  height: 40px;
  top: calc(50% - 65px);
  font-size: 0.875rem;
  transition: 0.3s all ease;
  display: none;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    display: none !important;
  }
`;

const Colors = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
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

const Heading = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-family: medium;
  line-height: 1.2;
  color: #515151;
  margin-top: 0.3125em;
  margin-bottom: 0;
  padding-bottom: 2px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.75rem;
    font-family: regular;
  }
`;

const PriceSpan = styled(Span)`
  font-size: 0.875rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.8125rem;
  }
`;

const CutPriceSpan = styled(Span)`
  font-size: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.6875rem;
  }
`;

const SavingSpan = styled(Span)`
  font-size: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.6875rem;
  }
`;

const DeliveredBySpan = styled(Span)`
  font-size: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.6875rem;
  }
`;

const SavingWrapper = styled(Div)`
  margin-bottom: 2px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    margin-bottom: 0px;
    margin-top: 4px;
  }
`;

const DeliveredByWrapper = styled(Div)`
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    margin-bottom: 5px;
  }
`;

const RatingWrapperXs = styled(Span)`
  display: none;
  position: absolute;
  left: 5px;
  bottom: 6px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    display: block;
  }
`;

const RatingWrapperLg = styled(Span)`
  display: block;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    display: none;
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
    return '#dc3545';
  }
  if (rating >= 2 && rating < 3) {
    return '#f5a623';
  }
  if (rating >= 3) {
    return '#28a745';
  }
};
const Product = props => {
  const {
    name, image, price, cutprice, saving, sku, rating, reviewsCount, savingAmount,
    onClick, isWishList, col, skuLoading, onOpenQuickViewModal, deliveredBy, colors, imgHeight,
    position, setProductPosition, productURL, simpleSku, pincode
  } = props;
  const color = judgeColor(rating);
  return (
    <ProductWrapper col={col}>
      <WishlistBtn
        onClick={onClick(sku, simpleSku)}
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
          {rating > 0 && (
            <RatingWrapperXs>
              <Rating color={color} rating={rating}>★ {rating}</Rating>
            </RatingWrapperXs>
          )}
        </ImgWrapper>
        <ProductInner p="0.25rem 0 0.25rem">
          <Heading>{name}</Heading>
          <Div mb="2px">
            <PriceSpan
              mr="5px"
              color={Theme.colors.text}
              fontFamily="medium"
            >{price}</PriceSpan>
            {price !== cutprice && <CutPriceSpan
              mr="0"
              fontFamily="regular"
              color={Theme.colors.prodText}
            ><s>{cutprice}</s></CutPriceSpan>}
            {rating > 0 && (
              <RatingWrapperLg ml="0.3125rem">
                <Rating color={color} rating={rating}>★ {rating}</Rating>
                <Span
                  mr="0.625rem"
                  fontSize="0.75rem"
                  lh="1.7"
                  va="bottom"
                  color={Theme.colors.textExtraLight}
                >({reviewsCount})</Span>
              </RatingWrapperLg>
            )}
          </Div>
          <SavingWrapper>
            { (saving !== '-0%' && Number(savingAmount) !== 0 && saving !== '') &&
              <SavingSpan fontFamily="regular" color={Theme.colors.prodText}>
                Savings Rs. {savingAmount} ({saving.replace('-', '')} OFF)
              </SavingSpan> }
          </SavingWrapper>
          {deliveredBy && <DeliveredByWrapper>
            <DeliveredBySpan
              fontSize={deliveredBy.indexOf('Sorry') === 0 ? '0.65rem' : '0.75rem'}
              lh="0.1"
              fontFamily="regular"
              color={Theme.colors.prodText}
            >
              {pincode && deliveredBy.indexOf('Sorry') === 0 ? `Sorry, Undeliverable to ${pincode}` : deliveredBy}
            </DeliveredBySpan>
          </DeliveredByWrapper>}
        </ProductInner>
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
  pincode: null
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
  simpleSku: PropTypes.string.isRequired,
  pincode: PropTypes.string
};

export default Product;
