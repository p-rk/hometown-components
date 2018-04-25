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
    } = this.props;
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
        >UPDATE INFORMATION</Button>
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
  onSubmitProfile: () => {}
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
  fullNameFeedBackMessage: PropTypes.string
};
