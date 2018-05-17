import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import ShippedTo from 'components/ShippedTo';
import ImagePlaceHolder from 'components/Placeholders/ImagePlaceHolder';
import Theme from 'components/Theme';

// import orderData from '../data/OrderDetails';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <ImagePlaceHolder />
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
