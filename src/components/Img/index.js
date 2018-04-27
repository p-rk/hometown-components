import styled from 'styled-components';

const Img = styled.img`
  display: block;
  max-width: 100%;

  height: ${props => props.height};
  float: ${props => props.float};
`;

Img.defaultProps = {
  float: 'none',
  height: 'auto'
};

export default Img;
