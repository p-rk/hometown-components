import React from 'react';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Section from 'components/Section';
import SpecList from 'components/ProductDetails/SpecList';

const ServiceDetails = () => (
  <Section mb="0.3125rem" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mb="0.9375rem" mr="0" ml="0">
        <Div col="12" mb="0">
          <Heading mt="0" mb="0" color="text">Technical Specs</Heading>
        </Div>
      </Row>
      <SpecList />
    </Container>
  </Section>
);

export default ServiceDetails;
