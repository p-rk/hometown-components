import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Img from 'components/Img';
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
  height: 60px;
  margin-right: 0.3125rem;
  margin-bottom: 0.3125rem;
  border: 1px solid rgba(221, 221, 221, 0.38);
`;

const urlName = name => name.split(' ').join('-').toLowerCase();

const ColorOption = ({ data }) => (
  <Row mr="0" ml="0" display="block">
    {data.map((item, index) => (
      <LinkCustom to={`/${urlName(item.meta.name)}/sku/${item.groupedattributes.sku}`} key={String(index)}>
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
  </Row>
);

ColorOption.propTypes = {
  data: PropTypes.array.isRequired
};

export default ColorOption;
