import React from 'react';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import Div from 'components/Div';
import ColorBlock from 'components/ColorBlock';
import Section from 'components/Section';

const ColorOption = () => (
  <Section mb="0.3125rem" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading fontSize="1.25rem" color="textDark" mb="0.625rem" mt="0px" fontFamily="SFPDLight">
          Color Options
        </Heading>
        <Row>
          <Div display="flex" col="2">
            <ColorBlock />
          </Div>
          <Div display="flex" col="2">
            <ColorBlock />
          </Div>
          <Div display="flex" col="2">
            <ColorBlock />
          </Div>
          <Div display="flex" col="2">
            <ColorBlock />
          </Div>
        </Row>
      </Row>
    </Container>
  </Section>
);

export default ColorOption;
