import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Img from 'components/Img';
import Section from 'components/Section';

import calendarImage from '../../static/calendar.svg';
import creditCard from '../../static/credit-card.svg';
import truck from '../../static/truck.svg';

const getComponent = (children, key) => children.filter(comp => comp.key === key);

const ServiceDetails = ({
  children, deliverBy, shipping, pincode, emiStarting, isEmiAvailable
}) => (
  <Section mb="0" pr="0" pl="0" pt="0" pb="0.625rem">
    <Row display="block" mb="0.9375rem" mr="0" ml="0">
      <Div col="12" pt="0.625rem">
        {getComponent(children, 'pincode')}
      </Div>
    </Row>
    <Row display="block" mb="0.625rem" mr="0" ml="0">
      <Div col="12">
        <Img width="initial" height="1.5em" mr="0.625rem" mt="0" float="left" src={calendarImage} />
        {pincode ? <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >{deliverBy}</Label> : <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >
              Please Enter Pincode To Check Delivery Date
        </Label>
        }
      </Div>
    </Row>
    {isEmiAvailable && <Row display="block" mb="0.625rem" mr="0" ml="0">
      <Div col="12">
        <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={creditCard} />
        <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >EMI starting from Rs.{emiStarting} </Label>
        {getComponent(children, 'emi')}
      </Div>
    </Row>}
    <Row display="block" mb="0.625rem" mr="0" ml="0">
      <Div col="12">
        <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={truck} />
        <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >{shipping && Number(shipping) > 499 ? 'Free Shipping' : 'Shipping Charge Rs. 50 ' }</Label>
      </Div>
    </Row>
  </Section>
);

ServiceDetails.propTypes = {
  deliverBy: PropTypes.string.isRequired,
  emiStarting: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  pincode: PropTypes.string.isRequired,
  isEmiAvailable: PropTypes.bool.isRequired
};

export default ServiceDetails;
