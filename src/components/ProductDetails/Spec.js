import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Text from 'components/Text';

const Spec = ({ spec }) => {
  const { label, value } = spec;
  return (
    <Row display="block" m="0" pb="0.625rem">
      <div>
        <Div col="5">
          <Label color="secondary">{label}</Label>
        </Div>
        <Div col="7">
          <Text itemProp="description" fontSize="0.875rem" dangerouslySetInnerHTML={{ __html: value }} />
        </Div>
      </div>
    </Row>
  );
};

Spec.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default Spec;
