import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

const urlName = name => name.split(' ').join('-').toLowerCase();

const ColorOption = ({ data }) => (
  <Row mr="0" ml="0">
    {data.map((item, index) => (
      <Link to={`/${urlName(item.meta.name)}/sku/${item.groupedattributes.sku}`} key={String(index)}>
        <Img
          src={`${item.image}.jpg`}
          alt={item.meta.name}
          mr="0.3125rem"
          mb="0.3125rem"
          border="1px solid rgba(221, 221, 221, 0.38)"
          width="60px"
        />
      </Link>
    ))}
  </Row>
);

ColorOption.propTypes = {
  data: PropTypes.array.isRequired
};

export default ColorOption;
