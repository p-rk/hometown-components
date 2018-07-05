import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
  0%{
    background-position: -1280px 0
  }
  100%{
    background-position: 1280px 0
};`;

const Shimmer = styled.div`
  animation-fill-mode: forwards;
  animation: ${shimmerAnimation} 2s linear infinite;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};

  ${props => props.mt && { marginTop: props.mt }}
  ${props => props.mr && { marginRight: props.mr }}
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.ml && { marginLeft: props.ml }}
`;

const BackgroundMasker = styled.div`
  background: #fff;
  position: absolute;

  height: ${props => props.height};
  width: ${props => props.width};
  ${props => props.top && { top: props.top }}
  ${props => props.left && { left: props.left }}
  ${props => props.right && { right: props.right }}
  ${props => props.bottom && { bottom: props.bottom }}
`;

Shimmer.defaultProps = {
  height: '',
  width: '100%'
};

export { Shimmer, BackgroundMasker };
