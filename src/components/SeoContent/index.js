import styled from 'styled-components';

const SeoContent = styled.div`
  padding-bottom: 0;
  padding-top: 1.25rem;
  font-size: 0.75rem;
  line-height: 1.7;
  h1 {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    font-size: 1.125rem;
  }
  h2 {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    &:first-child {
      margin-top: 0;
      font-size: 1.125rem;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 0.3125rem;
    font-size: 0.75rem;
    line-height: 1.7;
  }
  br {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    padding-top: 0;
  }
`;

export default SeoContent;
