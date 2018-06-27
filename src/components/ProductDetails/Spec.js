import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';

const Spec = ({ spec }) => {
  const { label, value } = spec;
  return (
    <Row display="block" m="0" pb="0.625rem">
      <div>
        <Div col="6">
          <Label color="secondary">{label}</Label>
        </Div>
        <Div col="6">
          <Label color="textDark" fontWeight="600">{value}</Label>
        </Div>
      </div>
    </Row>
  );
};

Spec.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default Spec;
