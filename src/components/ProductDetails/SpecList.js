import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Button from 'components/Buttons';
import Spec from 'components/ProductDetails/Spec';

const SpecRow = styled.div`
  box-sizing: border-box;
  margin-right: -15px;
  margin-left: -15px;
  position: relative;
  display: block;
  clear: both;
  margin: 0;
  display: flex;
`;

const SpecHeading = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1em;
  font-family: medium;
  line-height: 1.2;
  color: rgba(0,0,0,0.6);
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 7px 7px 14px -9px rgba(124,122,122,0.5);
  padding: 20px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    background-color: #fff;
  }
`;

const SpecListWrapper = styled.div`
  position: relative;
  width: 100%;
  float: left;
  display: initial;
  box-sizing: border-box;
  background-color: #f6f6f6;
  box-shadow: 7px 7px 14px -9px rgba(124,122,122,0.5);
  padding: 1rem 1.25rem 0.375rem;
  margin-top: 0.4375rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    background-color: #fff;
  }
`;

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
    const { list } = this.props;
    const { show } = this.state;
    const specName = Object.keys(list)[0];
    const values = Object.values(list)[0];
    return (
      <Div mb="0.75rem">
        <SpecRow display="block" m="0">
          <Div col="12" mb="0">
            <SpecHeading>
              {specName}
              <Button
                btnType="custom"
                bg="transparent"
                border="none"
                p="0"
                fl="right"
                fontSize="1.5rem"
                lh="0.4"
                height="18px"
                onClick={this.handleOnclick}
              >{show ? '-' : '+'}</Button>
            </SpecHeading>
            {show && <SpecListWrapper p="1rem" pb="0">
              { values.map((eachSpec, specIndex) => (
                <Spec spec={eachSpec} key={String(specIndex)} />
              )) }
            </SpecListWrapper>
            }
          </Div>
        </SpecRow>
      </Div>
    );
  }
}

SpecList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SpecList;
