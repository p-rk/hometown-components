import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import FormInput from './FormInput';

export default class UpdateProfileForm extends Component {
  render() {
    const {
      oldPwd,
      newPwd,
      confirmPwd,
      onChangeOldPwd,
      onChangeNewPwd,
      onChangeConfirmPwd,
      oldPwdFeedBackError,
      oldPwdFeedBackMessage,
      newPwdFeedBackError,
      newPwdFeedBackMessage,
      confirmPwdFeedBackError,
      confirmPwdFeedBackMessage,
      onSubmitUpdatePassword,
    } = this.props;
    return (
      <form onSubmit={onSubmitUpdatePassword}>
        <FormInput
          label="Old Password"
          type="password"
          placeholder=""
          onChange={onChangeOldPwd}
          value={oldPwd}
          feedBackError={oldPwdFeedBackError}
          feedBackMessage={oldPwdFeedBackMessage}
        />
        <FormInput
          label="New Password"
          type="password"
          placeholder=""
          onChange={onChangeNewPwd}
          value={newPwd}
          feedBackError={newPwdFeedBackError}
          feedBackMessage={newPwdFeedBackMessage}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder=""
          onChange={onChangeConfirmPwd}
          value={confirmPwd}
          feedBackError={confirmPwdFeedBackError}
          feedBackMessage={confirmPwdFeedBackMessage}
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

UpdateProfileForm.defaultProps = {
  oldPwd: '',
  newPwd: '',
  confirmPwd: '',
  oldPwdFeedBackError: false,
  oldPwdFeedBackMessage: '',
  confirmPwdFeedBackError: false,
  confirmPwdFeedBackMessage: '',
  newPwdFeedBackError: false,
  newPwdFeedBackMessage: '',
  onChangeOldPwd: () => {},
  onChangeNewPwd: () => {},
  onChangeConfirmPwd: () => {},
  onSubmitUpdatePassword: () => {}
};

UpdateProfileForm.propTypes = {
  onChangeOldPwd: PropTypes.func,
  onChangeNewPwd: PropTypes.func,
  onChangeConfirmPwd: PropTypes.func,
  onSubmitUpdatePassword: PropTypes.func,
  oldPwd: PropTypes.string,
  newPwd: PropTypes.string,
  confirmPwd: PropTypes.string,
  oldPwdFeedBackError: PropTypes.bool,
  oldPwdFeedBackMessage: PropTypes.string,
  newPwdFeedBackError: PropTypes.bool,
  newPwdFeedBackMessage: PropTypes.string,
  confirmPwdFeedBackError: PropTypes.bool,
  confirmPwdFeedBackMessage: PropTypes.string
};
