import React from 'react';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';

const ServiceDetails = () => (
  <Row display="block" mb="0.625rem" mr="0" ml="0">
    <Div col="6">
      <Label color="secondary">Color</Label>
    </Div>
    <Div col="6">
      <Label color="textDark">Brown</Label>
    </Div>
  </Row>
);

export default ServiceDetails;
