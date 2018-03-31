import styled from 'styled-components';

const Div = styled.div`
  display: ${props => props.display};
`;

Div.defaultProps = {
  display: 'block'
};

export default Div;
