import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ShippedTo from 'components/ShippedTo';
import Theme from 'components/Theme';

import orderData from '../data/OrderDetails';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <ShippedTo shipDetails={orderData.shipped_to} />
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
