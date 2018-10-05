import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import Heading from 'components/Heading';
// import Text from 'components/Text';
import Section from 'components/Section';
import Button from 'components/Buttons';
import Theme from 'components/Theme';

const formatDescription = desc => {
  desc.split('<br>').join('').split('&nbsp;').join('');
  return desc && desc.trim();
};

const Description = styled.div`
ul {
  padding-left: 20px;
  li {
    font-size: 14px;
    margin-bottom: 5px;
  }
}
`;

/* eslint-disable react/no-danger */
const ProductDesc = ({ desc, showmore, toggleShowMore }) => {
  desc = formatDescription(desc);
  return (
    <Section mb="0.3125rem" pr="0" pl="0" pt="0">
      <Container type="container" pr="1rem" pl="1rem">
        <Row display="block" mb="0" mr="0" ml="0">
          <Div col="12" className={(desc.length > 120 && showmore) ? 'showLess' : 'showmore'}>
            <Heading
              mt="0rem"
              color="textLight"
              fontSize="1em"
              fontFamily="medium"
            >Description</Heading>
            <Description
              itemProp="description"
              fontSize="0.875rem"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </Div>
          {desc.length > 120 && <Button
            pl="0"
            pr="0"
            mb="0"
            size="block"
            ta="left"
            color={Theme.colors.primary}
            btnType="link"
            onClick={toggleShowMore}
            fontSize="0.875rem"
          >{showmore ? 'Show More...' : 'Show Less'}</Button>}
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
