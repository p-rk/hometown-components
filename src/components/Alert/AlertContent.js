import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Div from 'components/Div';

const Msg = styled.p`
  color: ${props => props.color ? props.color : '#FFF'};
  position: relative;
  display: inline-block;
  margin: 10px 10px;
  vertical-align: bottom;
`;

/*eslint-disable */
const AlertContent = ({ type, msg }) => (
  <Div>
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
        <g id="nyt_x5F_exporter_x5F_info" display="none" />
      </svg>
    )}

    {type == 'warning' && (
      <svg
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        fill="#FFC107"
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

    {type == 'error' && (
      <svg
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        fill="#F44336"
      >
        <g id="Header_x2F_BG" display="none">
          <rect x="-314" y="-270" display="inline" fill="#F1F1F2" width="520" height="520" />
        </g>
        <g id="Bounding_Boxes">
          <g id="ui_x5F_spec_x5F_header_copy_3" />
          <path fill="none" d="M0,0h24v24H0V0z" />
        </g>
        <g id="Rounded">
          <g id="ui_x5F_spec_x5F_header_copy_5" />
          <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V9c0-1.1-0.9-2-2-2H8C6.9,7,6,7.9,6,9V19z M9.17,11.17L9.17,11.17
      		c0.39-0.39,1.02-0.39,1.41,0L12,12.59l1.42-1.42c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41L13.41,14l1.42,1.42
      		c0.39,0.39,0.39,1.02,0,1.41l0,0c-0.39,0.39-1.02,0.39-1.41,0L12,15.41l-1.42,1.42c-0.39,0.39-1.02,0.39-1.41,0l0,0
      		c-0.39-0.39-0.39-1.02,0-1.41L10.59,14l-1.42-1.42C8.78,12.2,8.78,11.56,9.17,11.17z M15.5,4l-0.71-0.71
      		C14.61,3.11,14.35,3,14.09,3H9.91C9.65,3,9.39,3.11,9.21,3.29L8.5,4H6C5.45,4,5,4.45,5,5v0c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1
      		v0c0-0.55-0.45-1-1-1H15.5z"
          />
        </g>
        <g id="Sharp" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_4" display="inline" />
          <path
            display="inline"
            d="M6,21h12V7H6V21z M8.46,11.88l1.41-1.41L12,12.59l2.12-2.12l1.41,1.41L13.41,14l2.12,2.12l-1.41,1.41
      		L12,15.41l-2.12,2.12l-1.41-1.41L10.59,14L8.46,11.88z M15.5,4l-1-1h-5l-1,1H5v2h14V4H15.5z"
          />
        </g>
        <g id="Outline" display="none">
          <g id="ui_x5F_spec_x5F_header" display="inline" />
          <g display="inline">
            <polygon points="14.12,10.47 12,12.59 9.87,10.47 8.46,11.88 10.59,14 8.47,16.12 9.88,17.53 12,15.41 14.12,17.53 15.53,16.12
      			13.41,14 15.53,11.88 		"
            />
            <polygon points="15.5,4 14.5,3 9.5,3 8.5,4 5,4 5,6 19,6 19,4 		" />
            <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M8,9h8v10H8V9z" />
          </g>
        </g>
        <g id="Duotone" display="none">
          <g id="ui_x5F_spec_x5F_header_copy_2" display="inline" />
          <g display="inline">
            <path
              opacity="0.3"
              d="M16,9H8v10h8V9z M15.53,16.12l-1.41,1.41L12,15.41l-2.12,2.12l-1.41-1.41L10.59,14l-2.13-2.12l1.41-1.41
      			L12,12.59l2.12-2.12l1.41,1.41L13.41,14L15.53,16.12z"
            />
            <g>
              <polygon points="14.12,10.47 12,12.59 9.87,10.47 8.46,11.88 10.59,14 8.47,16.12 9.88,17.53 12,15.41 14.12,17.53 15.53,16.12
      				13.41,14 15.53,11.88 			"
              />
              <polygon points="15.5,4 14.5,3 9.5,3 8.5,4 5,4 5,6 19,6 19,4 			" />
              <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M8,9h8v10H8V9z" />
            </g>
          </g>
        </g>
        <g id="Fill" display="none">
          <g id="ui_x5F_spec_x5F_header_copy" display="inline" />
          <path
            display="inline"
            d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M8.46,11.88l1.41-1.41L12,12.59l2.12-2.12l1.41,1.41
      		L13.41,14l2.12,2.12l-1.41,1.41L12,15.41l-2.12,2.12l-1.41-1.41L10.59,14L8.46,11.88z M15.5,4l-1-1h-5l-1,1H5v2h14V4H15.5z"
          />
        </g>
        <g id="nyt_x5F_exporter_x5F_info" display="none" />
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
  </Div>
);

AlertContent.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default AlertContent;
