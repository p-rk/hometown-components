import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Section from 'components/Section';
import Button from 'components/Buttons';
import Theme from 'components/Theme';

const formatDescription = desc => desc.split('<br>').join('').split('&nbsp;').join('');

const ProductDesc = ({ desc, showmore, toggleShowMore }) => {
  desc = formatDescription(desc);
  return (
    <Section mb="0.3125rem" pr="0" pl="0" pt="0">
      <Container type="container" pr="1rem" pl="1rem">
        <Row display="block" mb="0" mr="0" ml="0">
          <Div col="12" className={showmore ? 'showLess' : 'showmore'}>
            <Heading
              mt="0rem"
              color="textLight"
              fontSize="1em"
              fontFamily="medium"
            >Description</Heading>
            <Text itemProp="description" fontSize="0.875rem" dangerouslySetInnerHTML={{ __html: desc }} />
          </Div>
          <Button
            pl="0"
            pr="0"
            mb="0.625rem"
            size="block"
            ta="left"
            color={Theme.colors.primary}
            btnType="link"
            onClick={toggleShowMore}
            fontSize="1rem"
          >{showmore ? 'Show More...' : 'Show Less'}</Button>
        </Row>
      </Container>
    </Section>
  );
};

ProductDesc.propTypes = {
  desc: PropTypes.string.isRequired,
  showmore: PropTypes.bool.isRequired,
  toggleShowMore: PropTypes.func.isRequired,
};

export default ProductDesc;
