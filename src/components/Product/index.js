import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Span from 'components/Span';
import WishlistBtn from 'components/WishlistBtn';
import Theme from 'components/Theme';

const Product = ({
  itemData, rating, onClick, isWishList, col
}) => (
  <Div col={col} mr="0" ml="0" mb="30px">
    <WishlistBtn onClick={onClick(itemData.sku_id)} isWishList={isWishList} />
    <Link href={itemData.url}>
      <Img
        alt={itemData.name}
        src={itemData.image}
        width="100%"
      />
      <Div>
        <Heading
          mb="0.4375rem"
          color={Theme.colors.text}
          fontFamily="SFPDSemiBold"
          fontSize="1rem"
        >{itemData.name}</Heading>
        <Div mb="0.25rem">
          <Span mr="0.625rem" color={Theme.colors.textDark} fontFamily="SFPDSemiBold">Rs. {itemData.disc_price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem">Rs. {itemData.price}</Span>
          <Span mr="0.625rem" fontSize="0.9rem">Saving Rs. {itemData.saving} ({itemData.percentage})</Span>
        </Div>
        {rating && (
          <Div>
            <Span color={Theme.colors.primary} fontSize="1.2rem" mr="0.3125em">★</Span>
            <Span>{itemData.rating}</Span>
          </Div>
        )}
      </Div>
    </Link>
  </Div>
);
Product.defaultProps = {
  isWishList: false,
  col: '12'
};

Product.propTypes = {
  itemData: PropTypes.object.isRequired,
  rating: PropTypes.bool.isRequired,
  isWishList: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  col: PropTypes.string
};

export default Product;
