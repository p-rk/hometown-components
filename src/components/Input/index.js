import styled from 'styled-components';

const Input = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  border: solid 1px ${props => props.borderColor};
  padding: 0 10px;
  &:hover, &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  width: '100%',
  height: '38px',
  borderRadius: '2px',
  backgroundColor: '#FFF',
  borderColor: 'rgba(151, 151, 151, 0.47)'
};

export default Input;
