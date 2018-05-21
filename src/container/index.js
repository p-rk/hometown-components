import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import ShippedTo from 'components/ShippedTo';
import Alert from 'components/Alert/';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Alert type="info" show msg="Product Added to cart" />
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
