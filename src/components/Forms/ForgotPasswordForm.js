import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import { FeedBackMessage } from 'components/Label';
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
    const { loading, error } = forgotResponse;
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
          fontFamily="regular"
          height="42px"
          mt="1.25rem"
          disabled={loading}
        >
          {(forgotResponse && !loading) ? 'SUBMIT' : 'Please wait...' }
        </Button>
        {(forgotResponse
          && !loading
          && error) ? <FeedBackMessage
            type="error"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          >Some Error Happened, Please Try Again</FeedBackMessage> : null
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
