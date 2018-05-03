import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';

const Specs = ({ spec }) => (
  <Row display="block" mb="0" mr="0" ml="0">
    { spec && Object.keys(spec).map((eachSpec, index) => (
      <div key={String(index)}>
        <Div col="6">
          <Label color="secondary">{eachSpec}</Label>
        </Div>
        <Div col="6">
          <Label color="textDark">{spec[eachSpec]}</Label>
        </Div>
      </div>
    ))}
  </Row>
);

Specs.propTypes = {
  spec: PropTypes.object.isRequired
};

export default Specs;
