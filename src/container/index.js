import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Button primary col={1} size="medium">Test Button</Button>
      <Button primary col={4} size="medium">Test Button</Button>
      <Button primary col={3} size="medium">Test Button</Button>
      <Button primary col={6} size="medium">Test Button</Button>
      <Button primary col={12} size="medium">Test Button</Button>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
