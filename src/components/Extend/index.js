import styled from 'styled-components';

const abc = styled.div`
  position: relative;
  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

export default abc;
