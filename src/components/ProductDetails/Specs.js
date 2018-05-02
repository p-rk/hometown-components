import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Span from 'components/Span';
import Heading from 'components/Heading';
import Section from 'components/Section';
import SpecList from 'components/ProductDetails/SpecList';

const Specs = ({
  specs
}) => (
  <Section mb="0.3125rem" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      {specs.map(spec => (
        <Div mb="1.75rem">
          <Row display="block" mb="0.625rem" mr="0" ml="0">
            <Div col="12" mb="0">
              <Heading mt="0" mb="0" color="text" fontSize="1.25em">
                {spec.name}
                <Span float="right">+</Span>
              </Heading>
            </Div>
          </Row>
          <SpecList specList={spec.spec} />
        </Div>
      ))}
    </Container>
  </Section>
);

Specs.propTypes = {
  specs: PropTypes.array.isRequired
};

export default Specs;
