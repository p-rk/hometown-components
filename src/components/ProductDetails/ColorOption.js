import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import { Link } from 'react-router-dom';
import ColorBlock from 'components/ColorBlock';

const urlName = name => name.split(' ').join('-').toLowerCase();

const ColorOption = ({ data }) => (
  <Row mr="0" ml="0">
    {data.map((item, index) => (
      <Link to={`/${urlName(item.meta.name)}/sku/${item.groupedattributes.sku}`}>
        <ColorBlock bg={item.attributes.color} key={String(index)} />
      </Link>
    ))}
  </Row>
);

ColorOption.propTypes = {
  data: PropTypes.array.isRequired
};

export default ColorOption;
