import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';

const Specs = ({ spec }) => (
  <Row display="block" mb="0" mr="0" ml="0">
    <Div col="6">
      <Label color="secondary">Color</Label>
    </Div>
    <Div col="6">
      <Label color="textDark">Brown</Label>
    </Div>
  </Row>
);

Specs.propTypes = {
  spec: PropTypes.array.isRequired
};

export default Specs;
