import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Row from 'components/Row';
import Heading from 'components/Heading';
import Spec from 'components/ProductDetails/Spec';

class SpecList extends Component {
  state = {
    show: false
  }
  handleOnclick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    const { list, specName } = this.props;
    const { show } = this.state;
    return (
      <Div mb="1.25rem">
        <Row display="block" mb="0.625rem" mr="0" ml="0">
          <Div col="12" mb="0">
            <Heading mt="0" mb="0" color="text" fontSize="1.25em">
              {specName}
              <button float="right" onClick={this.handleOnclick}>{show ? '-' : '+'}</button>
            </Heading>
            {show && <Div>
              { list.map((eachSpec, specIndex) => (
                <Spec spec={eachSpec} key={String(specIndex)} />
              )) }
            </Div>}
          </Div>
        </Row>
      </Div>
    );
  }
}

SpecList.propTypes = {
  list: PropTypes.array.isRequired,
  specName: PropTypes.string.isRequired,
};

export default SpecList;
