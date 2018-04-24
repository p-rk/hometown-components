import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
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
    } = this.props;
    return (
      <form onSubmit={onSubmitLogin}>
        <FormInput
          label="EMail ID"
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
        <Button size="block" btnType="primary" fontFamily="regular" height="42px" mt="1.5rem">LOGIN</Button>
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
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onSubmitLogin: () => {},

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
};
