import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import Button from 'components/Buttons';
// import Link from 'components/Link';
// import InputField from 'components/InputField';
// import { Label, FeedBackMessage } from 'components/Label';
// import Input from 'components/Input';
import Container from 'components/Container';
// import Div from 'components/Div';
// import Row from 'components/Row';
// import Heading from 'components/Heading';
// import Img from 'components/Img';
import Section from 'components/Section';
// import Span from 'components/Span';
import Theme from 'components/Theme';
import ProductInline from 'components/ProductInline';
import ProductItems from '../data/ProductItems.js';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Container type="container">
      <Section display="inline-block" bg={Theme.colors.sectionBG}>
        {ProductItems.map(item => (
          <ProductInline
            key={item.id}
            itemData={item}
            quantity
          />
        ))}
      </Section>
    </Container>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
