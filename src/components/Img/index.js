import styled from 'styled-components';

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  float: ${props => props.float};
`;

Img.defaultProps = {
  float: 'none'
};

export default Img;
