import React from 'react';
import styled, { keyframes } from 'styled-components';
import Div from 'components/Div';

const rotate = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Loader = styled.div`
  background-color: rgba(0,0,0,.1);
  text-align: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 100%;

  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

const LoaderRow = styled.div`
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  min-height: 100vh;
`;

const LoaderCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(88, 88, 88, 0.1);
  margin-left: -60px;
  margin-top: -60px;
`;

const LoaderLineMask = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 120px;
  margin-left: -60px;
  margin-top: -60px;
  overflow: hidden;
  -webkit-transform-origin: 60px 60px;
  -moz-transform-origin: 60px 60px;
  -ms-transform-origin: 60px 60px;
  -o-transform-origin: 60px 60px;
  transform-origin: 60px 60px;
  -webkit-mask-image: -webkit-linear-gradient(top,#ae8873,rgba(78, 12, 12, 0));
  -webkit-animation: ${rotate} 1.2s infinite linear;
  -moz-animation: ${rotate} 1.2s infinite linear;
  -o-animation: ${rotate} 1.2s infinite linear;
  animation: ${rotate} 1.2s infinite linear;
`;

const LoaderLine = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px #ae8873;
`;

const ScreenLoader = () => (
  <Loader>
    <LoaderRow display="flex">
      <Div display="flexEqual" col="12">
        <LoaderCircle>
          <LoaderLineMask>
            <LoaderLine />
          </LoaderLineMask>
        </LoaderCircle>
      </Div>
    </LoaderRow>
  </Loader>
);

export default ScreenLoader;
