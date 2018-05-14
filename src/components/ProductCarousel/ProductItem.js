import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'components/Text';
import Img from 'components/Img';
import Div from 'components/Div';

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

const A = styled.a`
  display: block;
`;

const ProductItem = ({
  itemData, contentStatus, typeOfSlider, colSize
}) => (
  <ProductCarouselLi className={typeOfSlider} colSize={colSize}>
    <A href={itemData.url}>
      {typeOfSlider !== 'menuSlider' &&
      <Img mb="5px" src={itemData.image} alt={itemData.title} />
      }
      {contentStatus && (
        <Div ta="left">
          <Text fontSize="0.8rem" fontFamily="SFPDSemiBold" mt="10px" mb="7px">{itemData.name}</Text>
        </Div>
      )}
    </A>
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
