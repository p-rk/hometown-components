import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Fav from 'components/Icons/Fav';

const WishlistBtn = ({ onClick, isWishList }) => (
  <Button onClick={onClick} p="6px" border="none" className="wishListBtn">
    <Fav width={32} height={32} fill={isWishList ? '#FF5722' : '#7f7f7f'} />
  </Button>
);

WishlistBtn.defaultProps = {
  isWishList: false
};

WishlistBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isWishList: PropTypes.bool
};

export default WishlistBtn;
