import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import SpecList from 'components/ProductDetails/SpecList';

const Specs = ({ specs }) => (
  <Section mb="0" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      {specs.map((spec, index) => (
        <SpecList list={spec} key={String(index)} />
      ))}
    </Container>
  </Section>
);

Specs.propTypes = {
  specs: PropTypes.array.isRequired
};

export default Specs;
