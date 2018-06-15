import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'components/Text';
import Img from 'components/Img';
import Div from 'components/Div';
import ProgressiveImageSchemer from 'components/ProgressiveImageShimmer';

const ProductCarouselLi = styled.li`
  width: 100%;
  margin-left: 15px;
  flex: 0 0 calc(${props => props.colSize} - 15px);
  max-width: ${props => props.colSize};

  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    margin-left: 7.5px;
    margin-right: 7.5px;
  }
`;

const Redirect = styled.a`
  display: block;
`;

const CategoryCarouselItem = ({
  image, name, url, typeOfSlider, colSize
}) => (
  <ProductCarouselLi className={typeOfSlider} colSize={colSize}>
    <Redirect href={url}>
      <ProgressiveImageSchemer src={image} minHeight="365">
        {imageURL => (<Img mb="5px" src={imageURL} alt={name} />)}
      </ProgressiveImageSchemer>
      <Div ta="left">
        <Text fontSize="1rem" fontWeight="400" mt="5px" mb="0">{name}</Text>
      </Div>
    </Redirect>
  </ProductCarouselLi>
);

CategoryCarouselItem.defaultProps = {
  colSize: '100%'
};

CategoryCarouselItem.propTypes = {
  typeOfSlider: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  colSize: PropTypes.string
};

export default CategoryCarouselItem;
