import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Button size="default" btnType="default"><img src="" alt="" />Button</Button>
      <br /><br />
      <Button size="block" btnType="primary">Primary Button</Button>
      <br />
      <Button size="small" btnType="primary">Primary Button</Button>
      <br /><br />
      <Button btnType="primary" disabled>Primary Button</Button>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
