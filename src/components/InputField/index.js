import styled from 'styled-components';

const InputField = styled.div`
  ${props => props.mb && { marginBottom: props.mb }}
  > * {
    box-sizing: border-box;
  }
`;

InputField.defaultProps = {
  mb: '20px',
};

export default InputField;
