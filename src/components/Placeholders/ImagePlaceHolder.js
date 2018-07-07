import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    };`;

const ImagePlaceHolder = styled.div`
  animation-fill-mode: forwards;
  animation: ${shimmerAnimation} 2s linear infinite;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 100px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  min-height: ${props => props.height}`;

ImagePlaceHolder.defaultProps = {
  height: '100%'
};

export default ImagePlaceHolder;
