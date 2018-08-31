import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Msg = styled.p`
  color: ${props => props.color ? props.color : '#fff'};
  position: relative;
  display: inline-block;
  margin: 10px;
  vertical-align: bottom;
  font-family: regular;
`;

const AlertContentWrapper = styled.div`
  width: auto;
  color: #fff;
  background: #222222;
  display: inline-block;
  padding: 10px 40px;
  border-radius: 5px;
`;

/*eslint-disable */
const AlertContent = ({ type, msg }) => (
  <AlertContentWrapper>
    {type == 'success' && (
      <svg
        x="0px"
        y="0px"
        width="32px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        fill="#4CAF50"
      >
        <g id="Header_x2F_BG" display="none">
          <rect x="-182" y="-226" display="inline" fill="#F1F1F2" width="520" height="520" />
        </g>
        <g id="Bounding_Boxes">
          <g id="ui_x5F_spec_x5F_header_copy_3" />
          <path fill="none" d="M0,0h24v24H0V0z" />
        </g>
        <g id="Rounded">
          <g id="ui_x5F_spec_x5F_header_copy_5" />
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.29,16.29l-3.59-3.59c-0.39-0.39-0.39-1.02,0-1.41
      		l0,0c0.39-0.39,1.02-0.39,1.41,0L10,14.17l6.88-6.88c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-7.59,7.59
      		C10.32,16.68,9.68,16.68,9.29,16.29z"
          />
        </g>
        <g id="Sharp" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_4" display="inline" />
          <path
            display="inline"
            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,17l-5-5l1.41-1.41L10,14.17
      		l7.59-7.59L19,8L10,17z"
          />
        </g>
        <g id="Outline" display="none">
          <g id="ui_x5F_spec_x5F_header" display="inline" />
          <g display="inline">
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8
      			S16.41,20,12,20z"
            />
            <polygon points="16.59,7.58 10,14.17 7.41,11.59 6,13 10,17 18,9 		" />
          </g>
        </g>
        <g id="Duotone" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_2" display="inline" />
          <g display="inline">
            <path
              opacity="0.3"
              d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8c4.41,0,8-3.59,8-8S16.41,4,12,4z M10,17l-4-4l1.41-1.41L10,14.17
      			l6.59-6.59L18,9L10,17z"
            />
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8
      			c4.41,0,8,3.59,8,8S16.41,20,12,20z"
            />
            <polygon points="16.59,7.58 10,14.17 7.41,11.59 6,13 10,17 18,9 		" />
          </g>
        </g>
        <g id="Fill" display="none">
          <g id="ui_x5F_spec_x5F_header_copy" display="inline" />
          <path
            display="inline"
            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M10,17l-5-5l1.41-1.41L10,14.17
      		l7.59-7.59L19,8L10,17z"
          />
        </g>
      </svg>
    )}

    {type == 'warning' && (
      <svg
        x="0px" y="0px"
      	viewBox="0 0 50 50"
        width="32px"
        height="32px">
      <circle style={{fill:"#EFCE4A"}} cx="25" cy="25" r="25"/>
      <line style={{fill:'none',stroke:'#FFFFFF',strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}} x1="25" y1="10" x2="25" y2="32"/>
      <line style={{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}} x1="25" y1="37" x2="25" y2="39"/>
      </svg>
    )}

    {type == 'error' && (
      <svg
      x="0px"
      y="0px"
      viewBox="0 0 51.976 51.976"
      width="32px"
      height="32px">
      <g>
      	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" fill="#D80027"/>
      </g>
      </svg>
    )}

    {type == 'info' && (
      <svg
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        fill="#03A9F4"
      >
        <g id="Header_x2F_BG" display="none">
          <rect x="-182" y="-50" display="inline" fill="#F1F1F2" width="520" height="520" />
        </g>
        <g id="Bounding_Boxes">
          <g id="ui_x5F_spec_x5F_header_copy_3" display="none" />
          <path fill="none" d="M0,0h24v24H0V0z" />
        </g>
        <g id="Rounded">
          <g id="ui_x5F_spec_x5F_header_copy_5" display="none" />
          <g>
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,17L12,17c-0.55,0-1-0.45-1-1v-4
      			c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4C13,16.55,12.55,17,12,17z M13,9h-2V7h2V9z"
            />
          </g>
        </g>
        <g id="Sharp" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_4" />
          <g display="inline">
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z" />
          </g>
        </g>
        <g id="Outline" display="none">
          <g id="ui_x5F_spec_x5F_header" />
          <g display="inline">
            <rect x="11" y="7" width="2" height="2" />
            <rect x="11" y="11" width="2" height="6" />
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8
      			c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z"
            />
          </g>
        </g>
        <g id="Duotone" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_2" />
          <g display="inline">
            <path
              opacity="0.3"
              d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M13,17h-2v-6h2V17z M13,9h-2
      			V7h2V9z"
            />
            <rect x="11" y="7" width="2" height="2" />
            <rect x="11" y="11" width="2" height="6" />
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8
      			c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z"
            />
          </g>
        </g>
        <g id="Material" display="none">
          <g id="ui_x5F_spec_x5F_header_copy" />
          <g display="inline">
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z" />
          </g>
        </g>
      </svg>
    )}
    <Msg type={type}>{msg}</Msg>
  </AlertContentWrapper>
);

AlertContent.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default AlertContent;
