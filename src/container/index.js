import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Button from 'components/Buttons';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Button primary>Test WER</Button>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
