import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import ShippedTo from 'components/ShippedTo';
import Alert from 'components/Alert/';
import ScreenLoader from 'components/ScreenLoader/';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Alert type="success" show msg="Product Added to cart" />
      <ScreenLoader />
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
