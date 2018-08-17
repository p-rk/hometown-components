import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import Div from 'components/Div';
import ProgressiveImageSchemer from 'components/ProgressiveImageSchemer';

const ProductCarouselLi = styled.li`
  width: 100%;
  margin-left: 15px;
  position: relative;
  flex: 0 0 calc(${props => props.colSize} - 15px);
  max-width: ${props => props.colSize};

  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    margin-left: 7.5px;
    margin-right: 7.5px;
  }

  &:after {
    ${props => props.layout === 'round' && { width: '115px' }}
    ${props => props.layout === 'round' && { height: '115px' }}
    ${props => props.layout === 'round' && {
    width: '115px',
    height: '115px',
    position: 'absolute',
    top: '-1px',
    right: 0,
    bottom: 0,
    border: '15px solid #FFF',
    left: 'calc((100% - 148px) / 2)',
    content: '',
    borderRadius: '140px'
  }}
    ${props => props.layout === 'round' && { width: '115px' }}
    ${props => props.layout === 'round' && { width: '115px' }}
    ${props => props.layout === 'round' && { width: '115px' }}
    ${props => props.layout === 'round' && { width: '115px' }}
    ${props => props.layout === 'round' && { width: '115px' }}
  }
`;

const HyperLink = styled.a`
  display: block;
`;

const CatTitle = styled.a`
  font-size: 1rem;
  color: rgba(0,0,0,0.75);
  text-align: left;
  line-height: 1.6;
  font-family: regular;
  margin-top: 5px;
  margin-bottom: 0;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.875rem;
    margin-top: 3px;
  }
`;

const CatRoundTitle = styled.a`
  float: left;
  display: initial;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  z-index: 1;
  text-align: center;
  width: 100%;
  background: #f98d29ab;
  padding: 5px 10px;
  left: calc(50% - 72px);
`;

const RoundImg = styled.img`
  max-width: 100%;
  display: block;
  float: none;
  margin-bottom: 5px;
  border-radius: 100%;
  width: 140px;
  height: 140px;
  margin: auto;
`;

const CategoryCarouselItem = ({
  image, name, url, typeOfSlider, colSize, layout
}) => (
  <ProductCarouselLi className={typeOfSlider} colSize={colSize} layout={layout}>
    <HyperLink href={url}>
      <ProgressiveImageSchemer src={image} minHeight="365">
        {imageURL => (
          layout === 'square' ?
            <Img mb="5px" src={imageURL} alt={name} />
            : <RoundImg src={imageURL} alt={name} />
        )}
      </ProgressiveImageSchemer>
      {layout === 'square' ?
        <Div ta="left">
          <CatTitle>{name}</CatTitle>
        </Div> :
        <CatRoundTitle>{name}</CatRoundTitle>
      }
    </HyperLink>
  </ProductCarouselLi>
);

CategoryCarouselItem.defaultProps = {
  colSize: '100%',
  layout: 'square'
};

CategoryCarouselItem.propTypes = {
  typeOfSlider: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  colSize: PropTypes.string,
  layout: PropTypes.string
};

export default CategoryCarouselItem;
