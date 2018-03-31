import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Button size="default" btnType="default" fs="1rem">Button</Button>
      <br /><br />
      <Button size="block" btnType="primary" fs="1rem">Primary Button</Button>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
