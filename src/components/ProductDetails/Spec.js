import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Text from 'components/Text';

const Description = styled(Text)`
  ol {
    margin-top: 0;
    padding-left: 15px;
    list-style-type: disc;
  }
`;

const Spec = ({ spec }) => {
  const { label, value } = spec;
  return (
    <Row display="block" m="0" pb="2px">
      <div>
        {label !== 'Care Instructions' && (
          <Div col="5">
            <Label color="black" lh="1.6" fontFamily="regular">{label}</Label>
          </Div>
        )}
        <Div col={label === 'Care Instructions' || label === 'Note' || label === 'Product warranty' ? '12' : '7'}>
          <Description
            mt="5px"
            mb="5px"
            itemProp="description"
            fontSize="0.875rem"
            dangerouslySetInnerHTML={{ __html: value }}
            lh="1.6"
            color="rgba(0, 0, 0, 0.6)"
          />
        </Div>
      </div>
    </Row>
  );
};

Spec.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default Spec;
