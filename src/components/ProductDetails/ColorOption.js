import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import ColorBlock from 'components/ColorBlock';

const ColorOption = ({ colors }) => (
  <Row mr="0" ml="0">
    {colors.map((color, index) => (
      <ColorBlock bg={color.hex} key={String(index)} />
    ))}
  </Row>
);

ColorOption.propTypes = {
  colors: PropTypes.array.isRequired
};

export default ColorOption;
