import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import TitlePrice from 'components/ProductDetails/TitlePrice';
import ColorOption from 'components/ProductDetails/ColorOption';
import ServiceDetails from 'components/ProductDetails/ServiceDetails';
import ProductDesc from 'components/ProductDetails/ProductDesc';
import Specs from 'components/ProductDetails/Specs';
import Div from 'components/Div';
// import Span from 'components/Span';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <TitlePrice />
      <Div col="6">
        <ColorOption />
      </Div>
      <ServiceDetails />
      <ProductDesc />
      <Specs />
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
