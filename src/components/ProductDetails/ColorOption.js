import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Img from 'components/Img';
import Button from 'components/Buttons';
import Div from 'components/Div';
import { Link } from 'react-router-dom';
import ImageShimmer from 'components/ImageShimmer';

const LinkCustom = styled(Link)`
  display: inline-block;
`;

const ProductImg = styled(Img)`
  position: absolute;
  max-width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;

const ImgWrapper = styled.div`
  background: #FFF;
  position: relative;
  box-sizing: border-box;
  width: 60px;
  height: 61px;
  margin-right: 0.3125rem;
  margin-bottom: 0.3125rem;
  border: 1px solid rgba(221, 221, 221, 0.38);
`;

const ColorOptions = styled(Div)`
  max-height: 150px;
  overflow: auto;
  ${props => props.active && {
    maxHeight: 'inherit'
  }
}
`;

const urlName = name => name.split(' ').join('-').toLowerCase();

const ColorOption = ({
  data, toggleShowMoreColorProducts, showmorecolorproducts
}) => (
  <Row mr="0" ml="0" mb="1rem" display="block">
    <ColorOptions active={!showmorecolorproducts}>
      {data.map((item, index) => (
        <LinkCustom
          to={`/${urlName(item.meta.name)}/sku/${item.groupedattributes.sku}`}
          key={String(index)}
        >
          <ImgWrapper>
            <ImageShimmer src={`${item.image}.jpg`} height="60px">
              {imageURL => (<ProductImg
                src={imageURL}
                alt={item.meta.name}
                width="60px"
              />)}
            </ImageShimmer>
          </ImgWrapper>
        </LinkCustom>
      ))}
    </ColorOptions>
    {data.length > 5 && <Div>
      <Button
        btnType="link"
        size="block"
        ta="right"
        color="#f98d29"
        pt="15px"
        pr="64px"
        onClick={toggleShowMoreColorProducts}
      >{showmorecolorproducts ? 'Show More Products' : 'Show Less'}</Button>
    </Div>}
  </Row>
);
ColorOption.defaultProps = {
  showmorecolorproducts: true,
  toggleShowMoreColorProducts: () => {}
};
ColorOption.propTypes = {
  data: PropTypes.array.isRequired,
  showmorecolorproducts: PropTypes.bool,
  toggleShowMoreColorProducts: PropTypes.func,

};

export default ColorOption;
