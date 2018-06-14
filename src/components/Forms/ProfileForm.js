import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
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
          fontWeight="regular"
          height="42px"
          mt="1.5rem"
          disabled={loading}
        >
          {(response && !loading) ? 'UPDATE PROFILE' : 'Please wait...' }
        </Button>
        {(response
          && loaded && profileUpdated) && <p> Profile Updated ! </p> }
        {(error && !loaded) &&
          <div>
            {(errorMessage.email) && <p> Invalid Email </p>}
            {(errorMessage.mobile) && <p> Invalid Mobile Number </p>}
            {(errorMessage.full_name) && <p> Password should be 8 characters </p>}
            {(errorMessage.error_message) && <p> Something went wrong !</p>}
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
