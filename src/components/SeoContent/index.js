import styled from 'styled-components';

const SeoContent = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  font-size: 0.875rem;
  line-height: 1.7;
  h1 {
    margin-top: 1.5rem;
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
  }
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 0.625rem;
    font-size: 1.25rem; 
    &:first-child {
      margin-top: 0;
      font-size: 1.5rem;
    }
  }
  p {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    line-height: 1.7;
  }
  br {
    display: none;
  }
`;

export default SeoContent;
