import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import { FeedBackMessage } from 'components/Label';
import FormInput from './FormInput';

export default class SignupForm extends Component {
  render() {
    const {
      email,
      phone,
      password,
      onChangeEmail,
      onChangePhone,
      onChangePassword,
      emailFeedBackError,
      emailFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      onSubmitSignup,
      signUpResponse
    } = this.props;
    const {
      loading, loaded, error, errorMessage, signUpSuccess
    } = signUpResponse;
    return (
      <form onSubmit={onSubmitSignup}>
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
          label="Phone"
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneFeedBackError}
          feedBackMessage={phoneFeedBackMessage}
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
          disabled={loading}
        >
          {(signUpResponse && !loading) ? 'REGISTER' : 'Please wait...' }
        </Button>
        {(signUpResponse
          && loaded && signUpSuccess) &&
          <FeedBackMessage
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Registered SuccessFully ! </FeedBackMessage> }
        {(error && !loaded) &&
          <div>
            <FeedBackMessage
              type="error"
              ta="center"
              fontSize="0.875rem"
              mt="1rem"
              display="block"
            >
              {(errorMessage.email) && <p> Invalid Email </p>}
              {(errorMessage.mobile) && <p> Invalid Mobile Number </p>}
              {(errorMessage.password) && <p> Password should be 8 characters </p>}
              {(errorMessage.error_message) && <p> Account already exists.</p>}
            </FeedBackMessage>
          </div>
        }
      </form>
    );
  }
}

SignupForm.defaultProps = {
  email: '',
  phone: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  onChangeEmail: () => {},
  onChangePhone: () => {},
  onChangePassword: () => {},
  onSubmitSignup: () => {},
  signUpResponse: {
    errorMessage: {
      email: null,
      password: null,
      mobile: null,
      error_message: null
    }
  }
};

SignupForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitSignup: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  signUpResponse: PropTypes.object,
};
