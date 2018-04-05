import styled from 'styled-components';

const Text = styled.input`
  font-size: ${props => props.fontSize};
  text-transform: ${props => props.backgroundColor};
  font-weight: ${props => props.backgroundColor};
  color: ${props => props.backgroundColor};
  align: ${props => props.backgroundColor};
`;

Text.defaultProps = {
  fontSize: '0.8rem',
  textTransform: 'inherit',
  fontWeight: '400',
  color: '0 0 0, 0.75',
  align: 'left'
};

export default Text;
