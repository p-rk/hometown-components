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
  flex: 0 0 calc(${props => props.colSize}% - 15px);
  max-width: ${props => props.colSize}%;

  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    margin-left: 7.5px;
    margin-right: 7.5px;
  }
`;

const Redirect = styled.a`
  display: block;
`;

const ProductItem = ({
  itemData, contentStatus, typeOfSlider, colSize
}) => (
  <ProductCarouselLi className={typeOfSlider} colSize={colSize}>
    <Redirect href={itemData.url}>
      {typeOfSlider !== 'menuSlider' && (
        <ProgressiveImageSchemer src={itemData.image} minHeight="365">
          {imageURL => (<Img mb="5px" src={imageURL} alt={itemData.title} />)}
        </ProgressiveImageSchemer>
      )
      }
      {contentStatus && (
        <Div ta="left">
          <Text fontSize="0.8rem" fontFamily="SFPDSemiBold" mt="10px" mb="7px">{itemData.name}</Text>
        </Div>
      )}
    </Redirect>
  </ProductCarouselLi>
);

// ProductCarouselLi.defaultProps = {
//   colSize: '100%'
// };
//
// ProductCarouselLi.propTypes = {
//   colSize: PropTypes.string,
// };

ProductItem.defaultProps = {
  colSize: '100%'
};

ProductItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  contentStatus: PropTypes.bool.isRequired,
  typeOfSlider: PropTypes.string.isRequired,
  colSize: PropTypes.string
};

export default ProductItem;
