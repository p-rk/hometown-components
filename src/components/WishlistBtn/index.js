import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Fav from 'components/Icons/Fav';

const WishlistBtn = ({ onClick, isWishList, wishlistLoading }) => (
  <Button
    onClick={onClick}
    p="0"
    border="none"
    className={`wishListBtn ${wishlistLoading ? 'loading' : ''} ${isWishList ? 'loaded' : ''}`}
  >
    <Fav width={32} height={32} fill={isWishList ? '#f15924' : '#ffffffcc'} />
  </Button>
);

WishlistBtn.defaultProps = {
  isWishList: false,
  wishlistLoading: false
};

WishlistBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isWishList: PropTypes.bool,
  wishlistLoading: PropTypes.bool
};

export default WishlistBtn;
