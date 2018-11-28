import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
// import Input from 'components/Input';
import { Label } from 'components/Label';
import FormInput from '../Forms/FormInput';

const CallusWrapper = styled(Div)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.39);
  background-color: #ffffff;
  width: 250px;
  max-width: 100%;
`;

const CallUsButton = styled(Button)`
  width: 100%;
  &:hover {
    background: #f98d29 !important;
    color: #FFF !important;
  }
`;

const OrWrapper = styled(Div)`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 25px;
    width: calc(100% - 30px);
    border-bottom: 1px solid rgba(0,0,0,0.07);
    top: 13px;
  }
`;

const Callus = () => (
  <CallusWrapper ta="left" p="10px">
    <Div>
      <Label fontSize="12px" color="callusTitle">Call us</Label>
    </Div>
    <Div>
      <Label mt="0" fontSize="14px" color="callusTitle">
        <a href="tel:1800-210-0004">1800-210-0004 (10 AM - 8 PM)</a>
      </Label>
    </Div>
    <OrWrapper>
      <Label fontSize="14px" color="callusTitle">or</Label>
    </OrWrapper>
    <Div>
      <form>
        <FormInput
          label="Let us call you back"
          type="text"
          placeholder=""
        />
        <Row ml="0" mr="0" mt="0.625rem">
          <Div col="12">
            <CallUsButton
              size="block"
              btnType="custom"
              fontSize="14px !important"
              color="#FFF !important"
              bg="#000 !important"
              fontFamily="regular"
              height="42px"
              p=".25rem  1rem !important"
            >
              Get a call back
            </CallUsButton>
          </Div>
        </Row>
      </form>
    </Div>
  </CallusWrapper>
);

export default Callus;
