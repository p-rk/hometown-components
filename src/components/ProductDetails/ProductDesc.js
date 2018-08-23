import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Section from 'components/Section';

const formatDescription = desc => desc.split('<br>').join('').split('&nbsp;').join('');
const ProductDesc = ({ desc }) => {
  desc = formatDescription(desc);
  return (
    <Section mb="0.3125rem" pr="0" pl="0" pt="0">
      <Container type="container" pr="1rem" pl="1rem">
        <Row display="block" mb="0" mr="0" ml="0">
          <Div col="12">
            <Heading
              mt="0rem"
              color="textLight"
              fontSize="1em"
              fontFamily="medium"
            >Description</Heading>
            <Text itemProp="description" fontSize="0.875rem" dangerouslySetInnerHTML={{ __html: desc }} />
          </Div>
        </Row>
      </Container>
    </Section>
  );
};

ProductDesc.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default ProductDesc;
