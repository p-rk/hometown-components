import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Alert from 'components/Alert';

import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Alert show type="error" msg="Lorem Ipsum....Lorem Ipsum....Lorem Ipsum...." />
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
