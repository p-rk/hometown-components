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
      display: block !important;
    }
  }
`;

const ProductInner = styled(Div)`
  height: 90px;
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
  width: 130px;
  left: calc(50% - 65px);
  height: 40px;
  top: calc(50% - 65px);
  font-size: 0.875rem;
  transition: 0.3s all ease;
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    display: none;
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
    position, setProductPosition, productURL, simpleSku
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
        </ImgWrapper>
        <ProductInner p="0.25rem 0 0.25rem">
          <Heading
            pb="2px"
            mb="0"
            color="text515151"
            fontSize="0.875rem"
            mt="0.3125em"
            fontFamily="medium"
          >{name}</Heading>
          <Div mb="2px">
            <Span
              mr="0.625rem"
              color={Theme.colors.text}
              fontSize="0.875rem"
              fontFamily="medium"
            >{price}</Span>
            {price !== cutprice && <Span
              mr="0"
              fontSize="0.75rem"
              fontFamily="regular"
              color={Theme.colors.prodText}
            ><s>{cutprice}</s></Span>}
            {rating > 0 && (
              <Span ml="0.625rem">
                <Rating color={color} rating={rating}>★ {rating}</Rating>
                <Span
                  mr="0.625rem"
                  fontSize="0.75rem"
                  lh="1.7"
                  va="bottom"
                  color={Theme.colors.textExtraLight}
                >({reviewsCount})</Span>
              </Span>
            )}
          </Div>
          <Div mb="2px">
            { (saving !== '-0%' && Number(savingAmount) !== 0 && saving !== '') &&
              <Span fontSize="0.75rem" fontFamily="regular" color={Theme.colors.prodText}>
                Savings Rs. {savingAmount} ({saving.replace('-', '')} OFF)
              </Span> }
          </Div>
          {deliveredBy && <Div>
            <Span
              fontSize={deliveredBy.indexOf('Sorry') === 0 ? '0.65rem' : '0.75rem'}
              lh="0.1"
              fontFamily="regular"
              color={Theme.colors.prodText}
            >{deliveredBy}</Span>
          </Div>}
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
  simpleSku: PropTypes.string.isRequired
};

export default Product;
