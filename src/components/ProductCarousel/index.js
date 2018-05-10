import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductCarouselWrapper = styled.div`

`;

const ProductCarouselList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,0);
    background-color: #FFF;
  }
  &::-webkit-scrollbar
  {
    width: 0;
    background-color: #FFF;
  }
  &::-webkit-scrollbar-thumb
  {
    background-color: #FFF;
    border: none;
  }
`;

const ProductCarousel = ({ itemData }) => (
  <ProductCarouselWrapper>
    <ProductCarouselList>
      {itemData.map(item => (
        <ProductItem
          key={item.id}
          itemIndex={item.id}
          itemData={item}
          contentStatus
          typeOfSlider="catSlider"
        />
      ))}
    </ProductCarouselList>
  </ProductCarouselWrapper>
);

ProductCarousel.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default ProductCarousel;
