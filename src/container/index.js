import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/Buttons';
import InputField from 'components/InputField';
import { Label, SuccessMessage, ErrorMessage, Note } from 'components/Label';
import Input from 'components/Input';
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
        <InputField>
          <Label>Email*</Label>
          <Input placeholder="Enter Email" type="email" id="email" />
          <SuccessMessage >Success Message</SuccessMessage>
        </InputField>
        <InputField>
          <Label>Email1*</Label>
          <Input placeholder="Enter Email" type="email" id="email1" />
          <ErrorMessage >Success Message</ErrorMessage>
        </InputField>
        <InputField>
          <Label>Email2*</Label>
          <Input placeholder="Enter Email" type="email" id="email2" />
          <Note >Notes ******</Note>
        </InputField>
        <br /><br />

        <Row display="block">
          <Div width="50%">
            <Heading fontSize="2rem" fontWeight="bold">H3</Heading>
            <Heading fontSize="1rem" fontWeight="300">H3</Heading>
            <Heading fontSize="1.5rem" fontWeight="400">H3</Heading>
          </Div>
          <Div width="50%">Test Test</Div>
          <Div width="100%"><Image
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
