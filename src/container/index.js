import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Container from 'components/Container';
import Section from 'components/Section';
// import Span from 'components/Span';
import Theme from 'components/Theme';
import ProductInline from 'components/ProductInline';
import ProductItems from '../data/ProductItems.js';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Container type="container">
      <Section display="block" bg={Theme.colors.sectionBG}>
        {ProductItems.map(item => (
          <ProductInline
            key={item.id}
            itemData={item}
          />
        ))}
      </Section>
    </Container>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
