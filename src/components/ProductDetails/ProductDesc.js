import React from 'react';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Section from 'components/Section';

const ProductDesc = () => (
  <Section mb="0.3125rem" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mb="0.9375rem" mr="0" ml="0">
        <Div col="12">
          <Heading mt="0rem" color="text">Description</Heading>
          <Text>
Add oodles of style to your home with an exciting
range of designer furniture, furnishings,
decor items and kitchenware. We promise to deliver
best quality products at best prices.
          </Text>
        </Div>
      </Row>
    </Container>
  </Section>
);

export default ProductDesc;
