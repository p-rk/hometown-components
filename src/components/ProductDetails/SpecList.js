import React from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Spec from 'components/ProductDetails/Spec';

const SpecList = ({ specList }) => (
  <Div>
    { specList.map(spec => (
      <Spec spec={spec} />
    )) }
  </Div>
);

SpecList.propTypes = {
  specList: PropTypes.array.isRequired
};

export default SpecList;
