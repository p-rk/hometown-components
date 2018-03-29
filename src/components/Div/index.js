import { styled, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

/* eslint-disable */
injectGlobal`
  ${normalize()}
`;
/* eslint-enable */

const Div = styled.div`
  display: ${props => props.display};
`;

Div.defaultProps = {
  display: 'block'
};

export default Div;
