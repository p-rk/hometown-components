import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  height: 38px;
  border-radius: 2px;
  background-color: #FFF;
  border: solid 1px rgba(151,151,151,0.47);
  padding: 0 10px;
  box-sizing: border-box;
  &:hover, &:focus {
    outline: none;
  }
`;

export default Select;
