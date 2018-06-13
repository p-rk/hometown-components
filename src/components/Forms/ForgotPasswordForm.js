import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import FormInput from './FormInput';

export default class ForgotPasswordForm extends Component {
  render() {
    const {
      email,
      onChangeEmail,
      emailFeedBackError,
      emailFeedBackMessage,
      onSubmitForgot,
      forgotResponse
    } = this.props;
    return (
      <form onSubmit={onSubmitForgot}>
        <FormInput
          label="Email ID"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <Button
          size="block"
          btnType="primary"
          fontWeight="regular"
          height="42px"
          mt="1.25rem"
          disabled={forgotResponse.loggingIn}
        >
          {(forgotResponse && !forgotResponse.loggingIn) ? 'SUBMIT' : 'Please wait...' }
        </Button>
        {(forgotResponse && forgotResponse.loaded && forgotResponse.isLoggedIn) && <p> Login Success ! </p> }
        {(forgotResponse
          && !forgotResponse.loggingIn
          && ('loginError' in forgotResponse)
          && !forgotResponse.isLoggedIn
          && forgotResponse.loginError.error === 'invalid_grant') ? <p>Invalid Credentials Provided !</p> : null
        }
      </form>
    );
  }
}

ForgotPasswordForm.defaultProps = {
  email: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  forgotResponse: {},
  onChangeEmail: () => {},
  onSubmitForgot: () => {}
};

ForgotPasswordForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onSubmitForgot: PropTypes.func,
  email: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  forgotResponse: PropTypes.object
};
