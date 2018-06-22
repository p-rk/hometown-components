import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';

const Specs = ({ spec }) => (
  <Row display="block" m="0" pb="0.625rem">
    { spec && Object.keys(spec).map((eachSpec, index) => (
      <div key={String(index)}>
        <Div col="3">
          <Label color="secondary">{eachSpec}</Label>
        </Div>
        <Div col="9">
          <Label color="textDark" fontWeight="600">{spec[eachSpec]}</Label>
        </Div>
      </div>
    ))}
  </Row>
);

Specs.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default Specs;
