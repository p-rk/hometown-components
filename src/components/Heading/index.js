import styled from 'styled-components';

const Heading = styled.h4`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin: 10px 0 10px;
`;

Heading.defaultProps = {
  fontSize: '1.5rem',
  fontWeight: '500'
};

export default Heading;
