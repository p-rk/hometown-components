import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Fav from 'components/Icons/Fav';

const WishlistBtn = ({ onClick, isWishList }) => (
  <Button onClick={onClick} p="0" border="none" className="wishListBtn">
    <Fav width={32} height={32} fill={isWishList ? '#f15924' : '#ffffffcc'} />
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
