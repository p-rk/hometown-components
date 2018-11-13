import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    height: ${props => props.height};
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
  h4 {
    @media (max-width: ${props => props.theme.breakpoints('sm')}) {
      font-size: 1.4rem !important;
    }
  }
`;

const Btn = styled(Link)`
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  padding: 0.75rem 2.5rem;
  text-decoration: none;
  font-size: 1rem;
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    padding: 0.625rem 2.5rem;
    font-size: 1rem;
  }
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: #FFF;
  }
`;

const CustomHeading = styled(Heading)`
  font-size: 1.6rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 1.25rem;
  }
`;

const EmptyPages = ({
  title, subTitle, btnName, url, bg, children, height
}) => (
  <EmptyPageContainer bg={bg} height={height}>
    <EmptyPageWrapper>
      <Row m="0">
        <Div>
          {children}
          <CustomHeading
            color="text"
            ellipsis={false}
            fontFamily="medium"
            fontSize="1.6rem"
            mb="0.625rem"
            mt="1rem"
            lh="1.5"
          >{title}</CustomHeading>
          <Text ta="center" fontSize="1.125rem" color="rgba(93, 91, 91, 0.75)" mb="0.625rem">{subTitle}</Text>
        </Div>
        <Div mt="1rem">
          {btnName && <Btn alt={btnName} to={url}>{btnName}</Btn>}
        </Div>
      </Row>
    </EmptyPageWrapper>
  </EmptyPageContainer>
);

EmptyPages.defaultProps = {
  height: '55vh'
};

EmptyPages.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  height: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default EmptyPages;
