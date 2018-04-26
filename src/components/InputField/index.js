import styled from 'styled-components';

const InputField = styled.div`
  ${props => props.mb && { marginBottom: props.mb }}
  > * {
    box-sizing: border-box;
  }
`;

InputField.defaultProps = {
  mb: '0.9375rem',
};

export default InputField;
