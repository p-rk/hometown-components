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
  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    overflow: hidden;
  }
`;

const ProductCarousel = ({
  name, url, image, colSize
}) => (
  <ProductCarouselWrapper>
    <ProductCarouselList>
      <ProductItem
        name={name}
        url={url}
        image={image}
        contentStatus
        colSize={colSize}
        typeOfSlider="catSlider"
      />
    </ProductCarouselList>
  </ProductCarouselWrapper>
);

ProductCarousel.propTypes = {
  colSize: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductCarousel;
