import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import { FeedBackMessage } from 'components/Label';
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
      response
    } = this.props;
    const {
      loading, loaded, error, errorMessage, passwordUpdated
    } = response;
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
          fontWeight="regular"
          height="42px"
          mt="1.5rem"
          disabled={loading}
        >
          {(response && !loading) ? 'UPDATE PASSWORD' : 'Please wait...' }
        </Button>
        {(response
          && loaded && passwordUpdated) &&
          <FeedBackMessage
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Password Updated ! </FeedBackMessage> }
        {(error && !loaded) &&
          <div>
            <FeedBackMessage
              type="error"
              ta="center"
              fontSize="0.875rem"
              mt="1rem"
              display="block"
            >
              {(errorMessage.new_password) && 'Invalid new password !'}
              {(errorMessage.current_password) && 'Invalid Current Password !'}
              {(errorMessage.repeat_password) && 'Confirm password not match !'}
              {(errorMessage.error_message) && 'Something went wrong !'}
            </FeedBackMessage>
          </div>
        }
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
  onSubmitUpdatePassword: () => {},
  response: {}
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
  confirmPwdFeedBackMessage: PropTypes.string,
  response: PropTypes.object
};
