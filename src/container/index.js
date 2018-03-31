import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import Container from 'components/Container';
import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Container type="container">
        <Button size="default" btnType="default"><img src="" alt="" />Button</Button>
        <br /><br />
        <Button size="block" btnType="primary">Primary Button</Button>
        <br />
        <Button size="small" btnType="primary">Primary Button</Button>
        <br /><br />
        <Button btnType="primary" disabled>Primary Button</Button>
      </Container>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
