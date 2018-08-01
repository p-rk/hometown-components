import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import WisListIcon from 'components/Icons/WisListIcon';

const WishlistBtn = ({ onClick, isWishList, wishlistLoading }) => (
  <Button
    onClick={onClick}
    p="0"
    border="none"
    className={`wishListBtn ${wishlistLoading ? 'loading' : ''} ${isWishList ? 'loaded' : ''}`}
    disabled={wishlistLoading}
  >
    <WisListIcon />
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
