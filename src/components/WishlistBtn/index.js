import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';

const WishlistBtn = ({ onClick, isWishList }) => (
  <Button onClick={onClick} p="6px" border="none" className="wishListBtn">
    <div className={`heart-shape ${isWishList ? 'fillIn' : ''}`} />
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
