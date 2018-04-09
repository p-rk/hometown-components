import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Button from 'components/Buttons';
import Link from 'components/Link';
import InputField from 'components/InputField';
import { Label, FeedBackMessage } from 'components/Label';
import Input from 'components/Input';
import Container from 'components/Container';
import Div from 'components/Div';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Img from 'components/Img';
import Section from 'components/Section';
import Span from 'components/Span';
import Theme from 'components/Theme';
import ProductHorziontal from 'components/ProductHorziontal';
import ProductItems from '../data/ProductItems.js';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <Container type="container">
        <Section bg={Theme.colors.sectionBG}>
          {ProductItems.map(item => (
            <ProductHorziontal
              key={item.id}
              itemData={item}
            />
          ))}
        </Section>
      </Container>

      <Label>dhdhddh</Label>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container type="container">
        <Link href="#LINK">Link</Link>
        <Button size="default" type="default"><img src="" alt="" />Button</Button>
        <br /><br />
        <Button size="block" type="primary">Primary Button</Button>
        <br />
        <Button size="small" type="primary">Primary Button</Button>
        <br /><br />
        <Button type="primary" disabled>Primary Button</Button>
        <br />
        <br />
        <InputField>
          <Label>Email*</Label>
          <Input placeholder="Enter Email" type="email" id="email" />
          <FeedBackMessage type="success">Success Message</FeedBackMessage>
        </InputField>
        <InputField>
          <Label>Email1*</Label>
          <Input placeholder="Enter Email" type="email" id="email1" />
          <FeedBackMessage type="error">Error Message</FeedBackMessage>
        </InputField>
        <InputField>
          <Label>Email2*</Label>
          <Input placeholder="Enter Email" type="email" id="email2" />
          <FeedBackMessage type="note">Success Message</FeedBackMessage>
        </InputField>
        <br /><br />

        <Row display="block">
          <Div width="50%">
            <Heading fontSize="2rem" fontWeight="bold">H3</Heading>
            <Heading fontSize="1rem" fontWeight="300">H3</Heading>
            <Heading fontSize="1.5rem" fontWeight="400">H3</Heading>
          </Div>
          <Div width="50%">Test Test</Div>
          <Div width="100%">
            <Img
              alt="Hello"
              src="http://via.placeholder.com/350x350"
              width="300"
              height="200"
            />
            <Span>Test</Span>
            <Span type="lt" fontSize="2rem" color="#F00" ml="1rem">Test</Span>
          </Div>
        </Row>
      </Container>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
