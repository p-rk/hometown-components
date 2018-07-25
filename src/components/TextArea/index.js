import styled from 'styled-components';

const TextArea = styled.textarea`
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  border: solid 1px ${props => props.borderColor};
  padding: 5px 10px;
  box-sizing: border-box;
  &:hover, &:focus {
    outline: none;
  }
`;

TextArea.defaultProps = {
  width: '100%',
  borderRadius: '2px',
  backgroundColor: '#FFF',
  borderColor: 'rgba(151, 151, 151, 0.47)'
};

export default TextArea;
