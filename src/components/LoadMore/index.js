import React from 'react';
import styled from 'styled-components';
import Div from 'components/Div';
import Img from 'components/Img';

const reloadIcon = require('../../static/waiting.svg');

const LoadMoreStyled = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  text-align: center;
`;

const LoadMore = () => (
  <LoadMoreStyled>
    <Img width="48px" m="auto" className="spin2s" src={reloadIcon} alt="Loading..." />
  </LoadMoreStyled>
);


LoadMore.defaultProps = {

};

export default LoadMore;
