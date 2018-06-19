import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    background-color: transparent !important;
  }
  &::-webkit-scrollbar
  {
    width: 0;
    background-color: transparent !important;
  }
  &::-webkit-scrollbar-thumb
  {
    background-color:  transparent !important;
    border: none;
  }
  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    overflow: hidden;
  }
`;

const ProductCarousel = ({
  children
}) => (
  <ProductCarouselWrapper>
    <ProductCarouselList>
      {children}
    </ProductCarouselList>
  </ProductCarouselWrapper>
);

ProductCarousel.propTypes = {
  children: PropTypes.array.isRequired
};

export default ProductCarousel;
