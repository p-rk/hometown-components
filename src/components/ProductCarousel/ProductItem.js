import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'components/Text';
import Img from 'components/Img';
import Div from 'components/Div';

const ProductCarouselLi = styled.li`
  width: 100%;
  margin-left: 15px;
  flex: 0 0 40%;
  max-width: 40%;
`;

const A = styled.a`
  display: block;
`;

const ProductItem = ({
  itemData, contentStatus, typeOfSlider
}) => (
  <ProductCarouselLi className={typeOfSlider}>
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

ProductItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  contentStatus: PropTypes.bool.isRequired,
  typeOfSlider: PropTypes.string.isRequired
};

export default ProductItem;
