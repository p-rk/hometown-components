import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import { FeedBackMessage } from 'components/Label';
import FormInput from './FormInput';

export default class ProfileForm extends Component {
  render() {
    const {
      email,
      phone,
      fullName,
      onChangeEmail,
      onChangePhone,
      onChangeFullName,
      emailFeedBackError,
      emailFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      fullNameFeedBackError,
      fullNameFeedBackMessage,
      onSubmitProfile,
      response
    } = this.props;
    const {
      loading, loaded, error, errorMessage, profileUpdated
    } = response;
    return (
      <form onSubmit={onSubmitProfile}>
        <FormInput
          label="Full Name"
          type="text"
          placeholder=""
          onChange={onChangeFullName}
          value={fullName}
          feedBackError={fullNameFeedBackError}
          feedBackMessage={fullNameFeedBackMessage}
        />
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
        <Button
          size="block"
          btnType="primary"
          fontFamily="regular"
          height="42px"
          mt="1.5rem"
          disabled={loading}
        >
          {(response && !loading) ? 'UPDATE PROFILE' : 'Please wait...' }
        </Button>
        {(response
          && loaded && profileUpdated) &&
          <FeedBackMessage
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Profile Updated ! </FeedBackMessage> }
        {(error && !loaded) &&
          <div>
            <FeedBackMessage
              type="error"
              ta="center"
              fontSize="0.875rem"
              mt="1rem"
              display="block"
            >
              {(errorMessage.email) && 'Invalid Email'}
              {(errorMessage.mobile) && 'Invalid Mobile Number'}
              {(errorMessage.full_name) && 'Password should be 8 characters'}
              {(errorMessage.error_message) && 'Something went wrong !'}
            </FeedBackMessage>
          </div>
        }
      </form>
    );
  }
}

ProfileForm.defaultProps = {
  email: '',
  phone: '',
  fullName: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  fullNameFeedBackError: false,
  fullNameFeedBackMessage: '',
  onChangeEmail: () => {},
  onChangePhone: () => {},
  onChangeFullName: () => {},
  onSubmitProfile: () => {},
  response: {}
};

ProfileForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangeFullName: PropTypes.func,
  onSubmitProfile: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  fullName: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  fullNameFeedBackError: PropTypes.bool,
  fullNameFeedBackMessage: PropTypes.string,
  response: PropTypes.object
};
