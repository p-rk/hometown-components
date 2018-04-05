import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import InputField from 'components/InputField';
import Container from 'components/Container';
import Div from 'components/Div';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Image from 'components/Image';
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
        <br />
        <br />
        <InputField />
        <br /><br />
        <InputField backgroundColor="rgba(0, 0, 0, 0.05)" borderColor="rgba(0, 0, 0, 0.03)" type="password" />
        <br /><br />

        <Row>
          <Div>
            <Heading fontSize="2rem" fontWeight="bold">H3</Heading>
            <Heading fontSize="1rem" fontWeight="300">H3</Heading>
            <Heading fontSize="1.5rem" fontWeight="400">H3</Heading>
          </Div>
          <Div>Test Test</Div>
          <Div><Image
            alt="Hello"
            src="http://via.placeholder.com/350x350"
            width="300"
            height="200"
          /></Div>
        </Row>
      </Container>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
