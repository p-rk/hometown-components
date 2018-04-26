import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import TitlePrice from 'components/ProductDetails/TitlePrice';
import ColorOption from 'components/ProductDetails/ColorOption';
// import Span from 'components/Span';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <TitlePrice />
      <ColorOption />
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
