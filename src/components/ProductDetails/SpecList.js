import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
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
      <Div mb="0.625rem">
        <Row display="block" m="0">
          <Div col="12" mb="0">
            <Heading mt="0" mb="0" pb="0.625rem" color="text" fontSize="1.25em">
              {specName}
              <Button
                btnType="custom"
                bg="transparent"
                border="none"
                p="0"
                fl="right"
                onClick={this.handleOnclick}
              >{show ? '-' : '+'}</Button>
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
