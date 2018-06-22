import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Pincode from 'components/Pincode';
import Img from 'components/Img';
import Section from 'components/Section';

import calendarImage from '../../static/calendar.jpg';
import creditCard from '../../static/credit-card.jpg';
import location from '../../static/location.jpg';
import truck from '../../static/truck.jpg';

const ServiceDetails = ({ deliverBy, emiStarting }) => (
  <Section mb="0" pr="0" pl="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mb="0.9375rem" mr="0" ml="0">
        <Div col="6" pt="0.625rem">
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={location} />
          <Label fontSize="0.825em" color="secondary" ml="0.625rem" display="contents">Enter PIN Code</Label>
        </Div>
        <Div col="6">
          <Pincode
            type="text"
            height="42px"
          />
        </Div>
      </Row>
      <Row display="block" mb="0.625rem" mr="0" ml="0">
        <Div col="12">
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={calendarImage} />
          <Label
            fontSize="0.825em"
            color="secondary"
            display="contents"
          >Delivers by {deliverBy} if you order today</Label>
        </Div>
      </Row>
      <Row display="block" mb="0.625rem" mr="0" ml="0">
        <Div col="12">
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={creditCard} />
          <Label
            fontSize="0.825em"
            color="secondary"
            display="contents"
          >EMI starting from Rs.{emiStarting} </Label>
        </Div>
      </Row>
      <Row display="block" mb="0.625rem" mr="0" ml="0">
        <Div col="12">
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={truck} />
          <Label
            fontSize="0.825em"
            color="secondary"
            display="contents"
          >Free Shipping</Label>
        </Div>
      </Row>
    </Container>
  </Section>
);

ServiceDetails.propTypes = {
  deliverBy: PropTypes.string.isRequired,
  emiStarting: PropTypes.string.isRequired
};

export default ServiceDetails;
