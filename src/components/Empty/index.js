import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from 'components/Row/';
import Div from 'components/Div/';
import Heading from 'components/Heading/';
import Text from 'components/Text/';

const EmptyPageContainer = styled.div`
  text-align: center;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    background: ${props => props.bg};
    height: calc(100vh - 99px);
  }
`;

const EmptyPageWrapper = styled.div`
  position: relative;
  top: 12%;
  width: 86%;
  margin: auto;
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    top: 0;
    padding-top: 4%;
    padding-bottom: 5%;
  }
`;

const Btn = styled.a`
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  padding: 0.75rem 2.5rem;
  text-decoration: none;
  font-size: 1.25rem;
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    padding: 0.625rem 2.5rem;
    font-size: 1rem;
  }
`;

const EmptyPages = ({
  title, subTitle, btnName, url, bg, children
}) => (
  <EmptyPageContainer bg={bg}>
    <EmptyPageWrapper>
      <Row m="0">
        <Div>
          {children}
          <Heading color="text" fontWeight="700" fontSize="2rem" mb="1.25rem">{title}</Heading>
          <Text ta="center" fontSize="1.25rem" color="rgba(93, 91, 91, 0.75)" mb="1rem">{subTitle}</Text>
        </Div>
        <Div mt="1rem">
          <Btn href={url} alt={btnName}>{btnName}</Btn>
        </Div>
      </Row>
    </EmptyPageWrapper>
  </EmptyPageContainer>
);

EmptyPages.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default EmptyPages;
