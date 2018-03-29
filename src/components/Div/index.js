import { styled, injectGlobal } from 'styled-components';

/* eslint-disable */
// styled-components usage
injectGlobal`
  /** Light **/
  @font-face {
  	font-family: 'SFPDLight';
  	src: url('../../../static/fonts/light/SF-Pro-Display-Light.woff') format('woff');
  	font-weight: normal;
  	font-style: normal;
  }

  /** Regular **/
  @font-face {
  	font-family: 'SFPDRegular';
  	src: url('../../../static/fonts/regular/SF-Pro-Display-Regular.woff') format('woff');
  	font-weight: normal;
  	font-style: normal;
  }

  /** Medium **/
  @font-face {
  	font-family: 'SFPDMedium';
  	src: url('../../../static/fonts/medium/SF-Pro-Display-Medium.woff') format('woff');
  	font-weight: normal;
  	font-style: normal;
  }

  /** Semi Bold **/
  @font-face {
  	font-family: 'SFPDSemiBold';
  	src: url('../../../static/fonts/semibold/SF-Pro-Display-Semibold.woff') format('woff');
  	font-weight: normal;
  	font-style: normal;
  }

  html, body {
    font-family: 'SFPDRegular';
    color: $text;
  }
`;
/* eslint-enable */

const Div = styled.div`
  display: ${props => props.display};
`;

Div.defaultProps = {
  display: 'block'
};

export default Div;
