import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import { FeedBackMessage } from 'components/Label';
import FormInput from './FormInput';

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
      loginResponse
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
        <FormInput
          label="Password"
          type="password"
          placeholder=""
          onChange={onChangePassword}
          value={password}
          feedBackError={passwordFeedBackError}
          feedBackMessage={passwordFeedBackMessage}
        />
        <Button
          size="block"
          btnType="primary"
          fontFamily="regular"
          height="42px"
          mt="1.25rem"
          disabled={loginResponse.loggingIn}
        >
          {(loginResponse && !loginResponse.loggingIn) ? 'LOGIN' : 'Please wait...' }
        </Button>
        {(loginResponse && loginResponse.loaded && loginResponse.isLoggedIn) &&
          <FeedBackMessage
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Login Success ! </FeedBackMessage>
        }
        {(loginResponse
          && !loginResponse.loggingIn
          && ('loginError' in loginResponse)
          && !loginResponse.isLoggedIn
          && loginResponse.loginError.error === 'invalid_grant')
          ? <FeedBackMessage
            type="error"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          >Invalid Credentials Provided !</FeedBackMessage>
          : null
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
  onSubmitLogin: () => {}
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
  loginResponse: PropTypes.object
};
