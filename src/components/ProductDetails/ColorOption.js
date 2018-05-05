import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Row from 'components/Row';
import ColorBlock from 'components/ColorBlock';
import Section from 'components/Section';

const ColorOption = ({ colors }) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading fontSize="1em" color="textDark" mb="0.625rem" mt="0px" fontFamily="SFPDMedium">
          Color Options
        </Heading>
      </Row>
      <Row mr="0" ml="0">
        {colors.map((color, index) => (
          <ColorBlock bg={color.hex} key={String(index)} />
        ))}
      </Row>
    </Container>
  </Section>
);

ColorOption.propTypes = {
  colors: PropTypes.array.isRequired
};

export default ColorOption;
