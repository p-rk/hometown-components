import React from 'react';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';

const TitlePrice = () => (
  <Section mb="0.3125rem" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading fontSize="1.25rem" color="textDark" mb="0.625rem" mt="0px" fontFamily="SFPDLight">
            Martin Half Leather Single Seater Sofa
        </Heading>
        <Heading fontSize="1rem" color="textDark" mb="0px" mt="0px" fontFamily="SFPDMedium">
            Rs. 29,900
          <Span fontSize="0.8125rem" color="rgba(0, 0, 0, 0.4)" ml="1rem" fontFamily="SFPDMedium">Rs. 65,000</Span>
          <Span
            fontSize="0.8125rem"
            color="rgba(0, 0, 0, 0.4)"
            ml="1rem"
            fontFamily="SFPDMedium"
          >Saving Rs. 64,900 (57%)</Span>
        </Heading>
      </Row>
    </Container>
  </Section>
);

export default TitlePrice;
