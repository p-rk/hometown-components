import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import TitlePrice from 'components/ProductDetails/TitlePrice';
import ColorOption from 'components/ProductDetails/ColorOption';
import Div from 'components/Div';
import Row from 'components/Row';
import Section from 'components/Section';
import { Label } from 'components/Label';
import Input from 'components/Input';
import Img from 'components/Img';
import Container from 'components/Container';
import Theme from 'components/Theme';
// const = require('')

const Index = () => (
  <ThemeProvider theme={Theme}>
    <div>
      <TitlePrice />
      <Div col="6">
        <ColorOption />
      </Div>
      <Section>
        <Container>
          <Row display="block" mb="0.9375rem">
            <Div col="6">
              <Img src="/static/location.png" />
              <Label fontSize="1em" color="secondary" ml="0.625rem">Enter PIN Code</Label>
            </Div>
            <Div col="6">
              <Input
                type="text"
                placeholder=""
                height="42px"
              />
            </Div>
          </Row>
          <Row display="block" mb="0.625rem">
            <Div col="12">
              <Img src="/static/calendor.png" />
              <Label
                fontSize="1em"
                color="secondary"
                ml="0.625rem"
              >Delivers by 16 Jan (Sunday) if you order today</Label>
            </Div>
          </Row>
          <Row display="block" mb="0.625rem">
            <Div col="12">
              <Img src="/static/credit-card.png" />
              <Label fontSize="1em" color="secondary" ml="0.625rem">EMI starting from Rs.2,419 </Label>
            </Div>
          </Row>
          <Row display="block" mb="0.625rem">
            <Div col="12">
              <Img src="/static/truck.png" />
              <Label fontSize="1em" color="secondary" ml="0.625rem">Free Shipping</Label>
            </Div>
          </Row>
        </Container>
      </Section>
    </div>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
