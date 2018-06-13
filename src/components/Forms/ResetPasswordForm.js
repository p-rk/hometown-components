import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import FormInput from './FormInput';

export default class ResetPasswordForm extends Component {
  render() {
    const {
      newPwd,
      confirmPwd,
      onChangeNewPwd,
      onChangeConfirmPwd,
      newPwdFeedBackError,
      newPwdFeedBackMessage,
      confirmPwdFeedBackError,
      confirmPwdFeedBackMessage,
      onSubmitUpdatePassword,
    } = this.props;
    return (
      <form onSubmit={onSubmitUpdatePassword}>
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
          fontWeight="regular"
          height="42px"
          mt="1.5rem"
        >RESET PASSWORD</Button>
      </form>
    );
  }
}

ResetPasswordForm.defaultProps = {
  newPwd: '',
  confirmPwd: '',
  confirmPwdFeedBackError: false,
  confirmPwdFeedBackMessage: '',
  newPwdFeedBackError: false,
  newPwdFeedBackMessage: '',
  onChangeNewPwd: () => {},
  onChangeConfirmPwd: () => {},
  onSubmitUpdatePassword: () => {}
};

ResetPasswordForm.propTypes = {
  onChangeNewPwd: PropTypes.func,
  onChangeConfirmPwd: PropTypes.func,
  onSubmitUpdatePassword: PropTypes.func,
  newPwd: PropTypes.string,
  confirmPwd: PropTypes.string,
  newPwdFeedBackError: PropTypes.bool,
  newPwdFeedBackMessage: PropTypes.string,
  confirmPwdFeedBackError: PropTypes.bool,
  confirmPwdFeedBackMessage: PropTypes.string
};
