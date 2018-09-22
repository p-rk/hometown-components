import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Buttons';
import Row from 'components/Row';
import Div from 'components/Div';
import { FeedBackMessage, Label } from 'components/Label';
import FormInput from './FormInput';

const ForgotPasswordLink = styled(Label)`
  position: absolute;
  right: 10px;
  top: 43px;
  font-size: 10px;
  a {
    font-size: 14px;
    color: #f98d29;
  }
`;

export default class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      onChangeEmail,
      onChangePassword,
      emailFeedBackError,
      emailFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      onSubmitLogin,
      loginResponse,
      signupUrl,
      forgotUrl
    } = this.props;
    return (
      <form onSubmit={onSubmitLogin}>
        <FormInput
          label="Email ID"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <Row ml="0" mr="0" mt="1.25rem">
          <Div col="12" pt="6px">
            <FormInput
              label="Password"
              type="password"
              placeholder=""
              onChange={onChangePassword}
              value={password}
              feedBackError={passwordFeedBackError}
              feedBackMessage={passwordFeedBackMessage}
            />
            <ForgotPasswordLink color="primary">
              <Link to={forgotUrl} color="primary">Forgot Password?</Link>
            </ForgotPasswordLink>
          </Div>
        </Row>
        <Row ml="0" mr="0" mt="1.25rem">
          <Div col="8" pt="6px">
            <Label color="textDark" mr="0.3126rem">
              Don&#39;t have an account?
            </Label>
            <Link to={signupUrl}>
              <Label color="primary">Sign Up</Label>
            </Link>
          </Div>
          <Div col="4">
            <Button
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              disabled={loginResponse.loggingIn}
            >
              {(loginResponse && !loginResponse.loggingIn) ? 'LOGIN' : 'Please wait...' }
            </Button>
          </Div>
        </Row>
        {(loginResponse && loginResponse.loaded && loginResponse.isLoggedIn) &&
          <FeedBackMessage
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Login Success ! </FeedBackMessage>
        }
      </form>
    );
  }
}

LoginForm.defaultProps = {
  email: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  loginResponse: {},
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onSubmitLogin: () => {},
  signupUrl: '',
  forgotUrl: ''
};

LoginForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitLogin: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  loginResponse: PropTypes.object,
  signupUrl: PropTypes.string,
  forgotUrl: PropTypes.string
};
